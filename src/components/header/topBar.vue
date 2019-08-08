<template>
    <el-row class="m-header m-header-topbar">
        <el-col :span="10">
            <geo/>
        </el-col>
        <el-col :span="14">
            <m-nav/>
        </el-col>
    </el-row>
</template>
<script>
import MNav from './nav'
import geo from './geo'
export default {
  components: {
    MNav,
    geo
  }
}
</script>
<style lang="scss">
@import '@/assets/css/public/header/topbar.scss';
</style>
