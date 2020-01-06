<template>
  <div class="guidance">
    <div class="w">
      <div class="img">
        <img src="/img/get_jop_1.gif" alt="" />
      </div>
    </div>
    <div class="main_nav">
      <div class="crumbs w">
        <div>首页</div>
        <div></div>
        <div>就业指导</div>
      </div>
      <div class="content_nav">
        <ul class="w">
          <li>内容:</li>
          <li :class="['click', {checked: index == courseId}]" v-for="(item, index) in courseClass" :key="index" @click="checkedCourse(index)">{{item}}</li>
        </ul>
      </div>
      <div class="class">
        <ul class="w">
          <li>排序:</li>
          <li :class="['click', {checked: index == sortId}]" v-for="(item, index) in classSort" :key="index" @click="checkedSort(index)">{{item}}</li>
        </ul>
      </div>
    </div>
    <div class="content w">
      <ul>
        <li v-for="item in clssList" :key="item.id">
          <div>
            <img class="click" :src="item.img_url" @click.stop="detailClass(item.id)">
          </div>
          <p @click.stop="detailClass(item.id)">{{item.title}}</p>
          <div><span>初级练习</span><span>{{item.num}}人观看</span></div>
        </li>
      </ul>
      <my-paging :pagesize="pageSize" :page="page" :total="total" @pagechange="pageChange($event)"></my-paging>
    </div>
    <div>
      <img src="/img/get_jop_10.gif" alt="">
    </div>
    <div class="glad_table w">
      <h3>学院就业喜报</h3>
      <ul class="it_major">
        <li :class="['click', {checked: item.id == majorId}]" v-for="item in majorList" :key="item.id" @click.prevent="checkedMajor(item.id)">{{item.major}}</li>
      </ul>
      <div class="table_content">
        <div class="content_l">
          <div v-for="item in classList" :key="item.id">
            <div class="class_name" @click="checkedClass(item.id)">{{item.className}}</div>
            <ul :class="{checked: item.id == classId}">
              <li><i>就业人数</i><span>{{item.num}}人</span></li>
              <li><i>就业率</i><span>{{item.rate}}</span></li>
              <li><i>平均薪资</i><span>{{item.ave_pay}}人</span></li>
              <li><i>月薪过万</i><span>{{item.exc_w}}人</span></li>
            </ul>
          </div>
        </div>
        <div class="content_r">
          <table>
            <thead>
              <tr>
                <th>姓名</th>
                <th>学历</th>
                <th>目前状态</th>
                <th>地区</th>
                <th>月薪</th>
                <th>就业时间</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in studentList" :key="item.id">
                <td>{{item.name}}</td>
                <td>{{item.education}}</td>
                <td>{{item.state}}</td>
                <td>{{item.rejion}}</td>
                <td>{{item.mon_pay}}</td>
                <td>{{item.emp_time}}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      courseClass: ['求职面试', '求职择业', '职业规划', '心理学', '就业咨询'],
      classSort: ['最新课程', '最多学习', '最多收藏', '相关职业'],
      courseId: 0,
      sortId: 0,
      clssList: [
        { id: 1, img_url: '/img/get_jop_2.gif', title: '30岁转行做设计还来得及吗', num: 50 },
        { id: 2, img_url: '/img/get_jop_3.gif', title: 'ui设计师该如何准备作品集', num: 88 },
        { id: 3, img_url: '/img/get_jop_4.gif', title: '影响40万ui设计师的面试技巧', num: 145 },
        { id: 4, img_url: '/img/get_jop_5.gif', title: '年底要不要辞职', num: 354 },
        { id: 5, img_url: '/img/get_jop_6.gif', title: 'ui设计的发展方向', num: 90 },
        { id: 6, img_url: '/img/get_jop_7.gif', title: '电商设计师的职业规划', num: 12000 },
        { id: 7, img_url: '/img/get_jop_8.gif', title: '就业会遇到的常见问题', num: 123 },
        { id: 8, img_url: '/img/get_jop_9.gif', title: '电商设计师的影响力', num: 168 }
      ],
      page: 1,
      pageSize: 5,
      total: 60,
      majorList: [
        { id: 1, major: 'HTML5' },
        { id: 2, major: 'Java' },
        { id: 3, major: 'python' },
        { id: 4, major: 'UI' },
        { id: 5, major: '大数据' },
        { id: 6, major: 'Unity' },
        { id: 7, major: 'PHP' },
        { id: 8, major: '云计算' },
        { id: 9, major: '软件测试' }
      ],
      majorId: 1,
      classList: [
        { id: 1, className: 'BK-HTM5-JY-1926W期', num: 55, rate: '90%', ave_pay: 8000, exc_w: 45 },
        { id: 2, className: 'BK-HTM5-JY-1927W期', num: 55, rate: '80%', ave_pay: 8300, exc_w: 50 },
        { id: 3, className: 'BK-HTM5-JY-1928W期', num: 55, rate: '88%', ave_pay: 7900, exc_w: 40 },
        { id: 4, className: 'BK-HTM5-JY-1929W期', num: 55, rate: '92%', ave_pay: 8400, exc_w: 45 },
        { id: 5, className: 'BK-HTM5-JY-1930W期', num: 55, rate: '93%', ave_pay: 7000, exc_w: 42 }
      ],
      classId: 1,
      studentList: [
        { id: 0, name: '张三', education: '本科', state: '就业', rejion: '北京', mon_pay: '14000', emp_time: '2019.8.11' },
        { id: 1, name: '李四', education: '专科', state: '就业', rejion: '上海', mon_pay: '12000', emp_time: '2019.10.10' },
        { id: 2, name: '王五', education: '本科', state: '就业', rejion: '深圳', mon_pay: '13000', emp_time: '2019.9.9' },
        { id: 3, name: '小红', education: '专科', state: '就业', rejion: '广东', mon_pay: '15000', emp_time: '2019.11.20' },
        { id: 4, name: '小明', education: '专科', state: '就业', rejion: '上海', mon_pay: '12000', emp_time: '2019.10.15' },
        { id: 5, name: '小芳', education: '本科', state: '就业', rejion: '北京', mon_pay: '10000', emp_time: '2019.10.10' },
        { id: 6, name: '丁久', education: '本科', state: '就业', rejion: '上海', mon_pay: '9000', emp_time: '2019.9.17' },
        { id: 7, name: '赵六', education: '专科', state: '就业', rejion: '杭州', mon_pay: '9000', emp_time: '2019.10.11' }
      ]
    }
  },
  created () {},
  methods: {
    checkedCourse (idx) {
      this.courseId = idx
    },
    checkedSort (idx) {
      this.sortId = idx
    },
    detailClass (idx) {
      console.log(idx)
    },
    pageChange (e) {
      console.log(e)
    },
    checkedMajor (id) {
      console.log(id)
      this.majorId = id
    },
    checkedClass (id) {
      console.log(id)
      this.classId = id
    }
  }
}
</script>

<style lang="less" scoped>
.w {
  width: 1200px;
  margin: 0 auto;
}
.img {
  margin-top: 57px;
  width: 1392px;
  height: 400px;
  transform: translateX(-96px);
}
.img::after {
  content: '';
  height: 0;
  line-height: 0;
  display: block;
  visibility: hidden;
  clear: both;
}
.main_nav {
  padding: 30px 0;
  background-color: #fff;
  border-radius: 10px;
}
.crumbs div:nth-child(2) {
  width: 10px;
  height: 10px;
  border-right: 2px solid #666;
  border-bottom: 2px solid #666;
  transform: rotate(-45deg) translateY(13px);
}
.main_nav .crumbs {
  height: 30px;
  line-height: 30px;
  overflow: hidden;
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
.content_nav {
  border-top: 1px solid #eee;
  padding: 30px 0;
  overflow: hidden;
}
.content_nav li {
  float: left;
  font-size: 28px;
  line-height: 38px;
  margin-right: 40px;
  box-sizing: border-box;
}
.click {
  cursor: pointer;
}
.content_nav .checked {
  color: #da082b;
  border-bottom: 2px solid #da082b;
}
.class {
  background-color: #f8f8f8;
  line-height: 51px;
  overflow: hidden;
}
.class li {
  float: left;
  color: #333;
  font-size: 20px;
  margin-right: 40px;
}
.class .checked {
  color: #da082b;
}
.content ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.content li {
  width: 285px;
}
.content li p {
  padding: 5px 20px;
  cursor: pointer;
}
.content li p:active {
  color: #da082b;
}
.content li div:last-child {
  display: flex;
  padding: 0 20px 5px;
  justify-content: space-between;
}
.glad_table {
  margin-top: 50px;
}
.glad_table h3 {
  margin: 0;
  font-size: 34px;
  font-weight: normal;
  color: #333;
}
.glad_table .it_major {
  margin-top: 43px;
  display: flex;
}
.it_major li {
  line-height: 66px;
  padding: 0 20px;
  min-width: 60px;
  font-size: 21px;
  border-radius: 33px;
  margin-right: 15px;
  text-align: center;
}
.it_major .checked {
  background-color: #da082b;
  color: #fff;
}
.table_content {
  margin-top: 60px;
  margin-bottom: 15px;
}
.table_content::after {
  content: '';
  height: 0;
  line-height: 0;
  display: block;
  visibility: hidden;
  clear: both;
}
.content_l {
  float: left;
}
.content_l > div{
  width: 355px;
}
.content_l .class_name {
  height: 63px;
  font-size: 26px;
  box-sizing: border-box;
  line-height: 63px;
  text-align: center;
  background-color: #da082b;
  color: #fff;
  cursor: pointer;
}
.content_l li {
  height: 0;
  font-size: 0;
  line-height: 0;
  text-indent: -888px;
  padding-left: 80px;
  background-color: #eee;
  overflow: hidden;
  transition: height .3s ease-in 0s, font-size 0s ease-in .2s;
}
.content_l .checked li {
  text-indent: 0;
  font-size: 20px;
  line-height: 63px;
  height: 63px;
}
.content_l i {
  display: inline-block;
  width: 120px;
  font-style: normal;
}
.content_l li:nth-child(even) {
  background-color: #e6e6e6;
}
.content_l span{
  color: #da082b;
}
.content_r {
  float: right;
}
.content_r table {
  width: 826px;
  border: 0;
  border-collapse: collapse;
}
.content_r thead {
  background-color: #f6f6f6;
}
.content_r tbody tr:nth-child(odd) {
  background-color: #fff;
}
.content_r tbody tr:nth-child(even) {
  background-color: #f6f6f6;
}
.content_r th,
.content_r td {
  height: 63px;
  line-height: 63px;
  text-align: center;
  padding: 0;
}
</style>
