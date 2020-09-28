<template>
  <button :class="`material-button ${buttonClasses}`">
    <slot />
  </button>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'

export default defineComponent({
  props: {
    fab: {
      type: String,
      required: false,
      default: undefined
    },
    action: {
      type: Function,
      required: false,
      default: () => {}
    }
  },
  setup (props) {
    const buttonClasses = computed(():boolean|string|undefined => (typeof props.fab !== 'undefined' ? 'material-fab' : ''))
    return { buttonClasses }
  }
})
</script>
