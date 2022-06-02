<template>
  <div class="pt-8">
    <div v-if="title !== ''" class="title mb-2">{{title}} </div>
    <div v-if="time !== ''" class="fs-14 primary--text mb-10">[{{time}}분]</div>
    <div v-if="description !== ''" v-html="description" class="gray--text fw-400 mb-6"></div>
    <v-img v-if="photo !== ''" :src="photo" width="100%" max-height="180" class="radius"/>
    <video v-if="movie !== undefined" ref="video" class="radius" @click="videoPlay()" controls width="100%">
        <source :src= "movie" type="video/mp4">
    </video> 
      <!-- 오디오 크롬에서 자동재생 이슈 -->
  </div>
</template>

<script>
export default {
    props:{
        title:String,
        time:Number,
        description:String,
        movie:String,
        photo:String,
        sound:String
    },
    mounted(){
        
    },
    methods:{
        videoPlay(){
            this.$refs.video.play();
        }
    }
}
</script>

<style lang="scss" scoped>
.title{
     font-size: 30px !important;
     font-weight: 700;
     letter-spacing: 0 !important;
}
.radius{
    border-radius: 2px;
    
}
</style>