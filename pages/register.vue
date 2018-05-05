<template>
  <div>
    <h1>Register Member.</h1>
    <v-text-field v-model="user" label="ชื่อผู้ใช้" />
    <v-text-field v-model="pass" label="รหัสผ่าน" />
    <v-btn @click="save" color="success">บันทึก</v-btn>
  </div>
</template>
<script>
// http://localhost:3000/#/student/edit?id=1
export default {
  data() {
    return {
      user: '',
      pass: ''
    }
  },
  methods: {
    async save() {
      let res = await this.$http.post('/student/save6', {
        user: this.user,
        pass: this.pass,
      })
      if (!res.data.ok) {
        // TODO: แสดงข้อความ ว่าบันทึกไม่สำเร็จ
      } else {
        // TODO: แสดงข้อความ ว่าบันทึกสำเร็จ
        this.$router.push('/')
      }
    },
  },
}
</script>
