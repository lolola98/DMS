<template>
    <v-card-title class="justify-space-between">
        {{title}}
        <v-btn icon  @click="$emit('sheetClose')"> <Close /></v-btn>
    </v-card-title>
</template>
<script>
import Close from '@/components/icons/Close'
export default {
    props:{
        title:String,
    },
    components:{
        Close
    }
}
</script>