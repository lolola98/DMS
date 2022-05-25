<template>
    <div class="text-center">
        <div class="text">{{state}}</div>
        <v-progress-circular
            :rotate="-90"
            :size="172"
            :width="5"
            :value="value"
            color="primary"
            >
            {{ value }}
        </v-progress-circular>
        <div class="text">{{text}}</div>
    </div>
</template>

<script>
export default {
    data: ()=> ({
        state:'',
        interval: {},
        value: 0,
        text:''
    }),
    beforeDestroy () {
      clearInterval(this.interval)
    },
    mounted(){
        this.state = "분석중...";
        this.text = "여행지원서를 분석하고 있습니다."
        this.interval = setInterval(() => {
            if (this.value === 100) {
                this.state = "분석완료";
                this.text = "결과를 확인해보세요~!"
                clearInterval(this.interval);
                setTimeout(() => {this.result()},2000)
            }else{
                this.value += 10;
            }

      }, 1000);
    },
    methods:{
        result(){
            this.$emit('result');
        }
    }
}
</script>

<style lang="scss" scoped>
.text{
    font-size:18px;
    font-weight: 400;
    color: #101010;
}
::v-deep.v-progress-circular{
    margin: 92px 0 28px 0;
    .v-progress-circular__underlay{
        stroke:#E9E6FF;
    }
    .v-progress-circular__info{
        font-size: 20px;
        font-weight: 700;
        color: #000;
        &:after{
            content: '%';
        }
    }

}
</style>