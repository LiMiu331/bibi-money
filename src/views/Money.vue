<template>
    <Layout class-prefix="layout">
        <div class="numberPad">
            <div class="output">100</div>
            <div class="buttons">
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>删除</button>
                <button>4</button>
                <button>5</button>
                <button>6</button>
                <button>清空</button>
                <button>7</button>
                <button>8</button>
                <button>9</button>
                <button class="ok">ok</button>
                <button class="zero">0</button>
                <button>.</button>
            </div>
        </div>
        <div>
            <ul class="types">
                <li class="selected">支出</li>
                <li>收入</li>
            </ul>
        </div>
        <div>
            <label class="notes">
                <span class="name">备注</span>
                <input type="text" placeholder="在这里输入备注">
            </label>
        </div>
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
    </Layout>
</template>
<script>
    export default {
        name: "Money",
    }
</script>
<style lang="scss">
    .layout-content {
        display: flex;
        flex-direction: column-reverse;

    }
</style>
<style lang="scss" scoped>
    @import "~@/assets/styles/helper.scss";

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

    .notes {
        background: #f5f5f5;
        font-size: 14px;
        padding-left: 16px;
        display: flex;
        align-items: center;

        .name {
            padding-right: 16px;
        }

        input {
            height: 64px;
            flex-grow: 1;
            background: transparent;
            border: none;
            padding-right: 16px;
        }
    }

    .types {
        background: #c4c4c4;
        display: flex;
        font-size: 24px;
        text-align: center;

        > li {
            width: 50%;
            height: 64px;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;

            &.selected::after {
                content: '';
                position: absolute;
                bottom: 0;
                left: 0;
                width: 100%;
                height: 4px;
                background: #333333;
            }
        }
    }

    .numberPad {
        .output {
            @extend %innerShadow;
            font-size: 36px;
            font-family: Consolas, monospace;
            padding: 9px 16px;
            text-align: right;
        }

        .buttons {
            &::after {
                content: '';
                clear: both;
                display: block;
            }

            > button {
                float: left;
                width: 25%;
                height: 64px;
                background: transparent;
                border: none;

                &.ok {
                    height: 64*2px;
                    float: right;
                }

                &.zero {
                    width: 25%*2;
                }

                $bg: #f2f2f2;

                &:nth-child(1) {
                    background: $bg;
                }

                &:nth-child(2), &:nth-child(5), {
                    background: darken($bg, 4%);
                }

                &:nth-child(3), &:nth-child(6), &:nth-child(9) {
                    background: darken($bg, 2*4%);
                }

                &:nth-child(4), &:nth-child(7), &:nth-child(10) {
                    background: darken($bg, 3*4%);
                }

                &:nth-child(8), &:nth-child(11), &:nth-child(13) {
                    background: darken($bg, 4*4%);
                }

                &:nth-child(14), {
                    background: darken($bg, 5*4%);
                }

                &:nth-child(12) {
                    background: darken($bg, 6*4%);
                }

            }
        }
    }
</style>

