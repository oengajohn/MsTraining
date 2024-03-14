Ext.define('MsTraining.view.login.LoginController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.login',
    init: function () {
        let me = this,
            view = me.getView(),
            vm = me.getViewModel(),
            refs = me.getReferences(),
            button = refs['lng-btn'];

        var lang = localStorage ? (localStorage.getItem('user-lang') ||
            'en') : 'en';
        button.setIconCls(lang); 
        if (lang == 'en') {
            button.setText('English');
        } else if (lang == 'es') {
            button.setText('Español');
        } else {
            button.setText('Português');
        }
    },
    onLoginClick: function () {
        // http://localhost:8080/api/authenticate
        // Content - Type: application / json
        // This would be the ideal location to verify the user's credentials via
        // a server-side lookup. We'll just move forward for the sake of this example.

        // Set the localStorage value to true
        localStorage.setItem("MsAppLoggedIn", true);
        localStorage.setItem("hasAccessToUsers", true);

        // Remove Login Window
        this.getView().destroy();

        // Add the main view to the viewport
        Ext.widget('app-main');

    },
    onMenuItemClick: function (item, e, options) {
        var menu = this.getView();
        localStorage.setItem("user-lang", item.iconCls);
        window.location.reload();
    }
})