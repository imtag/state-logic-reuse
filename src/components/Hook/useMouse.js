import { ref } from 'vue'

export function useMouse() {
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
