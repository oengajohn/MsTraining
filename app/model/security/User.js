Ext.define('MsTraining.model.security.User', {
    extend: 'MsTraining.model.security.Base',
    fields: [
        { name: 'name' },
        { name: 'username' },
        { name: 'email' },
        { name: 'picture' },
        { name: 'groupId', type: 'int' },
        {
            name: 'groupName',
            type: 'string',
            persist: false,
            convert: function (v, rec) {
                var data = rec.data;
                if (data.group && data.group.name) {
                    return data.group.name;
                }
                return data.groupId;
            }
        }
    ],
    hasOne: [
        {
            model: 'Group', 
            name: 'group',
            foreignKey: 'groupId', 
            associationKey: 'group'
        }
    ],
    validators: {
        name: [
            { type: 'presence', message: 'This field is mandatory' },
            { type: 'length', min: 3, max: 100 }
        ],
        username: [
            { type: 'exclusion', list: ['Admin', 'Operator'], message: "'Admin' or 'Operator' as value is not allowed" },
            { type: 'format', matcher: /([a-z]+)/i },
            { type: 'presence', message: 'This field is mandatory' },
            { type: 'length', min: 3, max: 25 }
        ],
        email: [
            { type: 'presence', message: 'This field is mandatory' },
            { type: 'length', min: 5, max: 100 },
            { type: 'email' }
        ],
        groupId: 'presence'
    },

});