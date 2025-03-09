<template>
  <ul class="timeline mt-[20px]">
    <slot></slot>
    <TimelineItem iconType="pending">{{ props.pending }}</TimelineItem>
  </ul>
</template>
<script setup>
import { onMounted, defineProps, watchEffect, watch } from 'vue'
import TimelineItem from './Timeline-item.vue'
onMounted(() => {
  const timeline = document.querySelector('.timeline')
  timeline.lastElementChild.querySelector('.line').classList.add('hidden')
  function reverseTimeline() {
    timeline.lastElementChild.querySelector('.line').classList.remove('hidden')
    let timelineChildNodes = Array.from(timeline.children).reverse()
    timeline.innerHTML = ''
    timelineChildNodes.forEach((child) => timeline.appendChild(child))
    timeline.lastElementChild.querySelector('.line').classList.add('hidden')
  }
  watch(
    () => props.reverse,
    () => reverseTimeline()
  )
})
const props = defineProps({
  pending: {
    type: String,
  },
  reverse: {
    type: Boolean,
  },
})
</script>
