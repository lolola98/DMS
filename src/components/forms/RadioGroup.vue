<template>
    <v-form>
        <v-radio-group  v-model="value" row class="v-radio-group">
            <v-radio
                v-for="n in 5"
                :key="n"
                :label="str[n-1]"
                :value="n"
                :ripple="false"
                class="radio"
            ></v-radio>
        </v-radio-group>
    </v-form>
</template>
<script>
export default {
    props:{
        answer:Number,
        str:Array
    },
    data: ()=>({

    }),
    computed: {
        value: { 
            get () { 
                return this.answer 
            },
            set (newAnswer){
                return this.$emit('changed',newAnswer);
            }
        }
    },
}
</script>