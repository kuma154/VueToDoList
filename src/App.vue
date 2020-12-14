<template>
  <div id="app">
  <!-- <context-view></context-view> -->
  <todos></todos>
  </div>
</template>
<script>
import Todos from './components/Todos.vue'
// import ContextView from './components/ContextView.vue'

export default {
  components:{
    Todos
    // ContextView
    
  }
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  
}
</style>
