var ret = module.exports = function decadePanel(undefined){
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
buffer.data += '">\r\n    <a class="';
pos.line = 2;
var callRet1
callRet1 = callFnUtil(tpl, scope, {escape:1,params:['prev-century-btn']}, buffer, ["getBaseCssClasses"]);
buffer = buffer.writeEscaped(callRet1);
buffer.data += '"\r\n       href="javascript:void(0)"\r\n       role="button"\r\n       title="';
pos.line = 5;
var id2 = ((t=(affix.previousCenturyLabel)) !== undefined ? t:((t = data.previousCenturyLabel) !== undefined ? t :scope.resolveLooseUp(["previousCenturyLabel"])));
buffer = buffer.writeEscaped(id2);
buffer.data += '"\r\n       hidefocus="on">\r\n    </a>\r\n    <div class="';
pos.line = 8;
var callRet3
callRet3 = callFnUtil(tpl, scope, {escape:1,params:['century']}, buffer, ["getBaseCssClasses"]);
buffer = buffer.writeEscaped(callRet3);
buffer.data += '">\r\n                ';
pos.line = 9;
var id4 = ((t=(affix.startYear)) !== undefined ? t:((t = data.startYear) !== undefined ? t :scope.resolveLooseUp(["startYear"])));
buffer = buffer.writeEscaped(id4);
buffer.data += '-';
var id5 = ((t=(affix.endYear)) !== undefined ? t:((t = data.endYear) !== undefined ? t :scope.resolveLooseUp(["endYear"])));
buffer = buffer.writeEscaped(id5);
buffer.data += '\r\n    </div>\r\n    <a class="';
pos.line = 11;
var callRet6
callRet6 = callFnUtil(tpl, scope, {escape:1,params:['next-century-btn']}, buffer, ["getBaseCssClasses"]);
buffer = buffer.writeEscaped(callRet6);
buffer.data += '"\r\n       href="javascript:void(0)"\r\n       role="button"\r\n       title="';
pos.line = 14;
var id7 = ((t=(affix.nextCenturyLabel)) !== undefined ? t:((t = data.nextCenturyLabel) !== undefined ? t :scope.resolveLooseUp(["nextCenturyLabel"])));
buffer = buffer.writeEscaped(id7);
buffer.data += '"\r\n       hidefocus="on">\r\n    </a>\r\n</div>\r\n<div class="';
pos.line = 18;
var callRet8
callRet8 = callFnUtil(tpl, scope, {escape:1,params:['body']}, buffer, ["getBaseCssClasses"]);
buffer = buffer.writeEscaped(callRet8);
buffer.data += '">\r\n    <table class="';
pos.line = 19;
var callRet9
callRet9 = callFnUtil(tpl, scope, {escape:1,params:['table']}, buffer, ["getBaseCssClasses"]);
buffer = buffer.writeEscaped(callRet9);
buffer.data += '" cellspacing="0" role="grid">\r\n        <tbody class="';
pos.line = 20;
var callRet10
callRet10 = callFnUtil(tpl, scope, {escape:1,params:['tbody']}, buffer, ["getBaseCssClasses"]);
buffer = buffer.writeEscaped(callRet10);
buffer.data += '">\r\n        ';
pos.line = 21;
var callRet11
buffer = root.includeModule(scope,{params:[require("./decades")]},buffer,tpl);
buffer = buffer.write(callRet11);
buffer.data += '\r\n        </tbody>\r\n    </table>\r\n</div>';
return buffer;
};
ret.TPL_NAME = module.id || module.name;