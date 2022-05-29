<template>
    <v-bottom-navigation v-model="value"  app mandatory grow height="79">
        <template v-for="n in menuName.length">
            <v-btn :key="n" plain v-ripple="{ class: 'primary--text'  }">
                <span>{{menuName[n-1]}}</span>
                <Home  v-if="n === 1" :active="active(n-1)"/>
                <Library  v-else-if="n === 2" :active="active(n-1)"/>
                <Chat  v-else-if="n === 3" :active="active(n-1)"/>
                <Square  v-else-if="n === 4" :active="active(n-1)"/>
                <Travel  v-else-if="n === 5" :active="active(n-1)"/>

            </v-btn>
        </template> 
    </v-bottom-navigation>
</template>

<script>
import Home from '@/components/icons/MenuHome'
import Library from '@/components/icons/MenuLibrary'
import Chat from '@/components/icons/MenuChat'
import Square from '@/components/icons/MenuSquare'
import Travel from '@/components/icons/MenuTravel'


export default {
    data: () => ({ 
        value: 0,
        menuName:['메인','도서관','찐한대화','광장','여행가방'],
    }),
    components:{
        Home,
        Library,
        Chat,
        Square,
        Travel
    },
   computed: {
    },
    methods:{
        /* 메뉴 클릭 */
        active(menu){
            return (this.value === menu)? true : false;
        }
    }
    
}
</script>
<style lang="scss" scoped>
::v-deep.v-bottom-navigation{
    box-shadow: none;
    border-top: 1px solid #DFDFDF;
    color: #000;
    .v-btn{
        font-size: 10px;
        min-width: 50px;
        .v-btn__content > span{
            margin-top: 4px;
            color: #000 !important;
        }
    }
}
</style>