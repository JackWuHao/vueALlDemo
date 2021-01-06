<template>
  <div class="hello">
       <h1>{{msg}}</h1>
        <h1>{{id}}</h1>
  </div>
</template>

<script>
export default {
        name:"HData",
        props:["id"],
        data:()=>{
            return  {
                msg:"Hi , I am H2"
            }
        },
       beforeRouteEnter:(to,from,next)=>{
            console.log("准备进入路由模板");
            console.log(to);
            console.log(from);
            next();
        },
        beforeRouteLeave: (to, from, next) => {
            console.log("准备离开路由模板");
            console.log(to);
            console.log(from);
            next();
        }
       
}
</script>

<style scoped>
      .hello{
          font-size: 14px;
          font-weight: 400;
          color: #f9c;
      }
</style>