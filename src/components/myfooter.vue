<template>
  <div class="hello">
    <ul>
      <li>top250</li>
      <li>北美票行榜</li>
      <li>搜索</li>
    </ul>
  </div>
</template>
import top250 from './components/top250'
import us from './components/us'
import search from './components/search'
<script>
export default {
  name: 'myfooter',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul,li{
  list-style: none;
  padding: 0;
  margin: 0;
}
  ul{
    height: 50px;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    background: green;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  li{
    background:coral;
    font-size: 14px;
    color: #5a5555;
    padding: 10px;
    border: 1px solid blue;
    flex: 1;
    text-align: center;
  }
</style>
