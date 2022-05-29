<template>
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
  <g id="그룹_16055" data-name="그룹 16055" transform="translate(-35 -698)">
    <rect id="사각형_9763" data-name="사각형 9763" width="24" height="24" transform="translate(35 698)" fill="none"/>
    <rect id="사각형_10613" data-name="사각형 10613" width="5.159" height="18.056" rx="1" transform="translate(37.085 701.501)" :fill="active? '#7260ff' : '#e6e8ea'"/>
    <rect id="사각형_10617" data-name="사각형 10617" width="5.159" height="18.056" rx="1" transform="translate(44 701.501)" :fill="active? '#7260ff' : '#e6e8ea'"/>
    <rect id="사각형_10615" data-name="사각형 10615" width="5.159" height="17.197" rx="1" transform="matrix(0.966, -0.259, 0.259, 0.966, 48.096, 703.307)" :fill="active? '#7260ff' : '#e6e8ea'"/>
  </g>
</svg>
</template>
<script>
export default {
  props:{
    active:Boolean
  },
}
</script>