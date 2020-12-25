<script>
import mouseMixin from './mouseMixin.js'
import dogImg from '@/assets/dog.jpg'

export default {
  name: 'MixinMouse',

  mixins: [mouseMixin],

  render() {
    const { x, y } = this
    return (
      <img
        src={dogImg}
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
