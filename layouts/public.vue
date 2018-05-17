<template>
  <v-app>
    <v-navigation-drawer v-model= "sideNav" app>
      <v-list>
        <v-list-tile 
          router
          :to="item.to"
          v-for = "item in Items" 
          :key = "item.title">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>{{item.title}}</v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar dark class="purple darken-1">
      <v-toolbar-side-icon @click.native.stop = "sideNav = !sideNav"
      class="hidden-sm-and-up"></v-toolbar-side-icon>
        <v-toolbar-title>Student Management.</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-xs-only">
          <v-btn flat router :to="item.to" v-for = "item in Items" :key = "item.title">
            <v-icon left dark="">{{item.icon}}</v-icon>
              {{item.title}}
          </v-btn>
        </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
      <v-footer :fixed="fixed" app class="purple lighten-2" dark>
      <span>&copy; 2018</span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        sideNav: false,
        fixed: false,
        Items: [
          { icon: 'supervisor_account', title: 'Home', to: '/' },
          { icon: 'person', title: 'Profile', to: '/member' },
          { icon: 'face', title: 'Sign up', to: '/register' },
          { icon: 'lock_open', title: 'Sign in', to: '/auth' }
        ]
      }
    },
    created () {
        let user = JSON.parse(window.sessionStorage.getItem('user') ||'{}')
          if (!user) {
            return this.$router.replace('/student')
          }
    this.user = user
},
  }
</script>
