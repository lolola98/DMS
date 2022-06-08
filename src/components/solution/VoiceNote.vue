<template>
    <div class="voice-note">
        <div>
            <div>음성 메모</div>
            <div class="primary--text">10:00</div>
        </div>
        <div>

        </div>
        <v-btn icon class="close"></v-btn>
    </div>    
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
.voice-note{
    height: 90px;
    border: 1px solid #7260FF;
    border-radius: $border-radius-root;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
}
</style>