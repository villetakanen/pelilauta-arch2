<template>
  <div class="main-view">
    Login
    <div>
      <MaterialButton class="googleLoginButton">
        <img
          src="../assets/google.svg"
          alt="G"
          class="icon"
        > Login with Google
      </MaterialButton>
    </div>
    <div>
      <MaterialButton class="facebookLoginButton">
        <img
          src="../assets/facebook.svg"
          alt="F"
          class="icon"
        > Login with GoogleLogin with Facebook
      </MaterialButton>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import MaterialButton from '../components/MaterialButton.vue'

export default defineComponent({
  components: {
    MaterialButton
  }
})
</script>

<style lang="sass">

.googleLoginButton
  background-color: white
  color: #666

.facebookLoginButton
  background-color: #4267B2
  color: rgba(255,255,255,0.8)

</style>
