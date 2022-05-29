<template>
  <!-- 질문28 -->
  <div>
      <div class="subheader pt-10 pb-12">오래 생각하기보다는 가능한 빠르게<br>떠오르는 데로 모두 작성해주세요.</div>
      <div class="question mb-6">
            어떤한 상황인지<br>떠오르는 대로 작성해주세요.
      </div>
      <div class="inner">
          <!-- 이미지 영역 -->
          <div class="image">
            <img :src="getImage(imgURL)" class="full-width">
          </div>
          <Textarea :value="value" :height="140" :counter="500" :placeholder="'최대한 자세히 작성해보세요.'" @input="inputChanged"/>
      </div>

  </div>
</template>

<script>
  import Textarea from '@/components/forms/Textarea'
  export default {
    data: () => ({
      value:'',
      imgURL: 'photo.png',
    }),
    components:{
        Textarea
    },
    methods: {
      inputChanged(input){
        this.value = input;
      }
    }
    
  }
</script>

<style lang="scss" scoped>
.image{
  border-radius: 2px;
  overflow: hidden;
  line-height: 0;
  margin-bottom: 16px;
}
</style>