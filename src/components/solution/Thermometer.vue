<template>
    <v-carousel v-model="model" hide-delimiters :show-arrows="false">
    <v-carousel-item
      v-for="(item, i) in total"
      :key="item"
    >
      <v-sheet   
        height="100%"
        tile
      >
        <v-row
          class="fill-height"
          align="center"
          justify="center"
        >
          <div class="thermometer">
              <v-slider
                v-model="thermometerArr[i-1]"
                step="10"
                vertical
                tick-size="4"
                class="slider"
                color="#000"
                track-color="transparent"
            ></v-slider>
            <div class="num-area" @click="reset"><span class="num">{{thermometerArr[i-1]}}</span></div>
            <ThermometerIcon/>
            <v-chip class="emotion-text">{{i}}</v-chip>
          </div>
      
        </v-row>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
  import ThermometerIcon from '@/components/icons/Thermometer'
  export default {
    data: () => ({
      value: 0,
      model: 0,
      total: 3,
      thermometerArr: [0,0,0],
      emotionArr:['기쁨','슬픔','우울한'],
    }),
    components:{
      ThermometerIcon
    },
    methods:{
      reset(){
        this.value=0;
      }
    }
  }
</script>

<style lang="scss" scoped>
.thermometer{
  position: relative;
  .slider{
    position: absolute;
    bottom: 50px;
    left: 50%;
    margin-left: -1px;
    transform: translateX(-50%);
    z-index: 2;
    ::v-deep .v-slider--vertical{
      min-height: 225px;
      .v-slider__track-container{
        width: 20px;
        border-radius: 20px;;
      }
      .v-slider__thumb{
        width: 20px;
        height: 20px;
        left: -10px;
        &:before{
          left: -8px;
        }
      }
    }
  }
  .num-area{
    position: absolute;
    background: #000;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    bottom: 26px;
    left: 21px;
    display: flex;
    justify-content: center;
    align-items: center;
    .num{
      position: absolute;
      display: inline-block;
      font-size:18px;
      font-weight: 600;
      color: #ffff;
      z-index: 3;
      pointer-events: none;
      &:after{
        content: '';
        position: absolute;
        top: 1px;
        right: -3px ;
        display: inline-block;
        width: 4px;
        height: 4px;
        border-radius: 50%;
        border: 1px solid #fff;
      }
    }
  }
  .emotion-text{
    position: absolute;
    bottom: -50px;
    left: 50%;
    transform: translateX(-50%);
  }

}
</style>