<template>
	<!-- 全局div开始 -->
  <div>
  	<div class = "BBleft">
    	<div class = "BZProcess">
    	    <div class="BZProcess-register BZProcess-register-first">
    	      <ul>
    	          <li class = "BZProcess-classify">抽象流程模板</li>
    	      </ul>
    	    </div>
    	    <div class="class-table">
    	    	<div class="BZProcess-table">
    	    		<div class="BZ-edit">
    	    			<div class="BZ-num"></div>
    	    			<div class="process"><img src="../../assets/img/process1-highlight.png" alt=""></div>
    	    		</div>
    	    	</div>
    	    </div>

    	    <div class="BZProcess-register">
    	      <ul>
    	          <li class = "BZProcess-classify">流程自定义</li>
    	      </ul>
    	    </div>
    	    <div class="class-table">
    	    	<div class="BZProcess-table">
    	    		<div class="BZ-edit">
    	    			<div class="BZ-num"></div>
    	    			<div class="process"><img v-bind:src="changeImg" alt="" ></div>
    	    		</div>
    	    	</div>
    	    </div>

    	    <div class="BZProcess-table" style="border:0;">
    	        <div class="BZ-edit">
    	            <router-link to="/bBRegisterProcess" class = "link-btn link-btn-blue">确定</router-link>
    	        </div>
    	    </div>
    	  </div>
  	    <IMask :hide-mask.sync="hideMask"></IMask>
  	    <Delete :message="deleteContent" :hide-dialog.sync="hideDialog" :hide-mask.sync="hideMask" v-on:increment="closeDialog"></Delete>
  	  </div>  

      <div class="bbright">
        <div class="BBright-part">
          <div class="bbright-div bbright-top">
            <div class="search-header">
              <input type="search" class="todo-search-field" placeholder="淘宝商品发布配置项">
              <img src="../../assets/img/glyphicons-28-search.png" alt="">
            </div>
            <div class = "search-body-div">
              <div class="search-body">
                <img src="../../assets/img/glyphicons-61-compass.png" alt="">
                <span>淘宝节点配置项1</span>
                <input type="checkbox" @click="choose(1)">
              </div>
              <div class="search-body">
                <img src="../../assets/img/glyphicons-65-lightbulb.png" alt="">
                <span>淘宝节点配置项1</span>
                <input type="checkbox" @click="choose(1)">
              </div>
            </div>
          </div>
      </div>
      <div class="BBright-part">
          <div class="bbright-div bbright-top">
            <div class="search-header">
              <input type="search" class="todo-search-field" placeholder="淘宝商品发布配置项">
              <img src="../../assets/img/glyphicons-28-search.png" alt="">
            </div>
            <div class = "search-body-div">
              <div class="search-body">
                <img src="../../assets/img/glyphicons-61-compass.png" alt="">
                <span>淘宝节点配置项1</span>
                <input type="checkbox" @click="choose(2)">
              </div>
              <div class="search-body">
                <img src="../../assets/img/glyphicons-65-lightbulb.png" alt="">
                <span>淘宝节点配置项1</span>
                <input type="checkbox" @click="choose(2)">
              </div>
            </div>
          </div>
      </div>
    </div>
    <div class="xf-clear"></div>
	</div>
	<!-- 全局div结束 -->
</template>
<script>
import Delete from "../Delete"
import IMask from "../Mask"
  export default{
    data(){
      return {
        processList:[],
        changeImg:require('../../assets/img/process1-white.png'),
        deleteContent:{
          item:'',
          url:''//删除的url请求
        },
        hideDialog:true,
        hideMask:true
      }
    },
    components:{"Delete":Delete,"IMask":IMask},
    mounted:function(){
      this.$nextTick(function(){
        this.getProcess();
      })
    },
    methods: {
      getProcess:function(){
        /*this.$http.get("/api/getList").then(res=>{
          this.processList = JSON.parse(res.body.data).result.processList
        })*/
        this.processList = [{
        "name":"商品发布流程",
        "count":"3",
        "preList":[
          {
            "id":"10001",
            "name":"账号从属于天猫还是淘宝"
          },
          {
            "id":"10001",
            "name":"登陆地在中国还是外国"
          }
        ],
        "pList":[
          {
            "id":"10001",
            "name":"淘宝一口价商品发布流程",
            "imgPath":"static/img/tbpublish.png"
          },
          {
            "id":"10002",
            "name":"天猫一口价商品发布流程",
            "imgPath":"static/img/tmpublish.png"
          }
        ]
      },
      {
        "name":"交易流程",
        "count":"1",
        "preList":[
          {
            "id":"10001",
            "name":"虚拟还是实物"
          },
          {
            "id":"10001",
            "name":"担保还是电子凭证"
          }
        ],
        "pList":[
          {
            "id":"10001",
            "name":"淘宝交易流程",
            "imgPath":"static/img/process1.png"
          }
        ]
      }]
      },
      deleteDialog:function(i){
        this.hideDialog = !this.hideDialog
        this.hideMask = !this.hideMask
        this.deleteContent.item = i

      },
      closeDialog:function(childData){
        this.hideDialog = childData
        this.hideMask = childData
      },
      choose:function(i){
        if(i==1){
          this.changeImg = require('../../assets/img/process1.png')
        }else{
          this.changeImg = require('../../assets/img/process1-add.png')
        }
      }
    }
  }
</script>
<style scoped>
 
  .BBright-part{
    width: 40%;
    height: 200px;
    float: left;
    margin-left: 20px;
    /*border:1px solid #0000ff;*/
  }
  .BBleft{
    width: 55%;
    float: left;
  }
  .search-header{
    background: #448bc7;
    height: 40px;
    border-radius: 6px;
    background-size: 16px 16px;
    border-radius: 6px 6px 0 0;
    color: #34495e;
  }
  input.todo-search-field {
    background: none;
    border: none;
    /*color: #34495e;*/
    color: #fff;
    font-size: 19px;
    font-weight: 700;
    margin-left: 23px;
    line-height: 23px;
    padding: 8px 0;
    text-indent: 0;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
    float: left;
}
.search-header img{
  float: right;
  margin-right: 23px;
  margin-top: 5px;
}
.search-body{
  float: left;
  margin-left: 13px;
  margin-top: 10px;
}
.search-body span{
  display: inline-block;
  width: 350px;
  color:#448bc7;
  margin-left: 40px;
  margin-right:45px;
}
.search-body img{
  position: relative;
  top:6px;
  width:25px;
  height: 25px;
}
.bbright-div{
  margin-bottom: 30px;
  /*border-bottom: 20px;*/
  display: block;
}
.search-body-div{
  border:2px solid #448bc7;
  height: 150px;
}
.BZProcess-register-first{
  margin-top: 0;
}
::-webkit-input-placeholder { /* WebKit browsers */ 
color: #fff; 
} 
:-moz-placeholder { /* Mozilla Firefox 4 to 18 */ 
color: #fff; 
} 
::-moz-placeholder { /* Mozilla Firefox 19+ */ 
color: #fff; 
} 
:-ms-input-placeholder { /* Internet Explorer 10+ */ 
color: #fff; 
} 

</style>