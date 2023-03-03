<template>
  <div v-if="isAuth" class="flex w-screen h-screen bg-default-grey">
    <div class="w-[200px]">
      <aside-vue />
    </div>
    <div class="w-[calc(100%-200px)]">
      <div class="h-[80px] w-full"><header-vue /></div>
      <div class="h-[calc(100%-80px)] w-full"><router-view></router-view></div>
    </div>
  </div>
  <div v-else className="w-screen h-screen flex justify-center items-center bg-default-grey">
    <div
      className="lg:w-1/3 w-2/3 h-2/3 bg-default-bg rounded-lg shadow-lg p-3 border-default border"
    >
      <Auth />
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Aside from './components/Aside.vue'
import Auth from './components/Auth.vue'
import { mapState, mapActions } from 'pinia'
import { useAuthStore } from './stores'
export default {
  components: { 'header-vue': Header, 'aside-vue': Aside, Auth },
  computed: {
    ...mapState(useAuthStore, ['isAuth'])
  },
  methods: {
    ...mapActions(useAuthStore, ['authUser'])
  }
}
</script>
