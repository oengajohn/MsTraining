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
        },
        {
            xtype: 'tbseparator'
        },
        {
        
            text: 'Print',
            listeners: {
                click: 'onPrint'
            }
        },
        {
            text: 'Export to PDF',
            listeners: {
                click: 'onExportPDF'
            }
        },
        {
            text: 'Export to Excel',
            listeners: {
                click: 'onExportExcel'
            }
        }]
});
