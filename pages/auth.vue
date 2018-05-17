<template>
 <v-form v-model="valid">
           <h1>Login Member.</h1>
            <v-text-field
              label="E-mail"
              v-model="user"
              :rules="emailRules"
              required
            ></v-text-field>
          <v-text-field
              v-model="pass"
              :append-icon="e1 ? 'visibility' : 'visibility_off'"
              :append-icon-cb="() => (e1 = !e1)"
              :type="e1 ? 'password' : 'text'"
              name="input-10-1"
              label="Enter your password"
              hint="At least 8 characters"
              min="8"
              counter >
          </v-text-field>
            <v-btn color="info" @click="Dosend">Log in.</v-btn>
            <v-snackbar
            top
            v-model="snackbar">
            <v-alert :value="true" outline color="error" icon="warning" @click.native="snackbar = false">
              Err Don't Login.
            </v-alert>
           </v-snackbar>
         </v-form>
</template>
<script>
  export default {
    layout: 'public',
    data: () => ({
      snackbar: false,
      e1: true,
      valid: false,
      user: '',
      pass: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
      ]
    }),
    methods: {
    async Dosend() {
      //let res = await this.$http.post('/auth/login', {
      let res = await this.$http.post('http://chk.cdp58.com/api/teaLogin.php', {
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
        this.$router.push('/student')
      }
    },
    },
  }
</script>

