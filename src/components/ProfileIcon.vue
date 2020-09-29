<template>
  <MaterialButton icon>
    <img
      src="../assets/dragon-dark.svg"
      alt="M"
    >
  </MaterialButton>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import MaterialButton from './MaterialButton.vue'

export default defineComponent({
  components: {
    MaterialButton
  }
})
</script>
