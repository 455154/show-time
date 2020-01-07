<template>
  <div class="w">
    <div class="add-top"></div>
    <!-- 面包屑导航 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item class="item-index" :to="{ path: '/index' }"
        >首页</el-breadcrumb-item
      >
      <el-breadcrumb-item class="item-informent">资讯</el-breadcrumb-item>
    </el-breadcrumb>

    <!-- 热门推荐按部分 -->
    <div class="box-hotspot">
      <div class="hotspot">
        <ul>
          <li class="one-hot">热门:</li>
          <li>软件工程</li>
          <li>运维</li>
          <li>Lambda</li>
          <li>it岗位</li>
          <li>SEO优化</li>
          <li>交互设计</li>
        </ul>
      </div>
      <div class="sign">
        <img src="../../../public/img/infor-img/infor_sign.gif" alt="" />
      </div>
    </div>

    <div class="tabs-box">
      <!-- 左侧Tabs栏 -->
      <ul class="tabs">
        <li class="list">资讯</li>
        <li>推荐文章</li>
        <li>区块链</li>
        <li>java</li>
        <li>python</li>
        <li>大数据</li>
        <li>前端</li>
        <li>UI</li>
        <li>电商</li>
        <li>php</li>
        <li>seo/sen</li>
        <li>测试</li>
        <li>新媒体运营</li>
      </ul>
      <!-- 中间详细介绍 -->
      <div class="text-list">
        <img src="../../../public/img/infor-img/text001.gif" alt="" />
      </div>
    </div>
    <!-- 右侧推荐区域 -->
    <div class="right-text">
      <!-- 今日推荐 -->

      <img src="../../../public/img/infor-img/infor_text001.gif" alt="" />

      <!-- 热门排行 -->

      <img
        class="right-text-img"
        src="../../../public/img/infor-img/infor_text002.gif"
        alt=""
      />

      <!-- 行业大赛 -->

      <img src="../../../public/img/infor-img/infor_text003.gif" alt="" />
    </div>

    <!-- 分页 -->
    <div class="Pagination">
      <img
        src="../../../public/img/infor-img/实战项目-行业资讯_r10_c4.gif"
        alt=""
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  created() {},
  methods: {}
}
</script>

<style lang="less" scoped>
.add-top {
  height: 60px;
}
.w {
  width: 1200px;
  margin: 0 auto;
  height: 989px;
}
img {
  vertical-align: top;
}
.el-breadcrumb {
  background-color: #fff;
  height: 24px;
  line-height: 24px;
  margin: 20px;
}
.item-index {
  font-size: 20px;
}

.item-informent {
  height: 20px;
  font-size: 24px;
}
.hotspot {
  float: left;
  width: 956px;
  height: 61px;
  background-color: #f8f8f8;
  ul {
    display: inline;
  }
  li {
    display: inline-block;
    height: 21px;
    margin-top: 20px;
    margin-right: 20px;
    padding: 0 20px;
    background-color: #ffffff;
    border-radius: 10px;
    font-size: 14px;
    color: #333;
  }
}

.hotspot .one-hot {
  border-radius: 0;
  background-color: #f8f8f8;
  padding: 0;
  margin-left: 30px;
  margin-right: 10px;
  font-size: 16px;
}
.sign {
  float: right;
  img {
    width: 225px;
    height: 61px;
  }
}

.tabs {
  float: left;
  margin-top: 50px;
  width: 224px;
  height: 813px;
  background-color: #f8f8f8;
  padding-top: 10px;
  p {
    width: 36px;
    height: 15px;
    font-family: MicrosoftYaHei;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    line-height: 35px;
    letter-spacing: 0px;
    color: #333333;
  }
  li {
    margin: 10px 20px;
    width: 184px;
    height: 42px;
    text-align: center;
    line-height: 42px;
    font-size: 16px;
    color: #333333;
    background-color: #ffffff;
    border-radius: 6px;
  }
}
.list {
  font-size: 16px !important;
  color: #ffffff !important;
  background-color: #ec212e !important;
}

.text-list {
  float: left;
  margin-top: 50px;
  margin-left: 20px;
  width: 712px;
  height: 823px;
  background-color: #f8f8f8;
}

.right-text {
  width: 224px;
  height: 261px;
  margin-top: 50px;
  float: right;
}
.right-text-img {
  margin: 20px 0;
}

.Pagination {
  float: left;
  margin: 20px 254px;
}
</style>
