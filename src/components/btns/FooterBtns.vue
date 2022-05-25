<template>
    <div class="footer-btns">
        <v-btn block depressed class="btn-primary mb-1" height="48"  @click="$emit('submit')">{{ok}}</v-btn>
        <v-btn block text height="48" depressed  @click="$emit('hide')">{{cancel}}</v-btn>
    </div>
</template>
<script>
export default {
  props: ["ok", "cancel"],
}
</script>
<style lang="scss" scoped>
.footer-btns{
    position: fixed;
    width: 100%;
    padding: 0 23px;
    bottom: 23px;
    .v-btn.btn-primary{
        background-color: $color-sub;
        color: $color-main;
        font-size: 16px;
    }
}

</style>