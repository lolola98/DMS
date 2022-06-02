<template>
  <div class="inner fill-width fill-height">
    <template v-if="step == 1"  >
      <SolutionIntro :title="title" :time="time" :description="description" :photo="photo" :movie="movie" :sound="sound" />
    </template>
    <template v-else-if="step == 2">
      <div class="question mb-9">스트레스를 받으면 유독 통증이<br />느껴지는 부위를 선택하세요.</div>
      <div class="body-content">
        <div class="body-area">
          <BodyBg
            :heart="valueSet('심장/등')"
            :upperAbdomen="valueSet('상복부')"
            :lowerAbdomen="valueSet('하복부')"
            :thigh="valueSet('허벅지')"
            :knee="valueSet('무릎')"
            :calf="valueSet('종아리')"
            :feet="valueSet('발')"
            :head="valueSet('머리')"
            :eyes="valueSet('눈')"
            :nose="valueSet('코')"
            :mouth="valueSet('입')"
            :ear="valueSet('귀')"
            :neck="valueSet('목')"
            :shoulder="valueSet('어깨')"
            :arm="valueSet('팔')"
            :hands="valueSet('손')"
          />
          <BodyLine class="body-line" v-if="valueSet('피부')" />
        </div>
        <div class="body-btns">
          <!-- 버튼 두줄로 만들어 주기 위해서 for문 두번..-->
          <div v-for="i in 2" :key="i" class="d-flex flex-column">
              <template v-if="i == 1">
                <v-btn
                  v-for="n in 8"
                  :key="n"
                  depressed
                  :class="{ active: bodyData[n - 1].value }"
                  @click="selectBody(n-1)"
                  >{{ bodyData[n - 1].name }}</v-btn
                >
              </template>
              <template v-if="i == 2">
                <v-btn
                  v-for="n in (bodyData.length - 8)"
                  :key="n+8"
                  depressed
                  :class="{ active: bodyData[n + 7].value }"
                  @click="selectBody(n+7)"
                  >{{ bodyData[n + 7].name }}</v-btn
                >
              </template>
          </div>
        </div>
      </div>
      <v-checkbox
        v-model="notKnow"
        :label="label"
        :ripple="false"
        class="checkbox-circle"
        @change="checkboxChange"
      ></v-checkbox>
    </template>
    <BodyDetails v-else-if="step == 3"/>
    <SolutionFinish v-else-if="step == 4"/>
  </div>
</template>

<script>
import BodyBg from "@/components/solution/solutionBody/BodyBg";
import BodyLine from "@/components/solution/solutionBody/BodyLine";
import BodyDetails from "@/components/solution/solutionBody/BodyDetails";
import SolutionFinish from "@/components/solution/SolutionFinish";
import SolutionIntro from "@/components/solution/SolutionIntro";
export default {
  data: () => ({
    title:'몸 알아차리기',
    time:15,
    photo:'https://i.pinimg.com/564x/4c/cd/55/4ccd55f627c2b60f547c9c6e104ef6ec.jpg',
    movie:'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    sound:'http://soundbible.com/mp3/Air Plane Ding-SoundBible.com-496729130.mp3',
    description:'총 15분정도 그림, 게임, 지필 등<br>다양하고 흥미로는 방식으로 진행될 예정입니다.<br>(최대 400자)',
    step:1,
    notKnow: false,
    label:'모르겠어요.',
    bodyData: [
      { name: "심장/등", value: false },
      { name: "상복부", value: false },
      { name: "하복부", value: false },
      { name: "허벅지", value: false },
      { name: "무릎", value: false },
      { name: "종아리", value: false },
      { name: "발", value: false },
      { name: "피부", value: false },
      { name: "머리", value: false },
      { name: "눈", value: false },
      { name: "코", value: false },
      { name: "입", value: false },
      { name: "귀", value: false },
      { name: "목", value: false },
      { name: "어깨", value: false },
      { name: "팔", value: false },
      { name: "손", value: false },
    ],
    bodySelect: [],
  }),
  components: {
    BodyBg,
    BodyLine,
    BodyDetails,
    SolutionFinish,
    SolutionIntro
  },
  computed: {
    filteredItems: function () {
      return this.bodyData.slice(0, 10);
    },
  },
  methods: {
    valueSet(name) {
      let index = this.bodyData.findIndex((item) => {
        return item.name === name;
      });
      return this.bodyData[index].value;
    },
    selectBody(index){
      this.notKnow = false;
      this.bodyData[index].value = !this.bodyData[index].value;
    },
    checkboxChange(){
      /* 선택값 flase */
       if(this.notKnow){
        this.bodyData.forEach((value, index) => {
          this.bodyData[index].value = false;
        });
      }
    }
  },
};
</script>

<style lang="scss" scoped>
.body-content {
  position: relative;
  text-align: center;
  max-width: 300px;
  margin: 0 auto;
  line-height: 0;
  .body-area {
    position: relative;
    width: 132px;
    height: 402px;
    display: inline-block;
    .body-line {
      position: absolute;
      left: 0px;
      top: 0;
    }
  }
  .body-btns {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    .v-btn {
      min-width: 48px;
      height: 22px;
      padding: 0;
      font-size: 12px;
      color: #9fa9b4;
      background: #e6e8ea;
      border-radius: 11px;
      margin-bottom: 8px;
      &.active {
        background: #7260ff;
        color: #fff;
      }
    }
  }
}
</style>
