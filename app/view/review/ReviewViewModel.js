Ext.define('MsTraining.view.review.ReviewViewModel',{
    extend:'Ext.app.ViewModel',
    alias:'viewmodel.reviewviewmodel',

    stores:{
        posts:{
            model:'MsTraining.model.Post',
            autoLoad:true
        },
        dummyUsers: {
            model: 'MsTraining.model.User',
            autoLoad: true
        }
    }
})