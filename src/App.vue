<template>
  <div id="app">
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
.fade-enter-active{
    transition: opacity .5s;
}
.fade-leave-active{
    transition: opacity .5s;
}
.fade-enter-from, 
.fade-leave-to{
    opacity: 0;
}

</style>
