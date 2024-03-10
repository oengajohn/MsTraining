Ext.define('MsTraining.model.menu.TreeNode',{
    extend:'Ext.data.Model',
    fields: [
        { name: 'id', type: 'int' },
        { name: 'text' },
        { name: 'iconCls' },
        { name: 'xtype' },
        { name: 'parent_id', mapping: 'menuId' } 
    ]
})