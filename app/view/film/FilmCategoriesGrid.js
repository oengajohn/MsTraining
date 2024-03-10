Ext.define('MsTraining.view.film.FilmCategoriesGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'film-categories',
    bind: '{filmsGrid.selection.categories}', //#1
    border: true,
    title: 'Film Categories',
    iconCls:'fas fa-sun',
    columns: [
        {
            text: 'Category Id',
            width: 100,
            dataIndex: 'id'
        },
        {
            text: 'Category Name',
            flex: 1,
            dataIndex: 'name'
        }
    ]
});