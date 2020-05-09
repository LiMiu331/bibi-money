import recordListModel from '@/models/recordListModel';
import tagListModel from '@/models/tagListModel';

const store = {
    //record store
    recordList: recordListModel.fetch(),
    createRecord: (record: RecordItem) => recordListModel.create(record),
    //全局变量太多
    //严重依赖Window
    //tag store
    tagList: tagListModel.fetch(),
    findTag (id: string)  {
        return this.tagList.filter(t => t.id === id)[0];
    },
    createTag: (name: string) => {
        const message = tagListModel.create(name);
        if (message === 'duplicated') {
            window.alert('该标签已创建！🙅');
        } else if (message === 'success') {
            window.alert('创建成功！🌟');
        }
    },
    removeTag: (id: string) => {
        return tagListModel.remove(id);
    },
    updateTag: (id: string, name: string) => {
        return tagListModel.update(id, name);
    }
};

export default store;