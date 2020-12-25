<script>
import { h } from 'vue'
import { withMouse } from './withMouse.js'
import pigImg from '@/assets/pig.jpg'

function Component(props) {
  const { x, y } = props
  return (
    <img
      src={pigImg}
      style={{
        position: 'absolute',
        left: `${x}px`,
        top: `${y}px`
      }}
    />
  )
}

const Hoc = withMouse(Component)

export default {
  name: 'HocMouse',

  render() {
    return h(Hoc)
  }
}
</script>
