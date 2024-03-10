Ext.define('MsTraining.model.Base', {
    extend: 'Ext.data.Model',
    requires: [
        'MsTraining.util.Util'
    ],
    schema: {
        namespace: 'MsTraining.model.security',
        urlPrefix: MsTraining.util.Util.baseUrl,
        proxy: {
            type: 'rest',
            actionMethods:{
                create: 'POST',
                read: 'GET',
                update: 'POST',
                destroy: 'DELETE'
            },
            appendId:false,
            api: {
                read: '{prefix}/{entityName:lowercase}/list',
                create: '{prefix}/{entityName:lowercase}/saveOrUpdate',
                update: '{prefix}/{entityName:lowercase}/saveOrUpdate',
                destroy: '{prefix}/{entityName:lowercase}/destroy'
            },
            reader: {
                type: 'json',
                rootProperty: 'data'
            },
            headers: {
                'Content-Type': 'application/json'
            },
             writer: {
                type: 'json',
                writeAllFields: true,
                // encode: true,
                // rootProperty: 'data',
                allowSingle: false
            }, 
            listeners: {
                exception: function (proxy, response, operation) {
                    MsTraining.util.Util.showErrorMsg(response.responseJson.msg);
                }
            }
        }
    }
});