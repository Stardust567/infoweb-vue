<template>
  <div class="Login">
    <h2>请先登录</h2>
    <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="用户名">
            <el-input v-model="form.user_name"></el-input>
        </el-form-item>

        <el-form-item label="密码">
            <el-input v-model="form.password"></el-input>
        </el-form-item>

        <el-form-item>
            <el-button type="primary" v-on:click="onSubmit">登录</el-button>
            <el-button>取消</el-button>
        </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import qs from 'qs';
  import axios from 'axios';

  export default {
    name: 'login',
    data() {
      return {
        form: {
          user_name: '',
          password: '',
        }
      }
    },
    methods: {
      onSubmit() {
      const url =  '/api/v1/user/login';
      const data = qs.stringify(this.form)
      const options = {
        method: 'POST',
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
      };
      axios.post(url, data, options).then((response) => {
        const res = response.data;
        if (res.code > 0) {
          this.$notify.error({
            title: '登录失败',
            message: res.msg,
          });
        } 
        else {
          this.$notify({
            title: '登录成功',
            message: `${res.data.user_name}，欢迎回来`,
            type: 'success',
          });
        }
      }).catch((error) => {
        this.$notify.error({
          title: '网路错误，或者服务器宕机',
          message: error,
        });
      });
    },
  },
  components: {
  },
};
</script>

<style>
</style>
