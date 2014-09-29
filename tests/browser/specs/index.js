/**
 * test cases for date-picker
 */
var DatePicker = require('date-picker');
describe('date-picker', function () {
    it('simply works', function () {
        var picker = new DatePicker({
            disabledDate: function (current, value) {
                return current.getMonth() < value.getMonth();
            },
            // showWeekNumber:false,
            // showToday:false,
            render: document.body
        }).render();
        expect(picker.$el.parent().nodeName()).to.be('body');
    });
});