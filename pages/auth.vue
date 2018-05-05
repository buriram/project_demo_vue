<template>
 <v-form v-model="valid">
            <v-text-field
              label="E-mail"
              v-model="user"
              :rules="emailRules"
              required
            ></v-text-field>
            <v-text-field
                name="input-10-1"
                label="Enter your password"
                hint="At least 8 characters"
                v-model="pass"
                min="8"
                :append-icon="e1 ? 'visibility' : 'visibility_off'"
                :append-icon-cb="() => (e1 = !e1)"
                :type="e1 ? 'pass' : 'text'"
                counter
            ></v-text-field>
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
    data: () => ({
      pass: '',
      snackbar: false,
      e1: false,
      valid: false,
      pass: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
      ]
    }),
    methods: {
    async Dosend() {
      let res = await this.$http.post('/auth/login', {
        user: this.user,
        pass: this.pass,
      })
      if (res.data.status!="success") {
        // TODO: แสดงข้อความ ว่าบันทึกไม่สำเร็จ
        this.snackbar=true
      } else {
        // TODO: แสดงข้อความ ว่าบันทึกสำเร็จ
        this.$router.push('/student')
      }
    },
    },
  }
</script>

