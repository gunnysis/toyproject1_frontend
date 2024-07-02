<template>
  <router-view></router-view>
</template>

<script>
import { useHead } from 'unhead'

useHead({
  title: 'About',
  meta: [
    { name: 'description', content: 'Learn more about us.' },
  ],
})

export default {
  name: 'App',
}
</script>
