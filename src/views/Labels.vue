<template>
    <Layout>
        <ol class="tags">
            <router-link
                    v-for="tag in tags"
                    class="tag"
                    :key="tag.id"
                    :to="`/labels/edit/${tag.id}`">
                <span>{{tag.name}}</span>
                <icon name="right"></icon>
            </router-link>
        </ol>
        <div class="createTag-wrapper">
            <Button class="createTag" @click.native="createTag">新建标签</Button>
        </div>
    </Layout>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {Component} from 'vue-property-decorator';
    import tagListModel from '@/models/tagListModel';
    import Button from '@/components/Button.vue';
    @Component({
        components: {Button}
    })
    export default class Labels extends Vue {
        tags = window.tagList;
        createTag(){
            const name =window.prompt('请输入标签名');
            if(name){
              window.createTag(name);
            }
        }

    }
</script>

<style lang="scss" scoped>
    @import "~@/assets/styles/helper.scss";

    .tags {
        background: white;
        font-size: 16px;
        padding-left: 16px;

        > .tag {
            min-height: 44px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            border-bottom: 1px solid #e6e6e6;

            svg {
                margin-right: 16px;
                width: 18px;
                height: 18px;
            }
        }
    }

    .createTag {
        background: #4585F5;
        color: white;
        border-radius: 4px;
        border: none;
        height: 40px;
        padding: 0 16px;

        &-wrapper {
            text-align: center;
            padding: 44px;
        }
    }
</style>

