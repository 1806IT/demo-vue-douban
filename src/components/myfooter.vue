<template>
  <div class="hello">
    <ul>
      <li >
        <router-link to='/top250'>top250</router-link>
      </li>
      <li >
        <router-link to='/us/'>北美票行榜</router-link>
      </li>
      <li >
        <router-link to='/search/'>搜索</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'myfooter',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
  }

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
