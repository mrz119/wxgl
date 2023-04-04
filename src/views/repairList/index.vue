<template>
  <div>
    <el-tabs v-model="activeName" @tab-click="tabhandleClick">
      <el-tab-pane label="昨日值班" name="first">
        <el-table :data="oldData" style="width: 100%">
          <el-table-column prop="emplName" label="姓名" width="180">
          </el-table-column>
          <el-table-column prop="phone" label="手机号码" width="180 ">
          </el-table-column>
          <el-table-column prop="bzmc" label="排班"> </el-table-column>
          <el-table-column prop="zhiBanRi" label="时间"> </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="今日值班" name="second">
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="emplName" label="姓名" width="180">
          </el-table-column>
          <el-table-column prop="phone" label="手机号码" width="180 ">
          </el-table-column>
          <el-table-column prop="bzmc" label="排班"> </el-table-column>
          <el-table-column prop="zhiBanRi" label="时间"> </el-table-column>
        </el-table>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import { getRepairList } from "@/api/repairList";
var moment = require('moment');
moment().format();
export default {
  data() {
    return {
      tableData: [], //今天数据
      oldData:[], //昨天数据
      activeName: "second"
    };
  },
  methods: {
    //tab切换页面
    tabhandleClick(tab, event) {
      console.log(tab, event);
    },
  },
  //vue的生命周期钩子函数  页面加载时
  created() {},
  //vue的生命周期钩子函数  页面dom挂载时，也是html全部加载
  mounted() {
    var _this = this;
    getRepairList().then((res) => {
      console.log(res)
      this.tableData = res.data.today;
      this.oldData = res.data.yesterday;
    });
  },
};
</script>

<style>
</style>