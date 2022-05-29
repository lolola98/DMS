<template>
    <div v-if="step !== 12" class="survey-container full-width fill-height">
        <ProgressLinear v-if="step !== 11" :progress="progress" />
        <SurveyIntro v-if="step === 0" @surveyStart="surveyStart" @surveyStop="surveyStop" />
        <SurveyType01 v-else-if="step === 1" :question="questionStr[current]" :answer="answer" @radioChanged="radioChanged"/>
        <SurveyType02 v-else-if="step === 2"/>
        <SurveyType03 v-else-if="step === 3"/>
        <SurveyType04 v-else-if="step === 4"/>
        <SurveyType05 v-else-if="step === 5"/>
        <SurveyType06 v-else-if="step === 6"/>
        <SurveyType07 v-else-if="step === 7"/>
        <SurveyType08 v-else-if="step === 8"/>
        <SurveyType09 v-else-if="step === 9"/>
        <SurveyType10 v-else-if="step === 10"/>
        <SurveyAnalysing v-else-if="step === 11"  @result="result"/>
        <FooterBtnsNext v-if="step !== 11" @before="before" @next="next" :current="current" :total="total" :disabledNext="disabledNext"/>
    </div>
    <v-sheet v-else class="mx-auto " max-width="700">
        <SurveyResult @bottomSheetOpen="bottomSheetOpen"  />
        <SurveyBottomSheet :sheet="sheet" :height="'75vh'" :flag="sheetFlag" @sheetClose="sheetClose"/>
    </v-sheet>

    
</template>

<script>

import SurveyIntro from './SurveyIntro'
import SurveyType01 from './SurveyType01' /* 1~`0 */
import SurveyType02 from './SurveyType02' /* 11 */
import SurveyType03 from './SurveyType03' /* 12 */
import SurveyType04 from './SurveyType04' /* 13 ~ 26 */
import SurveyType05 from './SurveyType05' /* 27 */
import SurveyType06 from './SurveyType06' /* 28 */
import SurveyType07 from './SurveyType07' /* 29,30 */
import SurveyType08 from './SurveyType08' /* 31,32 */
import SurveyType09 from './SurveyType09' /* 33,34 */
import SurveyType10 from './SurveyType10' /* 35 */
import SurveyAnalysing from './SurveyAnalysing' 
import SurveyResult from './SurveyResult' 
import FooterBtnsNext from '@/components/btns/FooterBtnsNext'
import ProgressLinear from '@/components/progress/ProgressLinear'
import SurveyBottomSheet from "@/components/layout/SurveyBottomSheet"
export default {
    data: () => ({
        step: 3,
        total: 35,
        current: 0,
        progress: 0,
        answer: 2,
        disabledNext:true,
        questionStr:[
            '어떤 것에도 도무지 집중할 수 없다.',
            '잠들기 어렵거나 자주 깼다 <br>/ 혹은 너무 많이 잔다.',
            '평소보다 식욕이 줄었다 <br>/ 혹은 평소보다 많이 먹는다.',
            '피곤하고 기운이 없다.',
            '초조하고 안절부절못한다.',
            '몸이 긴장되어 있다.',
            '일상의 일들은 대부분 내 생각대로<br>진행되고 있다.',
            '말하거나 움직이기조차 싫다.',
            '내가 잘못 했거나, 실패했다고 생각이 든다 <br>/ 혹은 자신과 가족을 실망시켰다고 생각한다.',
            '신경이 예민해지고 스트레스를<br>받고 있다는 느낌이 든다.',
        ],
        answerValue: [],
        sheet:false,
        sheetFlag:0,
    }),
    components:{
       SurveyIntro,
       SurveyType01,
       SurveyType02,
       SurveyType03,
       SurveyType04,
       SurveyType05,
       SurveyType06,
       SurveyType07,
       SurveyType08,
       SurveyType09,
       SurveyType10,
       SurveyAnalysing,
       SurveyResult,
       FooterBtnsNext,
       ProgressLinear,
       SurveyBottomSheet
    },
    mounted() {
        this.step = 12;
        this.current = 10;
    },
    methods: {
         surveyStart() {
            this.step = 1;
        },
        surveyStop(){

        },
        before(){
            if(this.current > 0 ) {
                this.current -= 1; 
                this.progressValue();
                this.answer = this.answerValue[this.current];
                this.disabledNext = false;
            }
        },
        next(){
            if(this.current < this.total ) {
                this.answerValue[this.current] = this.answer; // 저장
                this.current += 1; 
                this.progressValue()
                if(this.answerValue[this.current] === undefined) {
                    this.answer = 0;
                    this.disabledNext = true;
                }else{
                    this.answer = this.answerValue[this.current];  
                }
                if(this.current === 10){
                   /* 11번 문제로 */
                    this.step = 2;
                }
            }
           

        },
        progressValue(){
            this.progress = (100 /this.total) *this.current;
        },
        radioChanged(value){
            console.log(value);
            this.disabledNext = false;
            this.answer = value;
        },
        result(){
            this.step = 12;
        },
        bottomSheetOpen(flag){
            /* bottom sheet */
            this.sheetFlag = flag;
            this.sheet = true;
        },
        sheetClose(){
            this.sheet= false;
        }
    }
}
</script>

<style lang="scss" scoped>
.survey-container{
    position: relative;
    padding-bottom: 80px; /* 하단 버튼영역 밑으로 내려가는 스크롤 영역*/
}
</style>