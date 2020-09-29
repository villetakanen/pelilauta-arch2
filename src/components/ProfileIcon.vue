<template>
  <MaterialButton
    :action="reroute"
    icon
  >
    <img
      src="../assets/dragon-dark.svg"
      alt="M"
    >
  </MaterialButton>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'
import MaterialButton from './MaterialButton.vue'

export default defineComponent({
  components: {
    MaterialButton
  },
  setup () {
    const router = useRouter()

    const reroute = () => {
      router.push('/login')
    }
    return { reroute }
  }
})
</script>
