import { createApp } from 'vue'
import Message from './Message.vue'
export const useMessage = {
  open(opt) {
    return new Promise((resolve, reject) => {
      // const element = document.createElement('div')
      const element = document.createDocumentFragment()
      const main = document.querySelector('#main')
      createApp(Message, { ...opt, resolve, reject }).mount(element)
      main.appendChild(element)
    })
  }
}