<template>
  <div class="shopMain">
        <span class="textSet"> 收银台</span> 
       <div class="main">
         <left-nav></left-nav>
         <div class="content">
            <!-- <pos></pos> -->
          <transition name="fade">
            <router-view></router-view>
          </transition>
         </div>
       </div>
  </div>
</template>

<script>
import  leftNav  from "./LeftNav";
// import pos from "./Pos";
export default {
       name:"ShopCardHome",
       data:()=>{
         return {
            
         }
       },
       components:{
         leftNav,
        //  pos,
       }

}
</script>

<style scoped>
    .shopMain{  
      width: 100%;
      height: 100%;
      text-align: center;
    }
    .textSet{
      color:black;
      font-size: 18px;
      font-weight: bold;
    }
     .main{
       display: flex;
       width: 100%;
       height: 100%;
     }
     .content{
       flex: 1;
       padding: 0 10px;
     }
</style>
