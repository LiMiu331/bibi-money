<template>
        <svg class="icon">
            <use :xlink:href="'#' + name" ></use>
        </svg>
</template>

<script>
    import  icon1 from '@/assets/icons/label.svg'
    import  icon2 from '@/assets/icons/money.svg'
    import  icon3 from '@/assets/icons/statistics.svg'
    import  icon4 from '@/assets/icons/right.svg'
    export default {
        props:['name'],
        name: 'Icon'
    };
</script>

<style lang="scss" scoped>
    .icon{
        width: 1em;
        height: 1em;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
    }
</style>