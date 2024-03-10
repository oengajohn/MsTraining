Ext.define('MsTraining.view.film.FilmActorsGrid', {
    extend:'Ext.grid.Panel',
    xtype: 'film-actors',
    bind: '{filmsGrid.selection.actors}',
    border: true,
    title: 'Film Actors',
    iconCls: 'fas fa-star', 
    columns: [
        {
            text: 'Actor Id',
            width: 80,
            dataIndex: 'id'
        },
        {
            xtype: 'templatecolumn',
            text: 'Actor Name',
            flex: 1,
            tpl: '{firstName} {lastName}' 
        }
    ]
});