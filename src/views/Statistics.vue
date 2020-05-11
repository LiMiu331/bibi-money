<template>
    <Layout>
        <tabs class-prefix="type" :data-source="recordTypeList" :value.sync="type"></tabs>
        <tabs class-prefix="interval" :data-source="intervalList" :value.sync="interval"></tabs>
        <div>
            type:{{type}}
            <br>
            interval:{{interval}}
        </div>
    </Layout>
</template>

<script lang="ts">
    import Vue from 'vue';
    import { Component } from 'vue-property-decorator';
    import Tabs from '@/components/Tabs.vue';
    import intervalList from '@/constants/intervalList';
    import recordTypeList from '@/constants/recordTypeList';
    @Component({
        components:{Tabs}
    })
    export default  class Statistics extends Vue {
        type = '-';
        interval = 'day';
        intervalList = intervalList;
        recordTypeList = recordTypeList
    }
</script>

<style scoped lang="scss">
     ::v-deep .type-tabs-item{
        background: white;
        color: #4585F5;
        &.selected{
            background: #4585F5;
            color: white;
            &::after{
                display: none;
            }
        }
    }
    ::v-deep .interval-tabs-item {
        height: 48px;
    }
</style>