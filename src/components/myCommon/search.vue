<template>
  <div id="con">
    <div class="search">
      <p>
        没有找到想学的教程？ 尝试输入关键词
      </p>
      <input type="text" placeholder="搜索教程或关键词" />
      <button><i class="iconfont icon-RectangleCopy"></i>搜索</button>
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
#con {
  background-color: #fcfcfc;
}
.search {
  width: 1200px;
  height: 148px;
  margin: 0 auto;
  background-color: #e7e7e7;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin-bottom: 51px;
  p {
    margin-top: 20px;
    font-family: MicrosoftYaHei;
    font-size: 20px;
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: 0px;
    color: #333333;
    margin-bottom: 37px;
  }
  input {
    width: 480px;
    height: 40px;
    background-color: #ffffff;
    border-radius: 9px 0 0 9px;
    border: solid 1px #ff0000;
    margin-right: 112px;
    padding-left: 42px;
    font-family: MicrosoftYaHeiLight;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    line-height: 24px;
    letter-spacing: 0px;
    color: #999999;
    outline: none;
  }
  button {
    position: absolute;
    top: 85px;
    left: 785px;
    width: 112px;
    height: 42px;
    border: solid 1px #ff0000;
    border-radius: 0 9px 9px 0;
    background-color: #ff0000;
    font-family: MicrosoftYaHei;
    font-size: 20px;
    font-weight: normal;
    font-stretch: normal;
    line-height: 24px;
    letter-spacing: 0px;
    color: #ffffff;
    box-sizing: border-box;
    display: flex;
    padding-left: 16px;
    .iconfont {
      margin-right: 8px;
      width: 24px;
      height: 24px;
      font-size: 24px;
      font-weight: normal;
      font-stretch: normal;
      line-height: 24px;
      letter-spacing: 0px;
      color: #ffffff;
    }
  }
}
</style>
