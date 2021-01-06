<template>
  <div class="pos">
    <div>
      <el-row>
        <el-col :span="7">
          <el-tabs type="border-card">
            <el-tab-pane label="点餐">
              <el-row>
                <el-table
                  :data="tableData"
                  border
                  show-summary
                  style="width: 100%"
                >
                  <el-table-column
                    prop="goodsName"
                    label="商品"
                  ></el-table-column>
                  <el-table-column
                    prop="count"
                    label="量"
                    width="50"
                  ></el-table-column>
                  <el-table-column
                    prop="price"
                    label="金额"
                    width="70"
                  ></el-table-column>
                  <el-table-column label="操作" width="100" fixed="right">
                    <template slot-scope="scope">
                      <el-button
                        type="text"
                        size="small"
                        @click="handleDelete(scope.$index, scope.row)"
                        >删除</el-button
                      >
                      <el-button
                        type="text"
                        size="small"
                        @click="handleAdd(scope.$index, scope.row)"
                        >增加</el-button
                      >
                    </template>
                  </el-table-column>
                </el-table>
              </el-row>
              <el-row class="row-bg">
                <el-button type="warning">挂单</el-button>
                <el-button type="danger">删除</el-button>
                <el-button type="success">结账</el-button>
              </el-row>
            </el-tab-pane>
            <el-tab-pane label="挂单"> 挂单 </el-tab-pane>
            <el-tab-pane label="外卖"> 外卖 </el-tab-pane>
          </el-tabs>
        </el-col>
        <el-col :span="17">
          <div class="often-goods">
            <div class="title">常用商品</div>
            <div class="often-goods-list">
              <ul>
                <li v-for="(item, index) in oftenGoods" :key="index">
                  <span>{{ item.goodsName }}</span>
                  <span class="o-price">￥{{ item.price }}元</span>
                </li>
              </ul>
            </div>
          </div>
          <div class="good-type">
            <el-tabs type="border-card">
              <el-tab-pane label="汉堡">
                  <good-item :data="type0Goods"></good-item>
                
              </el-tab-pane>
              <el-tab-pane label="小食"> 小食 </el-tab-pane>
              <el-tab-pane label="饮料"> 饮料 </el-tab-pane>
              <el-tab-pane label="套餐"> 套餐 </el-tab-pane>
            </el-tabs>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import goodItem from "./GoodItem";

export default {

  name: "Pos",
 components:{
      goodItem,
  },
  data: () => {
    return {
      tableData: [
        {
          goodsName: "可口可乐",
          price: 8,
          count: 1,
        },
        {
          goodsName: "香辣鸡腿堡",
          price: 15,
          count: 1,
        },
        {
          goodsName: "爱心薯条",
          price: 8,
          count: 1,
        },
        {
          goodsName: "甜筒",
          price: 8,
          count: 1,
        },
      ],
      oftenGoods: [
        {
          goodsId: 1,
          goodsName: "香辣鸡腿堡",
          price: 18,
        },
        {
          goodsId: 2,
          goodsName: "田园鸡腿堡",
          price: 15,
        },
        {
          goodsId: 3,
          goodsName: "和风汉堡",
          price: 15,
        },
        {
          goodsId: 4,
          goodsName: "快乐全家桶",
          price: 80,
        },
        {
          goodsId: 5,
          goodsName: "脆皮炸鸡腿",
          price: 10,
        },
        {
          goodsId: 6,
          goodsName: "魔法鸡块",
          price: 20,
        },
        {
          goodsId: 7,
          goodsName: "可乐大杯",
          price: 10,
        },
        {
          goodsId: 8,
          goodsName: "雪顶咖啡",
          price: 18,
        },
        {
          goodsId: 9,
          goodsName: "大块鸡米花",
          price: 15,
        },
        {
          goodsId: 20,
          goodsName: "香脆鸡柳",
          price: 17,
        },
      ],
      type0Goods:[
          {
              goodsId:1,
              goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos001.jpg",
              goodsName:'香辣鸡腿堡',
              price:18
          }, {
              goodsId:2,
              goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos002.jpg",
              goodsName:'田园鸡腿堡',
              price:15
          }, {
              goodsId:3,
              goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos004.jpg",
              goodsName:'和风汉堡',
              price:15
          }, {
              goodsId:4,
               goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos003.jpg",
              goodsName:'快乐全家桶',
              price:80
          }, {
              goodsId:5,
               goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos003.jpg",
              goodsName:'脆皮炸鸡腿',
              price:10
          }, {
              goodsId:6,
               goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos004.jpg",
              goodsName:'魔法鸡块',
              price:20
          }, {
              goodsId:7,
               goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos001.jpg",
              goodsName:'可乐大杯',
              price:10
          }, {
              goodsId:8,
               goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos003.jpg",
              goodsName:'雪顶咖啡',
              price:18
          }, {
              goodsId:9,
               goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos002.jpg",
              goodsName:'大块鸡米花',
              price:15
          }, {
              goodsId:20,
               goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos002.jpg",
              goodsName:'香脆鸡柳',
              price:17
          }
      ]
    };
  },
  methods: {
    handleDelete(index, data) {
      console.log(index, data);
    },
    handleAdd(index, data) {
      console.log(index, data);
    },
  },
};
</script>

<style scoped>
.pos {
  text-align: center;
}
.row-bg {
  padding: 10px 0;
}

.title {
  height: 20px;
  border-bottom: 1px solid #d3dce6;
  background-color: #f9fafc;
  padding: 10px;
  color: #f9c;
  user-select: none;
}

.often-goods-list {
  overflow: hidden;
}
.often-goods-list ul li {
  float: left;
  border: 1px solid #e5e9f2;
  padding: 10px;
  margin: 5px;
  background-color: #fff;
}
.o-price {
  color: #58b7ff;
}
.good-type {
  padding: 10px 10px;
}
ul{
    list-style: none;
    padding: 0;
    margin: 0;
}


</style>