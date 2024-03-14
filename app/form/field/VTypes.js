Ext.define("MsTraining.form.field.VTypes", {
    override: 'Ext.form.field.VTypes',

    // vtype validation function
    time: function (value) {
        return this.timeRe.test(value);
    },
    // RegExp for the value to be tested against within the validation function
    timeRe: /^([1-9]|1[0-9]):([0-5][0-9])(\s[a|p]m)$/i,
    // vtype Text property: The error text to display when the validation function
    // returns false
    timeText: 'Not a valid time.  Must be in the format "12:34 PM".',
    // vtype Mask property: The keystroke filter mask
    timeMask: /[\d\s:amp]/i,

    daterange: function (val, field) {
        var date = field.parseDate(val);

        if (!date) {
            return false;
        }
        if (field.startDateField && (!this.dateRangeMax || (date.getTime() != this.dateRangeMax.getTime()))) {
            var start = field.up('form').down('#' + field.startDateField);
            start.setMaxValue(date);
            start.validate();
            this.dateRangeMax = date;
        }
        else if (field.endDateField && (!this.dateRangeMin || (date.getTime() != this.dateRangeMin.getTime()))) {
            var end = field.up('form').down('#' + field.endDateField);
            end.setMinValue(date);
            end.validate();
            this.dateRangeMin = date;
        }
        /*
         * Always return true since we're only using this vtype to set the
         * min/max allowed values (these are tested for after the vtype test)
         */
        return true;
    },

    daterangeText: 'Start date must be less than end date',

    password: function (val, field) {
        if (field.initialPassField) {
            var pwd = field.up('form').down('#' + field.initialPassField);
            return (val == pwd.getValue());
        }
        return true;
    },

    passwordText: 'Passwords do not match',
    
    customPass: function (val, field) {
        return /^((?=.*\d)(?=.*[a-z])(?=.*[AZ])(?=.*[@#$%]).{6,20})/.test(val);
    },
    customPassText: 'Not a valid password. Length must be at least 6 characters and maximum of 20. Password must contain one digit, one letter lowercase, one letter uppercase, one special symbol @#$ % and between 6 and 20 characters.'
})