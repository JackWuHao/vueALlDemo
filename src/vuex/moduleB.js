const state = {
    maxCount:100
}

const getters = {
    getMaxCount(state){
       return state.maxCount + 100
    }
}
const moduleB ={
    namespaced: true ,state,getters
}
export default moduleB