<script>
import { useMouse } from './useMouse.js'
import mouseImg from '@/assets/mouse.jpg'

export default {
  name: 'HookMouse',

  setup() {
    const { x, y } = useMouse()
    return { x, y }
  },

  render() {
    const { x, y } = this
    return (
      <img
        src={mouseImg}
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
