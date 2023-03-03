<template>
  <div>
    <div class="px-5 flex justify-between items-center">
      <h1 class="text-xl text-default font-bold">list of posts available to me</h1>
    </div>
    <div class="grid grid-cols-4 px-4 justify-items-stretch items-stretch">
      <WishItem v-for="wishItem in wishList" :wishItem="wishItem" :key="wishItem._id" />
    </div>
  </div>
</template>

<script>
import { Api } from '../api/defaultApi'
import WishItem from '../components/WishItem.vue'

export default {
  components: { WishItem },
  data() {
    return { wishList: [] }
  },
  methods: {
    async getWishList() {
      const res = await Api().wish.getWishListAll()
      this.wishList = [...res]
    }
  },
  mounted() {
    this.getWishList()
  }
}
</script>
