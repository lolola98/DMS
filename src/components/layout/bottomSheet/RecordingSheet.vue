<template>
    <v-bottom-sheet
    v-model="sheet"
    scrollable
    persistent
    no-click-animation
    hide-overlay
  >
    <v-card class="recording-sheet" :class="{'open': open, 'first':first}">
      <v-card-title class="sheet-header"><v-btn text plain :ripple="false" @click="open = !open"><UpIcon class="icon"/>Today’s Plan</v-btn></v-card-title>
      <v-card-text style="" class="sheet-body"> 
        <v-btn text plain :ripple="false" class="pa-0 btn-map"> <MapIcon/></v-btn>
        <div class="sheet-content">
           <SolutionList/>
        </div>
      </v-card-text>
    </v-card>
  </v-bottom-sheet>
</template>

<script>
export default {

}
</script>

<style>

</style>