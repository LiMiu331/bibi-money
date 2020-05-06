<template>
    <Layout class-prefix="layout">
        <NumberPad></NumberPad>
        <types ></types>
        <notes></notes>
        <tags :data-source="tags"></tags>
    </Layout>
</template>
<script>
    import NumberPad from '@/components/Money/NumberPad';
    import Types from "@/components/Money/Types";
    import Notes from "@/components/Money/Notes";
    import Tags from "@/components/Money/Tags";

    export default {
        name: "Money",
        components: {Tags, Notes, Types, NumberPad},
        data(){
            return {
                tags:['午饭','晚饭','坐车','喝阔乐']
            }
        }
    }
</script>
<style lang="scss">
    .layout-content {
        display: flex;
        flex-direction: column-reverse;
    }
</style>


