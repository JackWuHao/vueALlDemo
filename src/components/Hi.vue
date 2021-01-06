<template>
  <div class="hello">
       <h1>{{msg}}</h1>
       <button class="btn" @click="back">返回</button>
       <div>
           <button class="btn" @click="pushH2">跳转到H2</button>
           <button class="btn" @click="pushH3">跳转到H3</button>
       </div>
       <transition name="fade">
       <router-view></router-view>
       </transition>
  </div>
  
</template>

<script>
export default {
        name:"hi",
        data:()=>{
            return  {
                msg:"Hi , I an XiaoCao"
            }
        },
        methods:{
            pushH2(){
                this.$router.push({name:"data"}).catch(()=>{}) 
            },
            pushH3(){
               this.$router.push({
                    name:"config"
                }).catch(()=>{}) 
            },
            back(){
                this.$router.push('/goBack').catch(()=>{}) 
            } 
        },
        
}
</script>

<style scoped>
      .hello{
          font-size: 14px;
          font-weight: 400;
          color: #f9c;
      }
      .btn{
            border: 1px solid red;
            font-size: 14px;
            font-weight: 700;
            color: #f66;
            width: 80px;
            height: 30px;
            padding: 0;
            margin:0;
            margin-top: 10px;
            line-height: 30px;
            text-align: center;
            box-sizing: border-box;
            cursor: pointer;
            outline: none;
            user-select: none;
        }
        .btn:active{
            background: #4a9bfa;
            opacity: 0.5;
        }
</style>