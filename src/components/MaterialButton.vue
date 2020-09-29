<template>
  <button :class="`material-button ${buttonClasses}`">
    <slot />
  </button>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'

export default defineComponent({
  props: {
    fab: {
      type: String,
      required: false,
      default: undefined
    },
    icon: {
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
    const classStruct:string[] = []
    const activeClasses = ref(classStruct)
    if (typeof props.fab !== 'undefined') activeClasses.value.push('material-fab')
    else if (typeof props.icon !== 'undefined') activeClasses.value.push('material-button-icon')

    const buttonClasses = computed(():string => (activeClasses.value.join(' ')))

    return { buttonClasses }
  }
})
</script>
