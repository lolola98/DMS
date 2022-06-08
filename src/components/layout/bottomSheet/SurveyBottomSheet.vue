<template>
      <v-bottom-sheet
        v-model="sheet"
        scrollable
        persistent
        no-click-animation
        :overlay-opacity="0.7"
      >
      <v-card>
          <SheetHeader :title="title[flag]" @sheetClose="$emit('sheetClose')"/>
          <v-divider></v-divider>
          <v-card-text :style="`height: ${height};`" class="sheet-body">
              <!-- 가장 건강한 나무 -->
              <div v-if="flag === 0" class="text-center">
                <div class="tree-area mb-7">
                    <v-img :src="treeUrl" max-height="200" contain></v-img>
                </div>
                <div class="fs-16 fw-600 black--text mb-4">{{treeName}}</div>
                <div class="fs-16 black--text description">
                    <span class="text-no-wrap primaryLight primary--text fw-600 pa-1">튼튼한 기둥, 많은 가지, 풍성하며 푸른 잎,</span><br>
                    <span class="text-no-wrap primaryLight primary--text fw-600 pa-1">풀이난 토양</span>으로 이루어진<br>건강한 나무에요!
                </div>
              </div>
              <!-- 날씨 감정 -->
              <div v-else-if="flag === 1">
                  <div class="text-center pt-4 pb-5">
                      <EmotionIocn :state="0" />
                      <div class="fs-20 fw-600 black--text mt-3">안정</div>
                  </div>
                    <div
                    v-for="n in templateDescription.length"
                    :key="n"
                    class="mt-6"
                     >
                     <div class="fs-16 fw-600 black--text ps-1 mb-2">{{templateDescription[n-1].title}}</div>
                        <ul class="list dot ms-n3">
                            <li>
                                {{ templateDescription[n-1].description }}
                            </li>
                        </ul>
                    </div>
              </div>
              <!-- 나무 감정 -->
              <div v-else-if="flag === 2">
                  <div class="text-center pt-4 pb-5">
                      <!-- 아이콘이없어 자리만.. -->
                      <span style="display:inline-block; width:70px;height:70px; border-radius: 50%; background: #e3e3e3;"></span>
                      <div class="fs-20 fw-600 black--text mt-3">양호</div>
                  </div>
                    <div
                    v-for="n in templateDescription.length"
                    :key="n"
                    class="mt-6"
                     >
                     <div class="fs-16 fw-600 black--text ps-1 mb-2">{{templateDescription[n-1].title}}</div>
                        <ul class="list dot ms-n3">
                            <li>
                                {{ templateDescription[n-1].description }}
                            </li>
                        </ul>
                    </div>
              </div>
          </v-card-text>
      </v-card>

      </v-bottom-sheet>
</template>
<script>
import SheetHeader from "./SheetHeader";
import EmotionIocn from "@/components/icons/EmotionIocn";
export default {
    props:{
        flag:Number,
        sheet:Boolean,
        height:String,
    },
    components:{
        EmotionIocn,
        SheetHeader,
    },
    data: ()=> ({
        treeName: '인피니티 나무',
        treeUrl:'https://i.pinimg.com/564x/b9/aa/3b/b9aa3be45f18969bf924420ff6957212.jpg',
        title:['가장 건강한 나무의 모습은?','우울','자아강동'],
        templateDescription: [
                { title: "지금 상태는?", description: "정의정의정의정의정의 정의정의 정의 정의정의정의정의정의 정의정의정의" },
                { title: "이렇게 해보세요!", description: "정의정의정의정의정의 정의정의 정의 정의정의정의정의정의 정의정의정의" },
        ],
    })
};
</script>

<style lang="scss" scoped>
::v-deep .v-dialog{
    .sheet-body{
        padding: 30px 23px;
        .tree-area{
            height:280px;
            display: flex;
            justify-content: center;
            align-items: center;
            background: #f8f8f8;
            border-radius: 10px;
        }
        .description{
            line-height: 25px;
        }
    }
}

</style>