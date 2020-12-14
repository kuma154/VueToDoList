<template>
<div>
    <h2>count:{{count[0].count}}</h2>
    <input type="text" v-model="name">
    <ul>
        <li v-for="(item,index) in count" :key="index">{{item.name}}</li>
    </ul>
    <button @click="addCount">+1</button>
</div>
</template>

<script>
import {mapState,mapMutations,mapActions} from 'vuex'
export default {
  data() {
    return {
        name:''
    };
  },
  methods:{
      ...mapMutations(['add','addName']),
      ...mapActions(['addAsync','addAsyncName']),
     addCount(){
         this.addAsync();
         this.addAsyncName(this.name)
    //   this.$store.dispatch('addAsync')
    // //   this.addName(this.name)
    //     this.$store.dispatch('addAsyncName',this.name)
     }
  },
  computed:{
      ...mapState(['count'])
  }
}
</script>

<style>

</style>