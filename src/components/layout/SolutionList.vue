<template>
   <div class="solution-list">
       <div v-for="n in solution.length" :key="n" :class="[{'current': current === n},'item']">
           <div class="info-area">
               <span class="icon"></span>
               <div class="name-area">
                   <div class="category" v-if="solution[n-1].category !== ''">{{solution[n-1].category}}</div>
                   <div class="name"><Lock v-if="solution[n-1].lock" class="lock"/>{{solution[n-1].name}}</div>
               </div>
           </div>
           <div :class="[{'complete':solution[n-1].complete},'btn-check']"></div>
       </div>
   </div>
</template>

<script>
import Lock from '@/components/icons/Lock'
    export default {
        data: ()=> ({
            current:2,
            solution:[
                {icon:'',category:'',name:'마음노트',lock:false,complete:true},
                {icon:'',category:'카테고리01',name:'유닛01',lock:true,complete:false},
                {icon:'',category:'카테고리01',name:'유닛02',lock:true,complete:false},
                {icon:'',category:'카테고리01',name:'유닛03',lock:true,complete:false},
                {icon:'',category:'카테고리01',name:'유닛04',lock:false,complete:false},
                {icon:'',category:'카테고리01',name:'유닛05',lock:false,complete:false},
            ]
        }),
        components:{
            Lock
        },
        methods:{
            click(){

            }
        }
    }
</script>
<style lang="scss" scoped>
.solution-list{
    padding: 0 24px 0 30px;
    .item{
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-left: 48px;
        padding-top: 50px;
        
        .info-area{
            display: flex;
            align-items: center;
            .icon{
                width: 56px;
                height: 56px;
                background: #F5F5F5;
                border-radius: 50%;
            }
            .name-area{
                margin-left: 12px;
                display: flex;
                flex-direction: column;
                .name{
                    display: flex;
                    align-items: center;
                    font-size: 16px;
                    color: #101010;
                    font-weight: 500;
                    .lock{
                        margin-right: 5px;
                    }
                }
                .category{
                    font-size: 12px;
                    color: #A0A0A0;
                    line-height: 1;
                    margin-bottom: 3px;
                }
            }
        }
        &:first-child{
            padding-top: 0;
            &:before{
                display: none;
            }
        }
        &:after,&:before{
            content: '';
            position: absolute;
            display: inline-block;
        }
        &:before{
            left: 0;
            height: 100%;
            bottom: 25px;
            width:1px;
            background: #F3F3F3;

        }
        &:after{
            left: -6px;
            width: 12px;
            height: 12px;
            border-radius: 50%;
            background: #B7B7B7;
            z-index: 1;
        }
        &.current{
            &:after{
                background: #7260FF;
            }
        }
    }
    .btn-check{
        width: 20px;
        height: 20px;
        background: #F3F3F3;
        border-radius: 50%;
        margin-right: 15px;
        &.complete{
           background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDIwIDIwIj4NCiAgPGcgaWQ9Iuq3uOujuV8xNjU0MiIgZGF0YS1uYW1lPSLqt7jro7kgMTY1NDIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0zMDYgLTQ3MSkiPg0KICAgIDxnIGlkPSLqt7jro7lfMTQ3MzAiIGRhdGEtbmFtZT0i6re466O5IDE0NzMwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMTQgMzQyKSI+DQogICAgICA8Y2lyY2xlIGlkPSLtg4Dsm5BfNDAwIiBkYXRhLW5hbWU9Iu2DgOybkCA0MDAiIGN4PSIxMCIgY3k9IjEwIiByPSIxMCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTkyIDEyOSkiIGZpbGw9IiM3MjYwZmYiLz4NCiAgICA8L2c+DQogICAgPGcgaWQ9Iuq3uOujuV8zMjUxIiBkYXRhLW5hbWU9Iuq3uOujuSAzMjUxIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg3MjEuODg2IDExLjI1OSkgcm90YXRlKDQ1KSI+DQogICAgICA8cmVjdCBpZD0i7IKs6rCB7ZiVXzkxOTQiIGRhdGEtbmFtZT0i7IKs6rCB7ZiVIDkxOTQiIHdpZHRoPSI2LjU0NCIgaGVpZ2h0PSIyIiByeD0iMSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDEuMDEzIDYyMS40OTkpIiBmaWxsPSIjZmZmIi8+DQogICAgICA8cmVjdCBpZD0i7IKs6rCB7ZiVXzkxOTUiIGRhdGEtbmFtZT0i7IKs6rCB7ZiVIDkxOTUiIHdpZHRoPSIxMC41NjIiIGhlaWdodD0iMiIgcng9IjEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ1LjU1NyA2MjMuNDk5KSByb3RhdGUoLTkwKSIgZmlsbD0iI2ZmZiIvPg0KICAgIDwvZz4NCiAgPC9nPg0KPC9zdmc+DQo=);
        }
    }

    
}
</style>