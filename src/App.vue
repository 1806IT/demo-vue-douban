<template>
  <div id="app">
    <router-view></router-view>
    <myfooter></myfooter>
  </div>
</template>

<script>
  import myfooter from './components/myfooter'
/*  import top250 from './components/top250'
  import us from './components/us'
  import search from './components/search'*/
export default {
  name: 'App',
  components:{
    myfooter
  }
}
</script>

<style>
*{
  margin: 0px ;
  padding: 0;
}
</style>
