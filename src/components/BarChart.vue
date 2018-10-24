<template>
  <div class="barchart">
    <label class="barchart-title">{{title}}</label>
    <div class="barchart-inner">
      <div class="barchart-container">
        <svg class="barchart__chart"></svg>
      </div>
    </div>
  </div>
</template>

<script>
  import * as d3 from 'd3';

  export default {
    props: {
      datum: {
        type: Array,
        required: true,
      },
      title: {
        type: String,
        required: false,
        default: '',
      },
    },
    data() {
      return {
        chart: null,
      };
    },
    methods: {
      clear() {
        d3.select(this.chart)
          .selectAll('g')
          .remove();
      },
      draw() {
        let width = this.chart.parentNode.clientWidth;
        let height = this.chart.parentNode.clientHeight;

        let x = d3.scaleBand()
          .domain(this.datum.map(d => d.date))
          .range([0, width])
          .padding(0.2);

        let y = d3.scaleLinear()
          .domain([0, d3.max(this.datum, d => d.value) + 10]).nice()
          .range([height - 30, 10]);

        let svg = d3.select(this.chart);

        let scroll = svg.append('g');

        if (window.innerWidth < width) {
          let panX = width + (width - window.innerWidth);

          svg
            .append('g')
            .append('rect')
            .attr('width', width)
            .attr('height', height)
            .style('fill', 'none')
            .style('pointer-events', 'all')
            .call(d3.zoom()
              .translateExtent([[0, 0], [panX, height]])
              .on('zoom', zoomed));

          function zoomed() {
            let x = d3.event.transform.x;
            scroll.attr('transform', `translate(${x},0)`);
          }
        }

        scroll
          .append('g')
            .attr('class', 'barchart__bars')
            .selectAll('rect')
            .data(this.datum)
            .enter()
          .append('rect')
            .attr('class', 'barchart__bar')
            .attr('x', d => x(d.date))
            .attr('y', d => y(d.value) < 0 ? 0 : y(d.value))
            .attr('height', d => {
              let barHeight = y(0) - y(d.value);
              return barHeight < 0 ? 0 : barHeight;
            })
            .attr('width', x.bandwidth());

         scroll
          .append('g')
            .attr('class', 'barchart__labels')
            .selectAll('text')
            .data(this.datum)
            .enter()
          .append('text')
            .attr('class', 'barchart__label')
            .text(d => d.value)
            .attr('y', d => y(d.value) - 10)
            .attr('x', d => x(d.date) + (x.bandwidth() / 2))
            .style('text-anchor', 'middle');

        scroll
          .append('g')
            .attr('class', 'barchart__axes')
          .append('g')
            .attr('class', 'barchart__axis-x')
            .attr('transform', `translate(0, ${height - 30})`)
            .call(d3.axisBottom(x)
              .tickSizeOuter(0)
              .tickFormat(date => d3.timeFormat('%d/%m')(d3.isoParse(date))));
      },
    },
    mounted() {
      this.chart = document.querySelector('.barchart__chart');
      this.draw();

      window.addEventListener('resize', () => {
        this.clear();
        this.draw();
      });
    },
  };
</script>

<style lang="postcss">
  @import 'base.css';

  .barchart {
    margin: 20px -15px 0;
    padding-left: 15px;

    @media (--grid-md-up) {
      padding-right: 15px;
    }
  }

  .barchart-title {
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 18px;
    font-weight: 700;
    line-height: 1.2;
    margin: 0 0 15px;
    display: block;
    color: var(--color-white);
    position: absolute;
    left: 30px;
    top: 15px;

    @media (--grid-md-up) {
      font-size: 22px;
      right: 30px;
      left: auto;
    }

    @media (--grid-lg-up) {
      right: 45px;
    }
  }

  .barchart-inner {
    max-width: 1000px;
    margin: 0 auto;
    width: 100%;
    display: flex;
    height: 340px;
    background-color: #5454;
    padding: 50px 0 10px;
    overflow: hidden;

    @media (--grid-md-up) {
      height: 420px;
      padding: 60px 0 20px;
    }

    @media (--grid-lg-up) {
      height: 400px;
      padding: 80px 15px 20px;
    }
  }

  .barchart-container {
    display: flex;
    width: 100%;
    min-width: 760px;
    padding: 0 15px 0 0;
    cursor: move;

    @media (--grid-md-up) {
      min-width: 768px;
    }

    @media (--grid-lg-up) {
      cursor: auto;
    }
  }

  .barchart__chart {
    width: 100%;
  }

  .barchart__bar {
    fill: var(--color-pink);
    opacity: .9;
  }

  .barchart__label {
    fill: var(--color-white);
    font-size: 22px;
    font-weight: 600;
    font-family: 'Source Sans Pro', sans-serif;

    @media (--grid-md-up) {
      font-size: 26px;
    }

    @media (--grid-lg-up) {
      font-size: 32px;
    }
  }

  .barchart__axis-x {
    & text {
      fill: var(--color-white);
      font-size: 16px;
      font-weight: 600;
      font-family: 'Source Sans Pro', sans-serif;

      @media (--grid-md-up) {
        font-size: 20px;
      }
    }

    & line,
    & .domain {
      display: none;
    }
  }
</style>