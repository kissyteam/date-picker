var ret = module.exports = function yearPanel(undefined){
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
pos.line = 1;
var callRet0
callRet0 = callFnUtil(tpl, scope, {escape:1,params:['header']}, buffer, ["getBaseCssClasses"]);
buffer = buffer.writeEscaped(callRet0);
buffer.data += '">\n    <a class="';
pos.line = 2;
var callRet1
callRet1 = callFnUtil(tpl, scope, {escape:1,params:['prev-decade-btn']}, buffer, ["getBaseCssClasses"]);
buffer = buffer.writeEscaped(callRet1);
buffer.data += '"\n       href="javascript:void(0)"\n       role="button"\n       title="';
pos.line = 5;
var id2 = ((t=(affix.previousDecadeLabel)) !== undefined ? t:((t = data.previousDecadeLabel) !== undefined ? t :scope.resolveLooseUp(["previousDecadeLabel"])));
buffer = buffer.writeEscaped(id2);
buffer.data += '"\n       hidefocus="on">\n    </a>\n\n    <a class="';
pos.line = 9;
var callRet3
callRet3 = callFnUtil(tpl, scope, {escape:1,params:['decade-select']}, buffer, ["getBaseCssClasses"]);
buffer = buffer.writeEscaped(callRet3);
buffer.data += '"\n       role="button"\n       href="javascript:void(0)"\n       hidefocus="on"\n       title="';
pos.line = 13;
var id4 = ((t=(affix.decadeSelectLabel)) !== undefined ? t:((t = data.decadeSelectLabel) !== undefined ? t :scope.resolveLooseUp(["decadeSelectLabel"])));
buffer = buffer.writeEscaped(id4);
buffer.data += '">\n            <span class="';
pos.line = 14;
var callRet5
callRet5 = callFnUtil(tpl, scope, {escape:1,params:['decade-select-content']}, buffer, ["getBaseCssClasses"]);
buffer = buffer.writeEscaped(callRet5);
buffer.data += '">\n                ';
pos.line = 15;
var id6 = ((t=(affix.startYear)) !== undefined ? t:((t = data.startYear) !== undefined ? t :scope.resolveLooseUp(["startYear"])));
buffer = buffer.writeEscaped(id6);
buffer.data += '-';
var id7 = ((t=(affix.endYear)) !== undefined ? t:((t = data.endYear) !== undefined ? t :scope.resolveLooseUp(["endYear"])));
buffer = buffer.writeEscaped(id7);
buffer.data += '\n            </span>\n        <span class="';
pos.line = 17;
var callRet8
callRet8 = callFnUtil(tpl, scope, {escape:1,params:['decade-select-arrow']}, buffer, ["getBaseCssClasses"]);
buffer = buffer.writeEscaped(callRet8);
buffer.data += '">x</span>\n    </a>\n\n    <a class="';
pos.line = 20;
var callRet9
callRet9 = callFnUtil(tpl, scope, {escape:1,params:['next-decade-btn']}, buffer, ["getBaseCssClasses"]);
buffer = buffer.writeEscaped(callRet9);
buffer.data += '"\n       href="javascript:void(0)"\n       role="button"\n       title="';
pos.line = 23;
var id10 = ((t=(affix.nextDecadeLabel)) !== undefined ? t:((t = data.nextDecadeLabel) !== undefined ? t :scope.resolveLooseUp(["nextDecadeLabel"])));
buffer = buffer.writeEscaped(id10);
buffer.data += '"\n       hidefocus="on">\n    </a>\n</div>\n<div class="';
pos.line = 27;
var callRet11
callRet11 = callFnUtil(tpl, scope, {escape:1,params:['body']}, buffer, ["getBaseCssClasses"]);
buffer = buffer.writeEscaped(callRet11);
buffer.data += '">\n    <table class="';
pos.line = 28;
var callRet12
callRet12 = callFnUtil(tpl, scope, {escape:1,params:['table']}, buffer, ["getBaseCssClasses"]);
buffer = buffer.writeEscaped(callRet12);
buffer.data += '" cellspacing="0" role="grid">\n        <tbody class="';
pos.line = 29;
var callRet13
callRet13 = callFnUtil(tpl, scope, {escape:1,params:['tbody']}, buffer, ["getBaseCssClasses"]);
buffer = buffer.writeEscaped(callRet13);
buffer.data += '">\n        ';
pos.line = 30;
var callRet14
buffer = root.includeModule(scope,{params:[require("./years")]},buffer,tpl);
buffer = buffer.write(callRet14);
buffer.data += '\n        </tbody>\n    </table>\n</div>';
return buffer;
};
ret.TPL_NAME = module.id || module.name;