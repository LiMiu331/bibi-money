<template>
    <div class="nav">
        <router-link to="/money">
            <icon name="money"></icon>
            记账
        </router-link>
        ｜
        <router-link to="/labels">
           <icon name="label"></icon>
            标签
        </router-link>
        ｜
        <router-link to="/statistics">
            <icon name="statistics"></icon>
            统计
        </router-link>
    </div>
</template>

<script>
    export default {
        name: "Nav",
    }
</script>

<style  lang="scss" scoped>
    .nav{
        border:1px solid red;
    }
</style>