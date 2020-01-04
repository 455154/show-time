<template>
  <div class="page">
    <ul>
      <li :class="{ disable: pageIndex == 1 }" @click="prev">上一页</li>
      <li @click="toFirst">首页</li>
      <li
        v-for="(item, index) in list"
        :key="index"
        :class="{ active: pageIndex == item }"
        @click="handleClick"
      >
        {{ item }}
      </li>
      <li @click="toEnd">尾页</li>
      <li :class="{ disable: pageIndex == totalCount }" @click="next">下一页</li>
      <li>总共{{ totalCount }}页</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    total: {
      type: [Number, String],
      default: 0
    },
    pagesize: {
      type: [Number, String],
      default: 1
    },
    page: {
      type: [Number, String],
      default: 1
    }
  },
  data() {
    return {
      pageIndex: this.page
    }
  },
  created() {},
  methods: {
    // 页码点击事件
    handleClick(e) {
      this.pageIndex = parseInt(e.target.innerText)
      this.$emit('pagechange', { page: this.pageIndex })
    },
    // 前一页
    prev(e) {
      if (this.pageIndex === 1) return false
      if (!e.target.classList.contains['disable']) {
        this.pageIndex--
        this.$emit('pagechange', { page: this.pageIndex })
      }
    },
    // 下一页
    next(e) {
      if (this.pageIndex === 12) return false
      if (!e.target.classList.contains['disable']) {
        this.pageIndex++
        this.$emit('pagechange', { page: this.pageIndex })
      }
    },
    // 首页
    toFirst() {
      let { page, pagesize, total } = this
      this.pageIndex = 1
      this.$emit('pagechange', { page: 1 })
    },
    // 尾页
    toEnd() {
      let { page, pagesize, total } = this
      this.pageIndex = this.totalCount
      this.$emit('pagechange', { page: this.pageIndex })
    }
  },
  computed: {
    list: {
      get() {
        let list = []
        let totalCount = Math.ceil(this.total / this.pagesize)
        let page = this.pageIndex
        // 超限控制
        if (page <= 0) {
          page = 1
        }
        if (page > totalCount) {
          page = totalCount
        }

        // 计算显示页码
        if (totalCount > 5) {
          if (page > 2 && page < totalCount - 2) {
            list = [
              page - 2,
              page - 1,
              page,
              page + 1,
              page + 2
            ]
          } else if (page <= 2 && page > 0) {
            for (let i = 1; i <= 5; i++) {
              list.push(i)
            }
          } else if (
            page >= totalCount - 2 &&
            page <= totalCount
          ) {
            for (let i = 4; i >= 0; i--) {
              list.push(totalCount - i)
            }
          }
        } else {
          for (let i = 1; i <= totalCount; i++) {
            list.push(i)
          }
        }
        return list
      }
    },
    totalCount() {
      return Math.ceil(this.total / this.pagesize)
    }
  }
}
</script>
<style lang="less" scoped>
div.page {
  display: flex;
  margin-top: 15px;
  font-size: 12px;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  color: #666;
  user-select: none;
}
div.page ul {
  padding: 0;
  margin: 0 auto;
}
div.page ul li {
  display: inline-block;
  min-width: 30px;
  min-height: 30px;
  border-radius: 3px;
  line-height: 30px;
  text-align: center;
  margin: 0 6px;
  cursor: pointer;
}
div.page ul li.active {
  background: #1796e0;
  color: #fff;
}
div.page ul li.disable {
  color: #ccc;
}
</style>
