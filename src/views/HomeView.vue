<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" width="200" />
    <HelloWorld msg="this is an home page" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
  },
};
</script>
