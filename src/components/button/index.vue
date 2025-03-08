<template>
  <button
    :style="{ backgroundColor: props.backgroundColor, color: props.color }"
    class="px-[10px] py-[5px] rounded-lg"
  >
    {{ props.text }}
  </button>
</template>
<script setup>
import { defineProps } from 'vue'
const props = defineProps({
  backgroundColor: {
    type: String,
    default: '#188dfa',
  },
  color: {
    type: String,
    default: 'white',
  },
  text: {
    type: String,
    default: 'open normal',
  },
})
</script>
