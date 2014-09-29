var ret = module.exports = function monthPanel(undefined){
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


buffer.data += '<div class="';
var callRet0
callRet0 = callFnUtil(tpl, scope, {escape:1,params:['header']}, buffer, ["getBaseCssClasses"]);
buffer = buffer.writeEscaped(callRet0);
buffer.data += '">\n    <a class="';
pos.line = 2;
var callRet1
callRet1 = callFnUtil(tpl, scope, {escape:1,params:['prev-year-btn']}, buffer, ["getBaseCssClasses"]);
buffer = buffer.writeEscaped(callRet1);
buffer.data += '"\n       href="javascript:void(0)"\n       role="button"\n       title="';
pos.line = 5;
var id2 = ((t=(affix.previousYearLabel)) !== undefined ? t:((t = data.previousYearLabel) !== undefined ? t :scope.resolveLooseUp(["previousYearLabel"])));
buffer = buffer.writeEscaped(id2);
buffer.data += '"\n       hidefocus="on">\n    </a>\n\n    <a class="';
pos.line = 9;
var callRet3
callRet3 = callFnUtil(tpl, scope, {escape:1,params:['year-select']}, buffer, ["getBaseCssClasses"]);
buffer = buffer.writeEscaped(callRet3);
buffer.data += '"\n       role="button"\n       href="javascript:void(0)"\n       hidefocus="on"\n       title="';
pos.line = 13;
var id4 = ((t=(affix.yearSelectLabel)) !== undefined ? t:((t = data.yearSelectLabel) !== undefined ? t :scope.resolveLooseUp(["yearSelectLabel"])));
buffer = buffer.writeEscaped(id4);
buffer.data += '">\n        <span class="';
pos.line = 14;
var callRet5
callRet5 = callFnUtil(tpl, scope, {escape:1,params:['year-select-content']}, buffer, ["getBaseCssClasses"]);
buffer = buffer.writeEscaped(callRet5);
buffer.data += '">';
var id6 = ((t=(affix.year)) !== undefined ? t:((t = data.year) !== undefined ? t :scope.resolveLooseUp(["year"])));
buffer = buffer.writeEscaped(id6);
buffer.data += '</span>\n        <span class="';
pos.line = 15;
var callRet7
callRet7 = callFnUtil(tpl, scope, {escape:1,params:['year-select-arrow']}, buffer, ["getBaseCssClasses"]);
buffer = buffer.writeEscaped(callRet7);
buffer.data += '">x</span>\n    </a>\n\n    <a class="';
pos.line = 18;
var callRet8
callRet8 = callFnUtil(tpl, scope, {escape:1,params:['next-year-btn']}, buffer, ["getBaseCssClasses"]);
buffer = buffer.writeEscaped(callRet8);
buffer.data += '"\n       href="javascript:void(0)"\n       role="button"\n       title="';
pos.line = 21;
var id9 = ((t=(affix.nextYearLabel)) !== undefined ? t:((t = data.nextYearLabel) !== undefined ? t :scope.resolveLooseUp(["nextYearLabel"])));
buffer = buffer.writeEscaped(id9);
buffer.data += '"\n       hidefocus="on">\n    </a>\n</div>\n<div class="';
pos.line = 25;
var callRet10
callRet10 = callFnUtil(tpl, scope, {escape:1,params:['body']}, buffer, ["getBaseCssClasses"]);
buffer = buffer.writeEscaped(callRet10);
buffer.data += '">\n    <table class="';
pos.line = 26;
var callRet11
callRet11 = callFnUtil(tpl, scope, {escape:1,params:['table']}, buffer, ["getBaseCssClasses"]);
buffer = buffer.writeEscaped(callRet11);
buffer.data += '" cellspacing="0" role="grid">\n        <tbody class="';
pos.line = 27;
var callRet12
callRet12 = callFnUtil(tpl, scope, {escape:1,params:['tbody']}, buffer, ["getBaseCssClasses"]);
buffer = buffer.writeEscaped(callRet12);
buffer.data += '">\n        ';
pos.line = 28;
var callRet13
buffer = root.includeModule(scope,{params:[require("./months")]},buffer,tpl);
buffer = buffer.write(callRet13);
buffer.data += '\n        </tbody>\n    </table>\n</div>';
return buffer;
};
ret.TPL_NAME = module.id || module.name;