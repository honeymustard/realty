<template>
  <div class="heading">
    <div class="row">
      <div class="heading-inner">
        <h1 class="heading-title">{{title}}</h1>
        <a class="heading-link" :href="link">
          <svg class="heading-github" viewBox="0 0 16 16" version="1.1"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        title: 'Realty.',
        link: 'https://github.com/honeymustard/realty',
      };
    },
  };
</script>

<style lang="postcss">
  @import 'base.css';

  .heading {
    position: relative;
    background-color: var(--color-pink);
    margin: 0 0 40px;
    box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, .08);

    @media(--grid-md-up) {
      margin: 0 0 60px;
    }

    @media(--grid-lg-up) {
      margin: 0 0 100px;
    }
  }

  .heading-inner {
    display: flex;
    align-items: center;
    height: 60px;

    @media(--grid-lg-up) {
      height: 80px;
    }
  }

  .heading-title {
    margin: 0;
    font-size: 36px;
    line-height: 1;
    position: relative;
    top: -2px;
    color: var(--color-blue);
    font-family: 'Cairo', sans-serif;
    font-weight: 700;
    letter-spacing: 3px;
    opacity: .9;
    flex-grow: 1;
    user-select: none;

    @media(--grid-lg-up) {
      top: -2px;
      font-size: 50px;
    }
  }

  .heading-link {
    display: inline-block;
    transition: all .3s linear;
    transform-origin: 50% 50%;

    &:hover,
    &:focus {
      transform: rotate(30deg);
    }
  }

  .heading-github {
    display: block;
    height: 40px;
    width: 40px;
    fill: var(--color-blue);
    opacity: .9;

    @media(--grid-lg-up) {
      height: 55px;
      width: 55px;
    }
  }
</style>