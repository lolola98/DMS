<template>
    <!-- play -->
    <div v-if="pause" class="ps-1 line-height-1">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="28" viewBox="0 0 24 28">
        <path id="다각형_20" data-name="다각형 20" d="M12.272,2.962a2,2,0,0,1,3.455,0L26.245,20.992A2,2,0,0,1,24.518,24H3.482a2,2,0,0,1-1.728-3.008Z" transform="translate(24) rotate(90)" fill="#fff"/>
        </svg>
    </div>
    <!-- pause -->
    <div v-else class="line-height-1">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="26" viewBox="0 0 24 26">
        <g id="그룹_16177" data-name="그룹 16177" transform="translate(-168 -685)">
            <rect id="사각형_10709" data-name="사각형 10709" width="8" height="26" rx="2" transform="translate(168 685)" fill="#fff"/>
            <rect id="사각형_10710" data-name="사각형 10710" width="8" height="26" rx="2" transform="translate(184 685)" fill="#fff"/>
        </g>
        </svg>
    </div> 
</template>
<script>
export default {
    props:{
        pause:Boolean
    },
}
</script>
