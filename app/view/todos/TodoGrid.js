Ext.define('MsTraining.view.todos.TodoGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'todogrid',
    reference: 'todogrid',
    store: {
        type: 'todos'
    },
    columns: [
        { dataIndex: '_id', text: 'ID' },
        { dataIndex: 'title', text: 'Title', flex: 1 },
        { dataIndex: 'completed', text: 'Completed' },
    ],

})