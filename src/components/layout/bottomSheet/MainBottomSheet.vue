<template>
  <v-bottom-sheet
    v-model="sheet"
    scrollable
    persistent
    no-click-animation
    hide-overlay
  >
    <v-card class="main-sheet" :class="{'open': open, 'first':first}">
      <v-card-title class="sheet-header"><v-btn text plain :ripple="false" @click="open = !open"><UpIcon class="icon"/>Today’s Plan</v-btn></v-card-title>
      <v-card-text style="" class="sheet-body"> 
        <v-btn text plain :ripple="false" class="pa-0 btn-map"> <MapIcon/></v-btn>
        <div class="sheet-content">
           <SolutionList/>
        </div>
      </v-card-text>
    </v-card>
  </v-bottom-sheet>
</template>
<script>
import UpIcon from '@/components/icons/UpIcon'
import MapIcon from '@/components/icons/MapIcon'
import SolutionList from '@/components/layout/SolutionList'
export default {
  data: () => ({
    sheet: false,
    open: false,
    first: true,
  }),
  components:{
    UpIcon,
    MapIcon,
    SolutionList
  },
  mounted(){
    setTimeout(() => {this.sheetOpen()},400);
  },
  methods:{
    sheetOpen(){
      this.sheet = true;
      setTimeout(() => {this.first = false}, 800);
    }
  }
};
</script>

<style lang="scss" scoped>
::v-deep.v-dialog__content {
  z-index: 3 !important;
  .v-dialog {
    box-shadow: none;
    max-height: 100%;
    .main-sheet {
      background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzNjAiIGhlaWdodD0iOTMuMTE5IiB2aWV3Qm94PSIwIDAgMzYwIDkzLjExOSI+DQogIDxnIGlkPSLqt7jro7lfMTY1NDkiIGRhdGEtbmFtZT0i6re466O5IDE2NTQ5IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNSAtNDE3KSI+DQogICAgPGcgaWQ9Iuq3uOujuV8xNjU0OCIgZGF0YS1uYW1lPSLqt7jro7kgMTY1NDgiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xNSAtMTI0KSI+DQogICAgICA8ZyBpZD0i6re466O5XzE2NTQ2IiBkYXRhLW5hbWU9Iuq3uOujuSAxNjU0NiI+DQogICAgICAgIDxwYXRoIGlkPSLtjKjsiqRfMTA4NCIgZGF0YS1uYW1lPSLtjKjsiqQgMTA4NCIgZD0iTTI2LjA0NywwSDE5Ni42NThBMzMuNzIxLDMzLjcyMSwwLDAsMSwyMjAuMSw5Ljg5MWMzLjAzNCwzLjAzNCw1Ny4yNTYsNTQuMzE1LDU3LjI1Niw1NC4zMTVMMCw2MC42OVYyMi40NzhDMCwxMC4wNjQsMTEuNjYyLDAsMjYuMDQ3LDBaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDU0MSkiIGZpbGw9IiNmZmYiLz4NCiAgICAgICAgPHBhdGggaWQ9Iu2MqOyKpF8xMDg2IiBkYXRhLW5hbWU9Iu2MqOyKpCAxMDg2IiBkPSJNMTMzNDkuMDkzLDEyMTkzLjEzNHMxMS42LDEyLjU3OSwyOS4zMTUsMTIuNTc5Yy0uMSwyLjMzMSwwLDYuMjkzLDAsNi4yOTNoLTI5LjMxNVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMzEwNy4zMjYgLTExNjIxLjYwNSkiIGZpbGw9IiNmZmYiLz4NCiAgICAgIDwvZz4NCiAgICA8L2c+DQogIDwvZz4NCjwvc3ZnPg==);
      box-shadow: none;
      background-color: transparent;
      bottom: calc((85vh - 100px) * -1);
      transition: bottom 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
      .sheet-header {
        position: relative;
        height: 43px;
        padding: 10px 0 0 0;
        &:after{
          content: '';
          position: absolute;
          top: 43px;
          display: block;
          width: 100%;
          height:100px;
          background: #fff;
          border-radius: 0 20px 0 0;
        }
        .v-btn{
          font-size: 20px;
          color:#474747;
          letter-spacing: -0.5px;
          font-weight: 700;
          padding: 0 20px 0 22px;
          .icon{
            margin-right: 4px;
          }
        }
      }
      .sheet-body {
        position: relative;
        background: #fff;
        border-radius: 0 20px 0 0 ;
        height: 85vh;
        padding: 50px 0 80px 0;
        .btn-map{
          position: absolute;
          right: 15px;
          top: 10px;
        }
        .sheet-content{
          height: 100%;
          overflow-y: auto;
          padding-bottom: 30px;
        }

      }
      &.first{
        /* 처음한번 */
        bottom: calc((85vh - 200px) * -1);
      }
      &.open{
        bottom: 0;
        .icon{
          transform: rotate(-180deg);
        }
        
      }
    }
  }
}
</style>
