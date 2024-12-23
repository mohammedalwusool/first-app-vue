<template>
  <div class="header">
    <div class="container">
      <nav>
        <router-link to="/"> Home | </router-link>
        <router-link to="/about"> About </router-link>
        <router-link to="/help">| help </router-link>
        <router-link to="/dashboard">| Dashboard </router-link>
        <router-link to="/editemployee">| Edit employee </router-link>
      </nav>
    </div>
  </div>
</template>
<script>
export default { name: 'header-app' };
</script>
