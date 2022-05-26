<template>
     <v-app-bar app flat dense color="white">
      <v-btn icon>
        <Back/>
      </v-btn>
      <v-spacer></v-spacer>
      <v-toolbar-title><h2 class="fs-16">여행지원서</h2></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
          <Exclamation/>
      </v-btn>
    <!-- -->
  </v-app-bar>
</template>

<script>
import Back from '../icons/Back.vue';
import Exclamation from '../icons/Exclamation.vue';
export default {
  components: {
    Back,
    Exclamation
  },
}
</script>
