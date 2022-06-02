<template>
  <!-- 질문13~26 -->
  <div>
      <div class="question mt-9 mb-12">질문을 읽고 두 단어 사이에<br>나의 생각과 가장 일치하는 곳을<br>선택해주세요.</div>
      <div class="inner text-center">
            <div class="question fw-500">나의 미래는</div>
            <v-slider
            v-model="value"
            step="5"
            track-fill-color="transparent"
            ></v-slider>
            <div class="d-flex justify-space-between fs-14">
                <span>어둡다<br>부정적이다.</span>
                <span>밝다<br>긍정적이다.</span>
            </div>
        <div class="fs-24 primary--text fw-700" v-html="answer"></div>
      </div>
  </div>
</template>

<script>
export default {
    data: () => ({
        value: 50,
        answerArr:['어둡다<br>부정적이다','2','그저 그렇다','4','밝다<br>긍정적이다'],
        questionArr:[
            '나는 나의 기분과 감정을',
            '나는 다른 사람의 기분과 감정을',
            '나는 내가 원하는 것이 무엇인지',
            '나는 다른 사람이 원하는 것이 무엇인지',
            '나의 미래는',
            '대부분의 사람들은 나에 대해',
            '이 세상은',
            '나는 나의 주변의 모든 것들이',
            '나는 다른 사람에게 나의 마음이나 감정을 표현하는 것이',
            '나는 내가 원하는 바를',
            '나는 다른 사람이 원하는 바를',
            '나는 나의 행동을',
            '나는 내가 원하는 것을 위해',
            '나는 나의 감정을'
        ]
    }),
    computed:{
        answer(){
            let num = (Math.ceil(this.value / 20) == 0)? 1 : Math.ceil(this.value / 20);
            return  this.answerArr[num-1]
        }
    },
    methods:{
    }
}
</script>

<style lang="scss" scoped>
::v-deep .v-slider--horizontal {
    margin: 0 5px;
    .v-slider__track-container{
        height: 10px;
        .v-slider__track-background{
            border-radius: 5px;
            background: linear-gradient( to right,#fff, #7260FF) !important;
            width: 100% !important;
        }
    }
    .v-slider__thumb{
        width: 20px;
        height: 20px;
        background: #fff !important;
        border: 1px solid #CCC !important;
        box-shadow: 0 3px 6px rgba(0,0,0,0.16);
        &:before{
            display: none;
        }
    }

}
</style>