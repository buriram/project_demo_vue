<template>
  <div>
    <h1>Student List</h1>
      <v-select
          :headers="headers"
          :items="clsList"
          v-model="cls"
          label="โปรดเลือกชั้นปี"
          single-line
      />
    <v-data-table
          :headers="headers"
          :items="students"
          class="elevation-1"
      >
        <template slot="items" slot-scope="props">
        <td class="text-xs-left">{{ props.item.code }}</td>
        <td class="text-xs-left">{{ props.item.firstName }}</td>
        <td class="text-xs-left">{{ props.item.lastName }}</td>
        <td class="text-xs-left">{{ props.item.class }}</td>
        <td class="text-xs-left"><v-checkbox v-model="chk" :value="props.item.code"></v-checkbox></td>
        </template>
  
      </v-data-table> 
       <div class="text-xs-right">
          <v-btn @click="save" color="primary" dark style="cursor: pointer">check<v-icon>add_box</v-icon></v-btn>
            <v-snackbar
            top
            v-model="snackbar">
            <v-alert :value="true" outline color="primary" dark icon="warning" @click.native="snackbar = false">
              Success Data.
            </v-alert>
           </v-snackbar>
       </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      cls: '1',
      chk: [],
      students: [],
      snackbar: false,
      clsList: [
        { value: '1', text: 'ชั้นปีที่ 1' },
        { value: '2', text: 'ชั้นปีที่ 2' },
        { value: '3', text: 'ชั้นปีที่ 3' },
      ],
      headers: [
        { text: 'Code', align: 'left', sortable: false},
        { text: 'First Name', align: 'left', sortable: false},
        { text: 'Last Name', align: 'left', sortable: false},
        { text: 'Class', align: 'left', sortable: false},
        { text: 'Edit', align: 'left', sortable: false},
      ],
    }
    },
  computed: {
    filteredStudent() {
      return this.students.filter(x => x.class + '' === this.cls)
    },
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
    async save() {
      let res = await this.$http.post('http://chk.cdp58.com/st_check.php', {chk: this.chk})
      console.log(thik.chk)
          if (res.data.ok!="true") {
        // TODO: แสดงข้อความ ว่าบันทึกไม่สำเร็จ
          } else {
        // TODO: แสดงข้อความ ว่าบันทึกสำเร็จ
            this.$router.push('/student')
        //   this.snackbar=true
           console.log(res.data.ok)
          }
    }
  }, // methods
}
</script>