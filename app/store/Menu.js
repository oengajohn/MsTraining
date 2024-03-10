Ext.define('MsTraining.store.Menu',{
    extend:'Ext.data.Store',
    alias:'store.menustore',
    model: 'MsTraining.model.menu.Accordion',
    proxy: {
        type: 'rest', 
        url: 'http://localhost:8080/api/menu/list?username=mhusika',
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