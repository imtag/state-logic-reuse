import { ref } from 'vue'

export function withMouse(Component) {
  return {
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
    },
  
    render() {
      const { x, y } = this
      return (
        <Component x={x} y={y} />
      )
    }
  }
}
