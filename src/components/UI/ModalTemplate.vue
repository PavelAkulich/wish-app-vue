<template>
  <div
    class="top-0 bottom-0 right-0 left-0 bg-black/50 fixed flex"
    v-if="show"
    @click="$emit('update:show', false)"
  >
    <div class="m-auto bg-default-bg border border-default rounded-xl p-5 min-w-[300px] min-h-[100px]" @click.stop>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ModalTemplate',
  props: {
    show: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
.dialog__content {
  margin: auto;
  background: white;
  border-radius: 12px;
  min-height: 50px;
  min-width: 300px;
  padding: 20px;
}
</style>
