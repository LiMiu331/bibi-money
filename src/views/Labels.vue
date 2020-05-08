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
            <button class="createTag" @click="createTag">新建标签</button>
        </div>
    </Layout>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {Component} from 'vue-property-decorator';
    import tagListModel from '@/models/tagListModel';
    tagListModel.fetch()
    @Component
    export default class Labels extends Vue {
        tags = tagListModel.data;
        createTag(){
            const name =window.prompt('请输入标签名');
            if(name){
               const message = tagListModel.create(name);
               if(message === 'duplicated'){
                   window.alert('该标签已创建！🙅');
               }else if(message === 'success'){
                   window.alert('创建成功！🌟')
               }
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

