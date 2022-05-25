<template>
  <v-sheet class="mx-auto inner" max-width="700">
    <div class="fs-20 fw-600 mb-10">
      요즘 {{ name }}님의<br />
      마음날씨는 <span class="primary--text">{{ state }}</span> 이며,<br />
      마음 속에 <span class="primary--text">{{ tree }}</span
      >가 자라나고 있습니다.
    </div>
    <div class="tree-area mb-1">
      <Tree class="icon-tree" />
      <Weather class="icon-weather" />
    </div>
    <v-btn text plain :ripple="false" class="d-flex align-center fs-14 px-0">
      <Question class="me-1" />가장 건강한 나무의 모습은?
    </v-btn>
    <div class="read-more">자세히 보기</div>
    <div class="pb-10">
      <div class="fs-20 fw-600 mb-10">현재 나의 마음 날씨는?</div>
      <div class="weather-area">
        <Weather class="icon-weather" />
        <div class="state">{{ state }}</div>
      </div>
      <ul class="list dot">
        <li v-for="n in weatherDescription.length" :key="n">
          {{ weatherDescription[n - 1] }}
        </li>
      </ul>
      <div class="d-flex flex-wrap justify-space-between emotion-list mt-6">
        <div
          v-for="n in weatherEmotion.length"
          :key="n"
          v-ripple
          class="item text-center"
        >
          <div class="d-flex justify-space-between align-center mb-3">
            <span class="emotion">{{ weatherEmotion[n - 1].emotion }}</span>
            <Arrow class="me-n3" />
          </div>
          <EmotionIocn :state="iconSet(n - 1)" />
          <div class="state mt-2">{{ weatherEmotion[n - 1].state }}</div>
        </div>
      </div>
    </div>
    <hr class="hr" />
    <div class="pt-12 pb-15">
      <div class="fs-20 fw-600 mb-10">내 마음 속 나무</div>
      <v-img></v-img>
      <ul class="list dot">
        <li v-for="n in treeDescription.length" :key="n">
          {{ treeDescription[n - 1] }}
        </li>
      </ul>
      <div class="d-flex flex-wrap justify-space-between emotion-list mt-6">
        <div
          v-for="n in treeEmotion.length"
          :key="n"
          v-ripple
          class="item text-center"
        >
          <div class="d-flex justify-space-between align-center mb-3">
            <span class="emotion">{{ treeEmotion[n - 1].emotion }}</span>
            <Arrow class="me-n3" />
          </div>
          <span
            style="
              display: inline-block;
              width: 50px;
              height: 50px;
              border-radius: 50px;
              background: #e3e3e3;
            "
          ></span>
          <div class="state mt-2">{{ treeEmotion[n - 1].state }}</div>
        </div>
      </div>
    </div>
    <BlackBtn :str="`추천 티켓 보러가기`" class="mb-10" @click="ticketGo" />
  </v-sheet>
</template>
<script>
import Arrow from "@/components/icons/Arrow";
import Question from "@/components/icons/QuestionMark";
import EmotionIocn from "@/components/icons/EmotionIocn";
import BlackBtn from "@/components/btns/BlackBtn";
import Tree from "@/components/icons/Tree";
import Weather from "@/components/icons/Weather";
import More from "@/components/icons/More";

export default {
  data: () => ({
    name: "이지",
    state: "보통",
    tree: "건강한 나무",
    weatherDescription: ["정의정의정의정의"],
    weatherEmotion: [
      { emotion: "우울", state: "안정" },
      { emotion: "불안", state: "안정" },
      { emotion: "스트레스", state: "주의" },
      { emotion: "감정상태", state: "위험" },
    ],
    treeDescription: [
      "정의내용정의내용정의내용정의내용 정의내용정의내용정의내용정의내용정의내용정의 내용정의내용정의내용정의내용정의내용",
      "정의내용정의내용정의내용정의내용 정의내용정의내용정의내용정의내용정의내용정의 내용정의내용정의내용정의내용정의내용",
    ],
    treeEmotion: [
      { emotion: "자아강도", state: "양호" },
      { emotion: "인식/표현력", state: "주의" },
      { emotion: "자기조절", state: "주의" },
      { emotion: "관계능력", state: "양호" },
      { emotion: "지지자원", state: "양호" },
    ],
  }),
  components: {
    Question,
    EmotionIocn,
    Arrow,
    BlackBtn,
    Tree,
    Weather,
  },
  methods: {
    click() {
      alert("asdfsadfsdf");
    },
    iconSet(n) {
      let _state = this.weatherEmotion[n].state;
      if (_state === "안정") {
        return 0;
      } else if (_state === "주의") {
        return 1;
      } else if (_state === "위험") {
        return 2;
      }
    },
    ticketGo() {
      alert("asgdasdg");
    },
  },
};
</script>
<style lang="scss" scoped>
.tree-area,
.weather-area {
  position: relative;
  background: #f8f8f8;
  border-radius: 10px;
  height: 280px;
  .icon-tree {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 25px;
  }
  .icon-weather {
    position: absolute;
    top: 22px;
    left: 50%;
    transform: translateX(30px);
  }
}
.weather-area {
  height: 170px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  .icon-weather {
    top: 39px;
    transform: translateX(-50%);
  }
  .state {
    padding: 15px 0;
    color: #101010;
  }
}
.read-more{
  text-align: center;
  margin: 40px 0 50px 0;
}
.list {
  list-style: none;
  padding-left: 10px;
  li {
    position: relative;
    line-height: 24px;
    margin-bottom: 25px;
    &:before {
      content: "";
      position: absolute;
      left: -10px;
      top: 9px;
      width: 4px;
      height: 4px;
      border-radius: 50%;
      background: #afafaf;
    }
    &:last-child {
      margin-bottom: 0;
    }
  }
}
.emotion-list {
  .item {
    min-width: calc(50% - 16px);
    padding: 14px 16px;
    margin: 8px;
    background: #f8f8f8;
    border-radius: 6px;
    box-shadow: 0 3px 4px rgba(0, 0, 0, 0.11);
    .emotion {
      color: #a3a3a3;
      font-size: 16px;
      font-weight: 400;
    }
    .arrow {
      margin-right: -10px;
    }
    .state {
      font-size: 18px;
      font-weight: 700;
    }
  }
}
.hr {
  border-style: solid;
  border-width: 4px;
  border-color: #f8f8f8;
  margin: 0 -23px;
}
</style>
