<script>
import Mouse from './Mouse.vue'
import rabbitImg from '@/assets/rabbit.jpg'

export default {
  name: 'RenderPropsMouse',

  render() {
    return (
      <Mouse render={(x, y) => (
        <img
          src={rabbitImg}
          style={{
            position: 'absolute',
            left: `${x}px`,
            top: `${y}px`
          }}
        />
      )}/>
    )
  }
}
</script>
