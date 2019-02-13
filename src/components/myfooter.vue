<template>
  <div class="hello">
    <ul>
      <li @click="active(0)" :class="{active:flag0}">
        <router-link to='/'>
          top250 <br>
          <i class="iconfont icon-top250"></i>
        </router-link>
      </li>
      <li  @click="active(1)" :class="{active:flag1}">
        <router-link to='/us/' >
          北美票行榜<br>
          <i class="iconfont icon-us"></i>
        </router-link>
      </li>
      <li  @click="active(2)" :class="{active:flag2}">
        <router-link to='/search/'>
          搜索<br>
          <i class="iconfont icon-search"></i>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'myfooter',
  data () {
    return {
      flag0: true,
      flag1:false,
      flag2:false
    }
  },

  methods:{
    active(index){
      if(index===0){
        this.flag0=true;this.flag1=false;this.flag2=false;
      }else if(index===1){
        this.flag0=false;this.flag1=true;this.flag2=false;
      }else if(index===2){
        this.flag0=false;this.flag1=false;this.flag2=true;
      }
    }
  },
  components:{
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .iconfont {
    font-size: 1em;
  }
  *{
    text-decoration: none;
  }
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
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  li{
    background:coral;
    font-size: 14px;
    color: #5a5555;
    padding: 10px;
    flex: 1;
    text-align: center;
  }
  li:not(first-child){
    border-left: 1px solid grey;
  }
  .active{
    background: gold;
  }
</style>
