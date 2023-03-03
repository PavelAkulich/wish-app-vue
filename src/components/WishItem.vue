<template>
  <div
    class="w-full p-4 box-border text-default duration-500"
    :class="{
      'hover:scale-105 transition-all cursor-pointer': isAnimation
    }"
  >
    <div class="w-full rounded-md p-4 h-full bg-default-bg border border-solid border-default">
      <div className="flex gap-4">
        <div className="grow">
          <div className="font-bold text-xl">{{ wishItem.name.toUpperCase() }}</div>
          <div className="h-[80px] text-sm mt-[10px]">{{ wishItem.description }}</div>
        </div>
        <div v-if="!!wishItem.avatarUrl" class="w-20 relative">
          <img :src="'http://localhost:5555/' + wishItem.avatarUrl" :alt="wishItem.name" />
        </div>
      </div>
      <div v-if="showBtns" class="flex gap-2 justify-between">
        <ButtonTemplate>Update</ButtonTemplate>
        <ButtonTemplate @click="$emit('deleteWishItem', wishItem._id)">Delete</ButtonTemplate>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    wishItem: Object,
    showBtns: {
      type: Boolean,
      default: false
    },
    isAnimation: {
      type: Boolean,
      default: false
    }
  }
}
</script>
