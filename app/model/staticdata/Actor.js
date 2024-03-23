Ext.define('MsTraining.model.staticdata.Actor', {
    extend: 'MsTraining.model.staticdata.Base',
    entityName: 'Actor',
    idProperty: 'actorId',
    fields: [
        { name: 'actorId', type: 'int', defaultValue:null },
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
            field: 'filmId',
            right: {
                field: 'actorId',
                role: 'actors'
            }
        }
    }
});
