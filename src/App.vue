<template>
  <AppBar />
  <div style="margin-top:72px">Hello!..</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AppBar from './components/AppBar.vue'

export default defineComponent({
  components: {
    AppBar
  }
})
</script>

<style lang="css">
@import url("./css/base.css");
</style>
