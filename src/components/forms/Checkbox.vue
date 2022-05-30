<template>
    <v-checkbox
      v-model="checkbox"
      :label="label"
    ></v-checkbox>
</template>
<script>
export default {
    props:{
        checkbox:Boolean,
        label:String
    }
}
</script>
<style lang="scss" scoped>

</style>