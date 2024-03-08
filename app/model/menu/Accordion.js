Ext.define('MsTraining.model.menu.Accordion',{
    extend:'Ext.data.Model',
    requires: [
        'MsTraining.model.menu.TreeNode'
    ],
    fields: [ 
        { name: 'id', type: 'int' }, 
        { name: 'text' },
        { name: 'iconCls' }
    ],
    hasMany: {
        model: 'MsTraining.model.menu.TreeNode',
        foreignKey: 'parent_id',
        name: 'items' 
    }
})