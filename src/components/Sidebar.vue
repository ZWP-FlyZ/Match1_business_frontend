<template>
  <div>
    <div id="application" v-if="message==1">
      <div class="application-heading ">
        <span class="xf-app-header">我的应用</span>
        <i class="el-icon-plus xf-icon-app-new" title="注册应用" @click="openApp"></i>
      </div>
      <div>
        <!-- <el-collapse v-model="activeNames" v-if="listNotEmpty">
          <el-collapse-item v-bind:title="item.appname" v-bind:name="index" v-for="(item,index) in appList" v-bind:key="item.id">
           <router-link to="">
            <div class="xf-app-item" @click="toAppModule(item)">
              <img class="xf-application-list-img" v-bind:src="item.img" />
              <span class="xf-application-list-span">{{item.appname}}</span>
            </div>
           </router-link>
          </el-collapse-item>
        </el-collapse> -->
        <el-menu mode="vertical" v-for="(item,index) in appList" v-if="listNotEmpty" default-active="0" class="el-menu-vertical-demo">            
            <el-menu-item v-bind:index="item.appname" @click="toAppModule(item)"><i class="el-icon-message"></i>{{item.appname}}</el-menu-item>
          
        </el-menu>
        <div class="listNotEmpty-div" v-else>
          <i class="el-icon-warning"></i>
          <br />
          <span class="listNotEmpty">列表为空</span>
        </div>
      </div>

      <IMask :hide-mask.sync="hideMask"></IMask>
      <RegisterApplication :hide-dialog.sync="hideDialog" :hide-mask.sync="hideMask"  v-on:isClose="closeDialog"></RegisterApplication>
    </div>

    <div id="application" v-if="message==4">
      <div class="application-heading ">
        <span>已选流程列表</span>
      </div>
      <div class="application-list choose-fix-list">
        <!-- <ul >
          <li v-bind:class="{'application-li-active':isActive == index}" @click="addActive(index)" v-for="(item,index) in choosedList">
            <i class="icon-triangle-right"></i>
            <router-link to="/cCEditProcessFchoosed" class="application-router choose-fix-router">{{item.name}}</router-link>
          </li>
        </ul> -->
        <div class="xf-step-process">
         <router-link to="/cCEditProcessFchoosed">
          <div class="xf-step-per" @click="chooseProcess(index)" v-for="(item,index) in choosedList">
            <span class="xf-step-circle" v-bind:class="{'xf-step-font-active':whatprocess==index,'xf-step-border-active':whatprocess==index}"v-if="index!=0">{{index+1}}
            </span>
            <i class="el-icon-circle-check xf-edit-icon" v-if="index==0"></i>
            <span class="xf-step-text xf-step-active" v-bind:class="{'xf-step-font-active':whatprocess==index}">{{item.name}}</span>
            <div style="height:10px"></div>
          </div>
         </router-link>
        </div>
      </div>
    </div>

    <div id="application" v-if="message==3">
      <div class="application-heading xf-application-heading-fix">
        <span>一级流程
        </span>
        <!-- <span style="font-size:12px" v-if="identitytype!='无'">当前选择：{{identitytype}}</span>
        <i class="el-icon-caret-bottom xf-el-icon-caret-bottom"></i>
        <el-select class="xf-identity-type-left" v-model="identitytype" filterable placeholder="筛选条件">
        <el-option-group v-for="group in identitytypeList" :key="group.label" :label="group.label">
          <el-option
              v-for="item in group.options"
              :key="item.value"
              :label="item.label"
              :value="item.label">
            </el-option>
        </el-option-group>
       </el-select> -->
      </div>
      <div class="application-list">
        <div class="xf-step-process">
         <router-link to="/cCprocess">
          <div class="xf-step-per" v-for="(item,index) in processL1" @click="chooseProcess(index)">
            <span class="xf-step-circle" v-bind:class="{'xf-step-font-active':whatprocess==index,'xf-step-border-active':whatprocess==index}">{{index+1}}</span>
            <span class="xf-step-text xf-step-active" v-bind:class="{'xf-step-font-active':whatprocess==index}">{{item.name}}</span>
            <div class="xf-step-line" v-if="index!=processL1.length-1"></div>
          </div>
         </router-link>
        </div>
      </div>
    </div>

    <div id="application" v-if="message==2">
      <div class="application-heading">
        <span>L1流程</span>
      </div>
      <div class="application-list">
        <ul >
          <li v-bind:class="{'application-li-active':isActive == item}" @click="addActive(item)" v-for="(item,index) in processL1">
            <i class="icon-triangle-right"></i>
            <router-link to="/bBprocess" class="application-router">{{item.name}}</router-link>
          </li>
        </ul>
      </div>
    </div>

    <div id="application" v-if="message==5">
      <div class="application-heading">
        <span>可用业务能力</span>
      </div>
      <div class="application-list">
        <el-collapse v-model="activeNames">
          <el-collapse-item title="宝贝基本信息" name="1">
            <div class="xf-component-item" v-for="(item,index) in componentImg1">
              <img v-bind:src="item.src" />
            </div>
          </el-collapse-item>
          <el-collapse-item title="支付信息" name="2">
            <div class="xf-component-item" v-for="(item,index) in componentImg2">
              <img v-bind:src="item.src" />
            </div>
          </el-collapse-item>
          <el-collapse-item title="物流信息" name="3">
            <div class="xf-component-item" v-for="(item,index) in componentImg3">
              <img v-bind:src="item.src" />
            </div>
          </el-collapse-item>
        </el-collapse>
      </div>
    </div>

  <Loading v-if="hideLoading"></Loading>
  </div>
</template>

<script>
import IMask from './Mask'
import RegisterApplication from './AA/RegisterApplication'
import Loading from './Loading'
import {mapActions} from 'vuex'
import {APP_LIST,APP_ID} from '../store/application'
export default {
  data(){
    return {
      isActive:'0',
      hideMask:true,
      hideDialog:true,
      hideLoading:false,
      choosedList:[],
      appList:[],
      processL1:[],
      activeNames:['1','2','3'],
      listNotEmpty:false,//列表是否为空
      componentImg1:[
        {src:'static/img/component1.png'},
        {src:'static/img/component2.png'},
        {src:'static/img/component3.png'},
        {src:'static/img/component4.png'}
      ],
      componentImg2:[
        {src:'static/img/component10.png'}
      ],
      componentImg3:[
        {src:'static/img/component6.png'}
      ],
      whatprocess:'',
      identitytype:'',
        identitytypeList:[{
                      label: '无',
                      options:[{
                        value:"无",
                        label:'无'
                      }]
                    },{
                      label: '全局业务标',
                      options: [{
                        value: 'tm',
                        label: 'BU1'
                      }, {
                        value: 'tb',
                        label: 'BU2'
                      }]
                    }]
    }
  },
  props:['message'],
  components:{IMask,RegisterApplication,Loading},
  mounted:function(){
      this.$nextTick(function(){
        if(this.message == 1){
        this.getApplication();
      }
      this.getChoosedList();
      this.getProcessL1();
      //右边触发了左边，打开注册应用页面
      this.$root.eventHub.$on("openApp",(data)=>{
        this.openApp();
      })
    })
  },
  methods: {
    ...mapActions([APP_LIST,APP_ID]),
    addActive:function(item){
      this.isActive = item;
    },
    getChoosedList:function(){
      /*this.$http.get("/api/getList").then(res=>{
        this.choosedList = JSON.parse(res.body.data).result.choosedList;
      })*/
      this.choosedList = [
        {
        "id":"1001",
        "name":"女装T-shirt商品发布",
        "imgPath":"static/img/tbpublish.png"
      },
      {
        "id":"1002",
        "name":"女装衬衫商品发布",
        "imgPath":"static/img/tbpublish.png"
      }
      ]
    },
    getProcessL1:function(){
      /*this.$http.get("/api/getList").then(res=>{
        this.processL1 = JSON.parse(res.body.data).result.processL11;
      })*/
      this.processL1 = [
        {
        "id":"1",
        "name":"买\\卖家注册"
      },
      {
        "id":"1",
        "name":"货品发布"
      },
      {
        "id":"1",
        "name":"货品选品"
      },
      {
        "id":"1",
        "name":"商品发布"
      },
      {
        "id":"1",
        "name":"商品选品"
      },
      {
        "id":"1",
        "name":"投放"
      },
      {
        "id":"1",
        "name":"加购\\收藏"
      },
      {
        "id":"1",
        "name":"合同订立"
      },
      {
        "id":"1",
        "name":"合同履行"
      },
      {
        "id":"1",
        "name":"评价"
      },
      {
        "id":"1",
        "name":"售后"
      }
      ]
    },
    getApplication:function(){
      this.hideLoading = !this.hideLoading;
      this.$http.get("/api/app/getApps").then(function(res){
        this.hideLoading = !this.hideLoading;
        if (res.body.code == 401) {

          this.$router.push("/login")
        }
        else if(res.body.code == 'empty'){
          //非父子组件之间的通信，告诉他，我没有应用
          this.$root.eventHub.$emit('appisEmpty','empty');
          this.listNotEmpty = false;
        }
        else{
          this.listNotEmpty = true;
          this.appList = res.body.list;
          this.appList.forEach((i,index)=>{
            if(index == 0){
              this.$root.eventHub.$emit('appisEmpty',i.id);
              this.$root.eventHub.$emit('giveTabFirstApp',i.id);
            }
            this.$set(i,'img','static/img/application2.png')
          })
          this.APP_LIST(this.appList);  
       }
      })
    },
    toAppModule:function(firstapp){
      this.APP_ID(firstapp);
      //console.log(app)
      this.$root.eventHub.$emit("changeModule",firstapp);
    },
    openApp:function(){
      this.hideMask = !this.hideMask
      this.hideDialog = !this.hideDialog
    },
    closeDialog:function(childData){
      this.hideDialog = childData
      this.hideMask = childData
    },
    chooseProcess:function(index){
      this.whatprocess=index
    }
  }
}
</script>
<style scoped>
  .application-active{font-weight: bold;color:#448bc7;}
  .choose-fix-list div{margin-left:3px!important;}
  .choose-fix-router{width:95%!important;margin-left:15px;}
  /*组件*/
  .xf-app-header{text-align: left;margin-left:-70px;}
  .xf-component-item,.xf-app-item{display: inline-block;width: 33.2%;height: 65px;overflow: hidden;padding: 5px 1px;}
  .xf-app-item{width:48.5%;text-align: center}
  #application .xf-application-list ul li{height:78px;line-height: 78px;text-align: center;cursor: pointer;}
  .xf-application-list-img{width:35px;display: block;position: relative;left:25%;}
  /*.xf-application-list-span{position: relative;top:-28px;margin-left:-15px;}*/
  .xf-application-list-span{position: relative;}
  .xf-ta-center{text-align: center!important;}
  .xf-icon-app-new{color:white;position: relative;cursor: pointer;font-size:14px;left: -1px;top: 6px;}
  .application-li-active{border-color:#f0f0f0 transparent #f0f0f0 #448bc7 !important;}
  .xf-step-process{margin-left:50px;margin-top:10px;}
  .xf-l1process-heading{padding-left:0px;}
  .xf-step-per{margin-left:0px;}
  .xf-step-circle{width:24px;height:24px;border-radius:12px;background-color: #fff;border:2px solid #bfcbd9;display: inline-block;text-align: center;color:#bfcbd9;font-size:14px;cursor: pointer;}
  .xf-step-text{cursor: pointer;text-align: center;color:#bfcbd9;font-size:14px}
  .xf-step-line{width:2px;height:20px;background-color:#bfcbd9;position: relative;top: -2px;left: 12px;}
  .xf-step-font-active{color:#448bc7;}
  .xf-step-border-active{border:2px solid #448bc7;}
  .xf-application-heading-fix{position: relative;}
  .xf-el-icon-caret-bottom{margin-left:5px;font-size:12px;position: relative;
    top: 10px;}
    .xf-identity-type-left{
      opacity:0;position: relative;top:-15px;
    }
    .el-icon-warning{color:#ccc;}
</style>


