<template>
  <div class="Mouse">
    <slot v-bind:location="{ x, y }" />
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'Mouse',

  setup() {
    const x = ref(20)
    const y = ref(100)

    document.onmousemove = (e) => {
      if (e.offsetY > 80) {
        x.value = e.offsetX
        y.value = e.offsetY
      }
    }

    return { x, y }
  }
}
</script>
