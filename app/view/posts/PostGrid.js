Ext.define('MsTraining.view.posts.PostGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'postgrid',
    reference: 'postgrid',
    controller: 'postgridviewcontroller',
    store: {
        type: 'posts'
    },
    tbar: {
        overflowHandler:'menu',
        items: [

            {
                fieldLabel: 'Search',
                xtype: 'textfield',
                listeners: {
                    change: 'onSearchKeyValueChange'
                }
            },
            {
                fieldLabel: 'Choose User',
                xtype: 'combo',

                store: {
                    type: 'users'
                },
                queryMode: 'local',
                displayField: 'username',
                valueField: '_id',
                listeners: {
                    change: 'onUserSelectionChange',
                    select: 'onUserSelected'
                }
            },
            {
                text: 'Add Post',
                xtype: 'button',
                iconCls: 'fas fa-plus',
                listeners: {
                    click: 'onAddPostClicked'
                }
            },
            {
                text: 'Add Post',
                xtype: 'button',
                iconCls: 'fas fa-plus',
                listeners: {
                    click: 'onAddPostClicked'
                }
            }, '->',
            {
                text: 'Add Post',
                xtype: 'button',
                iconCls: 'fas fa-plus',
                listeners: {
                    click: 'onAddPostClicked'
                }
            },
            {
                text: 'Edit/View Post',
                iconCls: 'fas fa-pencil-alt',
                listeners: {
                    click: 'onEditClicked'
                }
            },
            {
                text: 'Delete Post',
                iconCls: 'far fa-trash-alt',
                listeners: {
                    click: 'onDeleteClicked'
                }
            },
            {
                text: 'Form fields',
                listeners: {
                    click: 'onFormFieldsClicked'
                }
            },
            {
                text: 'VTypes',
                listeners: {
                    click: 'onVTypesClicked'
                }
            },
            {
                text: 'Layouts',
                listeners: {
                    click: 'onLayoutsClicked'
                }
            },


        ]
    }
   ,
    columns: [
        { dataIndex: '_id', text: 'ID' },
        { dataIndex: 'title', text: 'Title', flex: 1 },
        { dataIndex: 'body', text: 'Body', flex: 2, sortable: false },
        { dataIndex: 'userId', text: 'User ID', sortable: false, hidden: false }
    ],
    selModel: {
        selType: 'checkboxmodel',
        mode: 'SINGLE'
    },
    bbar: {
        xtype: 'pagingtoolbar',
        displayInfo: true
    },
    scrollable: true,


})