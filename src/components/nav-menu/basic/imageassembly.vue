<template>
    <div class="image_assembly" @click="dianji"   @mouseenter="mouseEnter" @mouseleave='mouseLeave' :style="ID == ChooseID?Style1:Style2" >
        <img style="width:100%;height:100%" :src="Url" alt="">
        <!-- <img class="icon_style" src="../../../../static/image/icon/add.png" alt=""> -->
    </div>
    
</template>

<script>
export default {
    data(){
         return{
             ID:'1',
             ChooseID:'',
             Style1:'border: 1px dashed rgb(35, 142, 241);',
             Style2:'border: 1px dashed rgb(167, 167, 167);',
        }
    },

    props:{
        Name:'',
        Url:''
    },
    
    methods:{
        mouseEnter(){
            this.ChooseID = 1
        },
        mouseLeave(){
            this.ChooseID = 0
        },
        dianji(){
            this.$emit('dianji',this.Name)
        }
    }
}
</script>

<style scoped>
.image_assembly{
    height: 200px;
    width: 200px;
    border: 1px dashed rgb(167, 167, 167);
    border-radius: 5px;
    
}

.icon_style{
    margin-top: 81px;
    margin-left: 81px;
    height: 37px;
    width: 37px;
    
}
</style>
