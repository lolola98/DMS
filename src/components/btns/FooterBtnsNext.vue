<template>
    <div class="footer-btns-next">
        <v-btn depressed class="btn-before" height="48"  @click="$emit('before')" :disabled="current === 0">이전</v-btn>
        <v-btn depressed class="btn-primaryLight" height="48"  @click="$emit('next')" :disabled="current === total || disabledNext">다음</v-btn>
    </div>
</template>
<script>
export default {
  props: ['current','total','disabledNext'],
}
</script>

<style lang="scss" scoped>
.footer-btns-next{
    position: fixed;
    width: 100%;
    bottom: 28px;
    display: flex;
    justify-content: space-between;
    padding: 0 23px;
    .v-btn.btn-before{
      width: 29%;
      background-color: $bg-lightgray;
      color: $color-main;
    }
    .v-btn.btn-primaryLight{
        width: calc(71% - 14px);
    }
}
</style>