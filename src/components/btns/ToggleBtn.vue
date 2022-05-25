<template>
    <v-btn-toggle v-model="value" group :multiple="multiple" color="primary" @change="$emit('change',value,flag)" :max="max">
        <v-btn
            v-for="n in total"
            :key="n"
            :min-width="minWidth" 
            active-class="active" 
            plain 
        >
        {{str[n-1]}}
        </v-btn>
    </v-btn-toggle>
</template>
<script>
export default {
    props:{
        flag:Number, /* 한페이지에 여러개일 경우 구분값 */ 
        total:Number,
        minWidth:Number,
        str:Array,
        max:Number,
        multiple:Boolean,
    },
    data: ()=> ({
        value:[],
    }),

}
</script>
<style lang="scss" scoped>
::v-deep.v-btn-toggle{
    flex-wrap: wrap;
    justify-content: center;
    max-width: 330px;
    .v-btn{
        border: 1px solid #D9D9D9;
        border-radius: 6px !important;
        border-left-width: 1px !important;
        font-size: 16px;
        margin: 5px 8px;
    }
    .active{
       border-color: #7260FF !important;
       box-shadow: 0px 2px 6px #00000029;
    }
}
</style>