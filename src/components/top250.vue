<template>
    <div class="top250" @scroll="updatemovie()" ref="top250">
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
                <span>导演: </span><span class="director" v-for="(director,directorIndex) in item.directors" :key="directorIndex"> {{director.name}} </span>
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
</template>

<script>

    export default {
        name: "us",

      data(){
        return {
          usurl:'http://api.douban.com/v2/movie/top250',
          data:{},
          isloading :false,
          msg:'没有数据',
          movies:[],
          isUp:true,
          moviesStart:0,
          count:0
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
          this.isloading=true
        this.getData()
      },
      beforeMount(){

      },
      mounted(){
        console.log('钩子函数里面查看'+this.$refs.top250.offsetHeight)

      },
      methods:{
         getData() {

          this.$axios.get('/api/v2/movie/top250',
            {params:{
                start:this.moviesStart,
                count:20
              }}).then((res) => {
            console.log(res.data)
            this.msg=res.data.title
            this.count=res.data.total
            this.movies=this.movies.concat(res.data.subjects)
            this.isUp=true
            this.isloading=false
          }).catch(err=>console.log(err))
         },
        updatemovie(){
          console.log('跳用了方法'+this.$refs.top250.offsetHeight)//窗口的高度
          console.log('滚动中');
          console.log(this.$refs.top250.scrollTop)//滚动的高度
          console.log(this.$refs.content.clientHeight)//movie文件的高度
          if(this.$refs.content.clientHeight<=2*this.$refs.top250.offsetHeight+this.$refs.top250.scrollTop){
            if(this.isUp&&!this.isToButton){
              this.isUp=false
              this.moviesStart+=20

              this.getData()
            }

          }
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
  .top250{
    font-size: 12px;
    line-height: 1.2;
    background:#fff;
    position: fixed;
    top: 0;
    height: calc(100vh - 50px);
    width: 100%;
    overflow: auto;
  }
  .movie{
    border-bottom: 1px solid #ccc;
  }
  .top250 .movie  a{
    display: block;

  }
  .top250  .cover{
    float: left;
  }
  .movieImg{
    max-width: 80px;
    margin-left: 20px;
  }

  .top250  .detail{
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
