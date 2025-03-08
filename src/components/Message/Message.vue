<template>
  <Transition>
    <div
      v-if="showMessage"
      class="absolute top-[20px] left-[50%] -translate-x-[50%] px-[15px] py-[8px] flex justify-center w-fit items-center bg-[white] rounded-md"
    >
      <Icon class="mr-[7px] text-[14px]" :icon="iconStyle.icon" :class="iconStyle.classStyle" />
      <p class="text-[#696969]">{{ props.message }}</p>
    </div>
  </Transition>
</template>
<script setup>
import { Icon } from '@iconify/vue'
import { defineProps, ref, onMounted } from 'vue'
const showMessage = ref(false)
onMounted(() => {
  showMessage.value = true
  setTimeout(() => {
    showMessage.value = false
    if (props.type === 'loading') {
      props.resolve()
    }
  }, props.closeTime)
})
const props = defineProps({
  type: {
    type: String,
    default: 'normal',
  },
  message: {
    type: String,
    default: 'This is a normal message',
  },
  closeTime: {
    type: Number,
    default: 1000,
  },
  resolve: {
    type: Function,
  },
  reject: {
    type: Function,
  },
})
let iconStyle = {}
switch (props.type) {
  case 'success':
    iconStyle.icon = 'ep:success-filled'
    iconStyle.classStyle = 'text-[#8ad764]'
    console.log('success')
    break
  case 'error':
    iconStyle.icon = 'ix:error-filled'
    iconStyle.classStyle = 'text-[#ff4d4f]'
    console.log('error')
    break
  case 'warning':
    iconStyle.icon = 'ooui:notice'
    iconStyle.classStyle = 'text-[#faad14]'
    console.log('warning')
    break
  case 'loading':
    iconStyle.icon = 'line-md:loading-loop'
    iconStyle.classStyle = 'text-[#1890ff]'
    console.log('loading')
    break
  default:
    iconStyle.icon = 'ooui:notice'
    iconStyle.classStyle = 'text-[#1890ff]'
    console.log('normal')
    break
}
</script>
<style scoped>
.v-enter-from,
.v-leave-to {
  transform: translate3d(-50%, -100%, 0);
}
.v-enter-to,
.v-leave-from {
  transform: translate3d(-50%, 0, 0);
}
.v-enter-active,
.v-leave-active {
  transition: all ease-out 100ms;
}
</style>
