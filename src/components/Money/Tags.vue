<template>
    <div class="tags">
        <div class="new">
            <button>新增标签</button>
        </div>
        <ol class="current">
            <li>午饭</li>
            <li>晚饭</li>
            <li>坐车</li>
            <li>喝可乐</li>
        </ol>
    </div>
</template>

<script>
    export default {
        name: "Tags"
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
                background: #d9d9d9;
                height: 24px;
                line-height: 24px;
                border-radius: 12px;
                padding: 0 16px;
                margin-right: 12px;
                margin-top: 4px;
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