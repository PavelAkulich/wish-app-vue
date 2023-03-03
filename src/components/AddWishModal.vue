<template>
  <form @submit.prevent="saveWishItem">
    <div>
      <div className="flex justify-between">
        <div className="font-bold text-xl">Новая запись</div>
        <!-- <div>
              <input
                type="checkbox"
                value="0"
                checked={global}
                name={`global`}
                onChange={() => {
                  console.log("checkbox");
                  console.log(global);
                  setGlobal((prev) => !prev);
                  console.log(global);
                }}
                id={`global`}
                className="hidden"
              />
              <label
                htmlFor={`global`}
                className={`w-full px-1 text-center rounded cursor-pointer ${
                  global
                    ? "border border-solid border-default bg-default/10 "
                    : "hover:bg-default/10 border border-solid border-transparent"
                }`}
              >
                Видно всем
              </label>
            </div> -->
      </div>

      <div className="py-2">
        <label htmlFor="{name}">Название</label>
        <InputTemplate v-model="name" type="text" />
        <div className="h-2 text-red-500 text-xs">Название error</div>
      </div>

      <ButtonTemplate type="button" @click="$refs.image.click()">
        {{ image ? image.name : 'Выбрать изображение' }}
      </ButtonTemplate>
      <input type="file" accept="image/*" ref="image" className="hidden" @change="setImage" />

      <div className="py-2">
        <label htmlFor="{name}">Описание</label>
        <InputTemplate v-model="description" type="text" />
        <div className="h-2 text-red-500 text-xs">Описание error</div>
      </div>
    </div>
    <div>
      <ButtonTemplate type="submit">Save</ButtonTemplate>
      <ButtonTemplate @click="$emit('closeModal')">Close</ButtonTemplate>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      description: '',
      image: null
    }
  },
  methods: {
    setImage(event) {
      this.image = event.target.files[0]
    },
    saveWishItem() {
      const formData = new FormData()
      if (this.image) formData.append('avatarUrl', this.image)
      // if (global) formData.append("global", "true");
      formData.append('name', this.name)
      formData.append('description', this.description)
      this.$emit('saveWish', formData)
    }
  }
}
</script>
