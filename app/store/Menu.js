Ext.define('MsTraining.store.Menu',{
    extend:'Ext.data.Store',
    alias:'store.menustore',
    model: 'MsTraining.model.menu.Accordion',
    proxy: {
        type: 'ajax', 
        url: '/resources/menu.json',
        reader: { 
            type: 'json',
            rootProperty: 'data'
        },
        listeners: {
            exception: function (proxy, response, operation) { //#6
                console.log(response.responseText);
            }
        }
    },
  
})