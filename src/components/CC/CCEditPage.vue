<template>
  <div>
    <Sidebar :message="message"></Sidebar>
    <Step :step="step" :click="click"></Step>
    <div id="content">
     <div class="content-main-fix">
      <transition name="fade"><router-view></router-view></transition>
     </div>
    </div>
 </div>
</template>
<script>
  import Sidebar from '../Sidebar.vue'
  import Step from './Step.vue'
  export default{
    data(){
      return{
        message:'5',
        step:'4'
      }
    },
    components: {Sidebar,Step},
    methods:{
      click:function(){}
    }
  };
  
</script>
<style scoped>
   #content{margin-top:123px;}
</style>