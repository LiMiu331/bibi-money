<template>
    <div class="nav-wrapper" :class="classPrefix && `${classPrefix}-wrapper`">
        <div class="content" :class=" classPrefix && `${classPrefix}-content`">
            <slot></slot>
        </div>
        <Nav/>
    </div>
</template>

<script>
    export default {
        props:['classPrefix'],
        name: "Layout"
    }
</script>

<style scoped>
    .nav-wrapper {
        border: 1px solid green;
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    }

    .content {
        overflow: auto;
        flex-grow: 1;
    }
</style>