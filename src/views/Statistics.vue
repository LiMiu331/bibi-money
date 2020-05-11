<template>
    <Layout>
        <tabs class-prefix="type" :data-source="recordTypeList" :value.sync="type"></tabs>
        <tabs class-prefix="interval" :data-source="intervalList" :value.sync="interval"></tabs>
            <ol>
                <li v-for="(group,index) in result" :key="index">
                    <h3 class="title">{{group.title}}</h3>
                    <ol>
                        <li
                                v-for="item in group.items" :key="item.id"
                                class="record"
                        >
                           <span>{{tagString(item.tags)}}</span>
                            <span class="notes">{{item.notes}}</span>
                            <span>¥{{item.amount}}</span>
                        </li>
                    </ol>
                </li>
            </ol>
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
        tagString(tags: Tag[]){
            return tags.length === 0 ? '无' :tags.join(',');
        }
        get recordList(){
           return  (this.$store.state as RootState).recordList;
        }
        get result(){
            const { recordList } = this;
            type HashTableValue = {title: string;items: RecordList[]}
                const hashTable: {[key: string]: HashTableValue} = {};for(let i = 0;i<recordList.length;i++){
               const[date,time] = recordList[i].createdAt!.split('T');
                console.log(date);
                hashTable[date] = hashTable[date] || {title:date,items:[]};
                hashTable[date].items.push(recordList[i]);
            }
            console.log(hashTable);
            return hashTable;
        }
        mounted(){
            this.$store.commit('fetchRecords')
        }
        type = '-';
        interval = 'day';
        intervalList = intervalList;
        recordTypeList = recordTypeList
    }
</script>
<style scoped lang="scss">
    %item{
        padding: 8px 16px;
        line-height: 24px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .title{
       @extend %item
    }
    .record{
        @extend %item
    }
    .notes{
        margin-right: auto;
        margin-left: 16px;
        color: #999;
    }
</style>

<style scoped lang="scss">
     ::v-deep {
         .type-tabs-item{
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
         .interval-tabs-item {
             height: 48px;
         }
     }

</style>