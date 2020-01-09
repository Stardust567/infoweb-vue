<template>
  <div class="Login">
    <el-card class="login-card">
    <img src="https://i.loli.net/2020/01/04/FLq4mjl8Me9c6W5.jpg" class="login-image">
    <el-form ref="form" :model="form" label-width="70px">
        <el-form-item label="用户名">
            <el-input v-model="form.user_name"></el-input>
        </el-form-item>

        <el-form-item label="密码">
            <el-input v-model="form.password"></el-input>
        </el-form-item>

        <el-form-item>
            <el-button type="primary" v-on:click="onSubmit">登录</el-button>
            <el-button v-on:click="jump">注册</el-button>
        </el-form-item>
    </el-form>
    </el-card>
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
          this.$router.push({path:'/user'});
          this.$store.commit('change', res.data.user_name);
        }
      }).catch((error) => {
        this.$notify.error({
          title: '网路错误，或者服务器宕机',
          message: error,
        });
      });
    },
    jump() {
      this.$router.push({path:'/register'});
    }
  },
  components: {
  },
};
</script>

<style>
.login-card {
    margin-left: 10px;
    margin-top: 18px;
  }

.login-image {
    width: 65%;
    margin: 3px;
}
</style>
