Ext.define('MsTraining.model.staticdata.Base', {
    extend: 'MsTraining.model.Base', 
    fields: [
        {
            name: 'lastUpdate',
            type: 'date',
            // dateFormat: 'Y-m-d\TH:i:s\Z'
        }
    ],
    validators: {
        lastUpdate: 'presence'
    }
});