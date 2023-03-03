<template>
  <div class="w-full h-[50px] flex justify-end px-10 gap-10 shadow-md items-center">
    <ButtonTemplate @click="logoutUser">{{ fullName.toUpperCase() || 'Выйти' }}</ButtonTemplate>
  </div>
</template>

<script>
import { mapActions, mapState } from 'pinia'
import { useAuthStore } from '../stores'

export default {
  computed: {
    ...mapState(useAuthStore, ["fullName"])
  },
  methods: {
    ...mapActions(useAuthStore, ['logoutUser'])
  }
}
</script>
