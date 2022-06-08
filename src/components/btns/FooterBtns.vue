<template>
    <div class="footer-btns">
        <v-btn v-if="ok !== undefined" block depressed class="btn-primaryLight mb-1" height="48"  @click="$emit('submit')" >{{ok}}</v-btn>
        <v-btn v-if="cancel !== undefined"  block text height="48" depressed  @click="$emit('hide')">{{cancel}}</v-btn>
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
    left: 0;
}

</style>