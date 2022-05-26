<template>
<v-app>
  <AppBar/>
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
    //
  }),
};
</script>
