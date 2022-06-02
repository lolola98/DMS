<template>
    <div>
        <div class="question mb-9">
            앞에 선택한 항목에 대해 상세히 작성해<br>
            보세요. 그 밖의 특별한 증상이 있다면<br>
            적어보아도 좋습니다.
        </div>
        <Textarea :height="200" :counter="500" :placeholder="placeholder"/>
    </div>
</template>
<script>
import Textarea from '@/components/forms/Textarea'

export default {
    data: ()=> ({
        placeholder:'최대한 자세히 작성해보세요. (Ex. 관자놀이 쪽 머리가 아파요. 눈이 빠질 것 같아요. 심장이 뻐근해요. 등)'
    }),
    components:{
        Textarea,
    }
}
</script>
<style lang="scss" scoped>

</style>