/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('MsTraining.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.main',

    data: {
        name: 'Ms Training',
        appName: 'DVD Rental Store',
        appHeaderIcon: '<span class="fa fa-desktop fa-lg appheader-logo">',
        footer: 'Mastering ExtJS book - Loiane Groner -http://packtpub.com'
    }

});
