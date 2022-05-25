<template>
<!-- 하단 콘텐츠 영역이 3초간 노출되었다가 사라지며...다음 컨텐츠 노출) -->
    <div class="survey-intro">
      <Transition name="fade">
        <div v-if="step1" class="pos-center">
          OO님께 꼭 맞는
          <span class="primary--text">Who U</span> 여행코스를<br />추천해드리기
          위한 여행지원서를<br />작성하는 시간입니다.
        </div>
        <div v-if="step2"  class="step2">
          <div class="mb-16">
            약 10분정도 소요되는 심리검사이며,<br>지필검사, 그림검사, 게임 등 다양하고<br>흥미로운 방식의 경험이 될 테니<br>기대하셔도 좋습니다!
          </div>
          <!-- 이미지 서버에서 받으옴 -->
          <div class="images">
            <Transition name="fade">
            <div v-if="img1">
              <img :src="getImage(imgURL[0])">
            </div>
              <div v-else-if="img2">
                <img :src="getImage(imgURL[1])">
              </div>
            <div v-else-if="img3">
              <img :src="getImage(imgURL[2])">
            </div>
            </Transition>
          </div>

        </div>
       
      <div v-if="step3" class="pos-center">
        <div class="fs-18 secondary--text">보다 정확한 결과를 위해서는,</div>
        <div class="step3-text">
            <div class="mb-10" ref="text1">
              <CheckIocn class="icon"/>되도록 <span class="text-no-wrap primaryLight primary--text fw-600 px-1">조용하고 방해받지 않은</span><br>
              환경에서 진행해주세요.
            </div>
            <div class="mb-10" ref="text2">
              <CheckIocn class="icon" />여러 번에 나누어 하는 것보다는<br>
              <span class="text-no-wrap primaryLight primary--text fw-600 px-1">한 번에 완료</span>하는 것이 좋습니다.
            </div>
            <div class="mb-10" ref="text3">
              <CheckIocn class="icon"/>너무 오래 생각하기보다는  <span class="text-no-wrap primaryLight primary--text fw-600 px-1">떠오르는 <br>
                대로 빠르게</span>
              응답해 보세요.
            </div>
        </div>
      </div>
      <div v-if="step4" class="step4">
        <div class="step4-text">
          <div class="pos-center">그럼, 시작해볼까요?</div>
        </div>
        <FooterBtns ok="시작하기" cancel="다음에 하기" @hide="$emit('surveyStop')" @submit="$emit('surveyStart')"/>
      </div>
      
      </Transition>
    </div>
</template>

<script>
import CheckIocn from '@/components/icons/Check'
import FooterBtns from '@/components/btns/FooterBtns'
export default {
  data: () => ({
    step1: false,
    step2: false,
    img1: false,
    img2: false,
    img3: false,
    step3: false,
    step4: false,
    imgURL: ['sample1.jpg','sample2.jpg','sample3.jpg'],
  }),
  components: {
    CheckIocn,
    FooterBtns,
  },
  mounted() {
    setTimeout(() => this.step1Active(), 100);
  },
  methods: {
    step1Active(){
      this.step1 = true;
      setTimeout(() => {this.step1 = false;this.step1Active2();}, 3000);
      
    },
    step1Active2(){
      setTimeout(() => {this.step2 = true; this.img1 = true},  700);
      setTimeout(() => this.img1 = false, 3500);
      setTimeout(() => this.img2 = true, 4000);
      setTimeout(() => this.img2 = false, 7500);
      setTimeout(() => this.img3 = true, 8000);
      setTimeout(() => {this.step2 = false;  this.step1Active3()}, 11500);
    },
    step1Active3(){
      setTimeout(() => this.step3 = true,  700);
      setTimeout(() => this.$refs.text1.style.opacity = 1,  3000);
      setTimeout(() => this.$refs.text2.style.opacity = 1,  6000);
      setTimeout(() => this.$refs.text3.style.opacity = 1,  9000);
      setTimeout(() => {this.step3 = false;  this.step1Active4()}, 12500);
    },
     step1Active4(){
       setTimeout(() => this.step4 = true,  700);
     },
  },
};
</script>

<style lang="scss" scoped>
.survey-intro {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  font-size: 20px;
    .fade-enter {
      opacity: 0;
    }
    .fade-enter-active,
    .fade-leave-active {
      transition: opacity 0.7s ease-in-out;
    }

    .fade-leave-to {
      opacity: 0;
    }
    .step2{
      position: absolute;
      width: 100%;
      left: 50%;
      bottom: -12px;
      transform: translateX(-50%);
      line-height: 0;
      > div{
        line-height: 30px;
      }
    }
    .images{
      width: 248px;
      height: 400px;
      border-radius: 20px 20px 0 0;
      overflow: hidden;
      display: inline-block;
      border: 1px solid red;
      > div{
        width: 100%;
        > img{
        width: 100%;
        }
      }
    }
    .step3-text{
      display: inline-block;
      width: 300px;
      text-align: left;
      margin-top: 80px;
      > div{
        position: relative;
        padding-left: 20px;
        opacity: 0;
        transition: opacity 0.8s ease-in-out ;
        .icon{
          position: absolute;
          left: 0;
          top: 10px;
        }
      }
    }
    .step4{
      height: 100%;
      .step4-text{
        position: relative;
        height: calc(100% - 130px);
      }
    }
}

</style>
