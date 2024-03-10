Ext.define('MsTraining.view.staticdata.CategoriesGrid', {
    extend: 'MsTraining.view.staticdata.BaseGrid',
    xtype: 'categoriesgrid',
    store: {
        type:'categories'
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