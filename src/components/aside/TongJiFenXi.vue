<template>
  <div>
    <v-header></v-header>
    <div class="custom-container">
      <div class="custom-container-section">
        <h1>统计分析</h1>
      </div>
    </div>
    <v-footer></v-footer>
  </div>
</template>
<script type="es6">
  import vHeader from '../common/Header.vue'

  import vFooter from '../common/Footer.vue'
  export default {
    name: 'hello',
    components: {
      vHeader,
      vFooter
    },
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>
<style lang="scss" type="text/scss">

</style>

