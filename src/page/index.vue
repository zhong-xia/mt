<template>
    <div class="page-index">
        <el-row>
            <el-col :span="5">
                <m-menu/>
            </el-col>
            <el-col :span="19">
                <m-life/>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="24">
                <Container :nav="iStyle"/>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="24">
                <Container :nav="recommend"/>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="24">
                <Container/>
            </el-col>
        </el-row>
    </div>
</template>
<script>
import MMenu from '@/components/index/menu.vue'
import MLife from '@/components/index/life.vue'
import Container from '@/components/index/container.vue'
export default {
    data(){
        return{
            iStyle:{
                class:'istyle',
                title:'有格调',
                list:[{
                tab:'all',
                text:'全部'
            },{
                text:'约会聚餐',
                tab:'food'
            },{
                text:'电影演出',
                tab:'movie'
            },{
                text:'品质出游',
                tab:'travel'
            }]
           },
          recommend:{
              class:'youhui',
                title:'狠优惠',
                list:[{
                     tab:'all',
                     text:'全部'
                },{
                     tab:'food',
                     text:'美食'
                },{
                     tab:'xiuxian',
                     text:'休闲'

            }]
          }
        }
    },
    components:{
        MMenu,
        MLife,
        Container
    }
}
</script>
<style lang="scss" >
@import "@/assets/css/index/index.scss";
</style>
