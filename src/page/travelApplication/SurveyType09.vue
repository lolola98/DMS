<template>
  <!-- 질문33,34 -->
  <div>
      <div class="subheader pt-10 pb-15">아래 질문을 읽고 자신에 해당되는 것에 표시해주세요.</div>
      <div class="inner text-center">
        <div>
          <div class="question mb-9">{{questionArr[0]}}</div>
          <ToggleBtn :total="2" :flag="0" :minWidth="120" :str="['예','아니요']"  @change="changed"/>
        </div>
        <v-divider class="my-12"> </v-divider>
        <div>
          <div class="question mb-9">{{questionArr[1]}}</div>
          <ToggleBtn :total="2" :flag="1" :minWidth="120" :str="['예','아니요']"  @change="changed"/>
        </div>
      </div>
  </div>
</template>

<script>
import ToggleBtn from '@/components/btns/ToggleBtn'
export default {
  data: () => ({
    questionArr: ['질문 내용 질문 내용 질문 내용?','질문 내용 질문 내용 질문 내용?'],
    answer:[],
  }),
 components:{ 
   ToggleBtn,
 },
 methods: {
   changed(answer,flag){
     this.answer[flag] = answer;
   }
 }
}
</script>

<style>

</style>