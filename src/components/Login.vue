<template>
  <form
    class="flex flex-col justify-between h-full w-full"
    @submit.prevent="authUser({ email, password })"
  >
    <div class="grow">
      <div class="my-2 text-center text-xl font-bold">Войти в систему</div>
      <div>
        <div className="py-2">
          <label htmlFor="{name}">Логин</label>
          <InputTemplate v-model="email" />
          <div className="h-2 text-red-500 text-xs">Логин error</div>
        </div>
      </div>
      <div>
        <div className="py-2">
          <label htmlFor="{name}">Пароль</label>
          <InputTemplate v-model="password" type="password" />
          <div className="h-2 text-red-500 text-xs">Пароль error</div>
        </div>
      </div>
    </div>
    <div class="flex justify-end items-center px-4">
      <ButtonTemplate>Войти</ButtonTemplate>
    </div>
  </form>
</template>

<script>
import { mapActions } from 'pinia'
import { useAuthStore } from '../stores'
export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    ...mapActions(useAuthStore, ['authUser'])
  }
}
</script>
