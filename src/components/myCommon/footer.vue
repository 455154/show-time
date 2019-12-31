<template>
  <div>
    <div class="footer">
      <div class="w">
        <ul class="content">
          <li class="content-li first">
            <ul>
              <li>
                <ul>
                  <li class="title">帮助中心</li>
                  <li class="title-content">
                    <a href="javascript:;">联系我们</a>
                  </li>
                  <li class="title-content">
                    <a href="javascript:;">用户协议</a>
                  </li>
                  <li class="title-content">
                    <a href="javascript:;">中文</a>
                  </li>
                  <li class="title-content">
                    <a href="javascript:;">ENLISHG</a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li class="content-li">
            <ul>
              <li>
                <ul>
                  <li class="title">智慧讲堂项目</li>
                  <li class="title-content">
                    <a href="javascript:;">交互设计师</a>
                  </li>
                  <li class="title-content">
                    <a href="javascript:;">C++程序设计</a>
                  </li>
                  <li class="title-content">
                    <a href="javascript:;">前端开发工程师</a>
                  </li>
                  <li class="title-content">
                    <a href="javascript:;">全栈开发工程师</a>
                  </li>
                  <li class="title-content">
                    <a href="javascript:;">机器学习工程部署</a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li class="content-li">
            <ul>
              <li>
                <ul>
                  <li class="title">资源</li>
                  <li class="title-content">
                    <a href="javascript:;">课程目录</a>
                  </li>
                  <li class="title-content">
                    <a href="javascript:;">智慧论坛</a>
                  </li>
                  <li class="title-content">
                    <a href="javascript:;">职业资源中心</a>
                  </li>
                  <li class="title-content">
                    <a href="javascript:;">招聘伙伴</a>
                  </li>
                  <li class="title-content">
                    <a href="javascript:;">智慧对话</a>
                  </li>
                  <li class="title-content">
                    <a href="javascript:;">奖学金</a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li class="content-li">
            <ul>
              <li>
                <ul>
                  <li class="title">智慧讲堂</li>
                  <li class="title-content">
                    <a href="javascript:;">关于我们</a>
                  </li>
                  <li class="title-content">
                    <a href="javascript:;">博客</a>
                  </li>
                  <li class="title-content">
                    <a href="javascript:;">媒体报道</a>
                  </li>
                  <li class="title-content">
                    <a href="javascript:;">加入我们</a>
                  </li>
                  <li class="title-content">
                    <a href="javascript:;">INTERSECT</a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li class="content-li">
            <ul>
              <li>
                <ul>
                  <li class="title">友情链接</li>
                  <li class="title-content">
                    <a href="javascript:;">PS教程</a>
                  </li>
                  <li class="title-content">
                    <a href="javascript:;">AI教程</a>
                  </li>
                  <li class="title-content">
                    <a href="javascript:;">AE教程</a>
                  </li>
                  <li class="title-content">
                    <a href="javascript:;">C4D教程</a>
                  </li>
                  <li class="title-content">
                    <a href="javascript:;">菜鸟C4D</a>
                  </li>
                  <li class="title-content">
                    <a href="javascript:;">韩语学习</a>
                  </li>
                  <li class="title-content">
                    <a href="javascript:;">C4D之家</a>
                  </li>
                  <li class="title-content">
                    <a href="javascript:;">PPT教程</a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li class="content-li last">
            <ul>
              <li>
                <ul class="about">
                  <li class="title">关于我们</li>
                  <li class="title-content">
                    <span>全国订购热线：400-888-888X
                    7x24小时在线订购</span>
                  </li>
                  <li class="title-content">
                    <span>客服工作时间：9:00-21:00</span>
                  </li>
                  <li class="title-content loginIcon">
                    <a href="javascript:;">
                      <img src="/img/weixin.png" alt="">
                    </a>
                    <a href="javascript:;">
                      <img src="/img/qq.png" alt="">
                    </a>
                    <a href="javascript:;">
                      <img src="/img/weibo.png" alt="">
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  created () {

  },
  methods: {

  }
}
</script>

<style lang="less" scoped>
.footer {
  width: 1920px;
  height: 345px;
  background-color: #404040;
  .w {
    width: 1200px;
    height: 20px;
    margin: 0 auto;
    padding-top: 72px;
    box-sizing: border-box;
    .content {
      display: flex;
      justify-content: center;
      .content-li {
        padding-left: 66px;
        width: 199px;
        height: 190px;
        border-right: 1px solid rgba(255, 255, 255, 0.2);
        li {
          margin-top: 3px;
        }
        .title,
        .about .title {
          font-family: MicrosoftYaHeiUILight;
          font-size: 18px;
          font-weight: normal;
          font-stretch: normal;
          line-height: 18px;
          letter-spacing: 0px;
          color: #ffffff;
          margin-bottom: 25px;
        }
        .title-content a,
        .title-content span
        {
          font-family: MicrosoftYaHeiUILight;
          font-size: 12px;
          font-weight: normal;
          font-stretch: normal;
          letter-spacing: 0px;
          color: #ffffff;
          opacity: 0.7;
        }
        .loginIcon {
          margin-top:23px;
          a{
            margin-right: 20px;
          }
        }
        .about li {
          // margin: 0
        }
      }
      .last {
        border: none;
      }
      .first {
        padding-left: 29px;
      }
    }
  }
}
</style>
