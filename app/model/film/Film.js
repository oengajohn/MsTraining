Ext.define('MsTraining.model.film.Film', {
    extend: 'MsTraining.model.staticdata.Base',
    entityName: 'Film',
    idProperty:'filmId',
    fields: [
        { name: 'filmId' },
        { name: 'title' },
        { name: 'description' },
        { name: 'releaseYear', type: 'int' },
        { name: 'languageId' },
        { name: 'originalLanguageId' },
        { name: 'rentalDuration', type: 'int' },
        { name: 'rentalRate', type: 'float' },
        { name: 'length', type: 'int' },
        { name: 'replacementCost', type: 'float' },
        { name: 'rating' },
        { name: 'specialFeatures' }
    ],
    manyToMany: {
        FilmCategories: { 
            type: 'Category',
            role: 'categories', 
            field: 'categoryId', 
            right: {
                field: 'filmId', 
                role: 'films' 
            }
        },
        FilmActors: {
            type: 'Actor',
            role: 'actors',
            field: 'id',
            right: {
                field: 'id',
                role: 'films'
            }
        }
    }
})