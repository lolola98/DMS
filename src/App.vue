<template>
<v-app>
  <AppBar v-if="isAppBar"/>
  <v-main>
    <!-- Provides the application the proper gutter -->
    <v-container fluid fill-height>
      <!-- If using vue-router -->
      <router-view></router-view>
    </v-container>
  </v-main>
</v-app>
</template>

<script>
import AppBar from '@/components/layout/AppBar.vue'

export default {
  name: 'App',
  components: {
    AppBar,
  },
  data: () => ({
    isAppBar: true,
  }),
  methods:{
    appBarHidden(flag){
      this.isAppBar = flag;
    }
  }
};
</script>
