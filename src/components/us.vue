<template>
  <div class="main">
    <header>
      <h2>豆瓣电影北美票房榜</h2>
      <h3>{{assessDate}}</h3>
    </header>
    <div class="us" ref="us">
      <i class="iconfont icon-loading" v-if="isloading"></i>
      <div class="content" ref="content">
        <div v-for="(item ,index) in movies" :key="index" class="movie">
          <a href="#" class="clearfix">
            <div class="cover">
              <img :src="item.subject.images.small" alt="第一张剧照" class="movieImg">
            </div>
            <div class="detail">
              <h2>{{item.subject.title}}</h2>
              <div class="extra">
                <span class="score">{{item.subject.rating.average}}分 </span><span class="collect"> / {{item.subject.collect_count}}</span><span>收藏</span>
              </div>
              <div class="extra">
                <span class="year">{{item.subject.year}}年/</span>
                <span class="drama" v-for="(movieType,typeIndex) in item.subject.genres" :key="typeIndex + 'a'"> {{movieType}} </span>
              </div>
              <div class="extra">
                <span>导演: </span><span class="director" v-for="(director,directorIndex) in item.subject.directors" :key="directorIndex">
                {{director.name}}
              </span>
              </div>
              <div class="extra">
                <span>主演:</span>
                <span class="actors" v-for="(actor,actorIndex) in item.subject.casts" :key="actorIndex">{{actor.name}}
                <span v-show="actorIndex<item.subject.casts.length-1">、</span>
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
        name: "us",
      data(){
        return {
          usurl:'/api/v2/movie/us_box',
          data:{},
          isloading :false,
          title:'没有数据',
          assessDate:'2019年',
          movies:[],
        }
      },
      computed:{

      },
      created(){

        this.getData()
      },
      beforeMount(){

      },
      mounted(){

      },
      methods:{
        getData() {
          this.$axios.get(this.usurl).then((res) => {
            console.log(res.data)
            this.assessDate=res.data.date
            this.msg=res.data.title
            this.movies=this.movies.concat(res.data.subjects)
            this.isUp=true
            this.isloading=false
          }).catch(err=>console.log(err))
        }
      },
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
  .us{
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
  .us .movie  a{
    display: block;

  }
  .us  .cover{
    float: left;
  }
  .movieImg{
    max-width: 80px;
    margin-left: 20px;
  }

  .us  .detail{
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
