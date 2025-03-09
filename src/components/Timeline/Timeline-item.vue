<template>
  <li class="relative flex flex-col pb-[30px]">
    <div class="flex">
      <Icon
        :style="{ color: props.color }"
        class="mr-[5px] mt-[4px] relative z-50"
        :icon="iconType"
      />
      <p><slot></slot></p>
    </div>
    <div
      style="height: calc(100% - 14px)"
      class="line absolute top-[19px] left-[6px] w-[2px] h-full bg-[#f0f0f0]"
    ></div>
  </li>
</template>
<script setup>
import { Icon } from '@iconify/vue'
import { defineProps } from 'vue'
const props = defineProps({
  color: {
    type: String,
    default: '#1890ff',
  },
  iconType: {
    type: String,
    default: 'circle',
  },
})
let iconType
switch (props.iconType) {
  case 'pending':
    iconType = 'line-md:loading-loop'
    break
  default:
    iconType = 'uil:circle'
    break
}
console.log(props.iconType)
</script>
