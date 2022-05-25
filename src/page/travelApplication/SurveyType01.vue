<template>
  <div>
    <div class="subheader pt-10 pb-12">
        질문을 읽고 문장을 완성해주세요. <br>오래 생각하기 보다는 가능한 빠르게 떠오르는 데로<br>작성해주세요.
    </div>
    <div class="question" v-html="question"> </div>
    <RadioGroup :str="str" :answer="answer"  @changed="changed" />
  </div>
</template>

<script>
import RadioGroup from '@/components/forms/RadioGroup'
export default {
    props:["answer","question"],
    data: () => ({
        str: ['전혀 아니다','','','','매우 그렇다']
    }),
    components: {
        RadioGroup
    },
    methods: {
        changed(newAnswer){
           this.$emit('radioChanged',newAnswer)
        }
    }
}
</script>

<style lang="scss" scoped>
.question{
    min-height: 80px;
}
</style>
