<template>
  <div>
    <div class="px-5 flex justify-between items-center">
      <h1 class="text-xl text-default font-bold">List of my posts</h1>
      <ButtonTemplate @click="this.showModal = true">ADD</ButtonTemplate>
    </div>
    <div class="grid grid-cols-4 px-4 justify-items-stretch items-stretch">
      <WishItem
        v-for="wishItem in wishList"
        :wishItem="wishItem"
        :key="wishItem._id"
        @dblclick="getItem(wishItem._id)"
        @deleteWishItem="deleteById"
        @editWishItem="editById"
        :showBtns="true"
        :isAnimation="true"
      />
    </div>
    <ModalTemplate v-model:show="showModal">
      <AddWishModal @closeModal="this.showModal = false" @saveWish="createWish" />
    </ModalTemplate>
  </div>
</template>

<script>
import { Api } from '../api/defaultApi'
import WishItem from '../components/WishItem.vue'
import AddWishModal from '../components/AddWishModal.vue'

export default {
  components: { WishItem, AddWishModal },
  data() {
    return { wishList: [], showModal: false }
  },
  methods: {
    async getWishList() {
      const res = await Api().wish.getWishList()
      this.wishList = [...res]
    },
    getItem(id) {
      this.$router.push(`/wish-list/${id}`)
    },
    async createWish(newWish) {
      await Api().wish.createWishItem(newWish)
      this.showModal = false
      this.getWishList()
    },
    async deleteById(id) {
      await Api().wish.deleteWishItem(id)
      this.getWishList()
    },
    editById(id) {
      this.$router.push(`/wish-list/${id}/edit`);
    }
  },
  mounted() {
    this.getWishList()
  }
}
</script>
