<template>
  <div id="app">
    <header></header>
    <main>
      <router-view></router-view>
    </main>
    <page-footer></page-footer>
  </div>
</template>

<script>
  import PageFooter from '@/components/PageFooter/PageFooter';

  export default {
    name: 'app',
    components: {
      PageFooter,
    },
  };
</script>

<style lang="scss">
  @import './styles/fonts.scss';
  @import './styles/icons.scss';
  @import './styles/general.scss';
</style>
