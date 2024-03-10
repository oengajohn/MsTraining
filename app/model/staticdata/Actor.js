Ext.define('MsTraining.model.staticdata.Actor', {
    extend: 'MsTraining.model.staticdata.Base',
    entityName: 'Actor',
    fields: [
        { name: 'id', type: 'int', defaultValue:null },
        { name: 'firstName' },
        { name: 'lastName' }
    ],
    validators: {
        firstName: [
            {
                type: 'presence', message: 'This field is mandatory'
            },
            { type: 'length', min: 2, max: 45 }
        ],
        lastName: [
            {
                type: 'presence', message: 'This field is mandatory'
            },
            { type: 'length', min: 2, max: 45 }
        ]
    },
    manyToMany: {
        ActorFilms: {
            type: 'Film',
            role: 'films',
            field: 'id',
            right: {
                field: 'id',
                role: 'actors'
            }
        }
    }
});
