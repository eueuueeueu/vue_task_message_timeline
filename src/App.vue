<template>
  <div id="main" class="w-screen h-screen overflow-hidden bg-purple-200">
    <!-- message -->
    <div class="flex w-full justify-around">
      <MessageBtn
        @click="
          onOpenMessage({
            type: 'normal',
            message: 'This is a normal message',
            closeTime: 2000,
          })
        "
      />
      <MessageBtn
        @click="
          onOpenMessage({
            type: 'success',
            message: 'This is a success message',
            closeTime: 1500,
          })
        "
        backgroundColor="#8ad764"
        text="open success"
      />
      <MessageBtn
        @click="
          onOpenMessage({
            type: 'error',
            message: 'This is a error message',
            closeTime: 1000,
          })
        "
        backgroundColor="#ff4d4f"
        text="open error"
      />
      <MessageBtn
        @click="
          onOpenMessage({
            type: 'warning',
            message: 'This is a warning message',
            closeTime: 500,
          })
        "
        backgroundColor="#faad14"
        text="open warning"
      />
      <MessageBtn
        @click="
          onOpenMessage({
            type: 'loading',
            message: 'Loading',
            closeTime: 3500,
          })
        "
        text="open loading"
      />
    </div>
    <!-- timeline -->
  </div>
</template>
<script setup>
import MessageBtn from './components/button/index.vue'
import { useMessage, useTimeline } from './components'
function onOpenMessage(option) {
  useMessage.open({ ...option }).then(() => {
    console.log('加载成功')
    onOpenMessage({
      type: 'success',
      message: 'Loaded!',
      closeTime: 1500,
    })
  })
}

useTimeline()
</script>
