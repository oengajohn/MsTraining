Ext.define('MsTraining.model.staticdata.Category', {
    extend: 'MsTraining.model.staticdata.Base',
    entityName: 'Category',
    fields: [
        { name: 'id' },
        { name: 'name' },
    ],
    manyToMany: {
        CategoryFilms: {
            type: 'Film',
            role: 'films',
            field: 'filmId',
            right: {
                field: 'categoryId',
                role: 'categories'
            }
        }
    }
});
