<template>
  <div id="app">
    <myfooter></myfooter>
    <top250></top250>
  </div>
</template>

<script>
  import myfooter from './components/myfooter'
  import top250 from './components/top250'
  import us from './components/us'
  import search from './components/search'
export default {
  name: 'App',
  components:{
    myfooter,
    top250
  }
}
</script>

<style>
*{
  margin: 0px ;
  padding: 0;
}
</style>
