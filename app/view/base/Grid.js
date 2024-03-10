Ext.define('MsTraining.view.base.Grid', {
    extend: 'Ext.grid.Panel',
    requires: [
    
    ],
    columnLines: true,
    viewConfig: {
        stripeRows: true
    },
    initComponent: function () {
        var me = this; me.columns = Ext.Array.merge(
            me.columns,
            [{
                xtype: 'datecolumn',
                text: 'Last Update',
                width: 150,
                dataIndex: 'lastUpdate',
                // format: 'Y-m-j H:i:s',
                filter: true
            }, {
                    xtype: 'widgetcolumn',
                    width: 50,
                    sortable: false,
                    menuDisabled: true,
                    widget: {
                        xtype: 'button',
                        iconCls: 'fas fa-pencil-alt',
                        tooltip: 'Edit',
                        handler: 'onEdit' //#1
                    }
                }, {
                    xtype: 'widgetcolumn',
                    width: 50, sortable: false,
                    menuDisabled: true,
                    widget: {
                        xtype: 'button',
                        iconCls: 'fa fa-thrash',
                        tooltip: 'Delete',
                        handler: 'onDelete' //#2
                    }
                }]
        );
        me.callParent(arguments);
    }
});