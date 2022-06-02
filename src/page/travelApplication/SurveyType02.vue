<template>
  <!-- 질문11 -->
  <div>
      <div class="question mt-9 mb-12">최근 2주 동안, 가장 많이 느낀 감정을<br>3개 골라주세요.</div>
      <Emotion/>
  </div>
</template>

<script>
import Emotion from '@/components/solution/Emotion'
export default {
  components:{
    Emotion,
  }
}
</script>

<style>

</style>