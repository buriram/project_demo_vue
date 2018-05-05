<template>
  <div>
    <v-select
      :items="clsList"
      v-model="cls"
      label="Select"
      single-line
    />
    <ul>
      <li v-for="st in students" :key="st.id">
        {{ st.code }} {{ st.firstName }} {{ st.lastName }}
        <v-btn @click="edit_st(st.id)" flat left><v-spacer></v-spacer><v-icon>create</v-icon></v-btn>
        <v-btn @click="delete_st(st.id )" flat left><v-icon>delete_forever</v-icon></v-btn>
        <v-btn @click="add_st(st.id)" flat><v-icon>add_box</v-icon></v-btn>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      cls: '1',
      students: [],
      clsList: [
        { value: '1', text: 'ชั้นปีที่ 1' },
        { value: '2', text: 'ชั้นปีที่ 2' },
        { value: '3', text: 'ชั้นปีที่ 3' },
      ],
    }
  },
  watch: {
    cls() {
      this.getStudent()
    },
  },
  async created() {
    console.log('created')
    this.getStudent()
  },
  methods: {
    async getStudent() {
      // let res = await this.$http.get('/student?class=' + this.cls)
      let res = await this.$http.get('/student', {params: {class: this.cls}})
      this.students = res.data.student
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