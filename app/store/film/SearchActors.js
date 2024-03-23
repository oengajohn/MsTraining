Ext.define('MsTraining.store.film.SearchActors', {
    extend: 'Ext.data.Store',
    requires: [
        'MsTraining.model.film.SearchActor',
        'MsTraining.util.Util'
    ],
    alias: 'store.search-actors',
    model: 'MsTraining.model.film.SearchActor',
    pageSize: 2,
    proxy: {
        type: 'rest',
        url: MsTraining.util.Util.baseUrl +'/actor/searchActors',
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    }
});