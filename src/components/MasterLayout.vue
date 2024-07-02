<template>
  <div>
    <header>
      <slot name="header">
      </slot>
    </header>
    <main>
      <router-view></router-view>
    </main>
    <footer>
    </footer>
  </div>
</template>

<script>


export default {
  name: 'MasterLayout',
}
</script>

<style>
/* 레이아웃 스타일 추가 */
</style>
