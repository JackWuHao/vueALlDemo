<template>
    <div>
        {{msg}}
        <div> b的{{maxCount}}</div>
        <div> b的{{getMaxCount}}</div>
        <div>{{count}}</div>
        <div>{{doubleCount}}</div>
        <div class="flex">
            <button @click="addMax">添加</button>
            <button @click="reduceMax">减少</button>
            <button @click="addAction">异步添加</button>
            <button @click="reduceAction">异步减少</button>
        </div>
    </div>
    
</template>

<script>
import { mapState,mapMutations,mapGetters,mapActions } from 'vuex'
export default {
   data:()=>{
       return {
           msg:"Hello Vuex"
       }
   },
   computed:{
//    ...mapState({
//          count:state=>state.count
//     })
        // ...mapState('a',[
        //     'count',
        // ],),
        // ...mapState({
        //    count:state => state.a.count,
        //    maxCount:state=>state.b.maxCount
        // }),
        ...mapState('a',['count']),
        ...mapState('b',['maxCount']),
        // ...mapGetters('a',['doubleCount'])
        ...mapGetters('a',['doubleCount']),
        ...mapGetters('b',['getMaxCount']),

        
   } ,
   methods:{
       ...mapMutations('a',[
          'add',
          'reduce',
       ]),
       ...mapActions('a',[
           'addAction',
           'reduceAction'    
       ]),
        addMax(){
            // this.$store.commit('add')
            this.add()
        },
        reduceMax(){
            // this.$store.commit('reduce')
            this.reduce()
        }
   },

}
</script>

<style scoped>
    .flex{
        display: flex;
        justify-content: space-evenly;
    }
</style>