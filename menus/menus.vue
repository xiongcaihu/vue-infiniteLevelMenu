<template>
    <div :class="{menus:true,customClass:true}" :style="{left:startX,top:startY}">
        <p v-for="(item,index) in list">
            <span :class="{active:item.showChild}" @click="showChild(item)">{{item.name}}</span>
            <label :class="{active:item.showChild}" v-if="item.child && item.child.length > 0"></label>
            <menus v-if="item.showChild && item.child && item.child.length > 0" :list="item.child" :startX="'100%'" :startY="'-1px'"></menus>
        </p>
    </div>
</template>
<style lang="less">
    @import "./menus.less";

</style>

<script>
    import js from './menus.js';
    export default js;

</script>
