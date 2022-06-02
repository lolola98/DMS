<template>
    <div class="main fill-width fill-height" :style="{'background-image' : `url(${background})`}">
        <div @click="notification" :class="[{new:noticNew},'icon-notic']"><NoticIcon /></div>
        <div class="px-6">
            <div class="greetings" v-html="greetings"></div>
            <v-btn depressed plain v-ripple="{ class: 'white--text'  }" height="40" class="btn-state">{{stateStr[0]}} </v-btn>
        </div>
        <MainBottomSheet/>
        <BottomMenu />
  </div>
</template>

<script>
import NoticIcon from '@/components/icons/NoticIcon'
import MainBottomSheet from '@/components/layout/bottomSheet/MainBottomSheet'
import BottomMenu from '@/components/layout/BottomMenu'

export default {
    data: () => ({ 
        value: 'recent',
        noticNew:true,
        greetings:'',
        greetingsText:['님의<br>즐거운 여행을 기대합니다.'],
        stateStr:['여행 지원서 작성하러 가기'],
        background:'https://i.pinimg.com/564x/5a/16/9d/5a169db84e334cebfa35cd0a7c1be97c.jpg'
    }),
    computed: {
    
    },
    mounted(){
        this.greetings = this.$store.state.authStore.userName + this.greetingsText[0];
    },
    components:{
        MainBottomSheet,
        NoticIcon,
        BottomMenu
    },
    methods:{
        notification(){
            alert("알림 리스트로..")
        }
    }
}
</script>

<style lang="scss" scoped>
.main{
    position: relative;
    background-size:cover;
    .icon-notic{
        text-align: right;
        line-height: 0;
        padding: 5px 5px 0 0;
        svg{
            position: relative;
        }
        &.new{
            svg:after{
                position: absolute;
                content: '';
                width: 9px;
                height: 9px;
                border-radius: 50%;

            }
        }
    }
    .greetings{
        font-size: 24px;
        line-height: 34px;
        font-weight: 700;
        text-shadow: 0px 1px 6px #00000029;
        color:#fff;
        letter-spacing: -1.2px;
        margin-bottom: 13px;
        padding-left: 6px;
    }
    .btn-state{
        box-shadow: 0px 2px 10px rgba(0,0,0,.08);
        border: 1px solid rgba(255,255,255,.22);
        border-radius: 10px;
        font-size: 14px;
        color:#101010;
        height: 40px;
        background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2LjI3MSIgaGVpZ2h0PSIxMC41NDEiIHZpZXdCb3g9IjAgMCA2LjI3MSAxMC41NDEiPg0KICA8cGF0aCBpZD0iY2hldnJvbi1sZWZ0IiBkPSJNMy44NTYsNy43MTMsMCwzLjg1NiwzLjg1NiwwaDAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDUuMjcxIDkuMTI3KSByb3RhdGUoMTgwKSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjM2IzYjNiIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMiIvPg0KPC9zdmc+DQo=);
        background-repeat: no-repeat;
        background-color: rgba(255,255,255,.5);
        background-position: top 13px right 15px;
        padding: 0 45px 0 15px;
        letter-spacing: -0.1px;
    }
}
</style>