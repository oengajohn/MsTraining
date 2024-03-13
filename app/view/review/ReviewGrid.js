Ext.define('MsTraining.view.review.ReviewGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'reviewgrid',
    requires:[
        'MsTraining.util.Util'
    ],

    bind: '{dummyUsers}',
    tbar:[
        {
            text:'Operations',
            menu:[
                {
                    text:'Add new User',
                    handler:function(){
                        
                    }
                },
                {
                    text: 'Add new User'
                },
                {
                    text: 'Add new User',
                    menu:[
                        {
                         text:'Nested Sub Menu'
                        }
                    ]
                }
            ]
        },
        {
            fieldLabel:'Search',
            xtype:'textfield',
            listeners:{
                change: 'onSearchKeyValueChange'
            }
        },
        {
            xtype:'datefield',
            emptyText:'startDate',

        },
        {
            xtype: 'datefield',
            emptyText: 'startDate',

        }
    ],
    columns: [
        { xtype: 'rownumberer' },
        {
            dataIndex: '_id',
            text: 'ID'
        },
        {
            dataIndex: 'username',
            text: 'Username',
            flex: 2,
            editor: 'textfield'
        },
        {
            dataIndex: 'email',
            text: 'Email',
            flex: 3,
            renderer: function (value) {
                return Ext.String.format('<a href="mailto:{0}">{1}</a>', value, value);
            },
            editor: {
                xtype: 'textfield',
                completeOnEnter: false,
                allowBlank: false
            }
        },
        {
            dataIndex: 'city',
            text: 'City',
            flex: 2
        }, {
            text: 'Price',
            dataIndex: 'price',
            flex: 2,
            renderer: MsTraining.util.Util.formatNumber
        }]
})