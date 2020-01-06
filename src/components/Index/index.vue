<template>
  <div id="con">
    <div id="banner">
      <img src="/img/banner.png"
           alt=""
           class="banner">
      <a href="javascript:;">
        <img src="/img/Group16.png"
             alt="">
      </a>
    </div>
    <div class="it">
      <p>专属于IT人的在线学习平台</p>
      <span></span>
      <i>LEARNING PLATFORM</i>
      <ul class="it-main">
        <li :class="index == count ? 'active':''"
            v-for="(item, index) in list"
            :key="index"
            @click="count = index">
          <div>
            <img :src="item.path"
                 alt="">
            <p>{{item.p}}</p>
            <span>{{item.span[0]}}</span>
            <span>{{item.span[1]}}</span>
          </div>

        </li>
      </ul>
    </div>
    <div class="recom">
      <p>今日推荐</p>
      <span></span>
      <i>更多自主学习单项课程，满足你的灵活学习需求</i>
      <ul class="recom-card">
        <li v-for="(item, index) in recomList"
            :key="index">
          <div>
            <a href="javascript:;"><img :src="item.path"
                   alt=""></a>
            <a href="javascript:;">
              <p>{{item.content}}</p>
            </a>
            <i>{{item.price}}</i>
            <span class="iconfont icon-yonghu-xianxing">{{item.person}}人学习</span>
          </div>
        </li>
      </ul>
    </div>
    <div class="down">
      <p>热门下载</p>
      <span></span>
      <i>HOT DOWNLOAD</i>
      <ul>
        <li v-for="(item, index) in down"
            :key="index"
            :class="downIndex == index ? 'color-red':''"
            @click="downClick(index)">
          <a href="javascript:;">
            <img :src="downIndex == index ? item.pathFff : item.path"
                 alt="">
            <img :src="downIndex == index ? '/img/witdian.png' : '/img/dian_21.jpg'"
                 alt=""
                 class="dian">
            <p>{{item.name}}</p>
            <span>{{item.main}}</span>
          </a>
        </li>
      </ul>
    </div>
    <div class="imp">
      <img src="/img/zaizhi.png"
           alt="">
      <a href="javascript:;"><img src="/img/baoming.png"
             alt=""
             class="baoming"></a>
    </div>
    <div class="teach">
      <p>名师护航</p>
      <span></span>
      <i>ESCORT OF FAMOUS TEACHERS</i>
      <ul>
        <li v-for="(item, index) in teach"
            :key="index"
            :class="teachIndex == index ? 'toggle-img':''"
            @click="toggle(index)">
          <img :src="item.path"
               alt="">
        </li>
      </ul>
      <ol>
        <li v-for="(item, index) in teach"
            :key="index"
            :class="teachIndex == index ? 'active-li':''"
            @click="toggle(index)"></li>
      </ol>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      count: 1,
      list: [
        {
          path: '/img/ui.png',
          p: 'UI设计',
          span: ['UI', 'DESIGN']
        }, {
          path: '/img/web.png',
          p: '前端开发',
          span: ['FRONT-END', 'DEVELOPMENT']
        }, {
          path: '/img/java.png',
          p: 'JAVA开发',
          span: ['JAVA', 'DEVELOPMENT']
        }
      ],
      recomList: [
        {
          path: '/img/img1.png',
          content: 'WEB开发中常见安全漏洞分析与...',
          price: '¥ 239.00',
          person: 184
        }, {
          path: '/img/img2.jpg',
          content: 'MyCat+Maysql搭建电商数据库的...',
          price: '¥ 199.00',
          person: 128
        }, {
          path: '/img/img3.jpg',
          content: 'Python数据分析项目实战分析',
          price: '¥ 399.00',
          person: 69
        }, {
          path: '/img/img4.jpg',
          content: '基于Kylin搞定千亿级电信数据分析',
          price: '¥ 199.00',
          person: 195
        }, {
          path: '/img/img5.jpg',
          content: '数据分析进阶必备技能: Pandas',
          price: '¥ 199.00',
          person: 146
        }, {
          path: '/img/img6.jpg',
          content: 'GAN生成对抗网络入门到精通',
          price: '¥ 199.00',
          person: 199
        }
      ],
      down: [
        {
          path: '/img/rengong.png',
          name: '人工智能',
          main: 'ARTIFICIAL INTELLIGENCE',
          pathFff: '/img/rgzn.png'
        }, {
          path: '/img/ui-nom.png',
          name: 'UI设计',
          main: 'UI DESIGN',
          pathFff: '/img/uisheji.png'
        }, {
          path: '/img/qianduan.png',
          name: '前端开发',
          main: 'FRONT-END DEVELOPMENT',
          pathFff: '/img/qdkf.png'
        }, {
          path: '/img/meiti.png',
          name: '新媒体运营',
          main: 'NEW MEDIA OPERATIONS',
          pathFff: '/img/sjfx.png'
        }, {
          path: '/img/dianshang.png',
          name: '电商淘宝',
          main: 'ONLINE RETAILERS',
          pathFff: '/img/dstb.png'
        }, {
          path: '/img/ruanjian.png',
          name: '软件下载',
          main: 'SOFTWARE DOWNLOAD',
          pathFff: '/img/rjxaz.png'
        }
      ],
      teach: [
        {
          path: '/img/t1.png'
        }, {
          path: '/img/t2.png'
        }, {
          path: '/img/t3_25.jpg'
        }, {
          path: '/img/t4.png'
        }
      ],
      teachIndex: 2,
      downIndex: 1
    }
  },
  created () {
  },
  methods: {
    // downClick
    downClick (i) {
      this.downIndex = i
    },
    toggle (index) {
      this.teachIndex = index
    }
  }
}
</script>

<style lang="less" scoped>
.teach ul .toggle-img {
  box-shadow: 0px 5px 7px 0px rgba(62, 0, 11, 0.35);
}
.teach ol .active-li {
  width: 21px;
  height: 11px;
  background-color: #ff0000;
  border-radius: 10px;
}
.active {
  box-shadow: 0px 3px 9px 1px rgba(62, 0, 11, 0.35);
  border: solid 1px #e0e0e0;
}
#banner {
  position: relative;
  .banner {
    margin-top: -57px;
  }
  a {
    position: absolute;
    top: 376px;
    left: 468px;
  }
}
.it,
.down,
.teach,
.recom {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  > p {
    text-align: center;
    margin-top: 50px;
    margin-bottom: 9px;
    width: 356px;
    height: 31px;
    font-family: MicrosoftYaHei;
    font-size: 30px;
    font-weight: normal;
    font-stretch: normal;
    // line-height: 14px;
    letter-spacing: 0px;
    color: #333333;
  }
  > span {
    width: 60px;
    height: 2px;
    background-color: #ec212e;
  }
  > i {
    margin-top: 9px;
    font-style: normal;
    font-family: MicrosoftYaHei;
    font-size: 18px;
    font-weight: normal;
    font-stretch: normal;
    // line-height: 14px;
    letter-spacing: 1px;
    color: #666666;
  }
  .it-main {
    cursor: pointer;
    display: flex;
    justify-content: center;
    margin-top: 41px;
    > li {
      width: 400px;
      height: 380px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #ffffff;
      border: solid 1px #e0e0e0;
      > div {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        img {
          width: 144px;
          height: 112px;
        }
        p {
          margin-top: 19px;
          margin-bottom: 20px;
          text-align: center;
          font-family: MicrosoftYaHeiLight;
          font-size: 40px;
          font-weight: normal;
          font-stretch: normal;
          // line-height: 14px;
          letter-spacing: 0px;
          color: #333333;
        }
        span {
          font-family: ArialMT;
          font-size: 18px;
          font-weight: normal;
          font-stretch: normal;
          letter-spacing: 0px;
          color: #999999;
          opacity: 0.7;
        }
      }
    }
  }
}
.recom {
}
.recom-card {
  width: 1200px;
  padding-top: 29px;
  display: flex;
  flex-wrap: wrap;
  li {
    position: relative;
    margin: 0;
    padding: 0;
    width: 390px;
    height: 350px;
    background-color: #ffffff;
    border-radius: 20px;
    p {
      padding-top: 18px;
      padding-left: 10px;
      font-family: MicrosoftYaHeiUILight;
      font-size: 24px;
      font-weight: normal;
      font-stretch: normal;
      // line-height: 34px;
      letter-spacing: 0px;
      color: #333333;
    }
    i {
      padding-left: 18px;
      font-style: normal;
      font-family: ArialMT;
      font-size: 24px;
      font-weight: normal;
      font-stretch: normal;
      // line-height: 34px;
      letter-spacing: 0px;
      color: #333333;
    }
    span {
      position: absolute;
      top: 305px;
      left: 268px;
      font-family: MicrosoftYaHeiUILight;
      font-size: 18px;
      font-weight: normal;
      font-stretch: normal;
      // line-height: 34px;
      letter-spacing: 0px;
      color: #999999;
    }
  }
  li:nth-child(3n-1) {
    margin: 0 15px;
  }
  li:nth-child(n-3) {
    margin-top: 20px;
  }
}
.down {
  i {
    margin-bottom: 29px;
  }
  ul {
    width: 1200px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 49px;
    li {
      margin: 1px;
      width: 398px;
      height: 400px;
      background-color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      a {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        // background-color: red;
        .dian {
          margin-top: 28px;
          margin-bottom: 18px;
        }
        p {
          font-family: MicrosoftYaHei;
          font-size: 26px;
          font-weight: normal;
          font-stretch: normal;
          // line-height: 59px;
          letter-spacing: 0px;
          color: #333333;
        }
        span {
          margin-top: 10px;
          font-family: MicrosoftYaHeiUILight;
          font-size: 16px;
          font-weight: normal;
          font-stretch: normal;
          // line-height: 59px;
          letter-spacing: 0px;
          color: #999999;
        }
      }
    }
  }
}
.imp {
  position: relative;
  .baoming {
    position: absolute;
    top: 416px;
    left: 993px;
  }
}
.teach {
  i {
    margin-bottom: 30px;
  }
  ul {
    display: flex;
    justify-content: center;
    width: 1200px;
    margin-bottom: 19px;
    li {
      // background-color: red;
      border-radius: 10px;
      width: 290px;
      height: 400px;
      overflow: hidden;
      margin-right: 13px;
      img {
        width: 290px;
        height: 400px;
      }
    }
    li:nth-child(4) {
      margin: 0;
    }
  }
  ol {
    margin-bottom: 50px;
    display: flex;
    justify-content: center;
    li {
      width: 11px;
      height: 11px;
      background-color: #d2d2d2;
      border-radius: 50%;
      margin-right: 9px;
    }
    li:last-child {
      margin: 0;
    }
  }
}
.down .color-red {
  background-color: #da082b;
  box-shadow: -6px -2px 5px 0px rgba(62, 0, 11, 0.35);
}
</style>
