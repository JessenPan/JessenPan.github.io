<template>
  <ul class="icon-wrapper">
    <li v-for="(item, index) in iconArr" :key="index">
        <a :href="item.link" target="_blank">
          <i :class="`iconfont ${item.iconClass}`"></i>
          <p class="icon-name">{{ item.iconName }}</p>
        </a>
    </li>
  </ul>
</template>

<script>
export default {
  data () {
    return {
      iconArr: [
        { iconClass: 'reco-mail', link:'mailto:jessenpan@qq.com', iconName: 'Email' },
        { iconClass: 'reco-github',link:'https://github.com/JessenPan', iconName: 'GitHub' }
      ]
    }
  }
}
</script>


<style lang="stylus" scoped>
.icon-wrapper
  padding 0
  list-style none
  a
    color inherit
    &:hover,&:active,&:link,&:visited
      text-decoration none
  li
    display inline-block
    width 80px
    text-align center
    .iconfont
      font-size 26px
</style>
