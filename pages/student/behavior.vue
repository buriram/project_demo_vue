<template>
  <div>
    <ul>
      <li v-for="st in students" :key="st.id">
        {{ st.code }} {{ st.behav }} {{ st.bDate }} {{ st.bTime }}

      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      students: [],
    }
  },
  async created() {
    console.log('created')
    this.getStudent()
  },
  methods: {
    async getStudent() {
      // let res = await this.$http.get('/student?class=' + this.cls)
      let res = await this.$http.get('/student/behav')
      this.students = res.data.behavior
    },
    edit_st(id) {
        this.$router.push('/student/edit?id='+id)
    },
    add_st(id) {
        this.$router.push('/student/add_beh?id='+id)
    },
    delete_st(id) {
        this.$router.push('/student/delete?id='+id)
    },
  }, // methods
}
</script>