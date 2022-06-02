<template>
  <div class="solution-container fill-width fill-height">
      <Body v-if="step === 1"/>
      <MindWeather v-else-if="step === 2"/>
      <Emotion v-else-if="step === 3"/>
  </div>
</template>

<script>
import Body from '@/page/solution/SolutionBody'
import MindWeather from '@/components/solution/MindWeather'
import Emotion from '@/components/solution/Emotion'
export default {
    data: ()=> ({
        step:3,
    }),
    components:{
        Body,
        MindWeather,
        Emotion
    }

}
</script>

<style>

</style>