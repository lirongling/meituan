<template>
  <div>
    <div class="container">
      <div class="register-from">
        <Form ref="formCustom" :model="formCustom" :rules="ruleCustom" :label-width="80">
          <FormItem label="用户名" prop="username">
            <Input prefix="ios-contact" type="text" v-model="formCustom.username"></Input>
          </FormItem>
          <FormItem label="手机号" prop="phone">
            <Input prefix="ios-phone-portrait" type="text" v-model="formCustom.phone"/>
          </FormItem>
          <FormItem label="验证码" prop="code">
            <div class="flex code">
              <div class="code-text">
                <Input prefix="ios-calculator" v-model="formCustom.code" type="text"/>
              </div>
              <div class="send-code">
                <Button type="success" :disabled="disabled" @click="sendCodes">{{sendCode}}</Button>
              </div>
            </div>
          </FormItem>

          <FormItem label="邮箱" prop="email">
            <Input prefix="ios-send" type="email" v-model="formCustom.email"></Input>
          </FormItem>
          <FormItem prefix="md-lock" label="密码" prop="passwd">

            <!--            <Input type="password" v-model="formCustom.passwd"></Input>-->
            <Input prefix="md-lock" v-model="formCustom.passwd" type="password" password/>
          </FormItem>
          <div class="pw-strength">
            <div class="pw-strength__letter" :class="{'pw-strength-colors':strength>4}">
              <span class="pw-strength__label" :class="{'pw-strength-color':strength>0}">弱</span>
              <span class="pw-strength__label" :class="{'pw-strength-color':strength<5&&strength>=3}">中</span>
              <span class="pw-strength__label pw-strength__label--noborder">强</span>
            </div>
          </div>
          <FormItem label="确认密码" prop="passwdCheck">
            <Input prefix="md-lock" type="password" v-model="formCustom.passwdCheck" password></Input>
          </FormItem>
          <FormItem>
            <div class="flex">
              <Button type="info" @click="handleReset('formCustom')" style="margin-left: 8px">清除</Button>
              <Button type="warning" @click="handleSubmit('formCustom')">同意以下协议并注册</Button>
            </div>
          </FormItem>
        </Form>
        <div class="term">
          <a class="f1" href="https://rules-center.meituan.com/rules-detail/4" target="_blank">《美团点评用户服务协议》</a>
          <a class="f1" href="https://rules-center.meituan.com/rules-detail/2" target="_blank">《美团点评隐私政策》</a>
        </div>
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
                if (value === '') {
                    callback(new Error('请输入用户名'));
                } else if (a.test(value)) {
                    callback(new Error('用户名不能为中文'));
                } else {
                    callback();
                }

            };
            const validateEmail = (rule, value, callback) => {
                let a = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
                if (value === '') {
                    callback(new Error('请输入邮箱'));
                } else if (!a.test(value)) {
                    callback(new Error('邮箱格式输入错误'));
                } else {
                    callback();
                }
            };
            const validatePass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入密码'));
                } else {
                    if (this.formCustom.passwdCheck !== '') {
                        // 对第二个密码框单独验证
                        this.$refs.formCustom.validateField('passwdCheck');
                    }
                    callback();
                }
            };
            const validatePassCheck = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请再次输入密码'));
                } else if (value !== this.formCustom.passwd) {
                    callback(new Error('两次输入密码不一致!'));
                } else {
                    callback();
                }
            };
            const validatePhone = (rule, value, callback) => {
                let a = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;
                if (value === '') {
                    callback(new Error('请输入手机号'));
                } else if (!a.test(value)) {
                    this.formCustom.phone = ''
                    callback(new Error('手机号格式错误'));
                } else {
                    callback();
                }

            };
            const validateCode = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入验证码'));
                } else if (value.length !== 4 && value.length !== 6) {
                    this.formCustom.phone = ''
                    callback(new Error('验证码为4位或6位'));
                } else {
                    callback();
                }
            };
            return {
                formCustom: {
                    username: '',
                    passwd: '',
                    passwdCheck: '',
                    email: '',
                    phone: '',
                    code: '',
                },
                ruleCustom: {
                    username: [
                        {validator: validateUser, trigger: 'blur'}
                    ],
                    email: [
                        {validator: validateEmail, trigger: 'blur'}
                    ],
                    passwd: [
                        {validator: validatePass, trigger: 'blur'}
                    ],
                    passwdCheck: [
                        {validator: validatePassCheck, trigger: 'blur'}
                    ],
                    phone: [
                        {validator: validatePhone, trigger: 'blur'}
                    ],
                    code: [
                        {validator: validateCode, trigger: 'blur'}
                    ],
                },
                labelWith: 0,
                sendCode: "发送验证码",
                disabled: true,
                strength:0
            }
        },
        methods: {
            // 提交按钮
            handleSubmit(name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {

                            this.$Modal.confirm({
                                title: '提醒',
                                content: '<p>是否确认注册？</p>',
                                onOk: () => {
                                    this.register()
                                },
                                onCancel: () => {
                                    this.$Message.info('已取消注册');
                                }
                            });


                    } else {
                        this.$Message.error('表单验证失败!');
                    }
                })
            },
            handleReset(name) {
                this.$refs[name].resetFields();
            },
            // 请求接口验证
            register() {
                let userMsg = {
                    username: this.formCustom.username,
                    password: this.formCustom.passwd,
                    email: this.formCustom.email
                }
                this.$api.register(userMsg).then(res => {
                    if (res.code === 200) {
                        this.$router.push('/login')
                        this.$Message.success('恭喜你，注册成功！');
                    } else if (res.code === 500) {
                        this.$Message.warning(res.msg);
                    } else {
                        this.$Message.error('注册失败')
                    }
                    console.log(res);
                }).catch(err => {
                    console.log(err);
                })
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
            // 强度验证
            checkStrong(sValue) {
                var modes = 0;
                //正则表达式验证符合要求的
                if (sValue.length < 1) return modes;
                if(sValue.length >6) modes++
                if (/\d/.test(sValue)) modes++; //数字
                if (/[a-z]/.test(sValue)) modes++; //小写
                if (/[A-Z]/.test(sValue)) modes++; //大写
                if (/\W/.test(sValue)) modes++; //特殊字符

                //逻辑处理
                switch (modes) {
                    case 1:
                        return 1;
                        break;
                    case 2:
                        return 2;
                        break;
                    case 3:
                    case 4:
                        return sValue.length < 4 ? 3 : 4;
                        break;
                }
                return modes;
            },
        },
        mounted() {

        },
        created() {

        },
        filters: {},
        computed: {},
        watch: {
            "formCustom.phone"(val) {
                let a = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;
                if (a.test(val)) {
                    this.disabled = false
                } else {
                    this.disabled = true
                }
            },
            "formCustom.passwd"(val) {
                this.strength = this.checkStrong(val);
            }
        },
        directives: {}
    }
</script>

<style scoped lang="scss">
  .container {
    min-width: 980px;
    color: #666;
    width: 980px;
    height: 540px;
    margin: 0 auto 20px;
    padding-top: 10px;
    min-height: 300px;
    background: url("../../assets/images/QQ图片20200117150255.jpg") right center  no-repeat;
    background-size: contain;


    .register-from {
      width: 50%;
      margin-top: 40px;
    }

    .term {
      position: relative;
      padding: 3px 10px 3px 80px;
      margin: 0 auto 8px;
      zoom: 1;

      .f1 {
        font-size: 13px;
        color: #FE8C00;
        text-decoration: none;
      }
    }

    .pw-strength {
      height: 30px;
      position: relative;
      margin: 10px 80px;
    }

    .pw-strength__letter {
      background: #d3ebee;
      height: 20px;
      overflow: hidden;
      position: absolute;
      top: 0;
      left: 0;
    }

    .pw-strength__label {
      display: block;
      float: left;
      text-align: center;
      font-size: 12px;
      height: 20px;
      line-height: 20px;
      width: 85px;
      border-right: 2px solid #fff;
      color: #fff;
    }

    .pw-strength-color {
      overflow: hidden;
      transition: all .4s linear;
      -webkit-transition: all .4s linear;
      background: #F76120;
    }

    .pw-strength-colors > span {
      overflow: hidden;
      background: #5BAB3C !important;
      transition: all .4s linear;
      -webkit-transition: all .4s linear;

    }

  }

  .code {
    justify-content: flex-start;
  }

  .code-text {
    width: 160px;
    margin-right: 10px;
  }
</style>
