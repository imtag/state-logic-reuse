export default {
  data() {
    return {
      x: 20,
      y: 100
    }
  },

  mounted() {
    document.onmousemove = (e) => {
      if (e.offsetY > 80) {
        this.x = e.offsetX
        this.y = e.offsetY
      }
    }
  }
}
