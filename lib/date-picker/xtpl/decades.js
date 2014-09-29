var ret = module.exports = function decades(undefined){
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
function func3(scope, buffer, undefined) {
var data = scope.data;
var affix = scope.affix;
buffer.data += '\n         ';
pos.line = 7;
var callRet4
callRet4 = callFnUtil(tpl, scope, {escape:1,params:['selected-cell']}, buffer, ["getBaseCssClasses"]);
buffer = buffer.writeEscaped(callRet4);
buffer.data += '\n        ';
return buffer;
}
function func12(scope, buffer, undefined) {
var data = scope.data;
var affix = scope.affix;
buffer.data += '\n         ';
pos.line = 10;
var callRet13
callRet13 = callFnUtil(tpl, scope, {escape:1,params:['last-century-cell']}, buffer, ["getBaseCssClasses"]);
buffer = buffer.writeEscaped(callRet13);
buffer.data += '\n        ';
return buffer;
}
function func17(scope, buffer, undefined) {
var data = scope.data;
var affix = scope.affix;
buffer.data += '\n         ';
pos.line = 13;
var callRet18
callRet18 = callFnUtil(tpl, scope, {escape:1,params:['next-century-cell']}, buffer, ["getBaseCssClasses"]);
buffer = buffer.writeEscaped(callRet18);
buffer.data += '\n        ';
return buffer;
}
function func1(scope, buffer, undefined) {
var data = scope.data;
var affix = scope.affix;
buffer.data += '\n    <td role="gridcell"\n        class="';
pos.line = 5;
var callRet2
callRet2 = callFnUtil(tpl, scope, {escape:1,params:['cell']}, buffer, ["getBaseCssClasses"]);
buffer = buffer.writeEscaped(callRet2);
buffer.data += '\n        ';
pos.line = 6;
pos.line = 6;
var id5 = ((t=(affix.startDecade)) !== undefined ? t:((t = data.startDecade) !== undefined ? t :scope.resolveLooseUp(["startDecade"])));
var exp7 = id5;
var id6 = ((t=(affix.year)) !== undefined ? t:((t = data.year) !== undefined ? t :scope.resolveLooseUp(["year"])));
exp7 = (id5)<=(id6);
var exp11 = exp7;
if((exp11)){
var id8 = ((t=(affix.year)) !== undefined ? t:((t = data.year) !== undefined ? t :scope.resolveLooseUp(["year"])));
var exp10 = id8;
var id9 = ((t=(affix.endDecade)) !== undefined ? t:((t = data.endDecade) !== undefined ? t :scope.resolveLooseUp(["endDecade"])));
exp10 = (id8)<=(id9);
exp11 = exp10;
}
buffer = ifCommand.call(tpl, scope, {params:[exp11],fn: func3}, buffer);
buffer.data += '\n        ';
pos.line = 9;
pos.line = 9;
var id14 = ((t=(affix.startDecade)) !== undefined ? t:((t = data.startDecade) !== undefined ? t :scope.resolveLooseUp(["startDecade"])));
var exp16 = id14;
var id15 = ((t=(affix.startYear)) !== undefined ? t:((t = data.startYear) !== undefined ? t :scope.resolveLooseUp(["startYear"])));
exp16 = (id14)<(id15);
buffer = ifCommand.call(tpl, scope, {params:[exp16],fn: func12}, buffer);
buffer.data += '\n        ';
pos.line = 12;
pos.line = 12;
var id19 = ((t=(affix.endDecade)) !== undefined ? t:((t = data.endDecade) !== undefined ? t :scope.resolveLooseUp(["endDecade"])));
var exp21 = id19;
var id20 = ((t=(affix.endYear)) !== undefined ? t:((t = data.endYear) !== undefined ? t :scope.resolveLooseUp(["endYear"])));
exp21 = (id19)>(id20);
buffer = ifCommand.call(tpl, scope, {params:[exp21],fn: func17}, buffer);
buffer.data += '\n        ">\n        <a hidefocus="on"\n           href="javascript:void(0)"\n           unselectable="on"\n           class="';
pos.line = 19;
var callRet22
callRet22 = callFnUtil(tpl, scope, {escape:1,params:['decade']}, buffer, ["getBaseCssClasses"]);
buffer = buffer.writeEscaped(callRet22);
buffer.data += '">\n            ';
pos.line = 20;
var id23 = ((t=(affix.startDecade)) !== undefined ? t:((t = data.startDecade) !== undefined ? t :scope.resolveLooseUp(["startDecade"])));
buffer = buffer.writeEscaped(id23);
buffer.data += '-';
var id24 = ((t=(affix.endDecade)) !== undefined ? t:((t = data.endDecade) !== undefined ? t :scope.resolveLooseUp(["endDecade"])));
buffer = buffer.writeEscaped(id24);
buffer.data += '\n        </a>\n    </td>\n    ';
return buffer;
}
function func0(scope, buffer, undefined) {
var data = scope.data;
var affix = scope.affix;
buffer.data += '\n<tr role="row">\n    ';
pos.line = 3;
pos.line = 3;
var id26 = ((t=(affix.xindex)) !== undefined ? t:((t = data.xindex) !== undefined ? t :scope.resolveLooseUp(["xindex"])));
var id25 = ((t=(affix.decades)) !== undefined ? affix.decades[id26]:((t = data.decades) !== undefined ? (t[id26]) :scope.resolveLooseUp(["decades",id26])));
buffer = eachCommand.call(tpl, scope, {params:[id25],fn: func1}, buffer);
buffer.data += '\n</tr>\n';
return buffer;
}


buffer.data += '';
pos.line = 1;
pos.line = 1;
var id27 = ((t=(affix.decades)) !== undefined ? t:((t = data.decades) !== undefined ? t :scope.resolveLooseUp(["decades"])));
buffer = eachCommand.call(tpl, scope, {params:[id27],fn: func0}, buffer);
return buffer;
};
ret.TPL_NAME = module.id || module.name;