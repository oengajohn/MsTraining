Ext.define('MsTraining.view.base.TopToolBar', {
    extend: 'Ext.toolbar.Toolbar',
    xtype: 'top-tool-bar',
    dock: 'top',
    items: [
        {
            xtype: 'button',
            text: 'Add',
            itemId: 'add',
            iconCls: 'fas fa-plus',
            listeners: {
                click: 'onAdd'
            }
        }]
});
