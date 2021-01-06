<template>
  <div class="left-nav">
    <ul>
      <li
        v-for="(item, index) in itemList"
        :key="index"
        @click="clikItem(index)"
        :class="[selectIndex==index ? 'active': '']"
      >
        <i :class="[item.class]" ></i>
        <div >{{ item.name }}</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "leftNav",
  data: () => {
    return {
      
      selectIndex:0,
      itemList: [
        {
          name: "收银",
          class: "icon iconfont icon-wodezichan",
        },
        {
          name: "店铺",
          class: "icon iconfont icon-dianpu",
        },
        {
          name: "商品",
          class: "icon iconfont icon-hanbao",
        },
        {
          name: "会员",
          class: "icon iconfont icon-huiyuanqia",
        },
        {
          name: "统计",
          class: "icon iconfont icon-tongji",
        },
      ],
    };
  },
  methods: {
    clikItem(index) {
      this.selectIndex = index
      switch (index) {
        case 0:
            
            this.$router.push("/shopCar").catch(() => {});
          break;
        case 1:
          console.log('sasasas');
          this.$router.push({name:"shop"}).catch(()=>{});
          break;
      }
    },
  },
};
</script>

<style scoped>
.left-nav {
  color: black;
  font-size: 10px;
  display: flex;
  width: 80px;
  background-color: blanchedalmond;
  text-align: center;
}
ul {
  margin: 0;
  padding: 0;
  width: 100%;
  list-style: none;
}
li {
  display: flex;
  flex-direction: column;
  align-content: center;
  padding-top: 10px;
  user-select: none;
  cursor: pointer;
  
}
.active{
  color: #f9c;
}
</style>