<template>
  <div>
    <div class="web-login">
      <div class="logo">
        <img src="../../assets/logo.19ca0be.png" alt />
      </div>
      <div class="login-form">
        <div>
          <form>
            <div class="form-group">
              <input
                type="tel"
                maxlength="13"
                placeholder="手机号"
                class="input-control"
                v-model="text"
                @input="handelChange($event)"
              />
              <div style="display:none" ref="icon">
                <div class="clear-mobile-btn" @click="handelClick()">
                  <i
                    class="iconfont iconguanbi"
                    style="position: absolute; right: .90rem; line-height: .40rem; font-size: .12rem; color: rgb(189, 192, 197);"
                  ></i>
                </div>
              </div>
              <div
                @click="add()"
                class="getSmsCode sms-code disable"
                style="position: absolute; right: 0px; top: .13rem;"
              >获取验证码</div>
            </div>
            <div class="errorTip" style="display: block;" ref="err"></div>
            <!---->
            <div class="errorTip" style="display: block;"></div>
            <div class="form-group">
              <input placeholder="验证码" class="input-control" v-model="password" />
            </div>
            <!---->
            <!---->
            <div class="submit login-btn">
              <span @click="login()">登录</span>
            </div>
          </form>
          <!---->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const Mock = require("mockjs");
import axios from "axios";
export default {
  name: "login",
  cretated() {},
  data() {
    return {
      text: "",
      password: "",
      arr: []
    };
  },
  methods: {
    add() {
      let obj = {};
      obj.username = this.text;
      obj.password = this.password;
      console.log(obj);
      console.log(this.arr[0]);
      for (var i = 0; i < this.arr.length; i++) {
        if (this.arr[i].indexOf(obj) != -1) {
            alert(1);
            break;
        } else {
           this.arr.push(obj);
        }
      }
    },
    login() {
      console.log(this.arr);
    },
    handelChange(e) {
      if (e.target.value != "") {
        this.$refs.icon.style.display = "block";
      } else {
        this.$refs.icon.style.display = "none";
        this.$refs.err.style.display = "none";
      }
      // console.log(e.target.value)
    },
    handelClick() {
      this.text = "";
      this.$refs.icon.style.display = "none";
      // this.$refs.err.style.display = 'none';
      console.log(this.text);
    }
    // handelBtn() {
    //   var reg = /^(1|\+861)[3-8]{1}\d{9}$/;
    //   if (!reg.test(this.text)) {
    //     this.$refs.err.innerHTML = "请输入正确的手机号码";
    //   }
    // }
  }
};
</script>



<style scope>
body,
html,
#app {
  overflow: hidden;
  background: #fff;
}

.web-login .logo {
  margin: 0.79rem auto 0.4rem;
  text-align: center;
  height: 0.6rem;
  line-height: 0.6rem;
}
.web-login .logo > img {
  width: 0.6rem;
  height: 0.6rem;
}
.web-login .login-form .form-group {
  line-height: 55px;
  margin: 0 25px;
  position: relative;
}
.web-login .login-form .input-control {
  height: 15px;
  line-height: 15px;
  padding: 20px 0;
  width: 100%;
  font-size: 15px;
  color: #191a1b;
  border: 0;
  outline-width: 0;
}
div {
  box-sizing: border-box;
}
.web-login .login-form .clear-mobile-btn,
.web-login .login-form .eye {
  font-size: 13px;
  position: absolute;
  top: 8px;
  right: 0;
  display: inline-block;
}
.web-login .login-form .form-group {
  line-height: 55px;
  margin: 0 25px;
  position: relative;
}
.sms-code {
  line-height: 30px;
  width: 90px;
  text-align: right;
  float: right;
  font-size: 13px;
  border-radius: 3px;
  cursor: pointer;
}
.web-login .login-form .submit {
  line-height: 45px;
  font-size: 16px;
  margin: 70px 25px 0;
  border-radius: 3px;
  text-align: center;
  background-color: #ff5f16;
  height: 44px;
  color: #fff;
  border: none;
}
.web-login .login-form .login-btn {
  margin-top: 70px;
}
.web-login .login-form .clear-mobile-btn .iconfont {
  position: absolute;
  right: 90px;
  line-height: 40px;
  font-size: 23px;
  color: rgb(189, 192, 197);
}
.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.web-login .login-form .errorTip {
  text-align: left;
  color: #ff5f16;
  width: 100%;
  line-height: 11px;
  margin-left: 25px;
  font-size: 11px;
  margin-top: 7px;
}
</style>