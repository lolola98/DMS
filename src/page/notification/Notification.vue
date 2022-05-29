<template>
    <v-sheet class="mx-auto fill-height full-width" max-width="700">
        <!-- 리스트 없을경우 -->
        <div v-if="items.length === 0" class="pos-center text-center pb-15">
            <Bell/>
            <div class="fs-14 secondary--text mt-3">도착한 알림이 없습니다.</div>
        </div>
        <ul class="list" v-else>
            <li v-for="(item, index) in items" :key="index" :class="{'new':item.new === true}">
                <div class="item">
                    <div class="icon">
                        <v-img :src="item.icon" contain></v-img>
                    </div>
                    <div class="content">
                        <div class="text" v-text="item.text"></div>
                        <div class="date" v-text="item.date"></div>
                    </div>
                </div>
            </li>
        </ul>
    </v-sheet>
</template>

<script>
import Bell from '@/components/icons/Bell'
export default {
    data: ()=> ({
      selectedItem: 1,
      items: [
        { text: '1내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용', 
          icon: 'https://vuejs.org//images/logo.png', 
          date: '21.11.01',
          new: true
        },
        { text: '2내용내용내용내용내용내용내용내용내용내용내용내용내용내용', 
          icon: 'https://vuejs.org//images/logo.png', 
          date: '21.11.01',
          new: false
        },
        { text: '3내용내용내용내용내용내용내용내용내용내용내용내용내용내용', 
          icon: 'https://vuejs.org//images/logo.png', 
          date: '21.11.01',
          new: false
        },
        { text: '4내용내용내용내용내용내용내용내용내용내용내용내용내용내용', 
          icon: 'https://vuejs.org//images/logo.png', 
          date: '21.11.01',
          new: false
        },
        { text: '5내용내용내용내용내용내용', 
          icon: 'https://vuejs.org//images/logo.png', 
          date: '21.11.01',
          new: false
        },
        { text: '6내용내용내용내용내용내', 
          icon: 'https://vuejs.org//images/logo.png', 
          date: '21.11.01',
          new: false
        },
        { text: '7내용내용내용내용내용내용내용', 
          icon: 'https://vuejs.org//images/logo.png', 
          date: '21.11.01',
          new: false
        },
      ], 
    }),
    components: {
        Bell
    },
}
</script>

<style lang="scss" scoped>
.list{
    padding:0;
    li{
        padding: 18px 23px 0 23px;
        .item{
            display: flex;
            flex: 1 1 100%;
            border-bottom: 1px solid #E6E8EA;
            justify-content: space-between;
            padding-bottom: 18px;
            .icon{
                width: 30px;
                height: 30px;
                border-radius: 50%;
                overflow: hidden;
                margin-top: 5px;
            }
            .content{
                width: calc(100% - 42px);
                .date{
                    font-size: 12px;
                    color: #545457;
                    margin-top: 5px;
                }
            }
        }
        &.new{
            background: $color-sub;
        }
        &:last-child{
            .item{
                border-bottom: none;
            }
        }

    }
}

</style>