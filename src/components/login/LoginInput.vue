<template>
  <div>
    <div class="container">
      <div class="login-type flex">
        <div class="login-user">账号登录</div>
        <div v-if="loginTypes===0" class="login-phone flex" @click="loginType(1)">
          手机动态码登录
          <span class="phone-img"></span>
        </div>
        <div v-else class="login-phone flex" @click="loginType(0)">
          普通方式登录
          <span class="user-img"></span>
        </div>
      </div>
      <div class="login-ipt">
        <Form ref="formCustom" :model="formCustom" :rules="ruleCustom" :label-width="80">
          <FormItem :label-width="labelWith" prop="username" v-if="loginTypes===0">
            <Input prefix="ios-contact" v-model="formCustom.username" placeholder="请输入用户名" />
          </FormItem>
          <FormItem :label-width="labelWith" prop="phone" v-else>
            <Input
              prefix="ios-phone-portrait"
              type="text"
              v-model="formCustom.phone"
              placeholder="请输入手机号"
            />
          </FormItem>
          <FormItem :label-width="labelWith" prop="passwd" v-if="loginTypes===0">
            <Input
              prefix="ios-key"
              v-model="formCustom.passwd"
              type="password"
              password
              placeholder="请输入密码"
            />
          </FormItem>
          <FormItem :label-width="labelWith" prop="code" v-else>
            <div class="flex">
              <div class="code-text">
                <Input
                  prefix="ios-calculator"
                  v-model="formCustom.code"
                  type="text"
                  placeholder="请输入验证码"
                />
              </div>
              <div class="send-code">
                <Button type="success" :disabled="disabled" @click="sendCodes">{{sendCode}}</Button>
              </div>
            </div>
          </FormItem>
          <FormItem>
            <div class="forget-password">忘记密码？</div>
          </FormItem>
          <FormItem>
            <div class="btn flex">
              <Button long type="warning" @click="handleSubmit('formCustom')">登录</Button>
            </div>
          </FormItem>
        </Form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
  props: {},
  data() {
    const validateUser = (rule, value, callback) => {
      let a = /^[\u4e00-\u9fa5]{0,}$/;
      if (value === "") {
        callback(new Error("请输入用户名"));
      } else if (a.test(value)) {
        callback(new Error("用户名不能为中文"));
      } else {
        callback();
      }
    };
    const validatePass = (rule, value, callback) => {
      let a = /^[\u4e00-\u9fa5]{0,}$/;
      if (value === "") {
        callback(new Error("请输入密码"));
      } else if (value.length < 6) {
        callback(new Error("密码长度不能小于六位"));
      } else if (a.test(value)) {
        callback(new Error("密码不能为中文"));
      } else {
        callback();
      }
    };
    const validatePhone = (rule, value, callback) => {
      let a = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;
      if (value === "") {
        callback(new Error("请输入手机号"));
      } else if (!a.test(value)) {
        this.formCustom.phone = "";
        callback(new Error("手机号格式错误"));
      } else {
        callback();
      }
    };
    const validateCode = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入验证码"));
      } else if (value.length !== 4 && value.length !== 6) {
        this.formCustom.phone = "";
        callback(new Error("验证码为4位或6位"));
      } else {
        callback();
      }
    };
    return {
      formCustom: {
        username: "",
        passwd: "",
        phone: "",
        code: "",
        passwdCheck: "",
        age: ""
      },
      disabled: true,
      ruleCustom: {
        username: [{ validator: validateUser, trigger: "blur" }],
        passwd: [{ validator: validatePass, trigger: "blur" }],
        phone: [{ validator: validatePhone, trigger: "blur" }],
        code: [{ validator: validateCode, trigger: "blur" }]
      },
      labelWith: 0,
      loginTypes: 0,
      sendCode: "发送验证码",
      fromDate: {}
    };
  },
  methods: {
    handleSubmit(name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          this.login();
        } else {
          this.$Message.error("Fail!");
        }
      });
    },
    handleReset(name) {
      this.$refs[name].resetFields();
    },
    // 切换登录状态
    loginType(num) {
      this.loginTypes = num;
      this.fromDate = Object.assign({}, this.formCustom);
      this.$refs.formCustom.resetFields();
      this.formCustom = Object.assign({}, this.fromDate);
    },
    // 发送验证码
    sendCodes() {
      var count = 6;
      var timer = setInterval(() => {
        count--;
        if (count <= 0) {
          this.sendCode = "重新获取";
          this.disabled = false;
          clearInterval(timer);
        } else {
          this.sendCode = "已发送" + count;
          this.disabled = true;
        }
      }, 1000);
    },
    // 请求接口验证
    login() {
      let userMsg = {
        username: this.formCustom.username,
        password: this.formCustom.passwd
      };
      this.$api
        .login(userMsg)
        .then(res => {
          if (res.code === 200) {
            this.$router.push("/");
            this.$Message.success("恭喜你，登录成功！");
            localStorage.setItem(
              "loginMsg",
              JSON.stringify(this.formCustom.username)
            );
            this.$store.state.userInfo = this.formCustom.username;
          } else if (res.code === 500) {
            this.$Message.warning(res.msg);
          } else {
            this.$Message.error("未知错误");
          }
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {},
  created() {},
  filters: {},
  computed: {},
  watch: {
    "formCustom.phone"(val) {
      let a = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;
      if (a.test(val)) {
        this.disabled = false;
      } else {
        this.disabled = true;
      }
    },
    formCustom(val) {
      this.$store.state.fromDate = val;
    }
  },
  directives: {}
};
</script>

<style scoped lang="scss">
.container {
  margin: 0 auto;
  width: 270px;
  background: #fff;

  .login-type {
    padding-bottom: 25px;

    .login-user {
      font-weight: 400;
      color: #666;
    }

    .login-phone {
      align-items: center;
      line-height: 18px;
      padding-right: 16px;
      color: #666;
      float: right;
      font-size: 12px;
      cursor: pointer;

      .phone-img,
      .user-img {
        width: 16px;
        height: 16px;
        background: url(//s0.meituan.net/bs/file/?f=fe-sso-fs:build/assets/mobile.24bd95a.png);
        background-size: cover !important;
      }

      .user-img {
        background: url(http://s0.meituan.net/bs/file/?f=fe-sso-fs:build/assets/normal.97888a3.png);
      }
    }
  }

  .login-ipt {
    margin-top: 20px;
  }

  .forget-password {
    float: right;
    color: #fe8c00;
    text-decoration: none;
    font-size: 12px;
    padding-right: 5px;
  }

  .btn {
    margin-left: -70px;
    margin-right: 10px;
  }
}

.code-text {
  width: 160px;
}

.send-code {
}
</style>
