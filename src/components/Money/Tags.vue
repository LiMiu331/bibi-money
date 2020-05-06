<template>
    <div class="tags">
        <div class="new">
            <button>新增标签</button>
        </div>
        <ol class="current">
            <li v-for="tag in dataSource"
                :key="tag"
                :class="{selected: selectedTags.indexOf(tag)>=0}"
                @click="toggle(tag)"
            >{{tag}}
            </li>

        </ol>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {Component, Prop} from 'vue-property-decorator';

    @Component
    export default class Tags extends Vue {
        @Prop() dataSource: string[] | undefined;
        selectedTags: string[] = [];

        toggle(tag: string) {
            const index = this.selectedTags.indexOf(tag)
            if (index >= 0){
               this.selectedTags.splice(index,1)
            }else {
                this.selectedTags.push(tag)
            }
        }
    }
</script>

<style lang="scss" scoped>
    .tags {
        padding: 16px;
        font-size: 14px;
        flex-grow: 1;
        display: flex;
        flex-direction: column-reverse;

        > .current {
            display: flex;
            flex-wrap: wrap;

            > li {
                $bg: #d9d9d9;
                background: $bg;
                height: 24px;
                line-height: 24px;
                border-radius: 12px;
                padding: 0 16px;
                margin-right: 12px;
                margin-top: 4px;

                &.selected {
                    background: darken($bg, 50%);
                    color: white;
                }
            }
        }

        > .new {
            padding-top: 16px;

            button {
                background: transparent;
                border: none;
                color: #999;
                border-bottom: 1px solid;
                padding: 0 4px;
            }
        }
    }
</style>