<template>
  <div>
    <div class="skills__table-header">
      <div class="card-title white-text">{{ count.name }}</div>
      <div v-scroll="countMethod" class="card-title yellow-text"></div>
    </div>
    <div class="progress">
      <div class="determinate" v-scroll="countMethodWidth"></div>
    </div>
  </div>
</template>

<script>

import {mapState} from "vuex";
export default {
  props: {
    count: {
      type: Object,
      required: true
    }
  },
  methods: {
    countMethod: function (evt, el) {
      let val = 0
      if (window.scrollY > (window.innerHeight / 5)){
        el.innerText = val
        setInterval(() => {
          if(++val <= this.count.percent) {
            el.innerText = val + '%'
          } else if (++val > this.count.percent) {
            el.innerText = this.count.percent + '%'
            clearInterval()
          }
        }, 3000 / this.count.percent)
      }
      return window.scrollY > window.innerHeight / 5
    },
    countMethodWidth: function (evt, el) {
      let val = 0
      if (window.scrollY > (window.innerHeight / 5)){
        el.innerText = val
        setInterval(() => {
          if(++val <= this.count.percent) {
            el.setAttribute('style', `width: ${val}%`)
          } else if (++val > this.count.percent) {
            el.setAttribute('style', `width: ${this.count.percent}%`)
            clearInterval()
          }
        }, 3000 / this.count.percent)
      }
      return window.scrollY > window.innerHeight / 5
    },
  },
  computed: {
    ...mapState({
      counters: state => state.CountersModule.counters
    })
  }
}
</script>

<style scoped lang="scss">
.skills {
  &__table {
    &-header {
       display: flex;
       justify-content: space-between;
       padding-top: 20px;
     }
  }
}
.determinate {
  background: var(--color-yelow-light);
}
</style>