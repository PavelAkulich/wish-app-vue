<template>
  <li>
    <router-link
      :to="{ path: menuItem.url }"
      class="flex gap-4 p-2 py-4 transition-all border-l-4 border-solid"
      :class="{
        'border-default-fontLight': $route.path.includes == menuItem.url,
        'hover:bg-default-gradientDark hover:border-default-fontLight  border-transparent':
          $route.path !== menuItem.url
      }"
    >
      <div className="text-left grow">{{ menuItem.label }}</div>
    </router-link>
  </li>
</template>

<script>
export default {
  props: {
    menuItem: Object
  }
}
</script>
