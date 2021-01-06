<template>
  <div>
    <ul class="cookList">
      <li v-for="(item, index) in data" :key="index">
        <span class="foodImg"
          ><img
            src="http://xiaocaoaixuexi.club:1100/20201126164946.jpeg"
            width="100%"
        /></span>
        <span class="foodName">{{ item.goodsName }}</span>
        <span class="foodPrice">￥{{ item.price }}元</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
     name:"goodItem",
     props:["data"],
     
};
</script>

<style scoped>
ul{
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
}
.cookList li{
       width:150px;
       border:1px solid #E5E9F2;
       height: auot;
       overflow: hidden;
       background-color:#fff;
       display: flex;
       flex-direction: column;
       justify-content: center;
       align-content: center;
       padding: 0;
       margin: 10px 10px;

   }
   .foodName{
       font-size: 18px;
       padding-left: 10px;
       color:brown;
   }
   .foodPrice{
       font-size: 16px;
       padding-left: 10px;
       padding-top:10px;
   }
</style>