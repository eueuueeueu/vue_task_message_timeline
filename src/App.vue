<template>
  <div id="main" class="w-screen h-screen overflow-hidden bg-red-200">
    <!-- message -->
    <div class="flex w-full justify-around">
      <Btn
        @click="
          onOpenMessage({
            type: 'normal',
            message: 'This is a normal message',
            closeTime: 2000,
          })
        "
      />
      <Btn
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
      <Btn
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
      <Btn
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
      <Btn
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
    <Timeline pending="Recording..." :reverse="reverse">
      <TimelineItem color="green">Create a services site 2015-09-01</TimelineItem>
      <TimelineItem color="green">Solve initial network problems 2015-09-01</TimelineItem>
      <TimelineItem color="red">
        <p>Solve initial network problems 1</p>
        <p>Solve initial network problems 2</p>
        <p>Solve initial network problems 3 2015-09-01</p>
      </TimelineItem>
      <TimelineItem>
        <p>Technical testing 1</p>
        <p>Technical testing 2</p>
        <p>Technical testing 3 2015-09-01</p>
      </TimelineItem>
      <TimelineItem color="gray">
        <p>Technical testing 1</p>
        <p>Technical testing 2</p>
        <p>Technical testing 3 2015-09-01</p>
      </TimelineItem>
      <TimelineItem color="gray">
        <p>Technical testing 1</p>
        <p>Technical testing 2</p>
        <p>Technical testing 3 2015-09-01</p>
      </TimelineItem>
    </Timeline>
    <Btn text="Toggle Reverse" @click="reverse = !reverse" />
  </div>
</template>
<script setup>
import { ref } from 'vue'
import Btn from './components/Button/index.vue'
import Timeline from './components/Timeline/Timeline.vue'
import TimelineItem from './components/Timeline/Timeline-item.vue'
import { useMessage } from './components'
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
const reverse = ref(false)
</script>
