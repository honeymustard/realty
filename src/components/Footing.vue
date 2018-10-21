<template>
  <footer class="footing">
    <a class="footing-link" :href="link">
      <logo></logo>
    </a>
  </footer>
</template>

<script>
  import Logo from '@/components/Logo';

  export default {
    data() {
      return {
        link: 'https://honeymustard.io',
      };
    },
    components: {
      Logo,
    },
  };
</script>

<style lang="postcss">
  @custom-media --grid-md-up (min-width: 768px);
  @custom-media --grid-lg-up (min-width: 1000px);

  .footing {
    margin: 40px 0 0;
    display: flex;
    justify-content: flex-end;

    @media (--grid-md-up) {
      margin: 80px 0 0;
    }

    @media (--grid-lg-up) {
      margin: 120px 0 0;
    }
  }

  .footing-link {
    display: inline-flex;
    flex-direction: column;
    text-decoration: none;
    width: 50px;
    height: 70px;
    background-color: var(--color-pink);
    opacity: .95;
    position: fixed;
    bottom: 0;
    transition: transform .3s ease;

    &:hover,
    &:focus {
      transform: translateY(6px);
    }

    @media (--grid-lg-up) {
      width: 60px;
      height: 80px;
    }

    & .logo {
      max-width: 60%;
      margin: 10px auto 0;

      @media (--grid-lg-up) {
        max-width: 64%;
        margin: 15px auto 0;
      }
    }
  }
</style>