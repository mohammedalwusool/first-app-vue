<template>
  <div class="about">
    <h1>This is an about page</h1>
    <WelcomeMsg></WelcomeMsg>
  </div>
</template>

<script>
// @ is an alias to /src
import WelcomeMsg from '@/components/temp.vue';

export default {
  name: 'AboutView',
  components: {
    WelcomeMsg,
  },
};
</script>
