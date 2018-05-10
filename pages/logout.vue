<script>
export default {
  created () {
      window.sessionStorage.removeItem('user')
      this.$router.replace('/')
  }
}
</script>
