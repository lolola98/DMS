<template>
  <div class="fill-width fill-height">
    <!-- 인트로 -->
    <template v-if="step === 0">
      <div class="inner">
        <SolutionIntro  :title="title" :time="time" :description="description" />
      </div>
      <FooterBtns :ok="'시작하기'" @submit="next"/>
    </template>
    <template v-if="step === 1">
      <ProgressLinear  :progress="progress" />
      <div class="inner text-center">
        <div class="question mt-9" v-html="title1"></div>
        <div class="time pos-center pb-15"><input type="number" value="00" class="input"><span class="txt me-4">분</span> <input type="number" value="00" class="input"><span class="txt">초</span></div>
      </div>
      <FooterBtnsNext @before="before" @next="next" :current="step-1" :total="total"/>
    </template>
    <!-- 훈련형 -->
    <template v-if="step === 2">
        <div class="content" v-if="training">
          <div class="time">00:00</div>
          <div :class="[{'pause':pause},'breath']" ><span></span><span></span></div>
          <v-btn icon @click="pauseClick" class="control"><Pause :pause="pause"/></v-btn>
        </div>
        <!-- 완료 -->
        <div v-else class="pos-center d-flex justify-center align-center">
          <CompleteCheck/><span class="fs-31 fw-400 white--text ms-3">완료</span>
        </div>
        <!-- 배경은 메인에서 처리 -->
        <v-img :src="'https://i.pinimg.com/564x/48/1a/24/481a24851ac8c58a94cf3151e0ba7ae9.jpg'" width="100%" height="100%"/>
    </template>
    <!-- 측정형 -->
    <template v-if="step === 3">
        <div class="content" v-if="training">
          <div><!-- 그냥 비워두세요 --></div>
          <div class="time">00:00</div>
          <v-btn icon @click="pauseClick" class="control"><Pause :pause="pause"/></v-btn>
        </div>
        <!-- 완료 -->
        <div v-else class="pos-center d-flex justify-center align-center">
          <CompleteCheck/><span class="fs-31 fw-400 white--text ms-3">완료</span>
        </div>
        <!-- 배경은 메인에서 처리 -->
        <v-img :src="'https://i.pinimg.com/564x/48/1a/24/481a24851ac8c58a94cf3151e0ba7ae9.jpg'" width="100%" height="100%"/>
    </template> 
    <template v-if="step === 4">
      <ProgressLinear  :progress="progress" />
      <div class="question mt-9" v-html="title2"></div>
      <div class="d-flex justify-center align-end mt-7">
          <input type="number" placeholder="0" class="input-box"><span>회</span>
      </div>
      <FooterBtnsNext v-if="step !== 11" @before="before" @next="next" :current="step-1" :total="total"/> 
    </template> 
    <template v-if="step === 5">
        <SolutionFinish class="inner"/>
    </template>
  </div>
</template>

<script>
import ProgressLinear from "@/components/progress/ProgressLinear"
import SolutionIntro from "@/components/solution/SolutionIntro"
import SolutionFinish from "@/components/solution/SolutionFinish"
import FooterBtns from "@/components/btns/FooterBtns"
import FooterBtnsNext from "@/components/btns/FooterBtnsNext"
import Pause from "@/components/icons/Pause"
import CompleteCheck from "@/components/icons/CompleteCheck"

export default {
  data: ()=> ({ 
    step: 4,
    total: 4,
    title:'호습형',
    time: 15,
    description:'총 15분정도 그림, 게임, 지필 등<br>다양하고 흥미로는 방식으로 진행될 예정입니다.<br>(최대 400자)',
    title1:'시간을 설정하세요.',
    title2:'들이쉬고 내쉬고를 몇 회 했습니까? ',
    pause:false,
    training: true, /* 트레이닝 중인지.. */
  }),
  components:{
    ProgressLinear,
    SolutionIntro,
    SolutionFinish,
    FooterBtns,
    FooterBtnsNext,
    Pause,
    CompleteCheck
  },
  computed: {
    progress (){
      return (100 / this.total)  * this.step;
    } 
  },
  methods:{
    next(){
      this.step += 1;
    },
      before(){
        this.step -= 1;
    },
    pauseClick(){
      this.pause = !this.pause;
    }
  },

}
</script>

<style lang="scss" scoped>
.time{
  font-weight: 400;
  .input{
    font-size: 40px;
    text-align: center;
    max-width: 60px;
    outline: none;
  }
  .txt{
    font-size: 20px;
    color:#808080;
  }
}
.content{
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  z-index: 1;
  padding: 25px 0 50px 0;
  color: #fff;
  .time{
    font-size: 40px;
    line-height: 1;
  }
  .breath{
    position: relative;
    span{
      display: inline-block;
      border-radius: 50%;
      transform-origin: center;
    }
    span:first-child{
      width: 158px;
      height: 158px;
      background: rgba(255,255,255,0.41);
      animation: scaling 3s infinite alternate ease; 
      animation-delay: .1s;
    }
    span:last-child{
      position: absolute;
      left: -28px;
      top: -28px; 
      transform: translate(-50%, -50%);
      width: 215px;
      height: 215px;
      border:1px solid #fff;
      animation: scaling 3s infinite alternate ease;
     
    }
    &.pause span{
      animation-play-state: paused;
    }
  }
  .control{
    border-radius: 50%;
    width: 50px;
    height: 50px;
  }
}
.input-box{
  width: 160px;
  height: 50px;
  border: 1px solid #D6D6D6;
  border-radius: 10px;
  text-align: center;
  // color: #A5A5A5;
  font-size: 30px;
  margin-right: 6px;
  + span{
    color:#343434;
    padding-bottom: 2px;
  }
}
</style>