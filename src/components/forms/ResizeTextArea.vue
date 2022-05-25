<template>
    <ResizeAuto>
        <template v-slot:default="{resize}">
            <textarea class="textarea" @input="resize" rows="1" placeholder="입력해주세요">
            </textarea>
        </template>
    </ResizeAuto>
</template>

<script>
import ResizeAuto from './ResizeAuto.vue'
export default {
    components:{
        ResizeAuto,
    }
}
</script>

<style lang="scss" scoped>
.textarea{
    width:100%;
    text-align: center;
    outline: none;
    resize: none;
    padding:15px 0 10px 0;
    font-size: 20px;
    font-weight: 400;
    background: #fff;
}
.textarea:placeholder{
    color: #000;
}
</style>
