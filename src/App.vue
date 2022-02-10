<template>
  <div class="main">
    <router-view />
  </div>
</template>

<script lang="ts">
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap');

* {
  margin: 0;
  box-sizing: border-box;
    font-family: 'Noto Sans', sans-serif;
}
body {
  background-color: #555555;
}
.main {
  height: 100%;
  background-color: #555555;
  padding: 20px;
}
</style>
