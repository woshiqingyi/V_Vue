<template>
     <el-card>
        <div v-for="(item,index) in word" :key='index'>
            <!-- <component1 @CompleteNewValue='CompleteNewValue'></component1> -->
            <component1 ref="word" :word.sync="item" ></component1>
            <el-button @click="jianshao(index)">减少</el-button>
        </div>
        <el-button @click="chakan">查看</el-button>
        <el-button @click="dianji">点击</el-button>
        <el-button @click="zengjia">增加</el-button>
        <el-button @click="jiaoyan">校验</el-button>
    </el-card>
</template>

<script>
import component1 from "@/components/nav-menu/advanced/component"
export default {
components: { component1 },
    data(){
        return{
            checkitems:[],

            data1:[0,1,2],
            word:[{efno1:"",efno2:"",check:''}],
            data3:'',
            wrd:{
                efno1:'',
                efno2:'',
            },

            lizi:{
                ni:'111'
            },
        }
    },
   
    methods:{
        zengjia(){
            this.word.push(
                { efno1:"", efno2:""}
            )
        },

        jianshao(index){
            console.log('zong',this.shityan)
            console.log('index',index)
            this.word.splice( index, 1);
        },



        CompleteNewValue(){


            // console.log('msg',msg)
        },
        chakan(){
            //console.log('shuju',this.wrd)
            // console.log('shuju2',this.lizi)
            console.log(this.word);
        },
        dianji(){
            console.log('前shuju',this.data1)
            // this.data1.splice(0,1)

            // this.items.splice(index,1);
            console.log('后shuju',this.data1)
            console.log('绑定数据',this.data3)
             this.shityan.push(1);
        },
        jiaoyan(){
            console.log('this.$refs.word',this.$refs.word)
            
            
            for(var i=0;this.$refs.word.length>i; i++){
                this.$refs.word[i].child()
            }
            console.log('this.word',this.word)
            for(var i=0;this.word.length>i; i++){
              
                    this.checkitems.push({
                     woshi:this.word[i].check
                    })
                
                
            }
            console.log('checkitems',this.checkitems)
             
            var panduan = this.checkitems.filter(a =>a.woshi == false)
            console.log('1111',panduan)
            if(!panduan.length){
               console.log('通过！！！！！！！！！！！！！！！')
            }
          
           
         

             this.checkitems = []
             
        }
    }
}
</script>

<style>

</style>
