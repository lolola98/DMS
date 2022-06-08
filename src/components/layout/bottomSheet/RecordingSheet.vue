<template>
    <v-bottom-sheet
      v-model="sheet"
      scrollable
      persistent
      no-click-animation
      :overlay-opacity="0.7"
    >
    <v-card>
      <SheetHeader :title="'녹음하기'" @sheetClose="$emit('sheetClose')"/>
      <v-divider></v-divider>
      <v-card-text  class="sheet-body"> 
        <v-progress-circular
            :rotate="-90"
            :size="158"
            :width="5"
            :value="value"
            color="#BEB7FA"
            >
            <span class="time">{{ time }}</span>
        </v-progress-circular>
        <div class="fs-16 primary--text mt-9">버튼을 누르고 녹음을 시작하세요!</div>
      </v-card-text>
      <v-card-actions class="sheet-footer">
        <v-btn
          depressed
          class="btn-primaryLight"
          @click="recordingStatus"
        >
          {{status}}
        </v-btn>
        <v-btn
          depressed
          class="btn-primary"
          :disabled="!save"
        >
          저장
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-bottom-sheet>
</template>

<script>
import SheetHeader from "./SheetHeader";
export default {
    props:{
        sheet:Boolean,
    },
    data: ()=> ({
      interval: {},
      value: 0,
      time:'00:00',
      recording:false,
      save:false,
    }),
    components:{
      SheetHeader
    },
    computed:{
      status(){
        return (this.recording)? '중지' : '녹음';
      }
    },
    methods:{
      recordingStatus(){
        this.recording = !this.recording;
        this.save = true;
        /* 샘플 코드 */
        if(this.recording){
          this.interval = setInterval(() => {
              if (this.value === 100) {
                  clearInterval(this.interval);
              }else{
                  this.value += 10;
              }

          }, 1000);
        }else{
          clearInterval(this.interval);
        }

      }
    }

}
</script>

<style lang="scss" scoped>
::v-deep .v-dialog{
  .sheet-body{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px 0 20px 0;
   .v-progress-circular{
      .v-progress-circular__underlay{
        stroke: rgba(230, 232, 234, 0.41);
      }
      .time{
        font-size: 40px;
        color: #000;
      }
    } 

  }
  .sheet-footer{
    padding: 0 23px 40px 23px;
    .v-btn{
      width: calc(50% - 7px);
      height: 48px;
      border-radius: 6px;
      +.v-btn{
        margin-left: 14px;
      }
    }
  }
}
</style>