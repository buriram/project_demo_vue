<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <div class="text-xs-center">
        <img src="/LOGO_VEC_OK.png" alt="ระบบจัดการข้อมูลนักศึกษา" class="mb-5" />
        <h1>ระบบจัดการข้อมูล นักเรียน นักศึกษา</h1>
        <p>database [ db->dbstudent ]</p>
        <p>database [ tb->student,admin,behavior ]</p>
        <br>
        <p>สมัครสมาชิก เพิ่ม  ลบ แก้ไข ลบ จัดการพฤติกรรม</p>
      </div>
    </v-flex>
  </v-layout>
</template>
<script>
export default {
  data() {
    return {
      id: 1,
    }
  },
}
</script>
