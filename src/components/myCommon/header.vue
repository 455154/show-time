<template>
  <div>
    <div class="w">
      <!-- content -->
      <div class="content">
        <!-- logo -->
        <div class="logo">
          <h1 title="智慧讲堂">
            <a href="javascript:;">
              智慧讲堂
            </a>
          </h1>
        </div>
        <!-- search  -->
        <div class="search">
          <input type="text"
                 placeholder="请搜索课程、用户、帖子...">
          <!-- todo icon -->
          <a href="javascript:;">
            <i class="iconfont icon-sousuo"></i>
          </a>
          <div class="hot">
            <span>热门搜索：</span>
            <ul>
              <li><a href="javascript:;">UI设计</a></li>
              <li><a href="javascript:;">Java</a></li>
              <li><a href="javascript:;">课程</a></li>
            </ul>
          </div>
        </div>
        <div class="login"><a href="/#/login">登录</a></div>
        <div class="regis"><a href="javascript:;">免费注册</a></div>
      </div>
    </div>
    <!-- title  -->
    <div class="title">
      <ul class="list">
        <li v-for="(item, index) in list"
            :key="index"><a @click="setActive(index)"
             href="javascript:;">{{item}}</a>
          <div :class="isactive==index?'active':''"></div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isactive: 0,
      list: ['首页', '全部课程', '公开课', '升职加薪', '就业指导', '资讯'],
      path: ['index', 'fullCourse', 'publicClass', 'getPromoted', 'gareerGuidance', 'information']
    }
  },
  created () {

  },
  methods: {
    setActive (index) {
      this.isactive = index
      this.$router.push(this.path[this.isactive])
    }
  }
}
</script>

<style lang="less" scoped>
.w {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  width: 1200px;
  margin: 0 auto;
  height: 100px;
  .content {
    width: 100%;
    height: 63px;
    display: flex;
    .logo {
      width: 231px;
      height: 69px;
      margin-right: 70px;
    }
    .search {
      display: flex;
      position: relative;
      width: 699px;
      height: 40px;
      margin-top: 18px;
      margin-bottom: 11px;
      a {
        color: #999999;
        i {
          position: absolute;
          top: 7px;
          left: 358px;
          text-decoration: none;
          font-size: 24px;
          float: left;
        }
      }
      input {
        padding-left: 21px;
        border-radius: 20px;
        border: solid 1px #bfbfbf;
        margin-right: 22px;
        width: 450px;
        height: 40px;
        font-family: MicrosoftYaHeiLight;
        font-size: 16px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 35px;
        letter-spacing: 0px;
        color: #999999;
        outline: none;
      }
      .hot {
        display: flex;
        justify-content: space-between;
        flex-wrap: nowrap;
        width: 249px;
        margin-right: 65px;
        span {
          flex: 45%;
        }
        a,
        span {
          // li文字样式
          text-decoration: none;
          height: 16px;
          font-family: MicrosoftYaHeiLight;
          font-size: 16px;
          font-weight: normal;
          font-stretch: normal;
          line-height: 35px;
          letter-spacing: 0px;
          color: #999999;
        }
        ul {
          flex: 65%;
          display: flex;
          flex-wrap: nowrap;
          width: 100%;
          justify-content: space-between;
          li {
            list-style: none;
          }
        }
      }
    }
    .login {
      margin-top: 18px;
      margin-bottom: 11px;
      width: 37px;
      height: 17px;
      a {
        font-family: MicrosoftYaHeiLight;
        font-size: 18px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 35px;
        letter-spacing: 0px;
        color: #333333;
        text-decoration: none;
      }
      margin-right: 27px;
    }
    .regis {
      margin-top: 18px;
      margin-bottom: 11px;
      width: 73px;
      height: 18px;
      a {
        font-family: MicrosoftYaHeiLight;
        font-size: 18px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 35px;
        letter-spacing: 0px;
        color: #ec212e;
        text-decoration: none;
      }
    }
  }
}
h1 {
  background-image: url(/img/logo.png);
  height: 100%;
  width: 100%;
  cursor: pointer;
  a {
    height: 100%;
    width: 100%;
    text-indent: -9999px;
    font-size: 0;
    overflow: hidden;
  }
}
.active {
  border-bottom: 2px solid #fff;
}
.title {
  float: left;
  width: 100%;
  display: flex;
  position: relative;
  z-index: 2;
  justify-content: center;
  .list {
    box-sizing: border-box;
    display: flex;
    width: 1200px;
    padding-left: 30px;
    padding-top: 10px;
    li {
      margin-right: 80px;
      list-style: none;
      a {
        font-family: MicrosoftYaHeiLight;
        font-size: 28px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 35px;
        letter-spacing: 0px;
        color: #fff;
      }
      div {
        width: 50%;
        margin: 0 auto;
        margin-top: 10px;
      }
    }
  }
}
</style>
