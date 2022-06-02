<template>
    <div class="fill-height d-flex flex-column justify-space-between">
        <div class="question mt-9">{{description}}</div>
            <v-checkbox
            v-model="checkbox"
            :label="label"
            :ripple="false"
            class="checkbox-circle"
        ></v-checkbox>
    </div>
</template>
<script>
export default {
    data: ()=> ({
        checkbox:false,
        description:'마무리멘트마무리멘트마무리멘트마무리멘트마무리멘트마무리멘트마무리멘트마무리멘트마무마무리멘트마무리멘트마무리멘트마무리멘트',
        label:'이 주제로 찐한 대화하고 싶어요.',
    })
}
</script>