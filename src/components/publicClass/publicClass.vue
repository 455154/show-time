<template>
  <div id="main">
    <!--bannner-->
    <div id="banner">
      <img src="/img/banner.png" alt="" class="banner" />
      <a href="javascript:;">
        <img src="/img/Group16.png" alt="" />
      </a>
    </div>
    <div class="w">
      <!--tody recommend-->
      <div class="todyRecommend">
        <div class="top">
          <div class="hotpic"></div>
          <h3><a href="javascript:;" class="todyA">今日推荐</a></h3>
          <a href="javascript:;" class="todymore">更多 ></a>
        </div>
        <div
          class="todyClass"
          v-for="(item, index) in todyClassList"
          :key="index"
        >
          <a href="javascript:;">
            <img class="todyClassImg" :src="item.path" alt="" />
            <div class="todyClassname">{{ item.h3 }}</div>
            <p>{{ item.p }}</p>
            <div class="todyPrice">有券立减￥{{ item.price }}</div>
            <div class="todydate">{{ item.date }}</div>
            <img class="todyTeacherHead" :src="item.teacherHead" alt="" />
            <span>{{ item.teacherName }}</span>
            <div class="todyViews">{{ item.views }} 人感兴趣</div>
          </a>
        </div>
      </div>
      <!--VIP Class-->
      <div class="vipClass">
        <div class="top">
          <h3><a href="javascript:;" class="todyA">VIP课程</a></h3>
          <a href="javascript:;" class="todymore">更多 ></a>
        </div>
        <div
          class="vipclass"
          v-for="(item, index) in vipClassList"
          :key="index"
        >
          <a href="javascript:;">
            <img :src="item.path" alt="" />
            <span class="viptext">VIP</span>
            <span class="vipclassName">{{ item.vipclassName }}</span>
            <p>主持人: {{ item.teacherName }}</p>
          </a>
        </div>
      </div>
      <!--All Class-->
      <div class="AllClass">
        <div class="top">
          <div class="topleft">
            <a
              href="javascript:;"
              v-for="(item, index) in AllTopLeft"
              :key="index"
              :class="isActive === index ? 'activeClass' : ''"
              @click="toggleActive(index)"
              >{{ item }}</a
            >
          </div>
          <a href="javascript:;" class="todymore">更多 ></a>
        </div>
        <!--课程区域-->
        <!--所有课程区域-->
        <div
          class="allclass"
          :style="isActive === 0 ? 'display: block' : 'display: none'"
        >
          1
        </div>
        <!--即将开始课程区域-->
        <div
          class="classItem"
          :style="isActive === 1 ? 'display: block' : 'display: none'"
          v-show="isActive === 1 ? 'true' : 'false'"
          v-for="(item, index) in upComingClassList"
          :key="index"
        >
          <a href="javascript:;">
            <img class="classItemImg" :src="item.path" alt="" />
            <h3 class="className">{{ item.upComingClassName }}</h3>
            <p class="classDate">{{ item.upComingClassDate }}</p>
            <div class="classAname">{{ item.upComingClassBtn }}</div>
            <p class="classPrice">
              {{ isFree + item.upComingClassPrice }}
            </p>
            <img
              class="classTeacherHead"
              :src="item.upComingClassTeacherName"
              alt=""
            />
            <span class="classTeacherName">{{
              item.upComingClassTeacherHead
            }}</span>
            <p class="classViews">{{ item.upComingClassViews }}</p>
            <span class="favorite">人感兴趣</span>
          </a>
        </div>
        <!--直播中课程区域-->
        <div
          class="liveingclass"
          :style="isActive === 2 ? 'display: block' : 'display: none'"
        >
          3
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isActive: 1,
      isFree: '￥',
      todyClassList: [
        {
          path: '/img/publicClass-images/todyClass01.jpg',
          h3: '【12月28日开课】 王云飞零基础...',
          p: ' 开播时间: 2020年1月3日 20: 30 ',
          price: 2999,
          date: '2天20时43分29秒',
          teacherHead: '/img/publicClass-images/todyClassTeacher01.jpg',
          teacherName: '王云飞FEE',
          views: 11258
        },
        {
          path: '/img/publicClass-images/todyClass02.jpg',
          h3: '【27号开班】 UI全能实训班3期',
          p: ' 开播时间: 2020年1月2日 20: 30 ',
          price: 3280,
          date: '0天19时43分29秒',
          teacherHead: '/img/publicClass-images/todyClassTeacher02.jpg',
          teacherName: 'EthankDesing',
          views: 18698
        },
        {
          path: '/img/publicClass-images/todyClass03.jpg',
          h3: '【1月3日开课】 C4D零基础速成...',
          p: ' 开播时间: 2020年1月4日 20: 00 ',
          price: 1480,
          date: '3天19时43分29秒',
          teacherHead: '/img/publicClass-images/todyClassTeacher03.jpg',
          teacherName: '腾小渔',
          views: 21699
        },
        {
          path: '/img/publicClass-images/todyClass04.jpg',
          h3: '【1月7日开课】 快速掌握LOGO...',
          p: ' 开播时间: 2020年1月7日 20: 30 ',
          price: 1499,
          date: '09时43分29秒',
          teacherHead: '/img/publicClass-images/todyClassTeacher04.jpg',
          teacherName: '小强老师',
          views: 5151
        },
        {
          path: '/img/publicClass-images/todyClass05.jpg',
          h3: '【1月7日开课】 零基础AR/AE视...',
          p: ' 开播时间: 2020年1月7日 20: 30 ',
          price: 899,
          date: '09时43分29秒',
          teacherHead: '/img/publicClass-images/todyClassTeacher05.jpg',
          teacherName: '王威',
          views: 12056
        },
        {
          path: '/img/publicClass-images/todyClass06.jpg',
          h3: '【早鸟特惠】 商业人像精修班2期',
          p: ' 开播时间: 2020年1月12日 20: 00 ',
          price: 2599,
          date: '5天19时43分29秒',
          teacherHead: '/img/publicClass-images/todyClassTeacher06.jpg',
          teacherName: '红雷',
          views: 335
        }
      ],
      vipClassList: [
        {
          path: '/img/publicClass-images/vipClass01.jpg',
          vipclassName: 'UI设计基础班(直播+录...',
          teacherName: '王一帆'
        },
        {
          path: '/img/publicClass-images/vipClass02.jpg',
          vipclassName: '综合软件班(直播+录播)',
          teacherName: '孙峰'
        },
        {
          path: '/img/publicClass-images/vipClass03.jpg',
          vipclassName: 'UI运营插画班(直播+录...',
          teacherName: '黄根平'
        },
        {
          path: '/img/publicClass-images/vipClass04.jpg',
          vipclassName: 'UI动效设计系统班(直播...',
          teacherName: '黄根平'
        },
        {
          path: '/img/publicClass-images/vipClass05.jpg',
          vipclassName: '影视特效合成高级班(直...',
          teacherName: '段睿'
        },
        {
          path: '/img/publicClass-images/vipClass06.jpg',
          vipclassName: 'VI品牌设计班(直播+录...',
          teacherName: '黄安悦'
        }
      ],
      AllTopLeft: ['全部', '即将开始', '直播中'],
      // 即将开始课程列表数据
      upComingClassList: [
        {
          path: '/img/publicClass-images/upComingClass01.jpg',
          upComingClassName: '已开班 零基础创意场景合成',
          upComingClassDate: '开播时间: 2020年1月2日 20:30',
          upComingClassBtn: '合成必修课',
          upComingClassPrice: 2499,
          upComingClassTeacherName:
            '/img/publicClass-images/upComingClassTeacher01.jpg',
          upComingClassTeacherHead: '设计狗',
          upComingClassViews: 19761
        },
        {
          path: '/img/publicClass-images/upComingClass02.jpg',
          upComingClassName: '已开班 平面设计全科班2期',
          upComingClassDate: '开播时间: 2020年1月3日 20:30',
          upComingClassBtn: '平面设计必学课程',
          upComingClassPrice: 2800,
          upComingClassTeacherName:
            '/img/publicClass-images/upComingClassTeacher02.jpg',
          upComingClassTeacherHead: '肆拾大道',
          upComingClassViews: 37233
        },
        {
          path: '/img/publicClass-images/upComingClass03.jpg',
          upComingClassName: '【12月28日开课】王飞零基础商...',
          upComingClassDate: '开播时间: 2020年1月3日 20:30',
          upComingClassBtn: '设计变现',
          upComingClassPrice: 2590,
          upComingClassTeacherName:
            '/img/publicClass-images/upComingClassTeacher03.jpg',
          upComingClassTeacherHead: '万鱼鱼',
          upComingClassViews: 35680
        },
        {
          path: '/img/publicClass-images/upComingClass04.jpg',
          upComingClassName: '已开班 零基础商业插画特惠班',
          upComingClassDate: '开播时间: 2020年1月6日 20:30',
          upComingClassBtn: '零基础到商业接单',
          upComingClassPrice: 2899,
          upComingClassTeacherName:
            '/img/publicClass-images/upComingClassTeacher04.jpg',
          upComingClassTeacherHead: '阿角',
          upComingClassViews: 99181
        },
        {
          path: '/img/publicClass-images/upComingClass05.jpg',
          upComingClassName: '90分钟掌握UI配色秘籍',
          upComingClassDate: '开播时间: 2020年1月7日 14:30',
          upComingClassBtn: '小白成长课堂',
          upComingClassPrice: '免费',
          upComingClassTeacherName:
            '/img/publicClass-images/upComingClassTeacher05.jpg',
          upComingClassTeacherHead: '酸梅干超人',
          upComingClassViews: 13281
        },
        {
          path: '/img/publicClass-images/upComingClass06.jpg',
          upComingClassName: '【12月28日开课】王飞零基础商...',
          upComingClassDate: '开播时间: 2020年1月10日 14:30',
          upComingClassBtn: '新手插画',
          upComingClassPrice: '免费',
          upComingClassTeacherName:
            '/img/publicClass-images/upComingClassTeacher06.jpg',
          upComingClassTeacherHead: '阿角',
          upComingClassViews: 15650
        }
      ]
    }
  },
  components: {},
  methods: {
    toggleActive (i) {
      this.isActive = i
    }
  }
}
</script>

<style scoped lang="less">
* {
  margin: 0px;
  padding: 0px;
}
#main {
  background-color: #f3f3f3;
}
#banner {
  position: relative;
  .banner {
    margin-top: -57px;
  }
  a {
    display: block;
    position: absolute;
    top: 376px;
    left: 468px;
  }
}
.w {
  width: 1200px;
  margin: 0 auto;
}
.activeClass {
  color: red !important;
}
.todyRecommend {
  display: flex;
  flex-wrap: wrap;
  justify-content: row;
  justify-content: space-between;
  width: 100%;
  > .top {
    position: relative;
    display: flex;
    justify-content: space-between;
    height: 70px;
    width: 100%;
    a {
      color: #333;
    }
    .todyA {
      margin-left: 30px;
      width: 108px;
      height: 29px;
      font-family: MicrosoftYaHei;
      font-size: 30px;
      font-weight: normal;
      font-stretch: normal;
      line-height: 24px;
      letter-spacing: 0px;
      color: #333333;
    }
    .todymore {
      height: 19px;
      font-family: MicrosoftYaHeiLight;
      font-size: 18px;
      font-weight: normal;
      font-stretch: normal;
      line-height: 59px;
      letter-spacing: 0px;
      color: #666666;
    }
    .hotpic {
      position: absolute;
      width: 25px;
      height: 24px;
      background-image: url('../../../public/img/publicClass-images/hot.jpg');
    }
  }
  > .todyClass {
    position: relative;
    width: 380px;
    height: 506px;
    border-radius: 10px;
    background-color: #fff;
    margin-bottom: 30px;
    .todyClassImg {
      width: 380px;
      height: 226px;
    }
    .todyClassname {
      width: 100%;
      height: 25px;
      margin-bottom: 10px;
      font-family: MicrosoftYaHeiUILight;
      font-size: 20px;
      text-align: center;
      font-weight: normal;
      font-stretch: normal;
      line-height: 34px;
      letter-spacing: 0px;
      color: #333333;
    }
    p {
      width: 100%;
      height: 20px;
      margin-bottom: 10px;
      font-family: MicrosoftYaHeiUILight;
      font-size: 20px;
      text-align: center;
      font-weight: normal;
      font-stretch: normal;
      line-height: 34px;
      letter-spacing: 0px;
      color: #999999;
    }
    .todyPrice {
      margin-left: 16.5px;
      text-align: center;
      width: 347px;
      height: 40px;
      line-height: 40px;
    }
    .todydate {
      height: 22px;
      font-family: MicrosoftYaHeiUILight;
      font-size: 22px;
      text-align: right;
      font-weight: normal;
      font-stretch: normal;
      line-height: 34px;
      letter-spacing: 0px;
      color: #ff3000;
    }
    .todyTeacherHead {
      position: absolute;
      width: 40px;
      height: 40px;
      left: 19px;
      bottom: 48px;
    }
    span {
      position: absolute;
      left: 80px;
      bottom: 70px;
      height: 18px;
      vertical-align: middle;
      font-family: MicrosoftYaHeiUILight;
      font-size: 20px;
      font-weight: normal;
      font-stretch: normal;
      line-height: 34px;
      letter-spacing: 0px;
      color: #333333;
    }
    .todyViews {
      position: absolute;
      right: 20px;
      bottom: 19px;
      height: 20px;
      font-family: MicrosoftYaHeiUILight;
      font-size: 20px;
      text-align: right;
      font-weight: normal;
      font-stretch: normal;
      line-height: 20px;
      letter-spacing: 0px;
      color: #000;
    }
  }
}
.vipClass {
  display: flex;
  flex-wrap: wrap;
  justify-content: row;
  justify-content: space-between;
  margin-top: 40px;
  width: 100%;
  > .top {
    position: relative;
    display: flex;
    justify-content: space-between;
    height: 70px;
    width: 100%;
    a {
      color: #333333;
    }
    .todyA {
      width: 108px;
      height: 29px;
      font-family: MicrosoftYaHei;
      font-size: 30px;
      font-weight: normal;
      font-stretch: normal;
      line-height: 24px;
      letter-spacing: 0px;
      color: #333333;
    }
    .todymore {
      height: 19px;
      font-family: MicrosoftYaHeiLight;
      font-size: 18px;
      font-weight: normal;
      font-stretch: normal;
      line-height: 59px;
      letter-spacing: 0px;
      color: #666666;
    }
  }
  .vipclass {
    position: relative;
    width: 380px;
    height: 345px;
    background-color: #fff;
    border-radius: 10px;
    margin-bottom: 30px;
    img {
      width: 380px;
      height: 226px;
    }
    .viptext {
      position: absolute;
      left: 20px;
      bottom: 68px;
      width: 42px;
      height: 20px;
      font-family: MicrosoftYaHeiUI;
      font-size: 26px;
      font-weight: normal;
      font-stretch: normal;
      line-height: 34px;
      letter-spacing: 0px;
      color: #ff3000;
    }
    .vipclassName {
      position: absolute;
      left: 74px;
      bottom: 66px;
      width: 271px;
      height: 25px;
      font-family: MicrosoftYaHeiUILight;
      font-size: 24px;
      font-weight: normal;
      font-stretch: normal;
      line-height: 34px;
      letter-spacing: 0px;
      color: #333333;
    }
    p {
      position: absolute;
      left: 20px;
      bottom: 29px;
      width: 141px;
      height: 20px;
      font-family: MicrosoftYaHeiUILight;
      font-size: 20px;
      font-weight: normal;
      font-stretch: normal;
      line-height: 34px;
      letter-spacing: 0px;
      color: #333333;
    }
  }
}
.AllClass {
  display: flex;
  flex-wrap: wrap;
  justify-content: row;
  justify-content: space-between;
  margin-top: 40px;
  width: 100%;
  > .top {
    position: relative;
    display: flex;
    justify-content: space-between;
    height: 70px;
    width: 100%;
    a {
      height: 29px;
      font-family: MicrosoftYaHei;
      font-size: 30px;
      font-weight: normal;
      font-stretch: normal;
      line-height: 24px;
      letter-spacing: 0px;
      color: #333333;
    }
    .topleft {
      > a {
        margin-right: 75px;
      }
    }
  }
  .classItem {
    position: relative;
    width: 380px;
    height: 507px;
    background-color: #ffffff;
    border-radius: 10px;
    margin-bottom: 30px;
    .className {
      position: absolute;
      left: 18px;
      bottom: 237px;
      height: 24px;
      font-family: MicrosoftYaHeiUILight;
      font-size: 24px;
      font-weight: normal;
      font-stretch: normal;
      line-height: 34px;
      letter-spacing: 0px;
      color: #333333;
    }
    .classDate {
      position: absolute;
      left: 23px;
      bottom: 200px;
      height: 20px;
      font-family: MicrosoftYaHeiUILight;
      font-size: 20px;
      font-weight: normal;
      font-stretch: normal;
      line-height: 34px;
      letter-spacing: 0px;
      color: #ff3000;
    }
    .classAname {
      position: absolute;
      left: 20px;
      bottom: 140px;
      padding: 0 20px;
      height: 40px;
      border-radius: 10px;
      border: solid 1px #999999;
      text-align: center;
      font-family: MicrosoftYaHeiUILight;
      font-size: 20px;
      font-weight: normal;
      font-stretch: normal;
      line-height: 34px;
      letter-spacing: 0px;
      color: #666666;
    }
    .classPrice {
      position: absolute;
      right: 22px;
      bottom: 101px;
      height: 19px;
      font-family: MicrosoftYaHeiUILight;
      font-size: 22px;
      font-weight: normal;
      font-stretch: normal;
      line-height: 34px;
      letter-spacing: 0px;
      color: #ff3000;
    }
    .classTeacherHead {
      position: absolute;
      left: 20px;
      bottom: 48px;
      width: 40px;
      height: 41px;
    }
    .classTeacherName {
      position: absolute;
      left: 80px;
      bottom: 59px;
      height: 20px;
      font-family: MicrosoftYaHeiUILight;
      font-size: 20px;
      font-weight: normal;
      font-stretch: normal;
      line-height: 34px;
      letter-spacing: 0px;
      color: #333333;
    }
    .classViews {
      position: absolute;
      left: 211px;
      bottom: 20px;
      height: 17px;
      font-family: MicrosoftYaHeiUI;
      font-size: 20px;
      font-weight: normal;
      font-stretch: normal;
      line-height: 34px;
      letter-spacing: 0px;
      color: #333333;
    }
    .favorite {
      position: absolute;
      right: 20px;
      bottom: 19px;
      height: 20px;
      font-family: MicrosoftYaHeiUILight;
      font-size: 20px;
      font-weight: normal;
      font-stretch: normal;
      line-height: 34px;
      letter-spacing: 0px;
      color: #999999;
    }
  }
}
</style>
