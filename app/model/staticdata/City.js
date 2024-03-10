Ext.define('MsTraining.model.staticdata.City', {
    extend: 'MsTraining.model.staticdata.Base',
    entityName: 'City',
    fields: [
        { name: 'id' },
        { name: 'city' },
        { name: 'countryId' },
        {
            name: 'countryName',
            type: 'string',
            persist: false,
            convert: function (v, rec) {
                console.log();
                var data = rec.data;
                if (data.country && data.country.country) {
                    return data.country.country;
                }
                return data.countryId;
            }
        }
    ],
    hasOne: [
        {
            model: 'Country',
            name: 'country',
            foreignKey: 'countryId',
            associationKey: 'country'
        }
    ],
});
