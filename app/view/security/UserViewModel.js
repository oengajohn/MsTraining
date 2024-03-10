Ext.define('MsTraining.view.security.UserViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.user',
    stores: {
        users: {
            model: 'MsTraining.model.security.User',
            autoLoad: true
        },
        groups: {
            model: 'MsTraining.model.security.Group',
            autoLoad: true
        }
    }
})