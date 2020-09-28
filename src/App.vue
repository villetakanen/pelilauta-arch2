<template>
  <AppBar />
  <MaterialButton
    fab
  >
    +
  </MaterialButton>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AppBar from './components/AppBar.vue'
import MaterialButton from './components/MaterialButton.vue'

export default defineComponent({
  components: {
    AppBar,
    MaterialButton
  }
})
</script>
