/**
 * @ignore
 * month panel for date picker
 * @author yiminghe@gmail.com
 */

var util = require('util');
var Control = require('component/control'),
    YearPanel = require('./year-panel');
var DateFormat = require('gregorian-calendar-format'),
    MonthsTpl = require('./xtpl/months-render'),
    MonthPanelTpl = require('./xtpl/month-panel-render');
var TapGesture = require('event-dom/gesture/tap');
var tap = TapGesture.TAP;
var $ = require('node');

function prepareMonths(self) {
    var value = self.get('value');
    var currentMonth = value.getMonth();
    var current = value.clone();
    var locale = self.get('locale');
    var monthYearFormat = locale.monthYearFormat;
    var dateLocale = value.getLocale();
    var dateFormatter = new DateFormat(monthYearFormat, dateLocale);
    var months = [];
    var shortMonths = dateLocale.shortMonths;
    var index = 0;
    for (var i = 0; i < 3; i++) {
        months[i] = [];
        for (var j = 0; j < 4; j++) {
            current.setMonth(index);
            months[i][j] = {
                value: index,
                content: shortMonths[index],
                title: dateFormatter.format(current)
            };
            index++;
        }
    }
    util.mix(self.renderData, {
        months: months,
        year: value.getYear(),
        month: currentMonth
    });
    self.months = months;
    return months;
}

function goYear(self, direction) {
    var next = self.get('value').clone();
    next.addYear(direction);
    self.set('value', next);
}

function nextYear() {

    goYear(this, 1);
}

function previousYear() {

    goYear(this, -1);
}

function chooseCell(e) {

    var td = $(e.currentTarget);
    var tr = td.parent();
    var tdIndex = td.index();
    var trIndex = tr.index();
    var value = this.get('value').clone();
    value.setMonth(trIndex * 4 + tdIndex);
    this.fire('select', {
        value: value
    });
}

function showYearPanel() {

    var yearPanel = this.get('yearPanel');
    yearPanel.set('value', this.get('value'));
    yearPanel.show();
}

function setUpYearPanel() {
    var self = this;
    var yearPanel = new YearPanel({
        locale: this.get('locale'),
        render: self.get('render')
    });
    yearPanel.on('select', onYearPanelSelect, self);
    return yearPanel;
}

function onYearPanelSelect(e) {
    this.set('value', e.value);
    this.get('yearPanel').hide();
}

module.exports = Control.extend({
    beforeCreateDom: function (renderData) {
        var self = this;
        var locale = self.get('locale');
        util.mix(renderData, {
            yearSelectLabel: locale.yearSelect,
            previousYearLabel: locale.previousYear,
            nextYearLabel: locale.nextYear
        });
        prepareMonths(self);
    },

    bindUI: function () {
        var self = this;
        self.get('nextYearBtn').on(tap, nextYear, self);
        self.get('previousYearBtn').on(tap, previousYear, self);
        self.get('tbodyEl').delegate(
            tap,
                '.' + self.getBaseCssClass('cell'),
            chooseCell,
            self
        );
        self.get('yearSelectEl').on(tap, showYearPanel, self);
    },

    _onSetValue: function (value) {
        var self = this;
        prepareMonths(self);
        self.get('tbodyEl').html(this.renderTpl(MonthsTpl));
        self.get('yearSelectContentEl').html(value.getYear());
    }
}, {
    xclass: 'date-picker-month-panel',
    ATTRS: {
        contentTpl: {
            value: MonthPanelTpl
        },

        focusable: {
            value: false
        },
        value: {
            render: 1
        },
        yearPanel: {
            valueFn: setUpYearPanel
        },
        tbodyEl: {
            selector: function () {
                return '.' + this.getBaseCssClass('tbody');
            }
        },
        previousYearBtn: {
            selector: function () {
                return '.' + this.getBaseCssClass('prev-year-btn');
            }
        },
        nextYearBtn: {
            selector: function () {
                return '.' + this.getBaseCssClass('next-year-btn');
            }
        },
        yearSelectEl: {
            selector: function () {
                return '.' + this.getBaseCssClass('year-select');
            }
        },
        yearSelectContentEl: {
            selector: function () {
                return '.' + this.getBaseCssClass('year-select-content');
            }
        }
    }
});