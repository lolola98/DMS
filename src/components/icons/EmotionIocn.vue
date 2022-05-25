<template>
    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="42.424" viewBox="0 0 50 42.424">
        <g id="그룹_15794" data-name="그룹 15794" transform="translate(-70 -1026)">
            <g id="그룹_15790" data-name="그룹 15790" transform="translate(70 1026)">
            <path id="사각형_10579" data-name="사각형 10579" d="M16.094,0h0A16.094,16.094,0,0,1,32.188,16.094V38.183a0,0,0,0,1,0,0H0a0,0,0,0,1,0,0V16.094A16.094,16.094,0,0,1,16.094,0Z" transform="translate(8.906)" :fill="color[state][0]"/>
            <ellipse id="타원_733" data-name="타원 733" cx="6.917" cy="5.703" rx="6.917" ry="5.703" transform="translate(10.292 10.091) rotate(-39)" fill="#fff" opacity="0.431"/>
            <ellipse id="타원_734" data-name="타원 734" cx="2.12" cy="1.696" rx="2.12" ry="1.696" transform="translate(23.292 16.045) rotate(-39)" fill="#fff" opacity="0.431"/>
            <rect id="사각형_10580" data-name="사각형 10580" width="5.089" height="21.205" rx="2.545" transform="translate(22.455 18.675)" :fill="color[state][1]"/>
            <rect id="사각형_10578" data-name="사각형 10578" width="50" height="8.482" rx="4" transform="translate(0 33.942)" fill="#bdc3ca"/>
            </g>
        </g>
    </svg>

</template>
<script>
export default {
    props: {
        state:Number,
    },
    data: ()=> ({
        color:[['#1db776','#1ca26a'],['#ffcd26','#d9af21'],['#b71d29','#88161f']]
    }),
}
</script>