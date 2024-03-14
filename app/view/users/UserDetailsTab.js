Ext.define('MsTraining.view.users.UserDetailsTab',{
    extend:'Ext.tab.Panel',
    xtype:'userdetailstab',
    height:0,
    items: [{
        xtype:'form',
        title:'User Information',
        layout:'form',
        items:[
            {
                xtype:'textfield',
                fieldLabel:'Username',
                bind:{
                    value:'{record.username}'
                }
            },
            {
                xtype: 'textfield',
                fieldLabel: 'Name',
                bind: {
                    value: '{record.name}'
                }
            },
            {
                xtype: 'textfield',
                fieldLabel: 'City',
                bind: {
                    value: '{record.city}'
                }
            }
        ]
    }]
})