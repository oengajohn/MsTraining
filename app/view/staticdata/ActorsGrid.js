Ext.define('MsTraining.view.staticdata.Actors', {
    extend: 'MsTraining.view.staticdata.BaseGrid',
    xtype: 'actorsgrid',
    store: {
        type:'actors'
    },
    columns: [
        {
            text: 'Actor Id',
            width: 100,
            dataIndex: 'id',
            format: '0', 
            filter: {
                type: 'numeric'
            }
        },
        {
            text: 'First Name',
            flex: 1,
            dataIndex: 'firstName',
            editor: {
                allowBlank: false,
                maxLength: 45
            },
            filter: {
                type: 'string'
            }
        },
        {
            text: 'Last Name',
            width: 200,
            dataIndex: 'lastName',
            editor: {
                allowBlank: false,
                maxLength: 45
            },
            filter: {
                type: 'string'
            }
        }
    ]
});