<template>
  <Mouse>
    <template v-slot="scope">
      <img
        src="@/assets/rabbit.jpg"
        :style="{
          position: 'absolute',
          left: `${scope.location.x}px`,
          top: `${scope.location.y}px`
        }"
      />
    </template>
  </Mouse>
</template>

<script>
import Mouse from './Mouse.vue'

export default {
  name: 'ScopedSlotsMouse',

  components: {
    Mouse
  }
}
</script>
