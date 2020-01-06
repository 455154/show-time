<template>
  <div>
    <!-- 直播 -->
    <div class="con">
      <!-- 背景 -->
      <div class="bgi"></div>
      <!-- 主体 -->
      <div class="route">
        <!-- 面包屑 -->
        <div class="top">
          <a href="javascript:;">公开课</a>
          <span>></span>
          <a href="javascript:;">今日推荐</a>
          <span>></span>
          <a href="javascript:;">【1月3号开课】王云飞...</a>
        </div>
        <!-- 直播内容 -->
        <div class="bottom">
          <!-- 左 -->
          <div class="bottom-l">
            <div class="teach">
              <div class="teach-tx">
                <img src="/img/touxiang.png" alt="" />
              </div>
              <div class="teach-txt">
                <p class="txt-top">
                  <span>
                    公开课
                  </span>
                  【1月3号开课】 王云飞零基础商业插画速成班
                </p>
                <p class="txt-bot">
                  讲师：王云飞 FEI
                  <span>
                    +关注&nbsp;5321已关注
                  </span>
                  开播时间：2020年01月06日 20:30-22:30
                </p>
              </div>
              <div class="teach-share">
                <div class="share-top">
                  分享：
                  <a href="jacascript:;">
                    <span class="vx"></span>
                  </a>
                  <a href="jacascript:;">
                    <span class="vb"></span>
                  </a>
                </div>
                <p><span>30090</span>人感兴趣</p>
              </div>
            </div>
            <img src="/img/bgc.png" alt="" />
            <div class="l-con">
              <p>学习SAI、AI软件基础，练习线条与基础造型</p>
              <button>报名学习</button>
            </div>
          </div>
          <!-- 右 -->
          <div class="bottom-r">
            <div class="bottom-r-top">
              <div class="bottom-r-t-time">
                <span>距离直播开始还有：</span>
                <p>倒计时</p>
              </div>
              <div class="bottom-r-t-mony">
                <span>售价：¥ <i>2999</i></span>
                <div>
                  <div class="yhq-l">
                    <p>¥1000</p>
                    <span>直播优惠卷</span>
                  </div>
                  <i></i>
                  <div class="yhq-r">
                    <p>领劵倒计时</p>
                    <span>129时48分15秒</span>
                    <a href="javascript:;">
                      <button>点我领劵</button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="bottom-r-bot">
              <div class="bottom-r-bot-nav">课程目录</div>
              <div class="bottom-r-bot-con">
                <ul>
                  <li
                    v-for="(item, index) in classList"
                    :key="index"
                    @click="activeCla(index)"
                  >
                    <a
                      href="javascript:;"
                      :class="classInx === index ? 'active' : ''"
                      >{{ item.con }}</a
                    >
                    <button v-if="classInx === index">免费试学</button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="cla">
      <div class="cla-l">
        <div class="cla-l-t">
          <a
            href="javascript:;"
            v-for="(item, index) in toggleList"
            :key="index"
            :class="toggleInx === index ? 'toggle' : ''"
            @click="toggle(index, item.path)"
            >{{ item.con }}</a
          >
        </div>
        <div class="cla-l-b">
          <router-view></router-view>
        </div>
      </div>
      <div class="cla-r">
        <p>直播讲师</p>
        <div class="cla-con">
          <img src="/img/teach-tx.png" alt="" />
          <p>
            王云飞FEI
            <span>
              故宫宫廷文化签约艺术家
            </span>
          </p>
          <button>关注</button>
          <i></i>
          <b
            >国内知名插画艺术家，中国青少年科技教育领先品牌鲨鱼公园联合创始人、设计总监，故宫宫廷文化签约艺术家，腾讯游戏独立CP。
            毕业于中央美术学院，现居北京。 导演动画《鲨鱼公园儿....</b
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      classList: [
        {
          con: '01:课程试听'
        },
        {
          con: '02：商业绘画基础启蒙'
        },
        {
          con: '03：人物的绘画训练'
        },
        {
          con: '04：创意插画的训练'
        },
        {
          con: '05：商业命题创作'
        },
        {
          con: '06：拓展训练'
        }
      ],
      classInx: 0,
      toggleList: [
        { path: '/publicClass/ClassIntroduction', con: '课程介绍' },
        { path: '/publicClass/ClassDirectory', con: '课程目录' },
        { path: '/publicClass/ClassOperation', con: '课程作业' }
      ],
      toggleInx: 0
    }
  },
  created() {},
  watch: {
    classInx(newval, old) {
      console.log(newval, old)
      console.log(typeof old)
      console.log(this.classList[newval].con.split(':').join('：'))
      this.classList[old].con = this.classList[old].con.split(':').join('：')
      this.classList[newval].con = this.classList[newval].con
        .split('：')
        .join(':')
    }
  },
  methods: {
    activeCla(i) {
      this.classInx = i
      console.log('====================================')
      console.log(i)
      console.log('====================================')
    },
    toggle(i, path) {
      this.toggleInx = i
      this.$router.push(path)
    }
  }
}
</script>

<style lang="less" scoped>
.con {
  position: relative;
  height: 700px;
}
.bgi {
  width: 1920px;
  height: 700px;
  background-color: #000000;
  background: url(/img/bgc.png) no-repeat center;
  background-size: cover;
  float: left;
  width: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  -webkit-filter: blur(15px);
  -moz-filter: blur(15px);
  -o-filter: blur(15px);
  -ms-filter: blur(15px);
  filter: blur(15px);
}
.route {
  position: absolute;
  top: 83px;
  left: 363px;
  .top {
    font-family: MicrosoftYaHeiLight;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: 0px;
    color: #dbdbdb;
    margin-bottom: 24px;
    a {
      color: #dbdbdb;
    }
    span {
      margin: 0 18px;
    }
  }
  .bottom {
    display: flex;
    justify-content: space-between;
    .bottom-l {
      width: 790px;
      height: 603px;
      background-color: #ffffff;
      border-radius: 10px;
      overflow: hidden;
      margin-right: 12px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .teach {
        width: 790px;
        height: 90px;
        background-color: #2d2d2d;
        box-sizing: border-box;
        padding: 11px 2px 13px 11px;
        display: flex;
        .teach-tx {
          border-radius: 50%;
          overflow: hidden;
          width: 62px;
          height: 62px;
          margin-right: 12px;
        }
        .teach-txt {
          color: #fefefe;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          margin-bottom: 11px;
          .txt-top {
            display: flex;
            align-items: center;
            font-family: MicrosoftYaHeiLight;
            font-size: 18px;
            font-weight: normal;
            font-stretch: normal;
            span {
              display: flex;
              justify-content: center;
              align-items: center;
              margin-right: 20px;
              width: 60px;
              height: 18px;
              background-color: #ec212e;
              border-radius: 4px;
              font-family: MicrosoftYaHeiLight;
              font-size: 14px;
              font-weight: normal;
              font-stretch: normal;
            }
          }
          .txt-bot {
            display: flex;
            align-items: center;
            font-size: 14px;
            span {
              display: flex;
              justify-content: center;
              align-items: center;
              margin: 0 8px;
              width: 143px;
              height: 18px;
              background-color: #ffd500;
              border-radius: 4px;
              font-family: MicrosoftYaHeiLight;
              font-size: 14px;
              font-weight: normal;
              font-stretch: normal;
              letter-spacing: 0px;
              color: #333333;
            }
          }
        }
        .teach-share {
          margin-left: 35px;
          .share-top {
            color: #fefefe;
            display: flex;
            align-items: center;
            span {
              display: inline-block;
              width: 23px;
              height: 23px;
              margin: 0 6px;
            }
            .vx {
              background: url(/img/fullvx.png);
            }
            .vb {
              background: url(/img/fullvb.png);
            }
          }
          p {
            font-family: MicrosoftYaHeiLight;
            font-size: 14px;
            font-weight: normal;
            font-stretch: normal;
            line-height: 47px;
            letter-spacing: 0px;
            color: #fefefe;
            span {
              font-family: MicrosoftYaHeiLight;
              font-size: 14px;
              font-weight: normal;
              letter-spacing: 0px;
              color: #ec212e;
            }
          }
        }
      }
      > img {
        flex: 1;
        object-fit: cover;
        height: 426px;
        width: 790px;
      }
      .l-con {
        width: 790px;
        height: 87px;
        background-color: #000000;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        padding-left: 21px;
        padding-right: 96px;
        display: flex;
        justify-content: space-between;
        p {
          margin-bottom: 11px;
          font-family: MicrosoftYaHeiLight;
          font-size: 18px;
          font-weight: normal;
          font-stretch: normal;
          line-height: 24px;
          letter-spacing: 0px;
          color: #ffffff;
        }
        button {
          line-height: 43px;
          border: none;
          outline: none;
          cursor: pointer;
          text-align: center;
          margin-bottom: 6px;
          width: 185px;
          height: 43px;
          background-color: #ec212e;
          border-radius: 22px;
          font-family: MicrosoftYaHeiLight;
          font-size: 18px;
          font-weight: normal;
          font-stretch: normal;
          letter-spacing: 0px;
          color: #ffffff;
        }
      }
    }
    .bottom-r {
      .bottom-r-top {
        width: 398px;
        height: 237px;
        background-color: #2d2d2d;
        border-radius: 10px;
        box-sizing: border-box;
        padding: 11px 9px 22px 9px;
        .bottom-r-t-time {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 44px;
          padding: 0 50px 16px 18px;
          border-bottom: 1px solid rgba(2552, 255, 255, 0.2);
          span {
            font-family: MicrosoftYaHeiLight;
            font-size: 14px;
            font-weight: normal;
            font-stretch: normal;
            letter-spacing: 0px;
            color: #999999;
          }
          p {
            font-family: MicrosoftYaHeiLight;
            font-size: 24px;
            font-weight: normal;
            letter-spacing: 8px;
            color: #ffffff;
          }
        }
        .bottom-r-t-mony {
          padding: 21px 0 22px 20px;
          span {
            font-family: MicrosoftYaHeiLight;
            font-size: 18px;
            font-weight: normal;
            font-stretch: normal;
            line-height: 24px;
            letter-spacing: 0px;
            color: #ffffff;
            i {
              font-family: MicrosoftYaHeiLight;
              font-size: 30px;
              font-weight: normal;
              letter-spacing: 0px;
              color: #ffffff;
              font-style: normal;
            }
          }
          > div {
            margin-top: 16px;
            width: 301px;
            height: 80px;
            background-image: linear-gradient(86deg, #ff8b00 0%, #ffc47c 100%);
            border-left: 3px dashed #2d2d2d;
            border-right: 3px dashed #2d2d2d;
            box-sizing: border-box;
            display: flex;
            .yhq-l {
              width: 134px;
              padding: 14px 22px 15px 30px;
              display: flex;
              justify-content: space-between;
              flex-direction: column;
              box-sizing: border-box;
              p {
                font-family: ArialMT;
                font-size: 30px;
                font-weight: normal;
                font-stretch: normal;
                letter-spacing: 0px;
                color: #ffffff;
              }
              span {
                font-family: MicrosoftYaHeiLight;
                font-size: 14px;
                font-weight: normal;
                letter-spacing: 0px;
                color: #ffffff;
              }
            }
            > i {
              width: 1px;
              height: 56px;
              border-right: dashed 2px #ffffff;
              opacity: 0.6;
              margin-top: 13px;
              margin-right: 39px;
            }
            .yhq-r {
              margin-top: 9px;
              p {
                font-family: MicrosoftYaHeiLight;
                font-size: 12px;
                font-weight: normal;
                font-stretch: normal;
                letter-spacing: 0px;
                color: #ffffff;
              }
              span {
                font-family: MicrosoftYaHeiLight;
                font-size: 14px;
                font-weight: normal;
                letter-spacing: 0px;
                color: #ffffff;
              }
              button {
                width: 91px;
                height: 24px;
                background-color: #ffffff;
                border-radius: 12px;
                outline: none;
                border: none;
                font-family: MicrosoftYaHeiLight;
                font-size: 14px;
                font-weight: normal;
                font-stretch: normal;
                line-height: 20px;
                letter-spacing: 0px;
                color: #ff7e2a;
              }
            }
          }
        }
      }
      .bottom-r-bot {
        border-radius: 10px;
        overflow: hidden;
        margin-top: 12px;
        box-sizing: border-box;
        .bottom-r-bot-nav {
          padding-left: 30px;
          box-sizing: border-box;
          display: flex;
          align-items: center;
          width: 398px;
          height: 51px;
          background-color: #333333;
          font-family: MicrosoftYaHeiLight;
          font-size: 18px;
          font-weight: normal;
          font-stretch: normal;
          letter-spacing: 0px;
          color: #ffffff;
        }
        .bottom-r-bot-con {
          width: 398px;
          height: 302px;
          background-color: #2d2d2d;
          ul {
            // background-color: skyblue;
            li {
              padding-top: 25px;
              padding-left: 30px;
              padding-right: 24px;
              height: 19px;
              font-family: MicrosoftYaHeiLight;
              font-size: 18px;
              font-weight: normal;
              font-stretch: normal;
              letter-spacing: 0px;
              display: flex;
              justify-content: space-between;
              a {
                color: #999999;
              }
              .active {
                color: #ffffff;
              }
              button {
                text-align: center;
                border: none;
                outline: none;
                width: 95px;
                height: 26px;
                background-color: #ff3222;
                border-radius: 13px;
                font-family: MicrosoftYaHeiLight;
                font-size: 16px;
                font-weight: normal;
                font-stretch: normal;
                letter-spacing: 0px;
                color: #ffffff;
              }
            }
          }
        }
      }
    }
  }
}
.cla {
  margin: 0 auto;
  width: 1200px;
  // height: 500px;
  // background-color: skyblue;
  margin-top: 84px;
  display: flex;
  justify-content: space-between;
  .cla-l {
    width: 789px;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
    .cla-l-t {
      display: flex;
      align-items: center;
      text-align: center;
      height: 74px;
      width: 100%;
      background-color: #fff;
      border-bottom: 1px solid rgba(153, 153, 153, 0.3);
      a {
        position: relative;
        z-index: 2;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 164px;
        height: 74px;
        font-family: MicrosoftYaHeiLight;
        font-size: 24px;
        font-weight: normal;
        font-stretch: normal;
        letter-spacing: 0px;
        color: #333333;
        box-sizing: border-box;
        border-bottom: 2px solid rgba(236, 33, 46, 0);
      }
      .toggle {
        border-bottom: 2px solid rgba(236, 33, 46, 0.2);
      }
    }
    .cla-l-b{
      background-color: #fff;
    }
  }
  .cla-r {
    width: 398px;
    height: 581px;
    position: relative;
    background-color: rgba(255, 255, 255, 1);
    border-radius: 4px;
    margin-left: 13px;
    display: flex;
    justify-content: center;
    align-items: center;
    .cla-con {
      height: 397px;
      margin: 66px 65px;
      margin-top: 118px;
      display: flex;
      flex-direction: column;
      align-items: center;
      img {
        height: 62px;
        border-radius: 50%;
      }
      p {
        margin-top: 23px;
        height: 73px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 27px;
        font-family: MicrosoftYaHeiLight;
        font-size: 18px;
        font-weight: normal;
        font-stretch: normal;
        letter-spacing: 0px;
        color: rgba(102, 102, 102, 1);
      }
      button {
        width: 113px;
        height: 41px;
        background-color: rgba(236, 33, 46, 1);
        border: none;
        border-radius: 10px;
        outline: none;
        font-family: MicrosoftYaHeiLight;
        font-size: 18px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 32px;
        letter-spacing: 0px;
        color: rgba(255, 255, 255, 1);
        cursor: pointer;
        margin-bottom: 19px;
      }
      i {
        width: 100%;
        height: 1px;
        border-bottom: 1px solid rgba(238, 238, 238, 1);
        margin-bottom: 62px;
      }
      b {
        font-family: MicrosoftYaHeiLight;
        font-size: 16px;
        font-weight: normal;
        font-stretch: normal;
        letter-spacing: 0px;
        color: rgba(153, 153, 153, 1);
      }
    }
    > p {
      position: absolute;
      top: 29px;
      left: 25px;
      font-family: MicrosoftYaHeiLight;
      font-size: 24px;
      font-weight: normal;
      font-stretch: normal;
      letter-spacing: 0px;
      color: rgba(51, 51, 51, 1);
    }
  }
}
</style>
