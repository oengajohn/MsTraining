Ext.define('MsTraining.view.staticdata.LanguagesGrid', {
    extend: 'MsTraining.view.staticdata.BaseGrid',
    xtype: 'languagesgrid',
    store: {
        type:'languages'
    },
    columns: [
        {
            text: 'Category Id',
            width: 100,
            dataIndex: 'id',
            xtype: 'numbercolumn',
            format: '0', 
            filter: {
                type: 'numeric'
            }
        },
        {
            text: 'Name',
            flex: 1,
            dataIndex: 'name',
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