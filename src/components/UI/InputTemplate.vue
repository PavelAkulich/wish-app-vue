<template>
  <input type="text" class="p-1 rounded w-full outline-none" :value="modelValue" @input="updateInput" />
</template>

<script>
export default {
  name: 'InputTemplate',
  props: {
    modelValue: [String, Number]
  },
  methods: {
    updateInput(event) {
      this.$emit('update:modelValue', event.target.value)
    }
  }
}
</script>

<style scoped>
.input {
  border: 1px solid teal;
  padding: 10px 15px;
  margin-top: 15px;
}
</style>
