<template>
  <div class="inner sulution-container">
    <!-- 인트로 -->
    <template v-if="step === 0">
        <div class="pt-8 mb-10 fs-30 fw-700">꿈일기</div>
        <div class="fs-20 fw-600 mb-4">꿈을 꾸시나요?</div>
        <div class="gray--text">
          꿈은 때로는 내면의 세계를 들여다보는 거울이되기
          도 합니다. <br><br>
          꿈일기 작업을 통해서 내 마음을 조금 더 들여다봅
          시다.<br><br>
          정리되지않아도 좋아요!
          그냥 떠오르는 대로 자유롭게 말해보세요 
        </div>
        <div class="recording">
          <span class="tooltip">꿈내용 녹음하기</span>
          <v-btn icon class="btn-recording" @click="sheetStatus"><span></span></v-btn>
        </div>
      <FooterBtns :ok="'시작하기'" @submit="next"/>
      <RecordingSheet :sheet="sheet" @sheetClose="sheetStatus" />
    </template>
    <template v-if="step === 1">
      <ProgressLinear  :progress="progress" />
      <div class="question mt-9">녹음한 내용을 들으면서 아래 그대로<br>작성해보세요. </div>
      <VoiceNote/>
      <Textarea :height="200"
          :counter="500"
          :placeholder="'asdgagsdgsdfgsdgsdfg'"
          :isBtns="true"
          :isRecording="false"
          />
      <FooterBtnsNext />
    </template>
    <template v-if="step === 2">
      작성한 꿈의 내용이 어떤 느낌이었나요?
    </template>
    <template v-if="step === 3">
      등장인물이나 상황이 무엇처럼  느껴졌나요?<br>
      일상생활에서 비슷한 느낌을 가진 적이<br>
      있나요?
    </template>
    <SolutionFinish v-if="step === (total+1)"/>
  </div>
</template>

<script>
import ProgressLinear from "@/components/progress/ProgressLinear"
import SolutionFinish from "@/components/solution/SolutionFinish";
import RecordingSheet from "@/components/layout/bottomSheet/RecordingSheet"
import FooterBtns from "@/components/btns/FooterBtns"
import FooterBtnsNext from "@/components/btns/FooterBtnsNext"
import Textarea from "@/components/forms/Textarea"
import VoiceNote from "@/components/solution/VoiceNote"

export default {
  data: ()=> ({
    step: 1,
    total: 4,
    sheet: false,

  }),
  components:{
    ProgressLinear,
    SolutionFinish,
    RecordingSheet,
    FooterBtns,
    FooterBtnsNext,
    Textarea,
    VoiceNote
  },
  computed: {
    progress (){
      return (100 / this.total)  * this.step;
    } 
  },
  methods:{
    sheetStatus(){
      this.sheet = !this.sheet;
    },
    next(){
      this.step += 1;
    },

  }

}
</script>

<style lang="scss" scoped>
.recording{
  position: relative;
  text-align: center;
  padding-top: 40px;
  margin: 100px 0 50px 0;
  .tooltip{
    position: absolute;
    top:0;
    left: 50%;
    margin-left: -45px;
    display: inline-block;
    width: 90px;
    height: 32px;
    line-height: 27px;
    font-size: 11px;
    color: #fff;
    background-image: url(data:image/svg+xml;base64,ICA8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjkwIiBoZWlnaHQ9IjMxLjc2MyIgdmlld0JveD0iMCAwIDkwIDMxLjc2MyI+DQogICAgPGcgaWQ9Iuq3uOujuV8xNjgyMyIgZGF0YS1uYW1lPSLqt7jro7kgMTY4MjMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMzUgLTQ5OSkiPg0KICAgICAgPGcgaWQ9Iuq3uOujuV8xNjQwMCIgZGF0YS1uYW1lPSLqt7jro7kgMTY0MDAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC00OC45OTkgLTEwMikiPg0KICAgICAgICA8cGF0aCBpZD0i7ZWp7LmY6riwXzE3IiBkYXRhLW5hbWU9Iu2Vqey5mOq4sCAxNyIgZD0iTTcyMTAuNDI3LDExMjc1bC0zLjkyNi01SDcxNjlhMiwyLDAsMCwxLTItMnYtMjJhMiwyLDAsMCwxLDItMmg4NmEyLDIsMCwwLDEsMiwydjIyYTIsMiwwLDAsMS0yLDJoLTM3LjVsLTMuOTI0LDVhMiwyLDAsMCwxLTMuMTQ3LDBaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNjk4MyAtMTA2NDMpIi8+DQogICAgICA8L2c+DQogICAgPC9nPg0KICA8L3N2Zz4=)
  }
  .btn-recording{
    position: relative;
    width: 76px;
    height: 76px;
    border-radius: 50%;
    background: #F5F5F5;
    span{
      position: absolute;
      width: 26px;
      height: 26px;
      border-radius: 560%;
      background: $color-main;
    }
  }
}

</style>