Ext.define('MsTraining.view.staticdata.CountriesGrid', {
    extend: 'MsTraining.view.staticdata.BaseGrid',
    xtype: 'countriesgrid',
    store: {
        type:'countries'
    },
    columns: [
        {
            text: 'Country Id',
            width: 100,
            dataIndex: 'id',
            xtype: 'numbercolumn',
            format: '0', 
            filter: {
                type: 'numeric'
            }
        },
        {
            text: 'Country',
            flex: 1,
            dataIndex: 'country',
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