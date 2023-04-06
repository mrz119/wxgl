<template>
<div>
  <!-- 页面接口标签 -->
  <el-card class="box-card">
    <el-form ref="form" :model="form" label-width="120px">
  <el-form-item label="申请科室">
    <el-input v-model="form.repairApplyDept"></el-input>
  </el-form-item>
  <el-form-item label="申请人员">
    <el-input v-model="form.repairApplyOperator"></el-input>
  </el-form-item>
  <el-form-item label="申请类别">
    <el-select v-model="form.region" placeholder="请选择类别" @change="selectchage">
      <el-option label="硬件,相关硬件维修" value="硬件,相关硬件维修"></el-option>
      <el-option label="网络,网络故障" value="网络,网络故障"></el-option>
      <el-option label="软件,相关软件报错" value="软件,相关软件报错"></el-option>
      <el-option label="后勤,其他故障" value="后勤,其他故障"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item label="详细情况">
  <el-input
  type="textarea"
  :rows="2"
  placeholder="请输入详情情况"
  v-model="form.repairApplyDetail">
</el-input>
</el-form-item>
<el-form-item label="相关人员">
    <el-input v-model="form.name"></el-input>
  </el-form-item>
  <el-form-item label="相关科室">
    <el-input v-model="form.names"></el-input>
  </el-form-item>
  <el-form-item label="申请日期">
    <el-date-picker
      v-model="form.repairApplyDate"
      type="date"
      placeholder="选择日期"
      disabled>
    </el-date-picker>
  </el-form-item>
  <el-form-item label="申请完成日期">
    <el-date-picker
      v-model="form.repairFinishedDate"
      type="date"
      placeholder="选择日期">
    </el-date-picker>
  </el-form-item>
  <el-form-item label="加急">
    <el-switch v-model="form.appraise" @change="swichchage"></el-switch>
  </el-form-item>
  <el-form-item>
    <el-button type="primary">扫码</el-button>
    <el-button type="danger" @click="resetForm('form')">清空</el-button>
    <el-button type="primary" @click="onSubmit">保存</el-button>
  </el-form-item>
</el-form>
  </el-card>
</div>
</template>

<script>
var moment = require('moment');
moment().format();
import { getUserInfo} from '@/utils/auth'
import {getapplyRepair,getCorrelationEmployee,getCorrelationDept} from '@/api/repair'
import { Message } from 'element-ui'
// import user from 'mock/user';
export default {
 data() {
      return {
        form: {
          repairApplyDept: '', //科室
          repairApplyOperator:'', //申请人员
          repairApplyType:"", //申请类别
          repairApplyDetail:'', //申请详情
          repairApplyDate:'',//申请日期
          repairFinishedDate:'',//申请完成时间
          appraise:'false',//加急
          repairApplyPhone:''//手机号
        }
      }
    },
    methods: {
      //初始化
      init(){
        var userinfo = JSON.parse(getUserInfo()) 
        // console.log(userinfo,'1')
        //进入页面默认赋值科室
        //this.form.repairApplyDept = userinfo.deptName
        //this.form.repairApplyOperator = userinfo.emplName
        this.form.repairApplyDept = userinfo.deptCode
        this.form.repairApplyOperator = userinfo.emplCode
        this.form.repairApplyPhone =userinfo.remark
      },
      //提交方法
      onSubmit() {
        if(this.form.repairApplyType == ''){
            Message({
            message: '请填写申请类别',
            type: 'error',
            duration: 5 * 1000
          })
          return
        }else if(this.form.repairFinishedDate == ''){
          this.form.repairFinishedDate = moment(new Date()).minute(30).format("YYYY-MM-DD HH:mm:ss").toString()
        }
        getapplyRepair(this.form).then(res=>{
          console.log(res)
        })
      },
      //选择申请类别
      selectchage(item){
       this.form.repairApplyType = item
      },
      //清楚表单
      resetForm() {
        this.form = {}
        this.form.repairApplyType = "", //申请类别
        this.form.repairApplyDetail = '', //申请详情
        this.form.repairApplyDate = '',//申请日期
        this.form.repairFinishedDate ='',//申请完成时间
        this.form.appraise = 'false',//加急
        this.init();
      },
      //加急方法
      swichchage(status){
       this.form.appraise = status
      }
    },
    created(){
      this.init();
        // getCorrelationEmployee().then(res=>{
        //   console.log(res,'11111')
        // })
        // getCorrelationDept().then(res=>{
        //   console.log(res,'222222')
        // })
    }
}
</script>

<style lang='scss' scoped>
.box-card{
  width: 90%;
  padding: 10px;
  margin: 0 auto;
}

</style>