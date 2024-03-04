Ext.define('MsTraining.model.Post',{
    extend: 'Ext.data.Model',
    idProperty: '_id',
    fields:[
        '_id','userId','title','body'
    ],
    proxy: {
        type: 'rest', // type of call
        url: 'http://localhost:3000/posts',
        reader: {
            type: 'json',
            rootProperty:'rows',
            totalProperty:'totalCount'
        }
    }
   
})