<template>
  <div class="m-product-categroy">
    <dl class="classic">
      <dt>分类</dt>
      <dt>全部</dt>
      <dd v-for="(item) in classify" :key="item.type">
        <m-select :name="item.title" :list="item.subList" />
      </dd>
    </dl>
    <dl class="classic">
      <dt>区域</dt>
      <dt>全部</dt>
      <dd v-for="(item) in areaList" :key="item.type">
        <m-select :name="item.title" :list="item.sub_list" />
      </dd>
    </dl>
  </div>
</template>
<script>
import MSelect from "./select.vue";
import api from '@/api/index.js'
export default {
  data() {
    return {
      classify: [],
      areaList: [

            {
              title: "推荐商圈",
              subList: [
                {
                  name: "望京",
                  id: 120000
                },
                {
                  name: "昌平",
                  id: 12222
                }
              ]
            }
          ]
    };
  },
  created(){
    api.getClassifyList().then(res=>{

      this.classify = res.data.data;
      this.areaList = res.data.data;
    })
  },
  components: {
    MSelect
  }
};
</script>
