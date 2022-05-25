<template>
    <div class="progress">
        <v-progress-linear absolute height="2" background-color="#D6D6D6" :value="progress" bottom></v-progress-linear>
    </div>
    
</template>

<script>
export default {
    props:['progress'],
}
</script>
<style lang="scss" scoped>
.progress{
    position: fixed;
    height: 56px;
    left: 0;
    top:0;
    width: 100%;
    z-index: 2;
    background: #fff;
}
</style>