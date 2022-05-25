<template>
    <v-sheet
        class="mx-auto"
        max-width="700"
      >
        <v-slide-group mandatory @change="changed" class="emotion-list pb-5">
          <v-slide-item
            v-for="n in (emotionStrArr.length)"
            :key="n"
            v-slot="{ active, toggle }"
          >
            <v-btn
              class="mx-2 emotion-btn"
              :input-value="active"
              :active-class="`color${n} white--text`"
              depressed
              rounded
              height="30"
              min-width="70"
              text
              @click="toggle"
            >
            {{emotionStrArr[n-1][0]}}
            </v-btn>
          </v-slide-item>
        </v-slide-group>
        <div style="position:absolute; top: 100px;">{{offsetTop}}</div>
        <div ref="container" v-scroll.self="onScroll" class="overflow-y-auto inner" style="max-height:400px">
                <v-btn-toggle 
                    multiple 
                    borderless 
                    v-for="n in emotionStrArr.length" 
                    :key="n" 
                    ref="lists" 
                    class="d-flex flex-wrap emotion-group"
                >
                <v-btn 
                    v-for="i in emotionStrArr[n-1][1].length" 
                    :key="i" 
                    text 
                    plain
                    :ripple="false" 
                    class="emotion-txt"
                    :active-class="`textColor${n}`"
                    @click="emotionTxt"
                >   
                    {{emotionStrArr[n-1][1][i-1]}}
                </v-btn>
            </v-btn-toggle>
            
        </div>     
      </v-sheet>
</template>
<script>
export default {
    data: () => ({
        offsetTop: 0,
        model: null,
        maxSelect:3,
        emotionStrArr: [
            ['행복한',['기쁜', '행복한','뿌듯한','고마운','편안한','유쾌한','희망찬','들뜬','보람찬','신난','열정적인']],
            ['화난',['화난','못마땅한','열받은','억울한','불쾌한','미운','속상한','짜증난','답답한','욱하는','원망스러운']],
            ['두려운',['불안한','긴장되는','걱정스러운','불편한','조바심 나는','두려운','어쩔 줄 모르는','스트레스 받는','압박감 느끼는','부담스러운','조심스러운']],
            ['슬픈',['아쉬운','안타까운','슬픈','서러운','그리운','마음 아픈','외로운','울고 싶은','가여운','불쌍한','애틋한']],
            ['수치심 느끼는',['수치심 느끼는','열등감 느끼는','한심한','죄책감 느끼는','뻘쭘한','반복해서 생각나는','혼란스러운','무안한','당황스러운','시선이 의식되는','부끄러운']],
            ['우울한',['실망한','마음이 무거운','괴로운','침울한','우울한','지루한','지친','식상한','무덤덤한','힘든','피곤한']]
        ],
        selectArr:[]
    }),
    mounted(){
       
    },
    methods:{
        changed(n){
           this.$vuetify.goTo(this.$refs.lists[n], { container: this.$refs.container })
        },
        onScroll (e) {
            this.offsetTop = e.target.scrollTop;
        },
        emotionTxt(){
             alert(this.selectArr.length )
        }
    }
}
</script>

<style lang="scss" scoped>
    /* 임시 컬러 */
    .color1{background-color:#FFCA19 !important}
    .color2{background-color:#FF6019 !important}
    .color3{background-color:#19ffd9 !important}
    .color4{background-color:#1962ff !important}
    .color5{background-color:#ff1990 !important}
    .color6{background-color:#000 !important}
    .textColor1{color:#FFCA19 !important;}
    .textColor2{color:#FF6019 !important}
    .textColor3{color:#19ffd9 !important}
    .textColor4{color:#1962ff !important}
    .textColor5{color:#ff1990 !important}
    .textColor6{color:#000 !important}
    .emotion-list{
        border-bottom: 1px solid $color-gray-3;
        .emotion-btn{
            font-size: 16px;
        }

    }
    .emotion-group{
        border-bottom: 1px solid rgba(230,232,234,.5);
        padding: 15px 0;
        &:last-child{
            border-bottom:none;
        }
        .emotion-txt{
            font-size: 16px;
            color: #AFAFAF;
            width: 33.3%;
            font-weight: 300;
            
            .v-btn__content{
                opacity: 1 !important;
            }
        }

    }


</style>