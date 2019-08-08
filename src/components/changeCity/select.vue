<template>
  <div :class="['choose-wrap',disabled?'disabled':'']" @click="showWrapper" v-document-click="documentClick">
    <div class="choose">
      <span>{{value}}</span>
      <i class="el-icon-caret-bottom"></i>
      <div :class="{'mt-content':true,'active':showWrapperActive}">
          <h2>{{title}}</h2>
          <div :class="['wrapper',className]">
              <div class="col" v-for="(listData,index) in renderList" :key="index">
                  <span v-for="(item,index) in listData" :key="index" :class="{'mt-item':true,'active':item.name == value}" @click="changeValue(item)">{{item.name}}</span>
              </div>
          </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    data(){
        return{

        }
    },
    props:[
        'list',
        "title",
        "value",
        "showWrapperActive",
        "disabled",
        "className"
    ],
    computed:{
        renderList:function(){
            var col = Math.ceil(this.list.length / 12);
            let result = [];
            for(var i = 0;i < col;i ++){
                let data = this.list.slice(i * 12,i * 12 + 12);
                result.push(data)
            }
            return result;
        }
    },
    methods:{
        showWrapper(e){
            e.stopPropagation();
            if(!this.disabled){
                 this.$emit('change_active',true);
            }

        },
        documentClick(){
            this.showWrapperActive = false;
            this.$emit('change_active',false);
        },
        changeValue(item){
            this.$emit('change',item)
        }
    }
};
</script>
<style lang="scss">
@import "@/assets/css/changecity/select.scss";
</style>

