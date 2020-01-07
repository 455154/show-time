<template>
  <div class="fullCourse w">
    <div class="main_nav">
      <div class="crumbs">
        <div>首页</div>
        <div></div>
        <div>全部课程</div>
      </div>
      <div class="design_nav">
        <div class="nav_left">
          <img src="../../../public/img/design.gif" />
          <div>设计制作</div>
        </div>
        <ul>
          <li
            :class="[{ checked: designIndex === index }]"
            v-for="(item, index) in designList"
            :key="index"
          >
            <a href="javascript:;" @click="designchecked(index)">{{ item }}</a>
          </li>
        </ul>
      </div>
      <div class="design_nav">
        <div class="nav_left">
          <img src="../../../public/img/design.gif" />
          <div>IT/互联网</div>
        </div>
        <ul>
          <li
            :class="[{ checked: internetIndex === index }]"
            v-for="(item, index) in internetList"
            :key="index"
            @click="internetchecked(index)"
          >
            <a href="javascript:;">{{ item }}</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="content">
      <ul class="title">
        <li
          :class="[{ checked: courseType === 'VIP' }]"
          @click.stop.prevent="checkedCourseType('VIP')"
        >
          <h3><a href="javascript:;">VIP课程</a></h3>
        </li>
        <li
          :class="[{ checked: courseType === 'JX' }]"
          @click.stop.prevent="checkedCourseType('JX')"
        >
          <h3><a href="javascript:;">精选课程</a></h3>
        </li>
      </ul>
      <ul class="content_class">
        <li v-for="item in clssList" :key="item.id">
          <div>
            <img
              :src="'/img/' + item.img_url"
              @click.stop="detailClass(item.id)"
            />
          </div>
          <p @click.stop="detailClass(item.id)">{{ item.title }}</p>
          <div>
            <span>VIP</span> 主讲人:
            <i @click.stop="lecturerMessage(item.speker)">{{ item.speaker }}</i>
          </div>
        </li>
      </ul>
      <my-paging
        :pagesize="pageSize"
        :page="page"
        :total="total"
        @pagechange="pageChange($event)"
      ></my-paging>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      designList: [
        '全部',
        'ui设计',
        '游戏动画',
        '电商视觉',
        '平面设计',
        '影视包装',
        '室内设计',
        '建筑设计',
        '工程设计',
        '机械设计',
        '手绘师'
      ],
      internetList: ['全部', '前端', '程序设计', '电子商务', '新媒体运营'],
      clssList: [
        {
          id: 1,
          img_url: 'all_1.gif',
          title: 'UI设计基础班（直播+录...',
          speaker: '王一帆'
        },
        {
          id: 2,
          img_url: 'all_2.gif',
          title: '综合软件班（直播+录播）',
          speaker: '红雷'
        },
        {
          id: 3,
          img_url: 'all_3.gif',
          title: 'UI运营插画班（直播+录...',
          speaker: '王一帆'
        },
        {
          id: 4,
          img_url: 'all_4.gif',
          title: 'UI动效设计班（直播+录...',
          speaker: '王一帆'
        },
        {
          id: 5,
          img_url: 'all_5.gif',
          title: '手机摄影懒人班（直播+录...',
          speaker: '王一帆'
        },
        {
          id: 6,
          img_url: 'all_6.gif',
          title: 'UI设计基础班（直播+录...',
          speaker: '王一帆'
        },
        {
          id: 7,
          img_url: 'all_7.gif',
          title: 'UI设计基础班（直播+录...',
          speaker: '王一帆'
        },
        {
          id: 8,
          img_url: 'all_8.gif',
          title: 'UI设计基础班（直播+录...',
          speaker: '王一帆'
        },
        {
          id: 9,
          img_url: 'all_9.gif',
          title: 'UI设计基础班（直播+录...',
          speaker: '王一帆'
        },
        {
          id: 10,
          img_url: 'all_10.gif',
          title: 'UI设计基础班（直播+录...',
          speaker: '王一帆'
        }
      ],
      designIndex: 0,
      internetIndex: 0,
      courseType: 'VIP',
      page: 1,
      pageSize: 5,
      total: 60
    }
  },
  created() {},
  methods: {
    designchecked(idx) {
      this.designIndex = idx
    },
    internetchecked(idx) {
      this.internetIndex = idx
    },
    checkedCourseType(type) {
      this.courseType = type
    },
    pageChange(e) {
      console.log(e)
    },
    detailClass(id) {
      console.log(id)
    },
    lecturerMessage(speker) {
      console.log(speker)
    }
  }
}
</script>

<style lang="less" scoped>
img {
  vertical-align: middle;
}
.w {
  width: 1200px;
  margin: 0 auto;
}
.fullCourse {
  padding-top: 60px;
}
.main_nav {
  padding: 30px;
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
.design_nav {
  display: flex;
  flex-direction: flex-start;
  margin-top: 39px;
  overflow: hidden;
  color: #333;
  font-size: 14px;
}
.design_nav img {
  float: left;
  width: 38px;
  height: 38px;
}
.design_nav .nav_left {
  flex: 13%;
}
.design_nav .nav_left div {
  float: left;
  width: 80px;
  text-align: center;
  margin: 7px 20px 7px 0;
  line-height: 22px;
  border: 1px solid #333;
}
.design_nav ul {
  flex: 87%;
  line-height: 24px;
}
.design_nav ul li {
  float: left;
  margin: 7px 0;
}
.design_nav li a {
  padding: 0 20px;
  display: block;
  color: #333;
}
.design_nav .checked a {
  background-color: #da082b;
  color: #fff;
}
.content {
  margin-top: 20px;
  padding: 27px 37px;
  border-radius: 10px;
  background-color: #fff;
  overflow: hidden;
}
.title::after {
  content: '';
  height: 0;
  line-height: 0;
  display: block;
  visibility: hidden;
  clear: both;
}
.title > li {
  float: left;
}
.title h3 {
  font-size: 36px;
  margin: 0;
  font-weight: normal;
  margin-right: 34px;
}
.title a {
  color: #333;
}
.title .checked a {
  color: #da082b;
  border-bottom: 2px solid #da082b;
}
.content_class {
  display: flex;
  flex-wrap: wrap;
}
.content_class li {
  margin-top: 15px;
  flex: 20%;
}
.content_class img {
  cursor: pointer;
}
.content_class li div {
  width: 200px;
  margin: 0 auto;
}
.content_class li p {
  margin: 7px auto;
  width: 200px;
  color: #333;
  cursor: pointer;
}
.content_class li p:active {
  color: #da082b;
}
.content_class li span {
  font-size: 18px;
  color: #da082b;
}
.content_class li i {
  margin-left: 10px;
  font-style: normal;
  cursor: pointer;
}
.content_class li i:active {
  color: #da082b;
}
</style>
