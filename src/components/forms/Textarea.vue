<template>
    <v-textarea
          v-model="inputVal"
          filled
          solo
          flat
          background-color="#F7F7F7"
          :height="height"
          :counter="counter"
          :placeholder="placeholder"
          no-resize
    ></v-textarea>
</template>

<script>
export default {
    props:{
        value:String,
        height:Number,
        counter:Number,
        placeholder:String,
    },
    computed: {
        inputVal: {
            get() {
                return this.value;
            },
            set(val) {
                this.$emit('input', val);
            }
        }
    }
}
</script>
<style lang="scss" scoped>
::v-deep.v-text-field{
    // font-size: 14px;
    .v-text-field__details{
        padding:0;
        .v-counter{
             font-size: 14px;
             color:#BEBEBE;
             font-weight: 300;
        }
    }
}
</style>