<template>
  <div class="Query">
    <el-container>
      <el-aside width="25%">
          <h3 class="head">朋友，想找份心仪的实习吗？</h3>
          <el-form ref="form" :model="form" label-width="80px">
              <el-form-item label="实习岗位">
                <el-input v-model="form.title"></el-input>
              </el-form-item>

              <el-form-item label="实习地点">
                <el-input v-model="form.city"></el-input>
              </el-form-item>

              <el-form-item label="查询个数">
                <el-input v-model="form.limit"></el-input>
              </el-form-item>

              <el-form-item>
                <el-button type="primary" v-on:click="onSubmit">查询</el-button>
                <el-button >取消</el-button>
              </el-form-item>
          </el-form>
    </el-aside>

    <el-main>
      <el-table
        :data="tableData"
        style="width: 100%">
        <el-table-column prop="title" label="岗位名称" width="240"></el-table-column>
        <el-table-column prop="salary" label="预计薪资" width="140"></el-table-column>
        <el-table-column prop="city" label="工作地点" width="150"></el-table-column>
        <el-table-column prop="time" label="发布时间" width="240"></el-table-column>
        <el-table-column prop="company" label="公司名称"></el-table-column>
        <el-table-column fixed="right" label="操作" width="80">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">详情页</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-main>
    </el-container>
  </div>
</template>

<script>
  import qs from 'qs';
  import axios from 'axios';

  export default {
    name: 'query',
    data() {
      return {
        form: {
          title: '',
          city: '',
          limit: "",
        },
        tableData: []
      }
    },
    methods: {
      onSubmit() {
      const url =  '/api/v1/info/query';
      const data = qs.stringify(this.form)
      const options = {
        method: 'POST',
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
      };
      axios.post(url, data, options).then((response) => {
        const res = response.data;
        if (res.code > 0) {
          this.$notify.error({
            title: '查询失败',
            message: res.msg,
          });
        } 
        else {
          this.$notify({
            title: '查询成功',
            message: `总计有${res.data.total}个符合条件的岗位等待投递`,
            type: 'success',
          });
          this.tableData = res.data.items;
        }
      }).catch((error) => {
        this.$notify.error({
          title: '网路错误，或者服务器宕机',
          message: error,
        });
      });
    },
    handleClick(row) {
      window.open(row.link);
    },
  },
  components: {
  },
};
</script>

<style>
.query-card {
    margin: 10px 10px 20px 10px;
  }
  
.head {
    color: #909399;
    font-family: "Hiragino Sans GB";
    line-height: 1.5;
  }
</style>
