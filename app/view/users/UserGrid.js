Ext.define('MsTraining.view.users.UserGrid', {
    extend: 'Ext.grid.GridPanel',
    xtype: 'usergrid',
    reference:'usergrid',
    controller: 'usergridcontroller',
    title: 'Users',
    store: {
        type: 'users'
    },
    height: 1200,
    columns: [
        {
            dataIndex: '_id',
            text: 'ID'
        },
        {
            dataIndex: 'username',
            text: 'Username',
            flex: 2,
        },
        {
            dataIndex: 'email',
            text: 'Email',
            flex: 3
        },
        {
            dataIndex: 'city',
            text: 'City',
            flex: 2
        }
    ],
    tbar: [
        {
            text: 'Add User'
        },
        {
            text: 'Model Binding',
            handler: 'onModelBinding'
        },
        // '->',
        {
            xtype: 'tbfill'
        },
        {
            text: 'Show Details',
            handler: 'onShowDetails',
            bind: {
                disabled: '{!usergrid.selection}'
            }
        }
    ],
    selModel: {
        selType: 'checkboxmodel',
        mode: 'SINGLE'
    },
    bbar: {
        xtype: 'pagingtoolbar',
        displayInfo: true
    },
    listeners: {
        cellclick: 'onUserGridCellClick'
    }

})