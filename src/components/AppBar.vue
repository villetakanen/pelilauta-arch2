<template>
  <div
    id="AppBar"
  >
    <div
      id="AppBarToolbar"
      class="toolbar"
    >
      <h1 class="font-button">
        Pelilauta
      </h1>
      <div class="spacer" />
      <ProfileIcon />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ProfileIcon from './ProfileIcon.vue'

export default defineComponent({
  components: {
    ProfileIcon
  }
})
</script>
