(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{110:function(e,t,n){e.exports=n(244)},115:function(e,t,n){},116:function(e,t,n){},244:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(16),o=n.n(c),i=(n(115),n(4)),l=n(93),u=n(94),s=n(106),d=n(95),m=n(107),f=(n(116),n(40)),p=n(3),g=function(e){var t=e.children,n=e.attributes;return r.a.createElement("strong",{attributes:n},t)},b=n(5);function E(){var e=Object(i.a)(["\n  background: #ccc;\n"]);return E=function(){return e},e}var v=function(e){var t=e.children,n=e.attributes;return r.a.createElement(h,{attributes:n},t)},h=b.a.code(E()),k="Menlo, Consolas, Courier New",O=n(19),x=n(6),y=n(7);function j(){var e=Object(i.a)(["\n  position: absolute;\n  top: 0;\n  right: -20px;\n  cursor: pointer;\n"]);return j=function(){return e},e}function w(){var e=Object(i.a)(['\n  background: #eee;\n  position: relative;\n  z-index: -10;\n\n  &:after {\n    content: "Executable Code";\n    font-family: ',";\n    font-size: 10px;\n    position: absolute;\n    top: 2px;\n    right: 2px;\n  }\n"]);return w=function(){return e},e}function C(){var e=Object(i.a)(["\n  background: #eee;\n  font-family: ",";\n  padding: 10px;\n"]);return C=function(){return e},e}function B(){var e=Object(i.a)([""]);return B=function(){return e},e}var N=function(e){var t=e.node.data.get("output")?r.a.createElement(S,null,r.a.createElement("strong",null,"Output:"),r.a.createElement("br",null),e.node.data.get("output")):null;return r.a.createElement("div",e.attributes,r.a.createElement(T,null,r.a.createElement(L,null,e.children)),t)},L=b.a.code(B()),S=b.a.pre(C(),k),T=b.a.pre(w(),k);b.a.div(j());function D(){var e=Object(i.a)(['\n  background: #eee;\n  position: relative;\n\n  &:after {\n    content: "Non Executable Code";\n    font-family: ',";\n    font-size: 10px;\n    position: absolute;\n    top: 2px;\n    right: 2px;\n  }\n"]);return D=function(){return e},e}function z(){var e=Object(i.a)([""]);return z=function(){return e},e}var M=function(e){return r.a.createElement(J,e.attributes,r.a.createElement(I,null,e.children))},I=b.a.code(z()),J=b.a.pre(D(),k);function P(){var e=Object(i.a)(['\n  background: #eee;\n  position: relative;\n\n  &:after {\n    content: "Sample Output";\n    font-family: ',";\n    font-size: 10px;\n    position: absolute;\n    top: 2px;\n    right: 2px;\n  }\n"]);return P=function(){return e},e}function U(){var e=Object(i.a)([""]);return U=function(){return e},e}var F=function(e){return r.a.createElement(V,e.attributes,r.a.createElement(K,null,e.children))},K=b.a.samp(U()),V=b.a.pre(P(),k),q=(function(e){var t=e.type,n=e.key}({type:"code",key:"`"}),n(14)),A="#eee",R="#008080",_="#F0F0F0";function H(){var e=Object(i.a)(["\n  background: ",";\n  color: ",";\n  height: 30px;\n  margin: 0 10px;\n  font-size: 16px;\n  font-family: ",";\n"]);return H=function(){return e},e}function W(){var e=Object(i.a)(["\n  font-size: 13px;\n"]);return W=function(){return e},e}function $(){var e=Object(i.a)(["\n  border: 1px solid #ccc;\n  padding: 10px;\n  margin: 5px;\n  cursor: pointer;\n  outline: none;\n  font-size: 16px;\n  color: #777;\n"]);return $=function(){return e},e}function G(){var e=Object(i.a)(["\n  cursor: pointer;\n  outline: none;\n"]);return G=function(){return e},e}var Q=b.a.button(G()),X=Object(b.a)(Q)($()),Y=Object(b.a)(Q)(W()),Z=b.a.button(H(),R,_,k);function ee(){var e=Object(i.a)(["\n  display: grid;\n  grid-template-columns: auto auto;\n"]);return ee=function(){return e},e}function te(){var e=Object(i.a)(["\n  display: block;\n  font-weight: bold;\n  margin-top: 20px;\n"]);return te=function(){return e},e}function ne(){var e=Object(i.a)(["\n  border: 1px solid ",";\n  height: 300px;\n  padding: 0 10px;\n  font-family: ",";\n  outline: none;\n  width: 500px;\n  font-size: 18px;\n"]);return ne=function(){return e},e}function ae(){var e=Object(i.a)(["\n  border: 1px solid ",";\n  height: 29px;\n  padding: 0 10px;\n  font-family: ",";\n  outline: none;\n  width: 500px;\n  font-size: 18px;\n"]);return ae=function(){return e},e}var re=b.a.input(ae(),A,k),ce=b.a.textarea(ne(),A,k),oe=b.a.label(te()),ie=b.a.div(ee());function le(){var e=Object(i.a)(["\n  width: 50%;\n  padding: 30px 50px;\n  z-index: 100000000;\n"]);return le=function(){return e},e}var ue=b.a.div(le());function se(){var e=Object(i.a)(["\n  display: flex;\n  border-bottom: solid 1.7px rgba(199, 198, 255, 0.15);\n  padding: 10px 0;\n  background: white;\n"]);return se=function(){return e},e}var de=function(e){var t=e.editor;e.onChange;return r.a.createElement(fe,null,r.a.createElement(Y,{className:"tooltip-icon-button"},r.a.createElement(x.a,{icon:y.d,onClick:function(){t.toggleMark("bold"),t.focus()}})),r.a.createElement(Y,{className:"tooltip-icon-button"},r.a.createElement(x.a,{icon:y.k,onClick:function(){t.toggleMark("italic"),t.focus()}})),r.a.createElement(Y,{className:"tooltip-icon-button"},r.a.createElement(x.a,{icon:y.g,onClick:function(){t.toggleMark("code"),t.focus()}})),r.a.createElement(Y,{className:"tooltip-icon-button"},r.a.createElement(x.a,{icon:y.b,onClick:function(){t.alignLeft(),t.focus()}})),r.a.createElement(Y,{className:"tooltip-icon-button"},r.a.createElement(x.a,{icon:y.a,onClick:function(){t.alignCenter(),t.focus()}})),r.a.createElement(Y,{className:"tooltip-icon-button"},r.a.createElement(x.a,{icon:y.c,onClick:function(){t.alignRight(),t.focus()}})),t&&(t.hasLinks()?r.a.createElement(Y,{className:"tooltip-icon-button"},r.a.createElement(x.a,{icon:y.r,onClick:function(){t.unwrapLink()}})):r.a.createElement(O.a,{modal:!0,trigger:r.a.createElement(Y,{className:"tooltip-icon-button"},r.a.createElement(x.a,{icon:y.l}))},function(t){return r.a.createElement(me,Object.assign({},e,{closePopup:t}))})))},me=function(e){var t=e.editor,n=e.closePopup,c=(e.onChange,Object(a.useState)("")),o=Object(q.a)(c,2),i=o[0],l=o[1],u=Object(a.useState)(""),s=Object(q.a)(u,2),d=s[0],m=s[1],f=t.value.selection.isCollapsed;return r.a.createElement(ue,null,f&&r.a.createElement(r.a.Fragment,null,r.a.createElement(oe,null,"Text"),r.a.createElement(re,{type:"text",value:d,onChange:function(e){return m(e.target.value)}})),r.a.createElement(oe,null,"Link"),r.a.createElement(re,{type:"text",value:i,onChange:function(e){return l(e.target.value)}}),r.a.createElement(Z,{onClick:function(e){e.preventDefault();var a=i;f?t.insertText(d).moveFocusBackward(d.length).wrapLink(a).focus():t.wrapLink(a),n()}},"Insert"))},fe=b.a.div(se()),pe=function(e){var t=e.children,n=e.attributes;return r.a.createElement("em",{attributes:n},t)},ge=n(39);function be(){var e=Object(i.a)(["\n  display: flex;\n  flex-direction: column;\n  position: fixed;\n  left: 0;\n  top: 10%;\n"]);return be=function(){return e},e}var Ee=function(e){var t=e.editor,n=e.onChange;return r.a.createElement(ve,null,r.a.createElement(X,{onClick:function(){t.isList()&&!t.isBlockEmpty()?t.insertBlock("paragraph").unwrapList():t.setBlocks("paragraph").unwrapList(),t.focus()}},r.a.createElement(x.a,{icon:y.o})),r.a.createElement(X,{onClick:function(){t.isBlockEmpty()?t.setBlocks("code"):t.insertBlock("code").unwrapList(),t.focus()}},r.a.createElement(x.a,{icon:y.g})),r.a.createElement(X,{onClick:function(){t.isBlockEmpty()?t.setBlocks("nonexecutable-code"):t.insertBlock("nonexecutable-code").unwrapList(),t.focus()}},r.a.createElement("span",{className:"fa-layers fa-fw"},r.a.createElement(x.a,{icon:y.f,size:"lg"}),r.a.createElement(x.a,{icon:y.g,size:"xs",inverse:!0}))),r.a.createElement(X,{onClick:function(){t.isBlockEmpty()?t.setBlocks("sample-output"):t.insertBlock("sample-output").unwrapList(),t.focus()}},r.a.createElement(x.a,{icon:y.e})),r.a.createElement(X,{onClick:function(){t.setBlocks("heading-1"),!t.isBlockEmpty()&&t.moveToEndOfBlock().insertBlock("paragraph").unwrapList(),t.focus()}},r.a.createElement(x.a,{icon:y.i})),r.a.createElement(X,{onClick:function(){t.setBlocks("heading-2"),!t.isBlockEmpty()&&t.moveToEndOfBlock().insertBlock("paragraph").unwrapList(),t.focus()}},r.a.createElement(x.a,{icon:y.i,size:"sm"})),r.a.createElement(O.a,{modal:!0,trigger:r.a.createElement(X,{className:"tooltip-icon-button"},r.a.createElement(x.a,{icon:y.j}))},function(t){return r.a.createElement(he,Object.assign({},e,{closePopup:t}))}),r.a.createElement(X,{onClick:function(e){e.preventDefault(),t.isList()?n(t.unwrapList()):n(t.insertUnorderedList())}},r.a.createElement(x.a,{icon:y.n})),r.a.createElement(X,null,r.a.createElement(x.a,{icon:y.m,onClick:function(e){e.preventDefault(),t.isList()?n(t.unwrapList()):n(t.insertOrderedList())}})),r.a.createElement(X,null,r.a.createElement(x.a,{icon:y.p,onClick:function(e){e.preventDefault(),n(t.insertNote())}})),r.a.createElement(O.a,{trigger:r.a.createElement(X,null,r.a.createElement(x.a,{icon:y.h,onClick:function(e){e.preventDefault()}})),modal:!0},function(t){return r.a.createElement(ke,Object.assign({},e,{closePopup:t}))}),r.a.createElement(X,null,r.a.createElement(x.a,{icon:y.q,onClick:function(e){e.preventDefault(),n(t.insertTable().unwrapList())}})),t&&t.isSelectionInTable()&&r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{onClick:function(){return n(t.removeTable())}},"Delete Table"),r.a.createElement("button",{onClick:function(){return n(t.insertRow())}},"Insert Row"),r.a.createElement("button",{onClick:function(){return n(t.removeRow())}},"Delete Row"),r.a.createElement("button",{onClick:function(){return n(t.insertColumn())}},"Insert Column"),r.a.createElement("button",{onClick:function(){return n(t.removeColumn())}},"Delete Column"),r.a.createElement("button",{onClick:function(){return n(t.toggleTableHeaders())}},"Toggle header")))},ve=b.a.div(be()),he=function(e){var t=e.editor,n=e.closePopup,c=Object(a.useState)("https://placekitten.com/200/300"),o=Object(q.a)(c,2),i=o[0],l=o[1];return r.a.createElement(ue,null,r.a.createElement(ie,null,r.a.createElement(re,{type:"text",value:i,onChange:function(e){return l(e.target.value)}}),r.a.createElement(Z,{onClick:function(e){e.preventDefault();var a={type:"image",data:{src:i}};t.isBlockEmpty()?t.setBlocks(a):t.insertBlock(a),t.insertBlock("paragraph"),t.focus(),n()}},"Insert")))},ke=function(e){var t=e.editor,n=e.closePopup,c=t.value.startBlock,o=Object(a.useState)(c.data.keySeq().first()||""),i=Object(q.a)(o,2),l=i[0],u=i[1],s=Object(a.useState)(c.data.first()||""),d=Object(q.a)(s,2),m=d[0],f=d[1];return r.a.createElement(ue,null,r.a.createElement("h2",null,"Add metadata"),r.a.createElement(oe,null,"Key"),r.a.createElement(re,{type:"text",defaultValue:l,onChange:function(e){return u(e.target.value)}}),r.a.createElement(oe,null,"Value"),r.a.createElement(ce,{defaultValue:m,onChange:function(e){return f(e.target.value)}}),r.a.createElement(Z,{onClick:function(e){e.preventDefault(),""!==l&&""!==m&&t.setNodeByKey(c.key,{data:Object(ge.a)({},l,m)}),t.focus(),n()}},"Add metadata"))};function Oe(){var e=Object(i.a)(["\n  display: block;\n  max-width: 100%;\n  box-shadow: ",";\n"]);return Oe=function(){return e},e}var xe=Object(b.a)("img")(Oe(),function(e){return e.selected?"0 0 0 2px blue;":"none"}),ye=function(e){var t=e.attributes;return r.a.createElement(xe,Object.assign({},t,{src:e.src}))},je=n(101),we=n(102),Ce=n.n(we),Be=[{serialize:function(e,t){if("block"===e.object)switch(e.type){case"code":return r.a.createElement("pre",null,r.a.createElement("code",{className:"exec"},t));case"nonexecutable-code":return r.a.createElement("pre",null,r.a.createElement("code",null,t));case"sample-output":return r.a.createElement("pre",null,r.a.createElement("samp",null,t));case"image":return r.a.createElement("img",{alt:"",src:e.data.get("src")});case"paragraph":return r.a.createElement("p",null,t);case"heading-1":return r.a.createElement("h1",null,t);case"heading-2":return r.a.createElement("h2",null,t);case"ul-list":return r.a.createElement("ul",null,t);case"ol-list":return r.a.createElement("ol",null,t);case"list-item":return r.a.createElement("li",null,t);case"table":return r.a.createElement("table",null,t);case"table_row":return r.a.createElement("tr",null,t);case"table_cell":return r.a.createElement("td",null,t);default:return r.a.createElement("p",null,t)}}},{serialize:function(e,t){if("mark"===e.object)switch(e.type){case"bold":return r.a.createElement("strong",null,t);case"italic":return r.a.createElement("em",null,t);case"code":return r.a.createElement("code",null,t);case"link":return r.a.createElement("a",{href:e.data.get("href")},t);default:return}}},{serialize:function(e,t){if("inline"===e.object)switch(e.type){case"link":return r.a.createElement("a",{href:e.data.get("href")},t);default:return}}}],Ne=new(n(103).a)({rules:Be}),Le=n(105),Se=n.n(Le);function Te(){var e=Object(i.a)(["\n  top: 0;\n  right: 0;\n"]);return Te=function(){return e},e}var De=function(e){var t=e.editor,n=e.setViewMode,a=e.viewMode;return r.a.createElement(ze,null,r.a.createElement(Y,{onClick:function(){return n("OUTPUT")}},"Output"),r.a.createElement(Y,{onClick:function(){return n("HTML")}},"HTML"),r.a.createElement(Y,{onClick:function(){n("JSON")}},"JSON"),r.a.createElement(Y,{onClick:function(){!function(e){var t=document.createElement("textarea");t.value=e,document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t)}(Ie(t,a)),alert("Copied ".concat(a," to clipboard!"))}},"Copy to Clipboard"))},ze=b.a.div(Te());function Me(){var e=Object(i.a)(["\n  padding: 10px;\n  max-width: 100%;\n  overflow-x: auto;\n"]);return Me=function(){return e},e}var Ie=function(e,t){return e?"HTML"===t?Se()(Ne.serialize(e.value)):"OUTPUT"===t?r.a.createElement("div",{dangerouslySetInnerHTML:{__html:Ne.serialize(e.value)}}):JSON.stringify(e.value.toJSON(),null,4):""},Je=b.a.div(Me()),Pe=function(e){var t=e.editor,n=Object(a.useState)("OUTPUT"),c=Object(q.a)(n,2),o=c[0],i=c[1],l=function(e,t){return"OUTPUT"==t?Ie(e,t):r.a.createElement("pre",null,Ie(e,t))}(t,o);return r.a.createElement(Je,null,r.a.createElement(De,{editor:t,viewMode:o,setViewMode:i}),l)},Ue=n(30),Fe="left",Ke="center",Ve="right",qe=n(109);function Ae(){var e=Object(i.a)(["\n  padding: 20px;\n  border: 1px solid #777;\n"]);return Ae=function(){return e},e}var Re=function(e){var t=e.attributes,n=e.children,a=Object(qe.a)(e,["attributes","children"]);return r.a.createElement(_e,Object.assign({},t,a),n)},_e=b.a.div(Ae());function He(){var e=Object(i.a)(["\n  display: grid;\n  grid-template-columns: auto auto;\n  align-items: center;\n  cursor: pointer;\n"]);return He=function(){return e},e}function We(){var e=Object(i.a)(["\n  font-family: ",";\n  outline: none;\n  width: calc(100% - 50px);\n  margin: 0 auto;\n  display: block;\n"]);return We=function(){return e},e}function $e(){var e=Object(i.a)(["\n  justify-self: end;\n"]);return $e=function(){return e},e}var Ge=function(e){e.editor;var t=e.onChange,n=Object(a.useState)({}),c=Object(q.a)(n,2),o=c[0],i=c[1];return r.a.createElement(Qe,null,r.a.createElement(O.a,{modal:!0,trigger:r.a.createElement("button",null,"Import")},function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(Ye,null,r.a.createElement("h3",null,"Paste JSON here"),r.a.createElement(Z,{onClick:function(){t({value:p.Value.fromJSON(JSON.parse(o))}),e()}},"Import")),r.a.createElement(Xe,{rows:20,onChange:function(e){return i(e.target.value)}}))}))},Qe=b.a.div($e()),Xe=b.a.textarea(We(),k),Ye=b.a.div(He());function Ze(){var e=Object(i.a)(["\n  margin-top: 10px;\n  padding: 12px;\n  background-color: #ebebeb;\n  display: inline-block;\n"]);return Ze=function(){return e},e}function et(){var e=Object(i.a)(["\n  margin-top: 50px;\n  display: grid;\n\n  grid-column-gap: 50px;\n\n  @media (min-width: 720px) {\n    grid-template-columns: 50% 50%;\n  }\n"]);return et=function(){return e},e}function tt(){var e=Object(i.a)(["\n  width: 100%;\n  max-width: 1000px;\n  position: fixed;\n  display: grid;\n  top: 0;\n  grid-template-columns: auto auto;\n  grid-column-gap: 50px;\n  background: white;\n"]);return tt=function(){return e},e}var nt=JSON.parse(localStorage.getItem("content")),at=p.Value.fromJSON(nt||{document:{nodes:[{object:"block",type:"paragraph",nodes:[{object:"text",leaves:[{text:"A line of text in a paragraph."}]}]}]}}),rt={document:{last:{type:"paragraph"},normalize:function(e,t){var n=t.code,a=t.node;t.child;switch(n){case"last_child_type_invalid":var r=p.Block.create("paragraph");return e.insertNodeByKey(a.key,a.nodes.size,r)}}},blocks:{image:{isVoid:!0}}},ct=[Object(je.a)({shift:!0}),Ce()(),{commands:{insertUnorderedList:function(e){e.setBlocks("list-item").wrapBlock("ul-list").focus()},insertOrderedList:function(e){e.setBlocks("list-item").wrapBlock("ol-list").focus()},unwrapList:function(e){e.unwrapBlock("ul-list").unwrapBlock("ol-list").focus()}},queries:{isList:function(e){return e.value.blocks.some(function(e){return"list-item"===e.type})},isParagraph:function(e){return e.value.blocks.some(function(e){return"paragraph"===e.type})},isBlockEmpty:function(e){return e.value.endText&&""===e.value.endText.text}},renderNode:function(e,t,n){var a=e.attributes,c=e.node,o=e.children;switch(c.type){case"ul-list":return r.a.createElement("ul",a,o);case"ol-list":return r.a.createElement("ol",a,o);case"list-item":return r.a.createElement("li",e.attributes,o);default:return n()}},onKeyDown:function(e,t,n){if(!t.isList()||!t.isBlockEmpty()||13!==e.keyCode)return n();e.preventDefault(),t.setBlocks("paragraph").unwrapList().focus()}},{commands:{insertNote:function(e){console.log("Inserting note"),e.insertBlock("note").unwrapList()}},renderNode:function(e,t,n){var a=e.node,c=a.data.get("align"),o=c?{textAlign:c}:{};switch(a.type){case"note":return console.log("Rendering a note"),r.a.createElement(Re,Object.assign({},e,{style:o}));default:return n()}}},{queries:{getData:function(e){return e.value.document.nodes.reduce(function(e,t){return Object(Ue.a)({},e,t.get("data").toJS())},{})}},commands:{alignLeft:function(e){e.setBlocks({data:Object(Ue.a)({},e.getData(),{align:Fe})})},alignCenter:function(e){e.setBlocks({data:Object(Ue.a)({},e.getData(),{align:Ke})})},alignRight:function(e){e.setBlocks({data:Object(Ue.a)({},e.getData(),{align:Ve})})}}},{queries:{isCode:function(e){return e.value.blocks.some(function(e){return function(e){return"code"===e.type||"nonexecutable-code"===e.type||"sample-output"===e.type}(e)})}},onPaste:function(e,t,n){var a=Object(f.b)(e).text;if(!t.isCode())return n();t.insertText(a.replace(/\r\n/g,"\n").replace(/\r/g,""))},renderNode:function(e,t,n){switch(e.node.type){case"code":return r.a.createElement(N,e);case"nonexecutable-code":return r.a.createElement(M,e);case"sample-output":return r.a.createElement(F,e);default:return n()}}},{commands:{wrapLink:function(e,t){e.wrapInline({type:"link",data:{href:t}}),e.moveToEnd()},unwrapLink:function(e){e.unwrapInline("link")}},queries:{hasLinks:function(e){return e.value.inlines.some(function(e){return"link"===e.type})}},renderNode:function(e,t,n){var a=e.attributes,c=e.node,o=e.children;switch(c.type){case"link":var i=c.data.get("href");return r.a.createElement("a",Object.assign({},a,{href:i}),o);default:return n()}}}],ot=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(c)))).state={value:at},n.onChange=function(e){var t=e.value;window.content=t.toJSON();var a=JSON.stringify(t.toJSON());localStorage.setItem("content",a),n.setState({value:t})},n.renderMark=function(e,t,n){switch(e.mark.type){case"bold":return r.a.createElement(g,Object.assign({},e,e.attributes));case"italic":return r.a.createElement(pe,Object.assign({},e,e.attributes));case"code":return r.a.createElement(v,Object.assign({},e,e.attributes));default:return n()}},n.onKeyDown=function(e,t,n){if(!e.ctrlKey)return n();switch(e.key){case"`":case"q":e.preventDefault(),t.toggleMark("code");break;case"b":e.preventDefault(),t.toggleMark("bold");break;case"i":e.preventDefault(),t.toggleMark("italic");break;default:return n()}},n.renderNode=function(e,t,n){var a=e.attributes,c=e.node,o=e.children,i=e.isFocused,l=c.data.get("align"),u=l?{textAlign:l}:{};switch(c.type){case"image":var s=c.data.get("src");return console.log("Image source is ",s),r.a.createElement(ye,Object.assign({src:s,selected:i},a));case"heading-1":return r.a.createElement("h1",Object.assign({},a,{style:u}),o);case"heading-2":return r.a.createElement("h2",Object.assign({},a,{style:u}),o);case"paragraph":return r.a.createElement("p",Object.assign({},a,{style:u}),o);default:return n()}},n.renderEditor=function(e,t,n){var a=n(),c=e.value.document.getBlocks().reduce(function(e,t){return e+t.text.trim().split(/\s+/).length},0);return r.a.createElement("div",null,r.a.createElement("div",null,a),r.a.createElement(ut,null,"Word Count: ",c))},n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement(it,null,r.a.createElement(de,{editor:this.editor,onChange:this.onChange}),r.a.createElement(Ge,{editor:this.editor,onChange:this.onChange})),r.a.createElement(lt,null,r.a.createElement(Ee,{editor:this.editor,onChange:this.onChange}),r.a.createElement(f.a,{plugins:ct,value:this.state.value,onChange:this.onChange,onKeyDown:this.onKeyDown,renderMark:this.renderMark,renderNode:this.renderNode,renderEditor:this.renderEditor,schema:rt,ref:function(t){return e.editor=t}}),r.a.createElement(Pe,{editor:this.editor})))}}]),t}(a.Component),it=b.a.div(tt()),lt=b.a.div(et()),ut=Object(b.a)("span")(Ze()),st=ot;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(st,null),document.getElementById("editor")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[110,1,2]]]);
//# sourceMappingURL=main.77c2d04b.chunk.js.map