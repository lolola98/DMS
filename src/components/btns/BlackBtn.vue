<template>
     <v-btn block depressed height="48" color="#000" @click="$emit('click')">{{str}}</v-btn>
</template>
<script>
export default {
    props:{
       str:String 
    }
}
</script>
<style lang="scss" scoped>
::v-deep.v-btn{
    color: #fff;
}
</style>