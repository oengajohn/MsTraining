Ext.define('MsTraining.view.staticdata.CitiesGrid', {
    extend: 'MsTraining.view.staticdata.BaseGrid',
    xtype: 'citiesgrid',
    store: {
        type: 'cities'
    },
    columns: [
        {
            text: 'City Id',
            width: 100,
            dataIndex: 'cityId',
            xtype: 'numbercolumn',
            format: '0',
            filter: {
                type: 'numeric'
            }
        },
        {
            text: 'City',
            flex: 1,
            dataIndex: 'city',
            editor: {
                allowBlank: false,
                maxLength: 45
            },
            filter: {
                type: 'string'
            }
        },
        {
            text: 'Country',
            flex: 1,
            dataIndex: 'countryName',
            filter: {
                type: 'string'
            }
        }
    ]
});