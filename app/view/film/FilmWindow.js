Ext.define('MsTraining.view.film.FilmWindow', {
    extend: 'MsTraining.view.base.WindowForm',
    xtype: 'film-window',
    requires: [
        'MsTraining.view.film.FilmFormContainer',
        'MsTraining.view.film.FilmActorsGrid',
        'MsTraining.view.film.FilmFormCategories'
    ],
    width: 537,
    items: [
        {
            xtype: 'form',
            reference: 'filmForm',
            layout: {
                type: 'fit'
            },
            items: [{
                xtype: 'tabpanel',
                activeTab: 0,
                items: [{
                    xtype: 'film-form-container',
                    iconCls:'fas fa-film'
                }, {
                    xtype: 'film-categories-form',
                    iconCls:'fas fa-sun',
                }, {
                    xtype: 'film-actors',
                    reference: 'actorsGrid',
                    dockedItems: [{
                        dock: 'top',
                        items: [
                            {
                                xtype: 'button',
                                text: 'Search and Add',
                                iconCls: 'fas fa-pencil-alt',
                                listeners: {
                                    click: 'onAddActor'
                                }
                            },
                            {
                                xtype: 'button',
                                text: 'Delete',
                                iconCls: 'far fa-trash-alt',
                                listeners: {
                                    click: 'onDeleteActor'
                                }
                            }
                        ]
                    }]
                }]
            }]
        }
    ]
});