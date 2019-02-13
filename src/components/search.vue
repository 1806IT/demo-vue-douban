<template>
    <div class="search-area">
      搜索页面 <br>
      <input type="text" placeholder="搜索电影" id="user-text" v-model="content" @keyup.enter="add">
      <span class="button" @click="add">搜索</span>
        {{content}}
      <div class="search-result" @scroll="updatemovie()" ref="search-result">
        <i class="iconfont icon-loading" v-if="isloading"></i>
        <div class="content" ref="content">
          <div v-for="(item ,index) in movies" :key="index" class="movie">
            <a href="#" class="clearfix">
              <div class="cover">
                <img :src="item.images.medium" alt="第一张剧照" class="movieImg">
              </div>
              <div class="detail">
                <h2>{{item.title}}</h2>
                <div class="extra">
                  <span class="score">{{item.rating.average}}分 </span><span class="collect"> / {{item.collect_count}}</span><span>收藏</span>
                </div>
                <div class="extra">
                  <span class="year">{{item.year}}年/</span>
                  <span class="drama" v-for="(movieType,typeIndex) in item.genres" :key="typeIndex + 'a'"> {{movieType}} </span>
                </div>
                <div class="extra">
                  <span>导演: </span><span class="director" v-for="(director,directorIndex) in item.directors" :key="directorIndex">
                {{director.name}}
              </span>
                </div>
                <div class="extra">
                  <span>主演:</span>
                  <span class="actors" v-for="(actor,actorIndex) in item.casts" :key="actorIndex">{{actor.name}}
                <span v-show="actorIndex<item.casts.length-1">、</span>
              </span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "search",
      data(){
          return {
            content:'',
            isloading:false,
            movies:[],
            isUp:false,
            moviesStart:0,
          }
      },
      computed:{
        isToButton(){
          if(this.moviesStart+20>=this.count){
            return true
          }
          return false
        }
      },
      created(){

      },
      methods:{
          add(){
            console.log('提交搜索');
            console.log(this.content)
            this.search(this.content)
          },
        search(content){
            this.$axios.get('/api/v2/movie/search',
            {params:{
                q:content,
                start:this.moviesStart,
                count:20
          }}).then(res=>{
            this.movies=this.movies.concat(res.data.subjects)
            console.log(res)
              console.log(this.movies);
            })
        },
        updatemovie(){
          console.log('跳用了方法'+this.$refs.search-result.offsetHeight)//窗口的高度
          console.log('滚动中');
          console.log(this.$refs.search-result.scrollTop)//滚动的高度
          console.log(this.$refs.content.clientHeight)//movie文件的高度
          if(this.$refs.search-result.clientHeight<=2*this.$refs.search-result.offsetHeight+this.$refs.search-result.scrollTop){
            if(this.isUp&&!this.isToButton){
              this.isUp=false
              this.moviesStart+=20
              this.search(this.content)
            }

          }
        }
      }
    }
</script>

<style scoped>
  *{
    text-decoration: none;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    list-style: none;
  }
  header{
    text-align: center;
  }

  .iconfont,.icon-loading {
    position: fixed;
    margin:0 auto;
    font-size: 40px;
    top:50%;
    left:50%;
    animation:2s rotate linear infinite;
  }
  @keyframes rotate{
    0%{transform:rotate(0deg);}
    100%{transform:rotate(360deg);}
  }
  .clearfix::after{
    display: block;
    content: '';
    clear: both;
  }
  .search-result{
    font-size: 12px;
    line-height: 1.2;
    background:#fff;
    position: fixed;
    left: 0;
    height: calc(100vh - 50px);
    width: 100%;
    overflow: auto;
  }
  .movie{
    border-bottom: 1px solid #ccc;
  }
  .search-result .movie  a{
    display: block;

  }
  .search-result  .cover{
    float: left;
  }
  .movieImg{
    max-width: 80px;
    margin-left: 20px;
  }

  .search-result  .detail{
    float: left;
    margin-left: 20px;
    color: #999;
    max-width: 60vw;
  }
  .detail>h2{
    margin-bottom: 7px;
    color: #000;
  }
  .detail>.extra{
    margin-top: 3px;
  }
  .detail>.extra>.score{
    color: orangered;
  }
</style>
