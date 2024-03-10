Ext.define('MsTraining.view.security.UsersGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'users-grid',
    reference: 'usersGrid',
    bind: '{users}',
    selModel: {
        mode: 'MULTI',
        type:'checkboxmodel',
    },
    columns: [ 
        {
            width: 150,
            dataIndex: 'username',
            text: 'Username'
        },
        {
            width: 200,
            dataIndex: 'name',
            flex: 1,
            text: 'Name'
        },
        {
            width: 250,
            dataIndex: 'email',
            text: 'Email'
        },
        {
            width: 150,
            dataIndex: 'groupId',
            hidden:true,
            text: 'Group ID'
        }, 
        {
            width: 150,
            dataIndex: 'groupName',
            text: 'Group'
        },
       
    ]
});