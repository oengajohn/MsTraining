Ext.define('MsTraining.store.Posts',{
    extend: 'Ext.data.Store',
    alias: 'store.posts',
    model: 'MsTraining.model.Post',
    requires: ['MsTraining.model.Post'],
    autoLoad:true
    
})