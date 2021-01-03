/* Generated by the Nim Compiler v0.14.3 */
/*   (c) 2016 Andreas Rumpf */

var framePtr = null;
var excHandler = 0;
var lastJSError = null;
if (typeof Int8Array === 'undefined') Int8Array = Array;
if (typeof Int16Array === 'undefined') Int16Array = Array;
if (typeof Int32Array === 'undefined') Int32Array = Array;
if (typeof Uint8Array === 'undefined') Uint8Array = Array;
if (typeof Uint16Array === 'undefined') Uint16Array = Array;
if (typeof Uint32Array === 'undefined') Uint32Array = Array;
if (typeof Float32Array === 'undefined') Float32Array = Array;
if (typeof Float64Array === 'undefined') Float64Array = Array;
var NTI50013 = {size: 0, kind: 14, base: null, node: null, finalizer: null};
var NTI104 = {size: 0,kind: 31,base: null,node: null,finalizer: null};
var NTI50023 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI3246 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI50018 = {size: 0,kind: 16,base: null,node: null,finalizer: null};
var NTI130 = {size: 0,kind: 1,base: null,node: null,finalizer: null};
var NTI3238 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI3208 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI138 = {size: 0,kind: 28,base: null,node: null,finalizer: null};
var NTI140 = {size: 0,kind: 29,base: null,node: null,finalizer: null};
var NTI3285 = {size: 0,kind: 22,base: null,node: null,finalizer: null};
var NTI3224 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI3236 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI3240 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NNI3240 = {kind: 2, len: 0, offset: 0, typ: null, name: null, sons: []};
NTI3240.node = NNI3240;
var NNI3236 = {kind: 2, len: 0, offset: 0, typ: null, name: null, sons: []};
NTI3236.node = NNI3236;
NTI3285.base = NTI3224;
var NNI3224 = {kind: 2, len: 4, offset: 0, typ: null, name: null, sons: [{kind: 1, offset: "parent", len: 0, typ: NTI3285, name: "parent", sons: null}, 
{kind: 1, offset: "name", len: 0, typ: NTI140, name: "name", sons: null}, 
{kind: 1, offset: "message", len: 0, typ: NTI138, name: "msg", sons: null}, 
{kind: 1, offset: "trace", len: 0, typ: NTI138, name: "trace", sons: null}]};
NTI3224.node = NNI3224;
var NNI3208 = {kind: 2, len: 0, offset: 0, typ: null, name: null, sons: []};
NTI3208.node = NNI3208;
NTI3224.base = NTI3208;
NTI3236.base = NTI3224;
NTI3240.base = NTI3236;
var NNI3238 = {kind: 2, len: 0, offset: 0, typ: null, name: null, sons: []};
NTI3238.node = NNI3238;
NTI3238.base = NTI3236;
NTI50018.base = NTI130;
var NNI3246 = {kind: 2, len: 0, offset: 0, typ: null, name: null, sons: []};
NTI3246.node = NNI3246;
NTI3246.base = NTI3224;
var NNI50013 = {kind: 2, offset: 0, typ: null, name: null, len: 4, sons: [{kind: 1, offset: 1, typ: NTI50013, name: "left", len: 0, sons: null}, 
{kind: 1, offset: 2, typ: NTI50013, name: "bottom", len: 0, sons: null}, 
{kind: 1, offset: 3, typ: NTI50013, name: "right", len: 0, sons: null}, 
{kind: 1, offset: 4, typ: NTI50013, name: "top", len: 0, sons: null}]};
NTI50013.node = NNI50013;
var NNI50023 = {kind: 2, len: 3, offset: 0, typ: null, name: null, sons: [{kind: 1, offset: "x", len: 0, typ: NTI104, name: "x", sons: null}, 
{kind: 1, offset: "y", len: 0, typ: NTI104, name: "y", sons: null}, 
{kind: 1, offset: "direction", len: 0, typ: NTI50013, name: "direction", sons: null}]};
NTI50023.node = NNI50023;
NTI50023.base = NTI3208;
function makeNimstrLit(c_13203) {

    var ln = c_13203.length;
    var result = new Array(ln + 1);
    var i = 0;
    for (; i < ln; ++i) {
      result[i] = c_13203.charCodeAt(i);
    }
    result[i] = 0; // terminating zero
    return result;
    }
function eqStrings(a_15803, b_15804) {

    if (a_15803 == b_15804) return true;
    if ((!a_15803) || (!b_15804)) return false;
    var alen = a_15803.length;
    if (alen != b_15804.length) return false;
    for (var i = 0; i < alen; ++i)
      if (a_15803[i] != b_15804[i]) return false;
    return true;
  }
function toJSStr(s_13603) {

    var len = s_13603.length-1;
    var asciiPart = new Array(len);
    var fcc = String.fromCharCode;
    var nonAsciiPart = null;
    var nonAsciiOffset = 0;
    for (var i = 0; i < len; ++i) {
      if (nonAsciiPart !== null) {
        var offset = (i - nonAsciiOffset) * 2;
        var code = s_13603[i].toString(16);
        if (code.length == 1) {
          code = "0"+code;
        }
        nonAsciiPart[offset] = "%";
        nonAsciiPart[offset + 1] = code;
      }
      else if (s_13603[i] < 128)
        asciiPart[i] = fcc(s_13603[i]);
      else {
        asciiPart.length = i;
        nonAsciiOffset = i;
        nonAsciiPart = new Array((len - i) * 2);
        --i;
      }
    }
    asciiPart = asciiPart.join("");
    return (nonAsciiPart === null) ?
        asciiPart : asciiPart + decodeURIComponent(nonAsciiPart.join(""));
  }
function raiseException(e_12206, ename_12207) {

e_12206.name = ename_12207;
if ((excHandler == 0)) {
unhandledException(e_12206);
}

throw e_12206;}
function rawEcho() {

      var buf = "";
      for (var i = 0; i < arguments.length; ++i) {
        buf += toJSStr(arguments[i]);
      }
      console.log(buf);
    }
function arrayConstr(len_18803, value_18804, typ_18805) {

      var result = new Array(len_18803);
      for (var i = 0; i < len_18803; ++i) result[i] = nimCopy(null, value_18804, typ_18805);
      return result;
    }
function SetConstr() {

      var result = {};
      for (var i = 0; i < arguments.length; ++i) {
        var x = arguments[i];
        if (typeof(x) == "object") {
          for (var j = x[0]; j <= x[1]; ++j) {
            result[j] = true;
          }
        } else {
          result[x] = true;
        }
      }
      return result;
    }
function nimCopy(dest_18315, src_18316, ti_18317) {

var result_18629 = null;
switch (ti_18317.kind) {
case 21: case 22: case 23: case 5: if (!(isfatpointer_18298(ti_18317))) {
result_18629 = src_18316;
}
else {
result_18629 = [src_18316[0], src_18316[1]];}


break;
case 19:       if (dest_18315 === null || dest_18315 === undefined) {
        dest_18315 = {};
      }
      else {
        for (var key in dest_18315) { delete dest_18315[key]; }
      }
      for (var key in src_18316) { dest_18315[key] = src_18316[key]; }
      result_18629 = dest_18315;
    
break;
case 18: case 17: if (!((ti_18317.base == null))) {
result_18629 = nimCopy(dest_18315, src_18316, ti_18317.base);
}
else {
if ((ti_18317.kind == 17)) {
result_18629 = (dest_18315 === null || dest_18315 === undefined) ? {m_type: ti_18317} : dest_18315;}
else {
result_18629 = (dest_18315 === null || dest_18315 === undefined) ? {} : dest_18315;}
}
nimCopyAux(result_18629, src_18316, ti_18317.node);

break;
case 24: case 4: case 27: case 16:       if (src_18316 === null) {
        result_18629 = null;
      }
      else {
        if (dest_18315 === null || dest_18315 === undefined) {
          dest_18315 = new Array(src_18316.length);
        }
        else {
          dest_18315.length = src_18316.length;
        }
        result_18629 = dest_18315;
        for (var i = 0; i < src_18316.length; ++i) {
          result_18629[i] = nimCopy(result_18629[i], src_18316[i], ti_18317.base);
        }
      }
    
break;
case 28:       if (src_18316 !== null) {
        result_18629 = src_18316.slice(0);
      }
    
break;
default: 
result_18629 = src_18316;
break;
}
return result_18629;
}
function mnewString(len_13803) {

      var result = new Array(len_13803+1);
      result[0] = 0;
      result[len_13803] = 0;
      return result;
    }
function addChar(x_18916, c_18917) {

    x_18916[x_18916.length-1] = c_18917; x_18916.push(0);
  }
function cstrToNimstr(c_13403) {

  var ln = c_13403.length;
  var result = new Array(ln);
  var r = 0;
  for (var i = 0; i < ln; ++i) {
    var ch = c_13403.charCodeAt(i);

    if (ch < 128) {
      result[r] = ch;
    }
    else if((ch > 127) && (ch < 2048)) {
      result[r] = (ch >> 6) | 192;
      ++r;
      result[r] = (ch & 63) | 128;
    }
    else {
      result[r] = (ch >> 12) | 224;
      ++r;
      result[r] = ((ch >> 6) & 63) | 128;
      ++r;
      result[r] = (ch & 63) | 128;
    }
    ++r;
  }
  result[r] = 0; // terminating zero
  return result;
  }
var nimvm_5354 = false;
var nim_program_result = 0;
var globalraisehook_10013 = [null];
var localraisehook_10018 = [null];
var outofmemhook_10021 = [null];
function add_10037(x_10040, x_10040_Idx, y_10041) {

        var len = x_10040[0].length-1;
        for (var i = 0; i < y_10041.length; ++i) {
          x_10040[0][len] = y_10041.charCodeAt(i);
          ++len;
        }
        x_10040[0][len] = 0
      }
function unhandledException(e_12061) {

var Tmp1;
var buf_12201 = /**/[makeNimstrLit("")];
if (!!(eqStrings(e_12061.message, null))) Tmp1 = false; else {Tmp1 = !((e_12061.message[0] == 0)); }if (Tmp1) {
if (buf_12201[0] != null) { buf_12201[0] = (buf_12201[0].slice(0, -1)).concat(makeNimstrLit("Error: unhandled exception: ")); } else { buf_12201[0] = makeNimstrLit("Error: unhandled exception: ");};
if (buf_12201[0] != null) { buf_12201[0] = (buf_12201[0].slice(0, -1)).concat(e_12061.message); } else { buf_12201[0] = e_12061.message;};
}
else {
if (buf_12201[0] != null) { buf_12201[0] = (buf_12201[0].slice(0, -1)).concat(makeNimstrLit("Error: unhandled exception")); } else { buf_12201[0] = makeNimstrLit("Error: unhandled exception");};
}

if (buf_12201[0] != null) { buf_12201[0] = (buf_12201[0].slice(0, -1)).concat(makeNimstrLit(" [")); } else { buf_12201[0] = makeNimstrLit(" [");};
add_10037(buf_12201, 0, e_12061.name);
if (buf_12201[0] != null) { buf_12201[0] = (buf_12201[0].slice(0, -1)).concat(makeNimstrLit("]\x0A")); } else { buf_12201[0] = makeNimstrLit("]\x0A");};
console.log(toJSStr(buf_12201[0]));
}
function raiseOverflow() {

var e_13010 = null;
e_13010 = {m_type: NTI3240, parent: null, name: null, message: null, trace: null};
e_13010.message = makeNimstrLit("over- or underflow");
raiseException(e_13010, "OverflowError");
}
function raiseDivByZero() {

var e_13026 = null;
e_13026 = {m_type: NTI3238, parent: null, name: null, message: null, trace: null};
e_13026.message = makeNimstrLit("division by zero");
raiseException(e_13026, "DivByZeroError");
}
var state_42405 = /**/[{a0: 1773455756, a1: 4275166512}];
function gettime_44638() {

var result_45213 = null;
BeforeRet: do {
result_45213 = new Date();
break BeforeRet;
} while (false); 
return result_45213;
}
var startmilsecs_45264 = /**/[gettime_44638()];
rawEcho(makeNimstrLit("Langton\'s Ant(s). [Nim version]"));
function randomize_43227(seed_43229) {

state_42405[0].a0 = ((seed_43229 >>> 0) >>> 16);
state_42405[0].a1 = (seed_43229 & 65535);
}
function randomize_48001() {

randomize_43227(gettime_44638().getTime());
}
randomize_48001();
function isfatpointer_18298(ti_18300) {

var result_18301 = false;
BeforeRet: do {
result_18301 = !((SetConstr(17, 16, 4, 18, 27, 19, 23, 22, 21)[ti_18300.base.kind] != undefined));
break BeforeRet;
} while (false); 
return result_18301;
}
function nimCopyAux(dest_18320, src_18321, n_18323) {

switch (n_18323.kind) {
case 0: 
break;
case 1:       dest_18320[n_18323.offset] = nimCopy(dest_18320[n_18323.offset], src_18321[n_18323.offset], n_18323.typ);
    
break;
case 2: L1: do {
var i_18615 = 0;
var HEX3Atmp_18617 = 0;
HEX3Atmp_18617 = (n_18323.len - 1);
var res_18620 = 0;
L2: do {
L3: while (true) {
if (!(res_18620 <= HEX3Atmp_18617)) break L3;
i_18615 = res_18620;
nimCopyAux(dest_18320, src_18321, n_18323.sons[i_18615]);
res_18620 += 1;
}
} while(false);
} while(false);

break;
case 3:       dest_18320[n_18323.offset] = nimCopy(dest_18320[n_18323.offset], src_18321[n_18323.offset], n_18323.typ);
      for (var i = 0; i < n_18323.sons.length; ++i) {
        nimCopyAux(dest_18320, src_18321, n_18323.sons[i][1]);
      }
    
break;
}
}
var states_50064 = [arrayConstr(160, arrayConstr(120, false, NTI130), NTI50018)];
L1: do {
var col_50075 = [0];
var i_50094 = 0;
L2: do {
L3: while (true) {
if (!(i_50094 < 160)) break L3;
col_50075[0] = i_50094;
L4: do {
var row_50085 = [0];
var i_50090 = 0;
L5: do {
L6: while (true) {
if (!(i_50090 < 120)) break L6;
row_50085[0] = i_50090;
states_50064[0][col_50075[0]][row_50085[0]] = false;
i_50090 += 1;
}
} while(false);
} while(false);
i_50094 += 1;
}
} while(false);
} while(false);
function getcontext2d_40015(c_40017) {

var result_40018 = null;
result_40018 = c_40017.getContext('2d');return result_40018;
}
function invalidformatstring_39330() {

var e_39335 = null;
e_39335 = {m_type: NTI3246, parent: null, name: null, message: null, trace: null};
e_39335.message = makeNimstrLit("invalid format string");
raiseException(e_39335, "ValueError");
}
function nsuToLowerChar(c_34392) {

var result_34393 = 0;
if ((SetConstr([65, 90])[c_34392] != undefined)) {
result_34393 = (c_34392 + 32);
}
else {
result_34393 = c_34392;
}

return result_34393;
}
function nsuCmpIgnoreStyle(a_34641, b_34642) {

var Tmp7;
var result_34643 = 0;
var i_34644 = 0;
var j_34645 = 0;
L1: do {
L2: while (true) {
if (!true) break L2;
L3: do {
L4: while (true) {
if (!(a_34641[i_34644] == 95)) break L4;
i_34644 += 1;
}
} while(false);
L5: do {
L6: while (true) {
if (!(b_34642[j_34645] == 95)) break L6;
j_34645 += 1;
}
} while(false);
var aa_34664 = nsuToLowerChar(a_34641[i_34644]);
var bb_34665 = nsuToLowerChar(b_34642[j_34645]);
result_34643 = (aa_34664 - bb_34665);
if (!((result_34643 == 0))) Tmp7 = true; else {Tmp7 = (aa_34664 == 0); }if (Tmp7) {
break L1;
}

i_34644 += 1;
j_34645 += 1;
}
} while(false);
return result_34643;
}
function findnormalized_39313(x_39315, inarray_39317) {

var result_39318 = 0;
BeforeRet: do {
var i_39319 = 0;
L1: do {
L2: while (true) {
if (!(i_39319 < (inarray_39317 != null ? (inarray_39317.length-1) : -1))) break L2;
if ((nsuCmpIgnoreStyle(x_39315, inarray_39317[i_39319]) == 0)) {
result_39318 = i_39319;
break BeforeRet;
}

i_39319 += 2;
}
} while(false);
result_39318 = -1;
break BeforeRet;
} while (false); 
return result_39318;
}
function nsuAddf(s_39349, s_39349_Idx, formatstr_39350, a_39352) {

var Tmp5;
var Tmp8;
var Tmp11;
var i_39355 = 0;
var num_39356 = 0;
L1: do {
L2: while (true) {
if (!(i_39355 < (formatstr_39350 != null ? formatstr_39350.length-1 : 0))) break L2;
if ((formatstr_39350[i_39355] == 36)) {
switch (formatstr_39350[(i_39355 + 1)]) {
case 35: if (((a_39352 != null ? (a_39352.length-1) : -1) < num_39356)) {
invalidformatstring_39330();
}

if (s_39349[s_39349_Idx] != null) { s_39349[s_39349_Idx] = (s_39349[s_39349_Idx].slice(0, -1)).concat(a_39352[num_39356]); } else { s_39349[s_39349_Idx] = a_39352[num_39356];};
i_39355 += 2;
num_39356 += 1;

break;
case 36: if (s_39349[s_39349_Idx] != null) { addChar(s_39349[s_39349_Idx], 36); } else { s_39349[s_39349_Idx] = [36, 0]; };
i_39355 += 2;

break;
case 49: case 50: case 51: case 52: case 53: case 54: case 55: case 56: case 57: case 45: var j_39393 = 0;
i_39355 += 1;
var negative_39403 = (formatstr_39350[i_39355] == 45);
if (negative_39403) {
i_39355 += 1;
}

L3: do {
L4: while (true) {
if (!(SetConstr([48, 57])[formatstr_39350[i_39355]] != undefined)) break L4;
j_39393 = (((j_39393 * 10) + formatstr_39350[i_39355]) - 48);
i_39355 += 1;
}
} while(false);
if (!(negative_39403)) {
Tmp5 = (j_39393 - 1);
}
else {
Tmp5 = ((a_39352 != null ? a_39352.length : 0) - j_39393);
}

var idx_39455 = Tmp5;
if (((a_39352 != null ? (a_39352.length-1) : -1) < idx_39455)) {
invalidformatstring_39330();
}

if (s_39349[s_39349_Idx] != null) { s_39349[s_39349_Idx] = (s_39349[s_39349_Idx].slice(0, -1)).concat(a_39352[idx_39455]); } else { s_39349[s_39349_Idx] = a_39352[idx_39455];};

break;
case 123: var j_39465 = (i_39355 + 1);
L6: do {
L7: while (true) {
if (!!((SetConstr(0, 125)[formatstr_39350[j_39465]] != undefined))) break L7;
j_39465 += 1;
}
} while(false);
var x_39486 = findnormalized_39313((formatstr_39350.slice((i_39355 + 2), ((j_39465 - 1))+1).concat(0)), a_39352);
if (!(0 <= x_39486)) Tmp8 = false; else {Tmp8 = (x_39486 < (a_39352 != null ? (a_39352.length-1) : -1)); }if (Tmp8) {
if (s_39349[s_39349_Idx] != null) { s_39349[s_39349_Idx] = (s_39349[s_39349_Idx].slice(0, -1)).concat(a_39352[(x_39486 + 1)]); } else { s_39349[s_39349_Idx] = a_39352[(x_39486 + 1)];};
}
else {
invalidformatstring_39330();
}

i_39355 = (j_39465 + 1);

break;
case 97: case 98: case 99: case 100: case 101: case 102: case 103: case 104: case 105: case 106: case 107: case 108: case 109: case 110: case 111: case 112: case 113: case 114: case 115: case 116: case 117: case 118: case 119: case 120: case 121: case 122: case 65: case 66: case 67: case 68: case 69: case 70: case 71: case 72: case 73: case 74: case 75: case 76: case 77: case 78: case 79: case 80: case 81: case 82: case 83: case 84: case 85: case 86: case 87: case 88: case 89: case 90: case 128: case 129: case 130: case 131: case 132: case 133: case 134: case 135: case 136: case 137: case 138: case 139: case 140: case 141: case 142: case 143: case 144: case 145: case 146: case 147: case 148: case 149: case 150: case 151: case 152: case 153: case 154: case 155: case 156: case 157: case 158: case 159: case 160: case 161: case 162: case 163: case 164: case 165: case 166: case 167: case 168: case 169: case 170: case 171: case 172: case 173: case 174: case 175: case 176: case 177: case 178: case 179: case 180: case 181: case 182: case 183: case 184: case 185: case 186: case 187: case 188: case 189: case 190: case 191: case 192: case 193: case 194: case 195: case 196: case 197: case 198: case 199: case 200: case 201: case 202: case 203: case 204: case 205: case 206: case 207: case 208: case 209: case 210: case 211: case 212: case 213: case 214: case 215: case 216: case 217: case 218: case 219: case 220: case 221: case 222: case 223: case 224: case 225: case 226: case 227: case 228: case 229: case 230: case 231: case 232: case 233: case 234: case 235: case 236: case 237: case 238: case 239: case 240: case 241: case 242: case 243: case 244: case 245: case 246: case 247: case 248: case 249: case 250: case 251: case 252: case 253: case 254: case 255: case 95: var j_39487 = (i_39355 + 1);
L9: do {
L10: while (true) {
if (!(SetConstr([97, 122], [65, 90], [48, 57], [128, 255], 95)[formatstr_39350[j_39487]] != undefined)) break L10;
j_39487 += 1;
}
} while(false);
var x_39507 = findnormalized_39313((formatstr_39350.slice((i_39355 + 1), ((j_39487 - 1))+1).concat(0)), a_39352);
if (!(0 <= x_39507)) Tmp11 = false; else {Tmp11 = (x_39507 < (a_39352 != null ? (a_39352.length-1) : -1)); }if (Tmp11) {
if (s_39349[s_39349_Idx] != null) { s_39349[s_39349_Idx] = (s_39349[s_39349_Idx].slice(0, -1)).concat(a_39352[(x_39507 + 1)]); } else { s_39349[s_39349_Idx] = a_39352[(x_39507 + 1)];};
}
else {
invalidformatstring_39330();
}

i_39355 = j_39487;

break;
default: 
invalidformatstring_39330();
break;
}
}
else {
if (s_39349[s_39349_Idx] != null) { addChar(s_39349[s_39349_Idx], formatstr_39350[i_39355]); } else { s_39349[s_39349_Idx] = [formatstr_39350[i_39355], 0]; };
i_39355 += 1;
}

}
} while(false);
}
function nsuFormatOpenArray(formatstr_39523, a_39525) {

var result_39526 = [null];
result_39526[0] = mnewString(0);
nsuAddf(result_39526, 0, formatstr_39523, a_39525);
return result_39526[0];
}
function nsuIntToStr(x_36035, minchars_36036) {

var result_36037 = null;
result_36037 = cstrToNimstr((Math.abs(x_36035))+"");
L1: do {
var i_36047 = 0;
var HEX3Atmp_36049 = 0;
HEX3Atmp_36049 = (minchars_36036 - (result_36037 != null ? result_36037.length-1 : 0));
var res_36052 = 1;
L2: do {
L3: while (true) {
if (!(res_36052 <= HEX3Atmp_36049)) break L3;
i_36047 = res_36052;
result_36037 = [48].concat(result_36037);
res_36052 += 1;
}
} while(false);
} while(false);
if ((x_36035 < 0)) {
result_36037 = [45].concat(result_36037);
}

return result_36037;
}
function HEX2F_19807(x_19809, y_19810) {

var result_19811 = 0.0;
result_19811 = (x_19809 / y_19810);
return result_19811;
}
function rotl_42602(x_42604, k_42605) {

var result_42606 = 0;
result_42606 = ((x_42604 << k_42605) | ((x_42604 >>> 0) >>> ((64 - k_42605) >>> 0)));
return result_42606;
}
function next_42644(s_42647) {

var result_42648 = 0;
var s0_42649 = s_42647.a0;
var s1_42650 = s_42647.a1;
result_42648 = ((s0_42649 + s1_42650) >>> 0);
s1_42650 = (s1_42650 ^ s0_42649);
s_42647.a0 = ((rotl_42602(s0_42649, 55) ^ s1_42650) ^ (s1_42650 << 14));
s_42647.a1 = rotl_42602(s1_42650, 36);
return result_42648;
}
function random_43081(max_43083) {

var result_43084 = 0;
result_43084 = ((next_42644(state_42405[0]) % max_43083)|0);
return result_43084;
}
function fillstyle_40031(ctx_40033, r_40034, g_40035, b_40036) {

ctx_40033.fillStyle = 'rgb(r_40034,g_40035,b_40036)';}
function drawworld_50156(ctx_50158) {

L1: do {
var j_50168 = 0;
var i_50187 = 0;
L2: do {
L3: while (true) {
if (!(i_50187 < 120)) break L3;
j_50168 = i_50187;
L4: do {
var i_50178 = 0;
var i_50183 = 0;
L5: do {
L6: while (true) {
if (!(i_50183 < 160)) break L6;
i_50178 = i_50183;
if ((states_50064[0][i_50178][j_50168] == true)) {
ctx_50158.beginPath();
fillstyle_40031(ctx_50158, 0, 0, 0);
ctx_50158.fillRect((i_50178 * 4), (j_50168 * 4), 4, 4);
ctx_50158.closePath();
}

i_50183 += 1;
}
} while(false);
} while(false);
i_50187 += 1;
}
} while(false);
} while(false);
}
function drawant_50037(ctx_50039, ant_50040) {

ctx_50039.beginPath();
fillstyle_40031(ctx_50039, 255, 0, 0);
ctx_50039.fillRect((ant_50040.x * 4), (ant_50040.y * 4), 4, 4);
ctx_50039.closePath();
}
function newseq_50610(len_50614) {

var result_50616 = null;
result_50616 = new Array(len_50614); for (var i=0;i<len_50614;++i) {result_50616[i]=null;}return result_50616;
}
function moveforward_50042(ant_50044) {

var Tmp1;
var Tmp2;
var Tmp3;
var Tmp4;
var Tmp5;
var result_50045 = null;
switch (ant_50044.direction) {
case 1: if ((0 < ant_50044.x)) {
Tmp2 = {x: (ant_50044.x - 1), y: ant_50044.y, direction: ant_50044.direction, m_type: NTI50023};
}
else {
Tmp2 = {x: ant_50044.x, y: ant_50044.y, direction: 3, m_type: NTI50023};
}

Tmp1 = Tmp2;

break;
case 2: if ((ant_50044.y < 158)) {
Tmp3 = {x: ant_50044.x, y: (ant_50044.y + 1), direction: ant_50044.direction, m_type: NTI50023};
}
else {
Tmp3 = {x: ant_50044.x, y: ant_50044.y, direction: 4, m_type: NTI50023};
}

Tmp1 = Tmp3;

break;
case 3: if ((ant_50044.x < 118)) {
Tmp4 = {x: (ant_50044.x + 1), y: ant_50044.y, direction: ant_50044.direction, m_type: NTI50023};
}
else {
Tmp4 = {x: ant_50044.x, y: ant_50044.y, direction: 1, m_type: NTI50023};
}

Tmp1 = Tmp4;

break;
case 4: if ((0 < ant_50044.y)) {
Tmp5 = {x: ant_50044.x, y: (ant_50044.y - 1), direction: ant_50044.direction, m_type: NTI50023};
}
else {
Tmp5 = {x: ant_50044.x, y: ant_50044.y, direction: 2, m_type: NTI50023};
}

Tmp1 = Tmp5;

break;
}
result_50045 = Tmp1;
return result_50045;
}
function turnright_50096(ant_50098) {

var Tmp1;
var result_50099 = null;
if ((1 < ant_50098.direction)) {
Tmp1 = (ant_50098.direction - 1);
}
else {
Tmp1 = 4;
}

var direction_50120 = Tmp1;
result_50099 = {x: ant_50098.x, y: ant_50098.y, direction: direction_50120, m_type: NTI50023};
return result_50099;
}
function turnleft_50122(ant_50124) {

var Tmp1;
var result_50125 = null;
if ((ant_50124.direction < 4)) {
Tmp1 = (ant_50124.direction + 1);
}
else {
Tmp1 = 1;
}

var direction_50146 = Tmp1;
result_50125 = {x: ant_50124.x, y: ant_50124.y, direction: direction_50146, m_type: NTI50023};
return result_50125;
}
function moveant_50148(ant_50150) {

var Tmp1;
var result_50151 = null;
var x_50152 = ant_50150.x;
var y_50153 = ant_50150.y;
var whitecell_50154 = states_50064[0][x_50152][y_50153];
if ((whitecell_50154 == false)) {
states_50064[0][x_50152][y_50153] = true;
}
else {
states_50064[0][x_50152][y_50153] = false;
}

if (whitecell_50154) {
Tmp1 = turnright_50096(ant_50150);
}
else {
Tmp1 = turnleft_50122(ant_50150);
}

var newant_50155 = Tmp1;
result_50151 = newant_50155;
return result_50151;
}
function requestanimationframe_51046(op_51050) {

ran = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame; ran(op_51050);}
function HEX3Aanonymous_50189(e_50192) {

function onkeydown_51077(evt_51080) {

if (ants_50217 != null) { ants_50217.push({x: random_43081(159), y: random_43081(119), direction: 3, m_type: NTI50023}); } else { ants_50217 = [{x: random_43081(159), y: random_43081(119), direction: 3, m_type: NTI50023}]; };
}
function draw_50218() {

ctx_50194.clearRect(0.0, 0.0, 6.4000000000000000e+02, 4.8000000000000000e+02);
drawworld_50156(ctx_50194);
L1: do {
var ant_50402 = null;
var i_51058 = 0;
var L_51060 = (ants_50217 != null ? ants_50217.length : 0);
L2: do {
L3: while (true) {
if (!(i_51058 < L_51060)) break L3;
ant_50402 = ants_50217[i_51058];
drawant_50037(ctx_50194, ant_50402);
i_51058 += 1;
}
} while(false);
} while(false);
var result_50648 = null;
var result_50406 = null;
var s_50408 = ants_50217;
var i_50410 = 0;
result_50406 = newseq_50610((s_50408 != null ? s_50408.length : 0));
L4: do {
var it_50635 = null;
var i_51068 = 0;
var L_51070 = (s_50408 != null ? s_50408.length : 0);
L5: do {
L6: while (true) {
if (!(i_51068 < L_51070)) break L6;
it_50635 = s_50408[i_51068];
result_50406[i_50410] = moveforward_50042(it_50635);
i_50410 += 1;
i_51068 += 1;
}
} while(false);
} while(false);
var s_50650 = result_50406;
var i_50652 = 0;
result_50648 = newseq_50610((s_50650 != null ? s_50650.length : 0));
L7: do {
var it_51035 = null;
var i_51074 = 0;
var L_51076 = (s_50650 != null ? s_50650.length : 0);
L8: do {
L9: while (true) {
if (!(i_51074 < L_51076)) break L9;
it_51035 = s_50650[i_51074];
result_50648[i_50652] = moveant_50148(it_51035);
i_50652 += 1;
i_51074 += 1;
}
} while(false);
} while(false);
ants_50217 = result_50648;
requestanimationframe_51046(draw_50218);
}
var c_50193 = document.getElementById("ants");
var ctx_50194 = getcontext2d_40015(c_50193);
rawEcho(nsuFormatOpenArray(makeNimstrLit("Canvas is $1 (px) by $2 (px)."), [nsuIntToStr(640, 1), nsuIntToStr(480, 1)]));
rawEcho(nsuFormatOpenArray(makeNimstrLit("Canvas is $1 (columns) by $2. (rows)"), [nsuIntToStr(160, 1), nsuIntToStr(120, 1)]));
var ants_50217 = [{x: Math.floor(HEX2F_19807(160, 2)), y: Math.floor(HEX2F_19807(120, 2)), direction: 1, m_type: NTI50023}];
var button_51095 = document.getElementById("addAntButton");
button_51095.addEventListener("click", onkeydown_51077, false);
draw_50218();
}
window.onload = HEX3Aanonymous_50189;