<template>
  <div class="w-full h-full p-4 box-border text-default">
    <div class="w-full rounded-md p-4 h-full bg-default-bg border border-solid border-default">
      <div v-if="!isLoading" class="h-full flex flex-col" >
        <div className="text-center font-bold text-2xl">{{ wishItem?.name }}</div>
        <div className="flex gap-4 p-10 grow">
          <div className="w-2/3 text-lg">{{wishItem?.description}}</div>
          <div className="w-1/3 text-lg relative">
            <img
              className="w-full"
              :src="'http://localhost:5555/' + wishItem?.avatarUrl"
              :alt="wishItem.name"
            />
          </div>
        </div>
        <div className="flex px-10 justify-between items-center">
          <div>{{`Владелец: ${wishItem.user?.fullName}`}}</div>
          <div className="flex gap-10 justify-between">
            <ButtonTemplate>Редактировать</ButtonTemplate>
            <ButtonTemplate>Удалить</ButtonTemplate>
          </div>
        </div>
      </div>
      <div v-else class="h-full">Loading...</div>
    </div>
  </div>
</template>

<script>
import { Api } from '../api/defaultApi'
export default {
  data() {
    return {
      wishItem: {},
      isLoading: false
    }
  },
  methods: {
    async getWishItem() {
      this.isLoading = true
      const res = await Api().wish.getWishItem(this.$route.params.id)
      this.wishItem = res
      this.isLoading = false
    }
  },
  mounted() {
    this.getWishItem()
  }
}
</script>
