<template>
  <div class="app-header">
    <ul class="app-button-list">
      <li
        v-for="button in buttons"
        :key="button.component"
        :class="[
          'app-button-item', 
          { 'app-button-item--active': button.component === current }
        ]"
        @click="handleClick(button.component)"
      >
        {{ button.name }}
      </li>
    </ul>
  </div>
  <component :is="current" />
</template>

<script>
import { ref } from 'vue'
import Mouse from '@/components/Mouse/index.vue'
import MouseMixin from '@/components/Mixin/index.vue'
import MouseScopedSlots from '@/components/ScopedSlots/index.vue'
import MouseHoc from '@/components/Hoc/index.vue'
import MouseRenderProps from '@/components/RenderProps/index.vue'
import MouseHook from '@/components/Hook/index.vue'

const buttons = Object.freeze([
  { name: '效果演示', component: 'Mouse' },
  { name: 'Mixin', component: 'MouseMixin' },
  { name: 'Scoped Slots', component: 'MouseScopedSlots' },
  { name: 'Hoc', component: 'MouseHoc' },
  { name: 'Render Props', component: 'MouseRenderProps' },
  { name: 'Hook', component: 'MouseHook' }
])

export default {
  name: 'App',

  components: {
    Mouse,
    MouseMixin,
    MouseScopedSlots,
    MouseHoc,
    MouseRenderProps,
    MouseHook
  },

  setup() {
    const current = ref('Mouse')

    const handleClick = (component) => {
      current.value = component
    }

    return {
      buttons,
      current,
      handleClick
    }
  }
}
</script>

<style>
  * {
    margin: 0;
    padding: 0;
  }

  .app-header {
    min-width: 1000px;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f5f5f5;
  }

  .app-button-list {
    width: 900px;
    display: flex;
    justify-content: space-between;
    list-style: none;
    font-size: 14px;
    color: #222;
    user-select: none;
  }

  .app-button-item {
    width: 130px;
    height: 40px;
    line-height: 40px;
    cursor: pointer;
    text-align: center;
    border-radius: 4px;
    background-color: #fff;
  }

  .app-button-item--active {
    background-color: #07c160;
    color: #fff;
  }

  img {
    width: 100px;
    height: 100px;
    border-radius: 4px;
    object-fit: cover;
    pointer-events: none;
  }
</style>
