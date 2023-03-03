<template>
  <button
    class="border font-bold rounded border-solid border-transparent text-[18px] hover:opacity-80 transition-all hover:border-default hover:text-default duration-300 px-3 py-1"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'ButtonTemplate'
}
</script>
