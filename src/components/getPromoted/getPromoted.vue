<template>
  <div id="main">
    <div class="banner"></div>
    <div class="w">
      <div class="toggleTab">
        <div
          class="tabItem"
          v-for="(item, index) in toggleTabList"
          :key="index"
          @click="toggleTab(index)"
          :class="isActive === index ? 'active' : ''"
        >
          <a href="javascript:;">
            <img :src="item.path" alt="" />
            <p>{{ item.title }}</p>
            <span>{{ item.text }}</span>
          </a>
        </div>
      </div>
      <div class="PromotionAndRaise">
        <div
          class="PromotionAndRaiseItem"
          v-for="(item, index) in PromotionAndRaiseList"
          :key="index"
        >
          <a href="javascript:;">
            <img :src="item.path" alt="" />
            <p>{{ item.title }}</p>
            <span class="price">￥{{ item.price }}.00</span>
            <span class="comment">{{ item.comment }}评论</span>
            <span class="shu">|</span>
            <span class="buy">{{ item.buy }}购买</span>
          </a>
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
      toggleTabList: [
        {
          path: '/img/get-images/toggleTab01.jpg',
          title: '夯实理论基础',
          text: '比科班出身更扎实的理论基础知识'
        },
        {
          path: '/img/get-images/toggleTab01.jpg',
          title: '针对性补强',
          text: '13年教学经验,我们是最了解你的人'
        },
        {
          path: '/img/get-images/toggleTab03.jpg',
          title: '一线大厂项目实战',
          text: '学而为战,通过实战检验真知'
        },
        {
          path: '/img/get-images/toggleTab04.jpg',
          title: '快速提升',
          text: '浓缩课程精华,全是干货'
        }
      ],
      PromotionAndRaiseList: [
        {
          path: '/img/get-images/pay01.jpg',
          title: 'java架构师之分布式和微服务开发实践',
          price: 980,
          comment: 0,
          buy: 178
        },
        {
          path: '/img/get-images/pay02.jpg',
          title: 'python3 Appium 移动端自动化测试全方位...',
          price: 980,
          comment: 0,
          buy: 178
        },
        {
          path: '/img/get-images/pay03.jpg',
          title: 'Java架构师之分布式和微服务开发实践',
          price: 980,
          comment: 0,
          buy: 178
        },
        {
          path: '/img/get-images/pay04.jpg',
          title: 'java架构师之分布式和微服务开发实践',
          price: 980,
          comment: 0,
          buy: 178
        },
        {
          path: '/img/get-images/pay05.jpg',
          title: 'java架构师之分布式和微服务开发实践',
          price: 980,
          comment: 0,
          buy: 178
        },
        {
          path: '/img/get-images/pay03.jpg',
          title: 'java架构师之分布式和微服务开发实践',
          price: 980,
          comment: 0,
          buy: 178
        },
        {
          path: '/img/get-images/pay06.jpg',
          title: 'java架构师之分布式和微服务开发实践',
          price: 980,
          comment: 0,
          buy: 178
        },
        {
          path: '/img/get-images/pay07.jpg',
          title: 'java架构师之分布式和微服务开发实践',
          price: 980,
          comment: 0,
          buy: 178
        },
        {
          path: '/img/get-images/pay03.jpg',
          title: 'java架构师之分布式和微服务开发实践',
          price: 980,
          comment: 0,
          buy: 178
        }
      ]
    }
  },
  methods: {
    toggleTab (i) {
      this.isActive = i
    }
  }
}
</script>

<style lang="less" scoped>
#main {
  background-color: #f3f3f3;
}
.banner {
  width: 1920px;
  height: 580px;
  background-color: #4a95e1;
}
.active {
  background-color: #eb0000;
}
.w {
  width: 1200px;
  margin: 0 auto;
  .toggleTab {
    display: flex;
    position: absolute;
    left: 360px;
    top: 580px;
    width: 1200px;
    margin: 0 auto;
    .tabItem {
      width: 300px;
      height: 200px;
      box-shadow: -13px 1px 16px 2px rgba(0, 23, 46, 0.18);
    }
  }
}
.toggleTab {
  display: flex;
  position: absolute;
  left: 360px;
  top: 580px;
  width: 100%;
  background-color: #fff;
  .tabItem {
    position: relative;
    width: 300px;
    height: 200px;
    box-shadow: -13px 1px 16px 2px rgba(0, 23, 46, 0.18);
    img {
      position: absolute;
      left: 31px;
      top: 47px;
    }
    p {
      position: absolute;
      left: 30px;
      top: 99px;
      height: 19px;
      font-family: MicrosoftYaHei;
      font-size: 18px;
      font-weight: normal;
      font-stretch: normal;
      letter-spacing: 0px;
      color: #333333;
    }
    span {
      position: absolute;
      left: 30px;
      bottom: 55px;
      height: 17px;
      font-family: MicrosoftYaHei;
      font-size: 16px;
      font-weight: normal;
      font-stretch: normal;
      letter-spacing: 0px;
      color: #666666;
    }
  }
}
.PromotionAndRaise {
  display: flex;
  flex-wrap: wrap;
  justify-content: row;
  justify-content: space-between;
  width: 100%;
  height: 970px;
  margin-top: 160px;
  .PromotionAndRaiseItem {
    position: relative;
    width: 380px;
    height: 300px;
    background-color: #ffffff;
    border-radius: 6px;
    p {
      position: absolute;
      left: 20px;
      bottom: 52px;
      height: 16px;
      font-family: MicrosoftYaHeiLight;
      font-size: 16px;
      font-weight: normal;
      font-stretch: normal;
      letter-spacing: 0px;
      color: #333333;
    }
    .price {
      position: absolute;
      left: 25px;
      bottom: 25px;
      height: 12px;
      font-family: MicrosoftYaHei;
      font-size: 16px;
      font-weight: normal;
      font-stretch: normal;
      letter-spacing: 0px;
      color: #333333;
    }
    .comment {
      position: absolute;
      left: 243px;
      bottom: 24px;
      height: 11px;
      font-family: MicrosoftYaHei;
      font-size: 12px;
      font-weight: normal;
      font-stretch: normal;
      letter-spacing: 0px;
      color: #999999;
    }
    .shu {
      position: absolute;
      left: 294px;
      bottom: 24px;
      width: 1px;
      height: 11px;
      line-height: 11px;
      color: #eae9e9;
    }
    .buy {
      position: absolute;
      right: 20px;
      bottom: 24px;
      height: 11px;
      font-family: MicrosoftYaHei;
      font-size: 12px;
      font-weight: normal;
      font-stretch: normal;
      letter-spacing: 0px;
      color: #999999;
    }
  }
}
</style>
