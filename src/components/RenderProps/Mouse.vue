<script>
import { ref } from 'vue'

export default {
  name: 'Mouse',

  props: {
    render: Function
  },

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
    const { render, x, y } = this
    return (
      render(x, y)
    )
  }
}
</script>
