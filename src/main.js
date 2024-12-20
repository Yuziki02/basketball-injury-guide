import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { ObserveVisibility } from 'vue-observe-visibility'

const app = createApp(App)

app.directive('observe-visibility', {
  beforeMount: (el, binding) => {
    el.$observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        binding.value(true)
      } else {
        binding.value(false)
      }
    })
    el.$observer.observe(el)
  },
  unmounted: (el) => {
    el.$observer.disconnect()
  }
})

app.use(router)
app.mount('#app') 