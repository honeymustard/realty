<template>
  <div class="barchart">
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
    },
    data() {
      return {
        chart: null,
        colors: [
          '#dec814', // gold
          '#64df0d', // green
          '#e38919', // orange
          '#ff4adc', // pink
          '#ff5670', // rose
          '#9af443', // apple
          '#ff5918', // brown
          '#9ad6b0', // teal
          '#efe024', // yellow
          '#68cb30', // ocean
          '#be6b9c', // purple
          '#db426e', // ribbon
        ],
      };
    },
    mounted() {
      this.chart = document.querySelector('.barchart__chart');
      let width = this.chart.parentNode.clientWidth;
      let height = this.chart.parentNode.clientHeight;

      let x = d3.scaleBand()
        .domain(this.datum.map(d => d.date))
        .range([0, width])
        .padding(0.2);

      let y = d3.scaleLinear()
        .domain([0, d3.max(this.datum, d => d.value)]).nice()
        .range([height - 30, 10]);

      let svg = d3.select(this.chart);

      let bars = svg
        .append('g')
          .attr('class', 'barchart__datum')
          .selectAll('rect')
          .data(this.datum)
          .enter();

      bars.append('rect')
        .attr('class', 'barchart__bar')
        .attr('x', d => x(d.date))
        .attr('y', d => y(d.value))
        .attr('height', d => y(0) - y(d.value))
        .attr('width', x.bandwidth())
        .attr('style', (d, i) => `fill: ${this.colors.slice(-10)[i]}`);

      bars.append('text')
        .attr('class', 'barchart__text')
        .text(d => d.value)
        .attr('y', d => y(d.value) - 10)
        .attr('x', d => x(d.date) + (x.bandwidth() / 2))
        .style('text-anchor', 'middle');

      svg
        .append('g')
        .attr('class', 'barchart__xaxis')
        .attr('transform', `translate(0, ${height - 30})`)
        .call(d3.axisBottom(x)
          .tickSizeOuter(0)
          .tickFormat(date => d3.timeFormat('%d/%m')(d3.isoParse(date))));
    },
  };
</script>

<style lang="postcss">
  .barchart {
    margin: 20px auto 0;
  }

  .barchart-inner {
    max-width: 1000px;
    margin: 0 auto;
    width: 100%;
    display: flex;
    height: 340px;
    background-color: #5454;
    padding: 15px 0;
  }

  .barchart-container {
    display: flex;
    width: 100%;
  }

  .barchart__chart {
    width: 100%;
  }

  .barchart__text {
    fill: var(--color-white);
    font-size: 32px;
    font-weight: 600;
    font-family: 'Source Sans Pro', sans-serif;
  }

  .barchart__xaxis {
    & text {
      fill: var(--color-white);
      font-size: 20px;
      font-weight: 600;
      font-family: 'Source Sans Pro', sans-serif;
    }

    & line,
    & .domain {
      display: none;
    }
  }
</style>