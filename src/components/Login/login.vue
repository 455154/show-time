<template>
  <div id="loginbgi">
    <h1 class="logo">
      <a href="javascript:;">
        智慧讲堂
      </a>
    </h1>
    <div class="loginbox">
      <div>
        <form action="" class="form">
          <div class="tab">
            <p
              :class="index == ind ? 'tabactive' : ''"
              @click="toggle(index)"
              v-for="(item, index) in list"
              :key="index"
            >
              {{ item }}
            </p>
          </div>
          <div v-if="ind == 0" class="con">
            <div
              v-for="(item, index) in inputList"
              :key="index"
              @click="indinput = index"
              :class="indinput == index ? 'acinput' : ''"
            >
              <i :class="[item.icon, indinput == index ? 'aci' : '']"></i>
              <input :type="item.type" :placeholder="item.pal" />
            </div>
            <button
              @click="yzm"
              :class="isdis === true ? 'btn' : ''"
              :disabled="isdis"
            >
              {{ btnval }}
            </button>
          </div>
          <div v-if="ind == 0" class="check">
            <input type="checkbox" class="checkbox" />
            <span>{{ span }}</span>
          </div>
          <div v-if="ind == 1">
            <ul class="other">
              <li v-for="(item, index) in imgList" :key="index">
                <img :src="item" alt="" />
              </li>
            </ul>
            <div class="loginkuaisu">
              <i></i>
              <span>快速登录</span>
              <i></i>
            </div>
          </div>
          <button>立即登录</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: ['手机登录', '其他方式登录'],
      ind: 0,
      inputList: [
        {
          type: 'text',
          icon: 'iconfont icon-yonghu-xianxing',
          pal: '请输入正确的11位手机号码'
        },
        {
          type: 'password',
          icon: 'iconfont icon-icon_anquan',
          pal: '请设置6～18位密码'
        },
        {
          type: 'text',
          icon: 'iconfont icon-zfmm',
          pal: '请输入验证码'
        }
      ],
      indinput: -1,
      isdis: false,
      btnval: '获取验证码',
      num: 10,
      timeID: '',
      timeOId: '',
      span: '登录即表示您同意并遵守 <用户协议>',
      imgList: ['/img/wx.png', '/img/qqq.png', '/img/wb.png']
    }
  },
  created() {
    console.log('====================================')
    console.log(this.$route.path)
    console.log('====================================')
  },
  methods: {
    toggle(i) {
      this.ind = i
    },
    async yzm() {
      this.isdis = true
      new Promise((resolve, reject) => {
        this.timeOId = setTimeout(() => {
          this.btnval = this.num
          console.log(1)
          this.timeId = setInterval(() => {
            this.num--
            this.btnval = this.num
            if (this.num === 1) {
              clearInterval(this.timeId)
              clearTimeout(this.timeOId)
              this.num = 10
              this.isdis = false
              this.btnval = '获取验证码'
              return resolve
            }
            console.log(this.num)
          }, 1000)
        }, 0)
      }).then(() => {})
    }
  }
}
</script>

<style lang="less" scoped>
#loginbgi {
  position: absolute;
  height: 1080px;
  width: 1920px;
  background-image: url(/img/loginbgi.jpg);
  h1 {
    position: relative;
    left: 57px;
    top: 50px;
    background: url(/img/logo.png) no-repeat;
    width: 242px;
    height: 69px;
    cursor: pointer;
    a {
      height: 100%;
      width: 100%;
      text-indent: -9999px;
      font-size: 0;
      overflow: hidden;
    }
  }
  .loginbox {
    position: absolute;
    top: 251px;
    left: 1110px;
    width: 569px;
    height: 642px;
    background-color: #ffffff;
    box-shadow: 0px 0px 27px 0px rgba(0, 0, 0, 0.11);
    border-radius: 22px;
    padding: 95px 54px 0 48px;
    box-sizing: border-box;
  }
}
.form {
  .tab {
    height: 53px;
    display: flex;
    text-align: center;
    p {
      flex: 50%;
      font-family: MicrosoftYaHeiLight;
      font-size: 30px;
      font-weight: normal;
      font-stretch: normal;
      letter-spacing: 0px;
      color: #333333;
      border-bottom: 2px solid #dfdfdf;
    }
    .tabactive {
      border-bottom: 2px solid #da082b;
      color: #da082b;
    }
  }
  .con {
    position: relative;
    div {
      height: 100px;
      display: flex;
      align-items: flex-end;
      padding-bottom: 7px;
      box-sizing: border-box;
      border-bottom: 2px solid #dfdfdf;
      i {
        margin-left: 30px;
        margin-right: 27px;
        height: 36px;
        width: 36px;
        font-size: 30px;
      }
      input {
        height: 36px;
        border: none;
        outline: none;
        width: 234px;
        font-family: MicrosoftYaHeiLight;
        font-size: 20px;
        font-weight: normal;
        font-stretch: normal;
        letter-spacing: 0px;
        color: #aaaaaa;
      }
    }
    .acinput {
      border-bottom: 2px solid #da082b;
    }
    .aci {
      color: #f41b40;
    }
    button {
      position: absolute;
      bottom: 11px;
      right: 0;
      width: 118px;
      height: 45px;
      background-color: #ff3e5e;
      border-radius: 2px;
      border: none;
      outline: none;
      font-family: SourceHanSansCN-Regular;
      font-size: 18px;
      font-weight: normal;
      font-stretch: normal;
      letter-spacing: 0px;
      color: #ffffff;
    }
    button.btn {
      background-color: #ccc !important;
    }
  }
  .check {
    margin-left: 9px;
    margin-top: 16px;
    .checkbox {
      outline: none;
      cursor: pointer;
      border-radius: 2px;
      font-size: 14px;
      width: 18px;
      height: 18px;
      position: relative;
    }
    .checkbox:after {
      position: absolute;
      width: 18px;
      height: 18px;
      top: 0;
      content: ' ';
      color: #fff;
      display: inline-block;
      visibility: visible;
      padding: 1px 2px;
      border-radius: 3px;
      background: #ffffff;
      border: 1px solid #dddddd;
    }
    .checkbox:checked:after {
      content: '✓';
      font-size: 12px;
      font-weight: 600;
      background-color: #36aeff;
    }
    span {
      margin-left: 10px;
      font-family: MicrosoftYaHeiLight;
      font-size: 14px;
      font-weight: normal;
      font-stretch: normal;
      line-height: 36px;
      letter-spacing: 0px;
      color: #b1b1b1;
    }
  }
  > button {
    outline: none;
    position: absolute;
    bottom: 44px;
    width: 472px;
    height: 62px;
    background-image: linear-gradient(90deg, #da082b 0%, #e82343 100%);
    box-shadow: 0px 0px 16px 0px rgba(102, 0, 17, 0.34);
    border-radius: 15px;
    font-family: MicrosoftYaHeiLight;
    font-size: 20px;
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: 0px;
    color: #ffffff;
  }
  .other {
    height: 260px;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .loginkuaisu {
    display: flex;
    align-items: center;
    i {
      width: 180px;
      height: 1px;
      border-top: dashed 2px #eeeeee;
      opacity: 0.6;
      margin: 5px;
    }
    span {
      font-family: MicrosoftYaHeiLight;
      font-size: 20px;
      font-weight: normal;
      font-stretch: normal;
      letter-spacing: 0px;
      color: #cccccc;
    }
  }
}
</style>
