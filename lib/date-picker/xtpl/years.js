var ret = module.exports = function years(undefined){
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
function func4(scope, buffer, undefined) {
var data = scope.data;
var affix = scope.affix;
buffer.data += '\r\n         ';
pos.line = 8;
var callRet5
callRet5 = callFnUtil(tpl, scope, {escape:1,params:['selected-cell']}, buffer, ["getBaseCssClasses"]);
buffer = buffer.writeEscaped(callRet5);
buffer.data += '\r\n        ';
return buffer;
}
function func9(scope, buffer, undefined) {
var data = scope.data;
var affix = scope.affix;
buffer.data += '\r\n         ';
pos.line = 11;
var callRet10
callRet10 = callFnUtil(tpl, scope, {escape:1,params:['last-decade-cell']}, buffer, ["getBaseCssClasses"]);
buffer = buffer.writeEscaped(callRet10);
buffer.data += '\r\n        ';
return buffer;
}
function func14(scope, buffer, undefined) {
var data = scope.data;
var affix = scope.affix;
buffer.data += '\r\n         ';
pos.line = 14;
var callRet15
callRet15 = callFnUtil(tpl, scope, {escape:1,params:['next-decade-cell']}, buffer, ["getBaseCssClasses"]);
buffer = buffer.writeEscaped(callRet15);
buffer.data += '\r\n        ';
return buffer;
}
function func1(scope, buffer, undefined) {
var data = scope.data;
var affix = scope.affix;
buffer.data += '\r\n    <td role="gridcell"\r\n        title="';
pos.line = 5;
var id2 = ((t=(affix.title)) !== undefined ? t:((t = data.title) !== undefined ? t :scope.resolveLooseUp(["title"])));
buffer = buffer.writeEscaped(id2);
buffer.data += '"\r\n        class="';
pos.line = 6;
var callRet3
callRet3 = callFnUtil(tpl, scope, {escape:1,params:['cell']}, buffer, ["getBaseCssClasses"]);
buffer = buffer.writeEscaped(callRet3);
buffer.data += '\r\n        ';
pos.line = 7;
pos.line = 7;
var id6 = ((t=(affix.content)) !== undefined ? t:((t = data.content) !== undefined ? t :scope.resolveLooseUp(["content"])));
var exp8 = id6;
var id7 = ((t=(affix.year)) !== undefined ? t:((t = data.year) !== undefined ? t :scope.resolveLooseUp(["year"])));
exp8 = (id6)===(id7);
buffer = ifCommand.call(tpl, scope, {params:[exp8],fn: func4}, buffer);
buffer.data += '\r\n        ';
pos.line = 10;
pos.line = 10;
var id11 = ((t=(affix.content)) !== undefined ? t:((t = data.content) !== undefined ? t :scope.resolveLooseUp(["content"])));
var exp13 = id11;
var id12 = ((t=(affix.startYear)) !== undefined ? t:((t = data.startYear) !== undefined ? t :scope.resolveLooseUp(["startYear"])));
exp13 = (id11)<(id12);
buffer = ifCommand.call(tpl, scope, {params:[exp13],fn: func9}, buffer);
buffer.data += '\r\n        ';
pos.line = 13;
pos.line = 13;
var id16 = ((t=(affix.content)) !== undefined ? t:((t = data.content) !== undefined ? t :scope.resolveLooseUp(["content"])));
var exp18 = id16;
var id17 = ((t=(affix.endYear)) !== undefined ? t:((t = data.endYear) !== undefined ? t :scope.resolveLooseUp(["endYear"])));
exp18 = (id16)>(id17);
buffer = ifCommand.call(tpl, scope, {params:[exp18],fn: func14}, buffer);
buffer.data += '\r\n        ">\r\n        <a hidefocus="on"\r\n           href="javascript:void(0)"\r\n           unselectable="on"\r\n           class="';
pos.line = 20;
var callRet19
callRet19 = callFnUtil(tpl, scope, {escape:1,params:['year']}, buffer, ["getBaseCssClasses"]);
buffer = buffer.writeEscaped(callRet19);
buffer.data += '">\r\n            ';
pos.line = 21;
var id20 = ((t=(affix.content)) !== undefined ? t:((t = data.content) !== undefined ? t :scope.resolveLooseUp(["content"])));
buffer = buffer.writeEscaped(id20);
buffer.data += '\r\n        </a>\r\n    </td>\r\n    ';
return buffer;
}
function func0(scope, buffer, undefined) {
var data = scope.data;
var affix = scope.affix;
buffer.data += '\r\n<tr role="row">\r\n    ';
pos.line = 3;
pos.line = 3;
var id22 = ((t=(affix.xindex)) !== undefined ? t:((t = data.xindex) !== undefined ? t :scope.resolveLooseUp(["xindex"])));
var id21 = ((t=(affix.years)) !== undefined ? affix.years[id22]:((t = data.years) !== undefined ? (t[id22]) :scope.resolveLooseUp(["years",id22])));
buffer = eachCommand.call(tpl, scope, {params:[id21],fn: func1}, buffer);
buffer.data += '\r\n</tr>\r\n';
return buffer;
}


buffer.data += '';
pos.line = 1;
pos.line = 1;
var id23 = ((t=(affix.years)) !== undefined ? t:((t = data.years) !== undefined ? t :scope.resolveLooseUp(["years"])));
buffer = eachCommand.call(tpl, scope, {params:[id23],fn: func0}, buffer);
return buffer;
};
ret.TPL_NAME = module.id || module.name;