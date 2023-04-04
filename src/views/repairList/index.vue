<template>
  <div>
    <el-tabs v-model="activeName" @tab-click="tabhandleClick">
      <el-tab-pane label="昨日值班" name="first">昨日值班</el-tab-pane>
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
// var moment = require('moment');
// moment().format();
export default {
  data() {
    return {
      tableData: [],
      oldData:[],
      activeName: "second",
      Data:[]
    };
  },
  methods: {
    //处理后端返回的时间带t类型转换
    formatter(row) {
      console.log(row, "row");
      const zoneDate = new Date(row).toJSON();
      const date = new Date(+new Date(zoneDate) + 8 * 3600 * 1000)
        .toLocaleDateString()
        .replace(/T/g, " ")
        .replace(/\.[\d]{3}Z/, "");
      return date;
    },
    //tab切换页面
    tabhandleClick(tab, event) {
      console.log(tab, event);
    },
    getOldList() {
      getRepairList().then((res) => {
        console.log(res);
        res.data.forEach((item) => {
          item.zhiBanRi = this.formatter(item.zhiBanRi);
        });
        _this.tableData = res.data;
      });
    },
  },
  //vue的生命周期钩子函数  页面加载时
  created() {},
  //vue的生命周期钩子函数  页面dom挂载时，也是html全部加载
  mounted() {
    var _this = this;
    getRepairList().then((res) => {
      console.log(res);
      res.data.forEach((item) => {
        item.zhiBanRi = this.formatter(item.zhiBanRi);
      });
      //处理好的时间总数据
      _this.Data = res.data;
      _this.tableData = res.data;
      //处理今天数据给 tableData  昨天的数据给oldData
      console.log(moment().add(new  Date(), 'days').calendar(),'111')

    });
  },
};
</script>

<style>
</style>