<template>
    <nav>
        <router-link to="/money" class="item" active-class="selected">
            <icon name="money">
            </icon>
            记账
            <div class="bg-icon"></div>
        </router-link>
        <router-link to="/labels" class="item" active-class="selected">
           <icon name="label"></icon>
            标签
            <div class="bg-icon"></div>
        </router-link>
        <router-link to="/statistics" class="item" active-class="selected">
            <icon name="statistics"></icon>
            统计
            <div class="bg-icon"></div>
        </router-link>
    </nav>
</template>

<script>
    export default {
        name: "Nav",
    }
</script>

<style  lang="scss" scoped>
    @import "~@/assets/styles/helper.scss";
    nav {
        @extend %outerShadow;
        display: flex;
        justify-content: space-around;
        font-size: 12px;
        > .item{
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            padding: 2px 0;
            .icon {
                width: 32px;
                height: 32px;
            }
        }
        > .item.selected{
            .bg-icon{
                z-index: -1;
                position: absolute;
                bottom: 4px;
                width: 30px;
                height: 12px;
                padding: 3px;
                background-image:$color-highlight;
            }
        }
    }
</style>