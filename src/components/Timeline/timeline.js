import { createApp } from 'vue'
import Timeline from "./Timeline.vue";
export const useTimeline = () => {
  const element = document.createDocumentFragment()
  setTimeout(() => {
    const main = document.querySelector('#main')
    createApp(Timeline, {}).mount(element)
    main.appendChild(element)
  }, 0);
}