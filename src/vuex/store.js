import Vue from 'vue'
import Vuex from "vuex"
import moduleB from './moduleB'
import persistedState from 'vuex-persistedstate'

Vue.use(Vuex)

const state = {
    count:1
}

const mutations = {
    add(state){
        state.count++
    },
    reduce(state){
        state.count--
    },
    doubleAdd(state,count){
        console.log("sasasas",count);
        state.count = state.count + count
    },
    doubleReduce(state,count){
        state.count = state.count - count
    }
}

const getters = {
    doubleCount:(state)=>{
      console.log(state.count);
     return state.count + 2
    }
}

const actions = {
    addAction(context){
        setTimeout(()=>{
            //  同步commit
        context.commit('doubleAdd',10)
           //   异步dispatch
        // context.dispatch('reduceAction')
        },1000)    
    },
    reduceAction({commit}){
        commit('doubleReduce',5)
    }
}
const moduleA={
    namespaced: true, state,mutations,getters,actions
}
export default new Vuex.Store({
    modules:{
        a:moduleA,
        b:moduleB
    },
    plugins:[persistedState(
        {
        reducer(state){
            console.log('保存',state.a.count);
            return {
                // 无命名空间时
                // count:state.count
                a:{
                    count:state.a.count
                }
            }
          }
        }
    )],
})