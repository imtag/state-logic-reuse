<script>
import { ref } from 'vue'
import catImg from '@/assets/cat.jpg'

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
  },

  render() {
    const { x, y } = this
    return (
      <img
        src={catImg}
        style={{
          position: 'absolute',
          left: `${x}px`,
          top: `${y}px`
        }}
      />
    )
  }
}
</script>
