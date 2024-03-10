Ext.define('MsTraining.view.security.User', {
    extend: 'Ext.panel.Panel',
    xtype: 'user',
    requires: [
        'MsTraining.view.security.UsersGrid',
        'MsTraining.view.security.UserViewModel',
        'MsTraining.view.security.UserController'
    ],
    controller: 'user',
    viewModel: {
        type: 'user'
    },
    frame: true,
    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    items: [
        {
            xtype: 'users-grid',
            flex: 1
        }
    ],
    dockedItems: [
        {
            xtype: 'toolbar',
            dock: 'top', 
            items: [
                {
                    xtype: 'button',
                    text: 'Add',
                    iconCls:'fas fa-plus',
                    listeners: {
                        click: 'onAdd' 
                    }
                },
                {
                    xtype: 'button',
                    iconCls:'fas fa-pencil-alt',
                    text: 'Edit',
                    
                    listeners: {
                        click: 'onEdit'
                    },
                    bind: {
                        disabled: '{!usersGrid.selection}'
                    }
                },
                {
                    xtype: 'button',
                    text: 'Delete',
                    iconCls:'far fa-trash-alt',
                    listeners: {
                        click: 'onDelete'
                    },
                    bind: {
                        disabled: '{!usersGrid.selection}'
                    }
                }
            ]
        }
    ]
});
