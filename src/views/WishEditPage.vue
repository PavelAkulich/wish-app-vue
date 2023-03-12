<template>
  <div class="w-full h-full p-4 box-border text-default">
    <div class="w-full rounded-md p-4 h-full bg-default-bg border border-solid border-default">
      <div v-if="!isLoading" class="h-full flex flex-col">
        <div className="text-center font-bold text-2xl">{{ 'Edit: ' + prevName }}</div>
        <div className="flex gap-4 p-10 grow">
          <div className="w-2/3 text-lg relative flex flex-col gap-5">
            <div>
              <div className="py-2">
                <label htmlFor="name">Name</label>
                <InputTemplate v-model="name" type="text" name="name" id="name" />
                <div className="h-2 text-red-500 text-xs">Name error</div>
              </div>
            </div>
            <div>
              <div className="py-2">
                <label htmlFor="description">Description</label>
                <InputTemplate
                  v-model="description"
                  type="text"
                  name="description"
                  id="description"
                />
                <div className="h-2 text-red-500 text-xs">Description error</div>
              </div>
            </div>
            <div>
              <div className="py-2">
                <ButtonTemplate type="button" @click="$refs.image.click()">
                  {{ image ? image.name : 'Change image' }}
                </ButtonTemplate>
                <input
                  type="file"
                  accept="image/*"
                  ref="image"
                  className="hidden"
                  @change="setImage"
                />
              </div>
            </div>
          </div>

          <div className="w-1/3 text-lg relative py-2">
            <img className="w-full" :src="'http://localhost:5555/' + avatarUrl" :alt="prevName" />
          </div>
        </div>
        <div className="flex px-10 justify-end items-center">
          <div className="flex gap-10 justify-between">
            <ButtonTemplate @click="saveItem">Сохранить</ButtonTemplate>
            <ButtonTemplate @click="$router.back()">Отменить</ButtonTemplate>
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
      name: '',
      prevName: '',
      description: '',
      avatarUrl: '',
      image: null,
      isLoading: false
    }
  },
  methods: {
    async getWishItem() {
      this.isLoading = true
      const res = await Api().wish.getWishItem(this.$route.params.id)
      this.name = res.name
      this.prevName = res.name
      this.description = res.description
      this.avatarUrl = res.avatarUrl
      this.isLoading = false
    },
    async saveItem() {
      const formData = new FormData()
      if (this.image) formData.append('avatarUrl', this.image)
      // if (global) formData.append("global", "true");
      formData.append('name', this.name)
      formData.append('description', this.description)
      await Api().wish.updateWishItem(
        formData,
        this.$route.params.id
      )
      this.$router.back()
    },
    setImage(event) {
      this.image = event.target.files[0]
    },
  },
  mounted() {
    this.getWishItem()
  }
}
</script>
