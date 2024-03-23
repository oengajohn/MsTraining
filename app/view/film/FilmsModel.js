Ext.define('MsTraining.view.film.FilmsModel', {
    extend: 'Ext.app.ViewModel',
    alias:'viewmodel.films',
    stores: {
        films: {
            model: 'MsTraining.model.film.Film',
            pageSize: 15,
            autoLoad: true,
            session: true
        },
        languages: {
            type:'languages',
            autoLoad: true,
            storeId: 'languages'
        },
        categories: {
            type: 'categories',
            autoLoad: true,
            session: true
        },
        actors: {
            type: 'actors',
            autoLoad: true,
            session: true
        },
        ratings: {
            model: 'MsTraining.model.TextCombo',
            data: [ 
                ['G'],
                ['PG'],
                ['PG-13'],
                ['R'],
                ['NC-17']
            ],
            session: true
        },
        specialFeatures: {
            model: 'MsTraining.model.TextCombo',
            data: [
                ['Trailers'],
                ['Commentaries'],
                ['Deleted Scenes'],
                ['Behind the Scenes']
            ],
            session: true
        }
    },

    formulas: {
        specialFeatures: {

            bind: {
                bindTo: '{currentFilm.specialFeatures}',
                deep: true
            },

            get: function (value) {
                var values = value ? value.split(',') : [],
                    texts = [];
                values.forEach(function (item) {
                    texts.push(Ext.create('MsTraining.model.TextCombo', {
                        text: item
                    }));
                });
                return texts;
            },

            set: function (value) {
                if (value) {
                    this.get('currentFilm').set('specialFeatures', value.join());
                }
            }
        }
    }
})