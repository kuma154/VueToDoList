import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    newArr:[],
    unnewArr:[],
    listType:1,
    list:[{res:'1',state:false},{res:'2',state:false},{res:'3',state:false},
    
  ]
    // count:[{name:'john',age:12,count:1}]
  },
  mutations: {
    add(state,input){
      console.log(state.list)
      state.list.push({res:input,state:false});
      // input=''
    },
    deleteItem(state,id) {
      state.list.splice(id, 1);
    },
    Comp(state,e) {
      state.list[e.target.id].state = !state.list[e.target.id].state;
      console.log(state.list[e.target.id].state);
    },
    UnComp(state){
      state.unnewArr=state.list.filter((item,index)=>{
          return item.state===false
      })
      state.listType=3
  },
  getState(state) {
    state.newArr=state.list.filter((item,index)=>{
        return item.state===true
    })
    state.listType=2
},
allList(state){
  state.listType=1
},
clearList(state){
  const arr = state.list.filter((item,index)=>{
    return item.state===false
  }).map((item,index)=>{
    return item
  })
  console.log(arr)
  state.list=arr
}
  //   // 不要再mutations写异步操作
  //   add(state){
  //     state.count[0].count++;
  //     // count.push({name:this.name,age:13,count:2})
  //     console.log(state.count)
  // },
  // addName(state,name){
  // state.count.push({name:name,age:13,count:2})
  // }
  },
  actions: {
    // actions没有权利修改state中数据
    // addAsync(context){
    //   setTimeout(()=>{
    //     context.commit('add')
    //   },1000)
    // },
    // addAsyncName(context,name){
    //   setTimeout(()=>{
    //     context.commit('addName',name)
    //   },1000)
    // }
  },
  modules: {
  }
})
