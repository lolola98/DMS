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
          :class="{'is-btns':isBtns}"
    >
        <template v-slot:append v-if="isBtns">
            <div class="btn-area">
                <v-btn depressed plain @click="$emit('photo')" class="btn-photo"><Photo/>사진</v-btn>
                <v-btn v-if="isRecording" depressed plain @click="$emit('recording')" class="btn-recording"><i></i>녹음</v-btn>
            </div>
        </template>
    </v-textarea>
</template>

<script>
import Photo from "@/components/icons/Photo"
export default {
    props:{
        value:String,
        height:Number,
        counter:Number,
        placeholder:String,
        isBtns:Boolean,
        isRecording:Boolean,
    },
    components:{
        Photo
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
    },

}
</script>
<style lang="scss" scoped>
::v-deep.v-textarea{
    // font-size: 14px;
    .v-text-field__details{
        padding:0;
        .v-counter{
             font-size: 14px;
             color:#BEBEBE;
             font-weight: 300;
        }
    }
    .btn-area{
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        display: flex;
        background: #E9E6FF;
        border-radius: 0 0 6px 6px;
        .v-btn{
            flex: auto;
            font-size: 14px;
            color: $color-main;
            border-radius: 0 0 0 6px;
            height: 40px;
            svg{
                margin-right: 5px;
            }
        }
        .btn-recording{
            position: relative;
            border-radius: 0 0 6px 0;
            i{
                display: inline-block;
                width: 11px;
                height: 11px;
                border-radius: 50%;
                background: $color-main;
                margin-right: 5px;
            }
            &:after{
                position: absolute;
                content: '';
                display: inline-block;
                width: 1px;
                height: 20px;
                background: $color-main;
                left: 0;

            }
        }
    }
    &.is-btns{
        .v-input__slot{
            padding-bottom: 50px !important;
        }

    }
}
</style>