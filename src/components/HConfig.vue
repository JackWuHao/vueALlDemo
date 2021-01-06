<template>
  <div class="hello">
       <h1>{{msg}}</h1>
  </div>
</template>

<script>
export default {
        name:"HConfig",
        data:()=>{
            return  {
                msg:"Hi , I an H3"
            }
        },
        beforeRouteUpdate (to, from, next) {
            console.log(to,from);
            next()
        },
}
</script>

<style scoped>
      .hello{
          font-size: 14px;
          font-weight: 400;
          color: #f9c;
      }
</style>