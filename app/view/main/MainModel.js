/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('MsTraining.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.main',

    data: {
        name: 'MsTraining',
        footer: '&copy Mhusika '+new Date().getFullYear(),
    }
});
