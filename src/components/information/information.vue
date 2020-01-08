<template>
  <div class="information w">
    <div class="main_nav">
      <div class="crumbs">
        <div>首页</div>
        <div></div>
        <div>资讯</div>
      </div>
    </div>
    <div class="fl">
      <div class="nav">
        <div>热门:</div>
        <ul>
          <li v-for="item in hotList" :key="item.id">{{item.name}}</li>
        </ul>
      </div>
      <div class="content">
        <div class="fl table_title">
          <ul>
            <li @click="checkedTable(item.id)" :class="['click', {checked: tableId == item.id}]" v-for="item in tableList" :key="item.id">{{item.name}}</li>
          </ul>
        </div>
        <div class="fr table_content">
          <ul>
            <li v-for="item in contentList" :key="item.id">
              <div class="img">
                <img class="click" :src="item.img_url" alt="">
              </div>
              <div class="subContent">
                <p class="title click">{{item.title}}</p>
                <div class="content_hd">{{item.content}}<br /><br /><br /></div>
                <div class="content_ft">
                  <div class="type">
                    <span>{{item.type}}</span>
                    <i>{{item.subtype}}</i>
                  </div>
                  <div class="num_time">
                    <span class="icon">
                    </span>
                    <span>{{item.num}}</span>
                    <span>{{item.time}}</span>
                  </div>
                </div>
              </div>
            </li>
          </ul>
          <my-paging :pagesize="pageSize" :page="page" :total="total" @pagechange="pageChange($event)"></my-paging>
        </div>
      </div>
    </div>
    <div class="fr">
      <div class="sign_in">
        <div class="sign_icon" @click="signIn">
          {{sign}}
        </div>
        <div class="num">
          <div>今日已签到<span>{{signNum}}</span>人</div>
        </div>
      </div>
      <div class="recom">
        <h4>今日推荐</h4>
        <div class="recom_img">
          <img src="/img/info_1.gif" alt="">
        </div>
        <p>Zookeeper入门与实践</p>
        <div class="recom_ft">
          <span>免费</span>
          <span>2759 人学习</span>
        </div>
      </div>
      <div class="hot_post">
        <h4>热帖排行</h4>
        <ul>
          <li v-for="item in hotsList" :key="item.id">
            <span>{{item.id}}</span>
            <i>{{item.content}}</i>
          </li>
        </ul>
        <div class="genduo">
          更多 &gt;
        </div>
      </div>
      <div class="megagame">
        <h4>行业大赛</h4>
        <div>
          <img src="/img/info_2.gif" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      hotList: [
        { id: 0, name: '软件工程' },
        { id: 1, name: '运维' },
        { id: 2, name: 'Lambda架构' },
        { id: 3, name: 'it岗位' },
        { id: 4, name: 'SEO优化' },
        { id: 5, name: '交互设计' }
      ],
      tableList: [
        { id: 0, name: '资讯' },
        { id: 1, name: '推荐文章' },
        { id: 2, name: '区块链' },
        { id: 3, name: 'java' },
        { id: 4, name: 'python' },
        { id: 5, name: '大数据' },
        { id: 6, name: '前端' },
        { id: 7, name: 'UI' },
        { id: 8, name: '电商' },
        { id: 9, name: 'php' },
        { id: 10, name: 'seo/sen' },
        { id: 11, name: '测试' },
        { id: 12, name: '新媒体运营' }
      ],
      tableId: 0,
      contentList: [
        { id: 0, img_url: '/img/info_1_1.gif', title: 'Flutter入门学习哪些内容？', content: '内容', type: 'Web前端开发', subtype: 'Web前端开发', num: 69, time: '2019-12-30' },
        { id: 1, img_url: '/img/info_1_2.gif', title: '企业级租房网项目实战学什么？', content: '内容', type: 'JAVA开发', subtype: '编程', num: 72, time: '2019-12-30' },
        { id: 2, img_url: '/img/info_1_3.gif', title: 'SEO优化培训多少钱？会学哪些内容？ ', content: '内容', type: 'SEO优化', subtype: '培训价格', num: 109, time: '2019-12-31' },
        { id: 3, img_url: '/img/info_1_4.gif', title: 'Java基础学习笔记之IO流案例 ', content: '内容', type: 'JAVA开发', subtype: 'JAVA入门', num: 62, time: '2019-12-30' },
        { id: 4, img_url: '/img/info_1_5.gif', title: '如何成为一名高薪的运维工程师？', content: '内容', type: 'Linux运维', subtype: 'Linux开发', num: 102, time: '2019-12-29' }
      ],
      page: 1,
      pageSize: 5,
      total: 60,
      signNum: 99,
      sign: '签到',
      hotsList: [
        { id: 1, content: 'PMP挂靠一年多少钱？PMP的用途有哪些？' },
        { id: 2, content: 'linux培训费用是多少钱？' },
        { id: 3, content: '有大数据分析师资格证书吗？' },
        { id: 4, content: '精通HTML5+CSS3需要学什么？' },
        { id: 5, content: 'linux培训费用是多少钱？' }
      ]
    }
  },
  created () {

  },
  methods: {
    pageChange(e) {
      console.log(e)
    },
    checkedTable(id) {
      this.tableId = id
    },
    signIn() {
      this.sign = '已签到'
      this.signNum++
    }
  }
}
</script>

<style lang="less" scoped>
img {
  vertical-align: middle;
}
.information::after {
    content: "";
    height: 0;
    line-height: 0;
    display: block;
    visibility: hidden;
    clear: both;
}
.w {
    margin: 0 auto;
    width: 1200px;
}
.click {
  cursor: pointer;
}
.crumbs div:nth-child(2) {
    width: 10px;
    height: 10px;
    border-right: 2px solid #666;
    border-bottom: 2px solid #666;
    transform: rotate(-45deg) translateY(13px);
}
.main_nav::after {
    content: "";
    height: 0;
    line-height: 0;
    display: block;
    visibility: hidden;
    clear: both;
}
.main_nav {
    margin-top: 57px;
}
.main_nav .crumbs {
    padding: 10px 0;
    height: 30px;
    line-height: 30px;
}
.crumbs div:nth-child(1) {
    margin-right: 15px;
    font-size: 20px;
}
.crumbs div:nth-child(3) {
    margin-left: 35px;
    font-size: 28px;
}
.main_nav .crumbs div {
    float: left;
    color: #666;
}
.information > .fl {
    float: left;
    width: 956px;
    background-color: #fff;
}
.information > .fr {
    float: right;
    width: 224px;
    overflow: hidden;
}
.nav{
    display: flex;
    padding: 20px 30px;
    background-color: #f8f8f8;
}
.nav div {
    flex: 5%;
    line-height: 21px;
}
.nav ul {
    display: flex;
    flex: 95%;
    justify-content: flex-start;
}
.nav ul li{
    padding: 0 10px;
    font-size: 14px;
    line-height: 21px;
    background-color: #fff;
    border-radius: 7px;
    margin-right: 10px;
}
.content {
    margin-top: 50px;
}
.content::after {
  content: '';
  line-height: 0;
  display: block;
  height: 0;
  visibility: hidden;
  clear: both;
}
.content > .fl {
    float: left;
    width: 184px;
    padding: 20px;
    background-color: #f8f8f8;
}
.content > .fl li {
    width: 184px;
    height: 42px;
    line-height: 42px;
    text-align: center;
    margin-bottom: 10px;
    background-color: #ffffff;
    border-radius: 6px;
}
.content > .fr {
    float: right;
    width: 712px;
}
.content .table_content ul{
  padding-left: 20px;
  overflow: hidden;
  background-color: #f8f8f8;
}
.content  .table_title .checked {
  background-color: #ec2a2e;
  color: #fff;
}
.content .table_content li {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 20px;
}
.table_content li .img {
  width: 252px;
}
.table_content li img {
  vertical-align: middle;
}
.subContent {
  padding: 20px;
  width: 399px;
}
.subContent .title {
  margin: 0;
}
.subContent .content_hd {
  margin: 5px 0;
  font-size: 12px;
  line-height: 18px;
  color: #666;
}
.subContent .content_ft {
  display: flex;
  width: 100%;
  justify-content: space-between;
}
.content_ft .type span {
  margin-right: 15px;
  font-size: 12px;
  color: #3173e0;
}
.content_ft .type i{
  font-style: normal;
  font-size: 12px;
  color: #3173e0;
}
.content_ft .num_time {
  line-height: 21px;
  display: flex;
}
.content_ft .num_time .icon{
  width: 21px;
  height: 16px;
  margin-top: 3px;
  background: url("/img/info_icon_1.gif") no-repeat;
}
.content_ft .num_time span {
  margin-left: 10px;
  font-size: 12px;
  color: #666;
}
.sign_in {
  display: flex;
  box-sizing: border-box;
  width: 224px;
  overflow: hidden;
  height: 61px;
  border-radius: 8px;
  border: 1px solid #f00;
}
.sign_in .sign_icon {
  flex: 35%;
  line-height: 59px;
  cursor: pointer;
  text-align: center;
  padding: 0 15px 0 45px;
  font-size: 18px;
  background: #ec212e url("/img/info_icon_2.gif") no-repeat 3px 13px;
  color: #fff;
}
.sign_in .num {
  flex: 65%;
  display: flex;
  text-align: center;
  align-items: center;
  font-size: 14px;
  background-color: #fff;
}
.sign_in .num span {
  color: #1f1b1b;
}
.recom {
  margin-top: 50px;
  padding: 20px;
  background-color: #f8f8f8;
}
.recom h4 {
  margin: 0;
  font-size: 16px;
}
.recom_img {
  margin: 15px auto;
}
.recom p {
  margin: 0;
  font-size: 12px;
  color: #999;
}
.recom .recom_ft {
  margin-top: 10px;
  display: flex;
  font-size: 12px;
  color: #333;
  justify-content: space-between;
}
.hot_post {
  position: relative;
  margin-top: 20px;
  padding: 20px;
  background-color: #f8f8f8;
}
.hot_post h4 {
  margin: 0 0 20px;
  font-size: 16px;
}
.hot_post li {
  display: flex;
  margin-bottom: 10px;
}
.hot_post li:last-child {
  margin-bottom: 0;
}
.hot_post li span {
  flex: 13%;
  font-size: 14px;
  color: #333;
}
.hot_post li i {
  font-style: normal;
  flex: 87%;
  font-size: 12px;
  line-height: 18px;
  color: #333;
}
.genduo {
  position: absolute;
  cursor: pointer;
  right: 10px;
  bottom: 3px;
  font-size: 12px;
  color: #333;
}
.genduo:active {
  color: #ec2a2e;
}
.megagame {
  margin-top: 20px;
  padding: 20px;
  background-color: #f8f8f8;
}
.megagame h4 {
  margin: 0 0 10px;
  font-size: 16px;
}
</style>
