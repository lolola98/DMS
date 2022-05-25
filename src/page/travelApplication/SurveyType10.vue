<template>
  <!-- 질문35 -->
      <div v-if="step === 1" class="text-center">
        <div class="question pt-10">최근 가장 고민이 되거나<br>관심이 있는 주제를 3가지 고르세요.</div> 
        <ToggleBtn :total="strArr.length" :minWidth="148" :str="strArr" :multiple="true" :max="3" @change="selectBtn" class="py-6"/>
      </div>
      <div v-else class="text-center">
        <div class="question pt-10">고민되는 내용을<br>구체적으로 작성해주세요.</div>
        <div class="pt-6 pb-15 d-flex flex-wrap mx-auto" style="width:328px">
          <span class="box" v-for="n in 3" :key="n">{{strArr[slectArr[n-1]]}}</span>
        </div>
        <div class="inner">
          <Textarea :value="value" :height="200" :counter="500" :placeholder="'최대한 자세히 작성해보세요.'" @input="inputChanged"/>
        </div>
        
      </div>
</template>          

<script>
import ToggleBtn from '@/components/btns/ToggleBtn'
import Textarea from '@/components/forms/Textarea'
export default {
  data: ()=> ({
    step: 2,
    value:null,
    strArr:['소진/번아웃','스트레스','수면','우울','불안','자존감 항상','관계문제','트라우마','자기이해','성격/성향','고민나눔','감정관리','자기관리','스트레스 관리','회복탄력성 UP','관계개선'],
    slectArr:[],
  }),
   components:{ 
    ToggleBtn,
    Textarea
 },
 methods: {
   inputChanged(input){
     this.value = input;
   },
   selectBtn(arr){
     this.slectArr = arr;
   },
   change(){
     this.step = 2
   }
 }
}
</script>

<style lang="scss" scoped>
.box{
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 148px;
  height: 48px;;
  border-radius: 6px;
  border: 1px solid $color-main;
  color: $color-main;
  box-shadow: 0px 2px 6px #00000029;
  margin: 5px 8px;
}
</style>
