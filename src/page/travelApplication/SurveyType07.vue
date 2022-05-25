<template>
  <!-- 질문29,30 -->
  <div>
      <div class="subheader pt-10 pb-15">질문을 읽고 문장을 완성해주세요.<br>오래 생각하기 보다는 가능한 빠르게 떠오르는 대로<br>작성해주세요.</div>
      <div class="inner text-center">
           <div class="question">{{questionStr[1][0]}}</div>
            <ResizeTextArea/>
           <div class="question">{{questionStr[1][1]}}</div>
      </div>
  </div>
</template>

<script>
import ResizeTextArea from '@/components/forms/ResizeTextArea'
export default {
  data: ()=> ({
    value:'',
    questionStr:[
        ['나에게 의미있는 것이란,','다.'],
        ['나와 가까운 사람들(가족,연인,친구 등)은 나에게' ,'다.'],
    ],
  }),
  components:{
    ResizeTextArea,
  }
}
</script>

<style lang="scss" scoped>
.subheader{
  padding-bottom: 100px;
}
.question{
  font-size: 20px;
  font-weight: 700;
}
</style>