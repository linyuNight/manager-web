<template>
  <div class="main">
    <div class="tab">
      <div class="tab-contain">
        <div 
          v-for="(item, index) in tabList" 
          :key="index"
          class="tab-item"
          :class="active == index ? 'active' : ''"
          @click="handlerClick(item, index)"
        >
          <div>{{ item.label }}</div>
        </div>
      </div>
    </div>
    <div class="main-contain">
      <router-view />
    </div>    
  </div>
</template>

<script>

export default {
  data() {
    return {
      active: 0,
      tabList: [
        {
          label: '管理',
          pathName: 'manager'
        },
        {
          label: '测试',
          pathName: 'second'
        }
      ]
    }
  },
  watch: {
    $route() {
      this.init();
    },
  },
  created() {
    this.init()
  },
  methods: {
    init() {
      let index = this.tabList.findIndex(val => {
        return (
          this.$route.name == val.pathName
        );
      });

      this.active = index;
    },
    handlerClick(item, index) {
      this.$router.push({
        name: item.pathName
      })
    }
  }
}
</script>

<style lang="less" scoped>
.main {
  .tab {
    position: fixed;
    top: 0;
    left: 0;    
    width: 100%;
    border-bottom: 1px solid #ccc;
    background: #fff;
    .tab-contain {
      display: flex;
      margin: 0 auto;
      width: 1400px;
      .tab-item {
        height: 50px;
        text-align: center;
        line-height: 50px;
        margin-right: 30px;
        padding: 0 30px;
        cursor: pointer;
      }
      .active {
        color: rgb(64, 158, 255);
      }
    }    
  }
  .main-contain {
    margin: 0 auto;
    width: 1400px;
    padding-top: 51px;
    background: #fff;
  }
}
</style>