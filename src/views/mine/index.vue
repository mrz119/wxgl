<template>
<div>
  <!-- 页面接口标签 -->
  <el-card class="box-card">
    <el-form ref="form" :model="form" label-width="80px">
  <el-form-item label="申请单号">
    <el-input v-model="form.name"></el-input>
  </el-form-item>
  <el-form-item label="申请人员">
    <el-input v-model="form.name"></el-input>
  </el-form-item>
    <el-form-item label="申请科室">
    <el-input v-model="form.name"></el-input>
  </el-form-item>
  <el-form-item label="申请类别">
    <el-select v-model="form.region" placeholder="请选择类别">
      <el-option label="类别一" value="shanghai"></el-option>
      <el-option label="类别二" value="beijing"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item label="申请日期">
    <el-date-picker
      v-model="form.value1"
      type="date"
      placeholder="选择日期">
    </el-date-picker>
  </el-form-item>
  <el-form-item label="申请完成日期">
    <el-date-picker
      v-model="form.value2"
      type="date"
      placeholder="选择日期">
    </el-date-picker>
  </el-form-item>
  <el-form-item label="加急">
    <el-switch v-model="form.delivery"></el-switch>
  </el-form-item>
  <el-form-item>
    <el-button type="primary">扫码</el-button>
    <el-button type="danger">清空</el-button>
    <el-button type="primary" @click="onSubmit">保存</el-button>
  </el-form-item>
</el-form>
  </el-card>
</div>
</template>

<script>
export default {
 data() {
      return {
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
}
</script>

<style>

</style>