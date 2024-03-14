Ext.define('MsTraining.model.User', {
    extend: 'Ext.data.Model',
    idProperty: '_id',
    fields: [
        '_id', 
        'name',
        'username',
        'email',
        'street',
        'suite',
        'city',
        'zipcode',
        'price'
    ],
    proxy: {
        type: 'rest',
        url: 'resources/users.json',
        reader: {
            type: 'json',
            rootProperty: 'rows',
            totalProperty: 'totalCount'
        }
    },
    
})
