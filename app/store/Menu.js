Ext.define('MsTraining.store.Menu',{
    extend:'Ext.data.TreeStore',
    alias:'store.menu',
    root: {
        text: 'Root',
        expanded: true,
        children: [
            {
                text: 'Security',
                iconCls:'fas fa-users-cog',
                children:[
                    {
                        text:'Users',
                        iconCls:'fa fa-users',
                        className:'users',
                        leaf:true
                    },
                    {
                        text: 'Todos',
                        iconCls: 'fas fa-user-secret',
                        className: 'todogrid',
                        leaf: true
                    }
                ]
              
            },
            {
                text: 'Static Data',
                iconCls:'fa fa-database fa-lg',
                children: [
                    {
                        text: 'Posts',
                        iconCls: 'fa fa-users',
                        className: 'postgrid',
                        leaf: true
                    },
                    {
                        text: 'Personnel',
                        iconCls: 'fa fa-users',
                        leaf:true,
                        className: 'mainlist',
                    }
                ]

            },
             {
                text: 'Review',
                iconCls:'fa fa-database fa-lg',
                children: [
                    {
                        text: 'Review Panel',
                        iconCls: 'fa fa-users',
                        className: 'reviewpanel',
                        leaf: true
                    }
                   
                ]

            },
            
        ]
    }
})