var ret = module.exports = function picker(undefined){
var t;
var t0;
var t1;
var t2;
var t3;
var t4;
var t5;
var t6;
var t7;
var t8;
var t9;
var tpl = this;
var root = tpl.root;
var buffer = tpl.buffer;
var scope = tpl.scope;
var runtime = tpl.runtime;
var name = tpl.name;
var pos = tpl.pos;
var data = scope.data;
var affix = scope.affix;
var nativeCommands = root.nativeCommands;
var utils = root.utils;
var callFnUtil = utils["callFn"];
var callCommandUtil = utils["callCommand"];
var rangeCommand = nativeCommands["range"];
var foreachCommand = nativeCommands["foreach"];
var forinCommand = nativeCommands["forin"];
var eachCommand = nativeCommands["each"];
var withCommand = nativeCommands["with"];
var ifCommand = nativeCommands["if"];
var setCommand = nativeCommands["set"];
var includeCommand = nativeCommands["include"];
var parseCommand = nativeCommands["parse"];
var extendCommand = nativeCommands["extend"];
var blockCommand = nativeCommands["block"];
var macroCommand = nativeCommands["macro"];
var debuggerCommand = nativeCommands["debugger"];
function func16(scope, buffer, undefined) {
var data = scope.data;
var affix = scope.affix;
buffer.data += '\n            <th role="columnheader" class="';
pos.line = 45;
var callRet17
callRet17 = callFnUtil(tpl, scope, {escape:1,params:['column-header']}, buffer, ["getBaseCssClasses"]);
buffer = buffer.writeEscaped(callRet17);
buffer.data += ' ';
var callRet18
callRet18 = callFnUtil(tpl, scope, {escape:1,params:['week-number-header']}, buffer, ["getBaseCssClasses"]);
buffer = buffer.writeEscaped(callRet18);
buffer.data += '">\n                <span class="';
pos.line = 46;
var callRet19
callRet19 = callFnUtil(tpl, scope, {escape:1,params:['column-header-inner']}, buffer, ["getBaseCssClasses"]);
buffer = buffer.writeEscaped(callRet19);
buffer.data += '">x</span>\n            </th>\n            ';
return buffer;
}
function func21(scope, buffer, undefined) {
var data = scope.data;
var affix = scope.affix;
buffer.data += '\n            <th role="columnheader" title="';
pos.line = 50;
var id22 = data;
buffer = buffer.writeEscaped(id22);
buffer.data += '" class="';
var callRet23
callRet23 = callFnUtil(tpl, scope, {escape:1,params:['column-header']}, buffer, ["getBaseCssClasses"]);
buffer = buffer.writeEscaped(callRet23);
buffer.data += '">\n                <span class="';
pos.line = 51;
var callRet24
callRet24 = callFnUtil(tpl, scope, {escape:1,params:['column-header-inner']}, buffer, ["getBaseCssClasses"]);
buffer = buffer.writeEscaped(callRet24);
buffer.data += '">\n                    ';
pos.line = 52;
var id26 = ((t=(affix.xindex)) !== undefined ? t:((t = data.xindex) !== undefined ? t :scope.resolveLooseUp(["xindex"])));
var id25 = ((t=(affix.veryShortWeekdays)) !== undefined ? affix.veryShortWeekdays[id26]:((t = data.veryShortWeekdays) !== undefined ? (t[id26]) :scope.resolveLooseUp(["veryShortWeekdays",id26])));
buffer = buffer.writeEscaped(id25);
buffer.data += '\n                </span>\n            </th>\n            ';
return buffer;
}
function func30(scope, buffer, undefined) {
var data = scope.data;
var affix = scope.affix;
buffer.data += '\n<div class="';
pos.line = 64;
var callRet31
callRet31 = callFnUtil(tpl, scope, {escape:1,params:['footer']}, buffer, ["getBaseCssClasses"]);
buffer = buffer.writeEscaped(callRet31);
buffer.data += '">\n    <a class="';
pos.line = 65;
var callRet32
callRet32 = callFnUtil(tpl, scope, {escape:1,params:['today-btn']}, buffer, ["getBaseCssClasses"]);
buffer = buffer.writeEscaped(callRet32);
buffer.data += '"\n       role="button"\n       hidefocus="on"\n       tabindex="-1"\n       href="javascript:void(0)"\n       title="';
pos.line = 70;
var id33 = ((t=(affix.todayTimeLabel)) !== undefined ? t:((t = data.todayTimeLabel) !== undefined ? t :scope.resolveLooseUp(["todayTimeLabel"])));
buffer = buffer.writeEscaped(id33);
buffer.data += '">';
var id34 = ((t=(affix.todayLabel)) !== undefined ? t:((t = data.todayLabel) !== undefined ? t :scope.resolveLooseUp(["todayLabel"])));
buffer = buffer.writeEscaped(id34);
buffer.data += '</a>\n    <a class="';
pos.line = 71;
var callRet35
callRet35 = callFnUtil(tpl, scope, {escape:1,params:['clear-btn']}, buffer, ["getBaseCssClasses"]);
buffer = buffer.writeEscaped(callRet35);
buffer.data += '"\n       role="button"\n       hidefocus="on"\n       tabindex="-1"\n       href="javascript:void(0)">';
pos.line = 75;
var id36 = ((t=(affix.clearLabel)) !== undefined ? t:((t = data.clearLabel) !== undefined ? t :scope.resolveLooseUp(["clearLabel"])));
buffer = buffer.writeEscaped(id36);
buffer.data += '</a>\n</div>\n';
return buffer;
}


buffer.data += '<div class="';
var callRet0
callRet0 = callFnUtil(tpl, scope, {escape:1,params:['header']}, buffer, ["getBaseCssClasses"]);
buffer = buffer.writeEscaped(callRet0);
buffer.data += '">\n    <a class="';
pos.line = 2;
var callRet1
callRet1 = callFnUtil(tpl, scope, {escape:1,params:['prev-year-btn']}, buffer, ["getBaseCssClasses"]);
buffer = buffer.writeEscaped(callRet1);
buffer.data += '"\n       href="javascript:void(0)"\n       tabindex="-1"\n       role="button"\n       title="';
pos.line = 6;
var id2 = ((t=(affix.previousYearLabel)) !== undefined ? t:((t = data.previousYearLabel) !== undefined ? t :scope.resolveLooseUp(["previousYearLabel"])));
buffer = buffer.writeEscaped(id2);
buffer.data += '"\n       hidefocus="on">\n    </a>\n    <a class="';
pos.line = 9;
var callRet3
callRet3 = callFnUtil(tpl, scope, {escape:1,params:['prev-month-btn']}, buffer, ["getBaseCssClasses"]);
buffer = buffer.writeEscaped(callRet3);
buffer.data += '"\n       href="javascript:void(0)"\n       tabindex="-1"\n       role="button"\n       title="';
pos.line = 13;
var id4 = ((t=(affix.previousMonthLabel)) !== undefined ? t:((t = data.previousMonthLabel) !== undefined ? t :scope.resolveLooseUp(["previousMonthLabel"])));
buffer = buffer.writeEscaped(id4);
buffer.data += '"\n       hidefocus="on">\n    </a>\n    <a class="';
pos.line = 16;
var callRet5
callRet5 = callFnUtil(tpl, scope, {escape:1,params:['month-select']}, buffer, ["getBaseCssClasses"]);
buffer = buffer.writeEscaped(callRet5);
buffer.data += '"\n       role="button"\n       href="javascript:void(0)"\n       tabindex="-1"\n       hidefocus="on"\n       title="';
pos.line = 21;
var id6 = ((t=(affix.monthSelectLabel)) !== undefined ? t:((t = data.monthSelectLabel) !== undefined ? t :scope.resolveLooseUp(["monthSelectLabel"])));
buffer = buffer.writeEscaped(id6);
buffer.data += '">\n        <span class="';
pos.line = 22;
var callRet7
callRet7 = callFnUtil(tpl, scope, {escape:1,params:['month-select-content']}, buffer, ["getBaseCssClasses"]);
buffer = buffer.writeEscaped(callRet7);
buffer.data += '">';
var id8 = ((t=(affix.monthYearLabel)) !== undefined ? t:((t = data.monthYearLabel) !== undefined ? t :scope.resolveLooseUp(["monthYearLabel"])));
buffer = buffer.writeEscaped(id8);
buffer.data += '</span>\n        <span class="';
pos.line = 23;
var callRet9
callRet9 = callFnUtil(tpl, scope, {escape:1,params:['month-select-arrow']}, buffer, ["getBaseCssClasses"]);
buffer = buffer.writeEscaped(callRet9);
buffer.data += '">x</span>\n    </a>\n    <a class="';
pos.line = 25;
var callRet10
callRet10 = callFnUtil(tpl, scope, {escape:1,params:['next-month-btn']}, buffer, ["getBaseCssClasses"]);
buffer = buffer.writeEscaped(callRet10);
buffer.data += '"\n       href="javascript:void(0)"\n       tabindex="-1"\n       role="button"\n       title="';
pos.line = 29;
var id11 = ((t=(affix.nextMonthLabel)) !== undefined ? t:((t = data.nextMonthLabel) !== undefined ? t :scope.resolveLooseUp(["nextMonthLabel"])));
buffer = buffer.writeEscaped(id11);
buffer.data += '"\n       hidefocus="on">\n    </a>\n    <a class="';
pos.line = 32;
var callRet12
callRet12 = callFnUtil(tpl, scope, {escape:1,params:['next-year-btn']}, buffer, ["getBaseCssClasses"]);
buffer = buffer.writeEscaped(callRet12);
buffer.data += '"\n       href="javascript:void(0)"\n       tabindex="-1"\n       role="button"\n       title="';
pos.line = 36;
var id13 = ((t=(affix.nextYearLabel)) !== undefined ? t:((t = data.nextYearLabel) !== undefined ? t :scope.resolveLooseUp(["nextYearLabel"])));
buffer = buffer.writeEscaped(id13);
buffer.data += '"\n       hidefocus="on">\n    </a>\n</div>\n<div class="';
pos.line = 40;
var callRet14
callRet14 = callFnUtil(tpl, scope, {escape:1,params:['body']}, buffer, ["getBaseCssClasses"]);
buffer = buffer.writeEscaped(callRet14);
buffer.data += '">\n    <table class="';
pos.line = 41;
var callRet15
callRet15 = callFnUtil(tpl, scope, {escape:1,params:['table']}, buffer, ["getBaseCssClasses"]);
buffer = buffer.writeEscaped(callRet15);
buffer.data += '" cellspacing="0" role="grid">\n        <thead>\n        <tr role="row">\n            ';
pos.line = 44;
pos.line = 44;
var id20 = ((t=(affix.showWeekNumber)) !== undefined ? t:((t = data.showWeekNumber) !== undefined ? t :scope.resolveLooseUp(["showWeekNumber"])));
buffer = ifCommand.call(tpl, scope, {params:[id20],fn: func16}, buffer);
buffer.data += '\n            ';
pos.line = 49;
pos.line = 49;
var id27 = ((t=(affix.weekdays)) !== undefined ? t:((t = data.weekdays) !== undefined ? t :scope.resolveLooseUp(["weekdays"])));
buffer = eachCommand.call(tpl, scope, {params:[id27],fn: func21}, buffer);
buffer.data += '\n        </tr>\n        </thead>\n        <tbody class="';
pos.line = 58;
var callRet28
callRet28 = callFnUtil(tpl, scope, {escape:1,params:['tbody']}, buffer, ["getBaseCssClasses"]);
buffer = buffer.writeEscaped(callRet28);
buffer.data += '">\n        ';
pos.line = 59;
var callRet29
callRet29 = callFnUtil(tpl, scope, {}, buffer, ["renderDates"]);
buffer = buffer.write(callRet29);
buffer.data += '\n        </tbody>\n    </table>\n</div>\n';
pos.line = 63;
pos.line = 63;
var id37 = ((t=(affix.showToday)) !== undefined ? t:((t = data.showToday) !== undefined ? t :scope.resolveLooseUp(["showToday"])));
var exp39 = id37;
if(!(exp39)){
var id38 = ((t=(affix.showClear)) !== undefined ? t:((t = data.showClear) !== undefined ? t :scope.resolveLooseUp(["showClear"])));
exp39 = id38;
}
buffer = ifCommand.call(tpl, scope, {params:[exp39],fn: func30}, buffer);
return buffer;
};
ret.TPL_NAME = module.id || module.name;