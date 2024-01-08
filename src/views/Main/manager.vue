<template>
  <div class="manager">
    <div class="update" @click="updateWeb">更新前端</div>
  </div>
</template>

<script>
import {
  getUpdateWeb
} from '@/api/index'

export default {
  data() {
    return {
      contentList: [
        {
          title: 'aaa'
        },
        {
          title: 'bbb'
        },
        {
          title: 'ccc'
        }
      ]
    }
  },
  methods: {
    updateWeb() {
      getUpdateWeb().then(res => {
        console.log('测试res', res)
      })
    }
  }
}
</script>

<style lang="less" scoped>
.manager {
  padding: 20px 30px;
  height: 2000px;
  .update {
    cursor: pointer;

    &:hover {
      color: rgb(64, 158, 255);
    }
  }
}
</style>