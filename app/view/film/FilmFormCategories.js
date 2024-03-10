Ext.define('MsTraining.view.film.FilmFormCategories', {
    extend: 'Ext.container.Container',
    xtype: 'film-categories-form',
    requires: [
        'Ext.view.MultiSelector'
    ],
    title: 'Film Categories',
    layout: 'fit',
    items: [{
        xtype: 'multiselector',
        title: 'Selected Categories',
        reference: 'categoriesMultiSelector',
        fieldName: 'name',
        viewConfig: {
            deferEmptyText: false,
            emptyText: 'No categories selected'
        },
        bind: '{currentFilm.categories}', search: {
            field: 'name',
            store: {
                type: 'categories', 
                autoLoad: true
            }
        }
    }]
});