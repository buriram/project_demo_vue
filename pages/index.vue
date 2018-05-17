<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <div class="text-xs-center">
        <img src="/LOGO_VEC_OK.png" alt="ระบบจัดการข้อมูลนักศึกษา" class="mb-5" />
        <h1>ตรวจสอบข้อมูลการเข้าร่วมกิจกรรม</h1>
        <v-text-field v-model="user" label="ชื่อผู้ใช้" />
        <v-text-field v-model="pass" label="รหัสผ่าน" />
        <v-btn @click="Dosend" color="success">ตกลง</v-btn>
        <v-snackbar
            top
            v-model="snackbar">
            <v-alert :value="true" outline color="error" icon="warning" @click.native="snackbar = false">
              Err Don't Login.
            </v-alert>
           </v-snackbar>
      </div>
    </v-flex>
  </v-layout>
</template>
<script>
export default {
  data() {
    return {
      id: 1,
      snackbar: false,
      user: '',
      pass: '',
      students: [],
    }
  },//data
    methods: {
    async Dosend() {
      let res = await this.$http.post('http://chk.cdp58.com/api/studentLogin.php', {
        user: this.user,
        pass: this.pass,
      })
      if (!res.data.ok) {
        // TODO: แสดงข้อความ ว่าบันทึกไม่สำเร็จ
        this.snackbar=true
      } else {
        window.sessionStorage.setItem('user',JSON.stringify({
        user: this.user,  
        }))
        
        // TODO: แสดงข้อความ ว่าบันทึกสำเร็จ
        this.$router.push('/stdpage')
      }
    },
    },
}
</script>
