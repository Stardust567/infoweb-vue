<template>
  <div class="Register">
    <el-card class="register-card">
    <h3 class="head">想要加入我们吗？请先注册一个账号吧：）</h3>
    <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="用户名">
            <el-input v-model="form.user_name"></el-input>
        </el-form-item>

        <el-form-item label="密码">
            <el-input v-model="form.password"></el-input>
        </el-form-item>

        <el-form-item label="密码确认">
            <el-input v-model="form.password_confirm"></el-input>
        </el-form-item>

        <el-form-item>
            <el-button type="primary" v-on:click="onSubmit">注册</el-button>
            <el-button v-on:click="jump">登录</el-button>
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
          password_confirm: '',
        }
      }
    },
    methods: {
      onSubmit() {
      const url =  '/api/v1/user/register';
      const data = qs.stringify(this.form)
      const options = {
        method: 'POST',
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
      };
      axios.post(url, data, options).then((response) => {
        const res = response.data;
        if (res.code > 0) {
          this.$notify.error({
            title: '注册失败',
            message: res.msg,
          });
        } 
        else {
          this.$notify({
            title: '注册成功',
            message: `${res.data.user_name}，欢迎加入`,
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
    jump() {
      this.$router.push({path:'/'});
    }
  },
  components: {
  },
};
</script>

<style>
.register-card {
    width: 48%;
    margin-left: 26%;
    margin-top: 5%;
  }

.head {
    color: #909399;
    font-family: "Hiragino Sans GB";
    line-height: 1.5;
  }
</style>
