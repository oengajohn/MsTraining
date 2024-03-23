Ext.define('MsTraining.model.staticdata.Country', {
    extend: 'MsTraining.model.staticdata.Base',
    entityName: 'Country',
    idProperty: 'countryId',
    fields: [
        { name: 'countryId' },
        { name: 'country' },
    ]
});
