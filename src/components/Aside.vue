<template>
  <div
    class="h-full w-[200px] rounded-r-3xl bg-gradient-to-b pt-[100px] text-default-fontLight from-default-gradientDark to-default-gradientLight"
  >
    <ul>
      <menu-item v-for="item in menuList" :menuItem="item" :key="item.url" />
    </ul>
  </div>
</template>

<script>
import MenuItem from './MenuItem.vue'
import { menuList } from './constants'

export default {
  data() {
    return {
      menuList
    }
  },
  components: { 'menu-item': MenuItem }
}
</script>
