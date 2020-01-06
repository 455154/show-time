<template>
  <div class="catalogue">
    <div class="course" v-for="item in course_catalogue" :key="item.id">
      <h4>{{ item.title }} <i v-if="item.id == 0">免费试学</i></h4>
      <ul>
        <li class="padd" v-for="item2 in item.children" :key="item2.id">
          <span><b class="play"></b>【 {{ item2.type }} 】</span>
          <span class="click" @click.prevent="intoCurriculum(item.id)">{{
            item2.title
          }}</span>
          <span>({{ item2.time }})</span>
        </li>
      </ul>
    </div>
    <img src="/img/bg-1_05.jpg" alt="">
  </div>
</template>

<script>
export default {
  data() {
    return {
      course_catalogue: [
        {
          id: 0,
          title: '01课程试听',
          children: [
            {
              id: 0,
              type: '回放',
              title: '试听课：零基础也能画出一流插画',
              time: '2019年12月03日 14:40-14:40'
            },
            {
              id: 1,
              type: '回放',
              title: '课前临摹的方法',
              time: '2019年12月13日 00:00-00:00'
            }
          ]
        },
        {
          id: 1,
          title: '02商业绘画基础启蒙',
          children: [
            {
              id: 0,
              type: '直播',
              title: '学习SAI、AI软件基础，练习线条与基础造型',
              time: '2020年01月06日 20:30-22:30'
            },
            {
              id: 1,
              type: '回放',
              title: '学习SAI、AI软件基础，练习线条与基础造型',
              time: '2020年01月06日 20:30-22:30'
            },
            {
              id: 2,
              type: '回放',
              title: '商业插画的色彩搭配与上色技巧',
              time: '2020年01月08日 20:30-22:30'
            },
            {
              id: 3,
              type: '直播',
              title: '作业改评/巩固训练',
              time: '2020年01月13日 20:30-22:30'
            }
          ]
        },
        {
          id: 2,
          title: '03人物的绘画训练',
          children: [
            {
              id: 0,
              type: '直播',
              title: '人物插画的表情与动作学习1',
              time: '2020年01月16日 20:30-22:30'
            },
            {
              id: 1,
              type: '直播',
              title: '人物插画的表情与动作学习2',
              time: '2020年02月03日 20:30-22:30'
            },
            {
              id: 2,
              type: '直播',
              title: '动物的表情与动作学习',
              time: '2020年02月05日 20:30-22:30'
            }
          ]
        },
        {
          id: 3,
          title: '04创意插画的训练',
          children: [
            {
              id: 0,
              type: '直播',
              title: '脑洞大开的插画创作思路（SAI、AI软件使用）',
              time: '2020年02月19日 20:30-22:30'
            },
            {
              id: 1,
              type: '直播',
              title: '命题插画创作（SAI、AI软件使用）',
              time: '2020年02月24日 20:30-22:30'
            }
          ]
        },
        {
          id: 4,
          title: '05商业命题创作',
          children: [
            {
              id: 0,
              type: '直播',
              title: '双十一电商购物节插画',
              time: '2020年03月02日 20:30-22:30'
            },
            {
              id: 1,
              type: '直播',
              title: '潮流中国风插画（SAI与AI双向软件使用）',
              time: '2020年03月04日 20:30-22:30'
            },
            {
              id: 2,
              type: '直播',
              title: '作业改评/巩固训练',
              time: '2020年03月09日 20:30-22:30'
            }
          ]
        },
        {
          id: 5,
          title: '06拓展训练',
          children: [
            {
              id: 0,
              type: '直播',
              title: '动画课：动画的运动规律与微信动态表情制作',
              time: '2020年03月11日 20:30-22:30'
            },
            {
              id: 1,
              type: '直播',
              title: '独家秘术：线圈插画基础与风景训练',
              time: '2020年03月16日 20:30-22:30'
            },
            {
              id: 2,
              type: '直播',
              title: '独家秘术：线圈插画训练',
              time: '2020年03月18日 20:30-22:30'
            }
          ]
        }
      ]
    }
  },
  created() {},
  methods: {
    intoCurriculum(id) {
      // --------
      console.log(id)
    }
  }
}
</script>

<style lang="less" scoped>
.catalogue{
  margin-top: -20px;
}
.catalogue .course {
  font-family: MicrosoftYaHeiLight;
  margin-top: 20px;
}
.catalogue .course h4 {
  position: relative;
  margin: 0;
  line-height: 73px;
  font-weight: normal;
  font-size: 21px;
  border-bottom: 1px solid #999;
}
.catalogue .course i {
  position: absolute;
  padding: 0 5px;
  top: 23px;
  left: 140px;
  font-style: normal;
  font-size: 16px;
  line-height: 24px;
  border: 1px solid #da082b;
  border-radius: 12px;
  color: #da082b;
}
.catalogue .course .click {
  cursor: pointer;
}
.catalogue .course .click:active {
  color: #da082b;
}
.catalogue .course li {
  font-size: 18px;
  line-height: 60px;
  border-bottom: 1px solid #999;
}
.play {
  display: inline-block;
  margin-right: 25px;
  transform: translateY(3px);
  width: 20px;
  height: 20px;
  background: url(/img/play_03.jpg);
}
.course {
  padding-top: 40px;
}
.padd {
  padding-left: 30px;
  align-items: center;
  display: flex;
  span {
    font-family: MicrosoftYaHeiLight;
    font-size: 18px;
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: 0px;
    color: rgba(51, 51, 51, 1);
    cursor: pointer;
  }
}
h4{
  padding-left: 30px !important;
}
</style>
