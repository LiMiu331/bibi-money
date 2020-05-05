<template>
    <nav>
        <router-link to="/money" class="item">
            <icon name="money"></icon>
            记账
        </router-link>
        <router-link to="/labels" class="item">
           <icon name="label"></icon>
            标签
        </router-link>
        <router-link to="/statistics" class="item">
            <icon name="statistics"></icon>
            统计
        </router-link>
    </nav>
</template>

<script>
    export default {
        name: "Nav",
    }
</script>

<style  lang="scss" scoped>
    nav {
        display: flex;
        box-shadow: 0 0 3px rgba(0,0,0,0.25);
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
    }
</style>