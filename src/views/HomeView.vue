<template>
  <div class="home">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link><br/><br/>
    <router-link to="/test1"><button type="button" class="btn btn-primary">Jump to test site</button></router-link>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>

<style scoped>
.home{
  text-align: center;
}
div a {
  font-weight: bold;
  color: #2c3e50;
}

div a.router-link-exact-active {
  color: #42b983;
}
</style>
