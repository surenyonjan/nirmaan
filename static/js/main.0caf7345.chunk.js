(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{109:function(e,t,n){e.exports=n(243)},114:function(e,t,n){},115:function(e,t,n){},243:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(15),o=n.n(c),i=(n(114),n(4)),l=n(90),u=n(91),s=n(105),d=n(92),m=n(106),p=(n(115),n(104)),f=n(3),b=function(e){var t=e.children,n=e.attributes;return r.a.createElement("strong",{attributes:n},t)},g=n(5);function E(){var e=Object(i.a)(["\n  background: #ccc;\n"]);return E=function(){return e},e}var v=function(e){var t=e.children,n=e.attributes;return r.a.createElement(h,{attributes:n},t)},h=g.a.code(E()),k="Menlo, Consolas, Courier New";function x(){var e=Object(i.a)(['\n  background: #eee;\n  position: relative;\n\n  &:after {\n    content: "Executable Code";\n    font-family: ',";\n    font-size: 10px;\n    position: absolute;\n    top: 2px;\n    right: 2px;\n  }\n"]);return x=function(){return e},e}function w(){var e=Object(i.a)([""]);return w=function(){return e},e}var y=function(e){return r.a.createElement(j,e.attributes,r.a.createElement(O,null,e.children))},O=g.a.code(w()),j=g.a.pre(x(),k);function C(){var e=Object(i.a)(['\n  background: #eee;\n  position: relative;\n\n  &:after {\n    content: "Non Executable Code";\n    font-family: ',";\n    font-size: 10px;\n    position: absolute;\n    top: 2px;\n    right: 2px;\n  }\n"]);return C=function(){return e},e}function B(){var e=Object(i.a)([""]);return B=function(){return e},e}var L=function(e){return r.a.createElement(z,e.attributes,r.a.createElement(N,null,e.children))},N=g.a.code(B()),z=g.a.pre(C(),k);function D(){var e=Object(i.a)(['\n  background: #eee;\n  position: relative;\n\n  &:after {\n    content: "Sample Output";\n    font-family: ',";\n    font-size: 10px;\n    position: absolute;\n    top: 2px;\n    right: 2px;\n  }\n"]);return D=function(){return e},e}function M(){var e=Object(i.a)([""]);return M=function(){return e},e}var T=function(e){return r.a.createElement(J,e.attributes,r.a.createElement(S,null,e.children))},S=g.a.samp(M()),J=g.a.pre(D(),k),I=(function(e){var t=e.type,n=e.key}({type:"code",key:"`"}),n(9)),R=n(10),A="#eee",F="#008080",H="#F0F0F0";function _(){var e=Object(i.a)(["\n  background: ",";\n  color: ",";\n  height: 30px;\n  margin: 0 10px;\n  font-size: 16px;\n  font-family: ",";\n"]);return _=function(){return e},e}function K(){var e=Object(i.a)(["\n  font-size: 13px;\n"]);return K=function(){return e},e}function V(){var e=Object(i.a)(["\n  border: 1px solid #ccc;\n  padding: 10px;\n  margin: 5px;\n  cursor: pointer;\n  outline: none;\n  font-size: 16px;\n  color: #777;\n"]);return V=function(){return e},e}function P(){var e=Object(i.a)(["\n  cursor: pointer;\n  outline: none;\n"]);return P=function(){return e},e}var W=g.a.button(P()),q=Object(g.a)(W)(V()),U=Object(g.a)(W)(K()),$=g.a.button(_(),F,H,k);function G(){var e=Object(i.a)(["\n  display: flex;\n  border-bottom: solid 1.7px rgba(199, 198, 255, 0.15);\n  padding: 10px 0;\n  background: white;\n"]);return G=function(){return e},e}var Q=function(e){var t=e.editor;return r.a.createElement(X,null,r.a.createElement(U,{className:"tooltip-icon-button"},r.a.createElement(I.a,{icon:R.d,onClick:function(){t.toggleMark("bold"),t.focus()}})),r.a.createElement(U,{className:"tooltip-icon-button"},r.a.createElement(I.a,{icon:R.j,onClick:function(){t.toggleMark("italic"),t.focus()}})),r.a.createElement(U,{className:"tooltip-icon-button"},r.a.createElement(I.a,{icon:R.g,onClick:function(){t.toggleMark("code"),t.focus()}})),r.a.createElement(U,{className:"tooltip-icon-button"},r.a.createElement(I.a,{icon:R.b,onClick:function(){t.alignLeft(),t.focus()}})),r.a.createElement(U,{className:"tooltip-icon-button"},r.a.createElement(I.a,{icon:R.a,onClick:function(){t.alignCenter(),t.focus()}})),r.a.createElement(U,{className:"tooltip-icon-button"},r.a.createElement(I.a,{icon:R.c,onClick:function(){t.alignRight(),t.focus()}})))},X=g.a.div(G()),Y=function(e){var t=e.children,n=e.attributes;return r.a.createElement("em",{attributes:n},t)},Z=n(37),ee=n(98);function te(){var e=Object(i.a)(["\n  display: grid;\n  grid-template-columns: auto auto;\n"]);return te=function(){return e},e}function ne(){var e=Object(i.a)(["\n  border: 1px solid ",";\n  height: 29px;\n  padding: 0 10px;\n  font-family: ",";\n  outline: none;\n  width: 500px;\n  font-size: 18px;\n"]);return ne=function(){return e},e}var ae=g.a.input(ne(),A,k),re=g.a.div(te());function ce(){var e=Object(i.a)(["\n  width: 50%;\n  padding: 30px 50px;\n  z-index: 10000;\n"]);return ce=function(){return e},e}function oe(){var e=Object(i.a)(["\n  display: flex;\n  flex-direction: column;\n  position: fixed;\n  left: 0;\n  top: 10%;\n"]);return oe=function(){return e},e}var ie=function(e){var t=e.editor,n=e.onChange;return r.a.createElement(le,null,r.a.createElement(q,{onClick:function(){t.isList()&&!t.isBlockEmpty()?t.insertBlock("paragraph").unwrapList():t.setBlocks("paragraph").unwrapList(),t.focus()}},r.a.createElement(I.a,{icon:R.m})),r.a.createElement(q,{onClick:function(){t.isBlockEmpty()?t.setBlocks("code"):t.insertBlock("code").unwrapList(),t.focus()}},r.a.createElement(I.a,{icon:R.g})),r.a.createElement(q,{onClick:function(){t.isBlockEmpty()?t.setBlocks("nonexecutable-code"):t.insertBlock("nonexecutable-code").unwrapList(),t.focus()}},r.a.createElement("span",{className:"fa-layers fa-fw"},r.a.createElement(I.a,{icon:R.f,size:"lg"}),r.a.createElement(I.a,{icon:R.g,size:"xs",inverse:!0}))),r.a.createElement(q,{onClick:function(){t.isBlockEmpty()?t.setBlocks("sample-output"):t.insertBlock("sample-output").unwrapList(),t.focus()}},r.a.createElement(I.a,{icon:R.e})),r.a.createElement(q,{onClick:function(){t.setBlocks("heading-1"),!t.isBlockEmpty()&&t.moveToEndOfBlock().insertBlock("paragraph").unwrapList(),t.focus()}},r.a.createElement(I.a,{icon:R.h})),r.a.createElement(q,{onClick:function(){t.setBlocks("heading-2"),!t.isBlockEmpty()&&t.moveToEndOfBlock().insertBlock("paragraph").unwrapList(),t.focus()}},r.a.createElement(I.a,{icon:R.h,size:"sm"})),r.a.createElement(ee.a,{modal:!0,trigger:r.a.createElement(q,{className:"tooltip-icon-button"},r.a.createElement(I.a,{icon:R.i}))},function(t){return r.a.createElement(ue,Object.assign({},e,{closePopup:t}))}),r.a.createElement(q,{onClick:function(e){e.preventDefault(),t.isList()?n(t.unwrapList()):n(t.insertUnorderedList())}},r.a.createElement(I.a,{icon:R.l})),r.a.createElement(q,null,r.a.createElement(I.a,{icon:R.k,onClick:function(e){e.preventDefault(),t.isList()?n(t.unwrapList()):n(t.insertOrderedList())}})),r.a.createElement(q,null,r.a.createElement(I.a,{icon:R.n,onClick:function(e){e.preventDefault(),n(t.insertNote())}})),r.a.createElement(q,null,r.a.createElement(I.a,{icon:R.o,onClick:function(e){e.preventDefault(),n(t.insertTable().unwrapList())}})),t&&t.isSelectionInTable()&&r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{onClick:function(){return n(t.removeTable())}},"Delete Table"),r.a.createElement("button",{onClick:function(){return n(t.insertRow())}},"Insert Row"),r.a.createElement("button",{onClick:function(){return n(t.removeRow())}},"Delete Row"),r.a.createElement("button",{onClick:function(){return n(t.insertColumn())}},"Insert Column"),r.a.createElement("button",{onClick:function(){return n(t.removeColumn())}},"Delete Column"),r.a.createElement("button",{onClick:function(){return n(t.toggleTableHeaders())}},"Toggle header")))},le=g.a.div(oe()),ue=function(e){var t=e.editor,n=e.closePopup,c=Object(a.useState)("https://placekitten.com/200/300"),o=Object(Z.a)(c,2),i=o[0],l=o[1];return r.a.createElement(se,null,r.a.createElement(re,null,r.a.createElement(ae,{type:"text",value:i,onChange:function(e){return l(e.target.value)}}),r.a.createElement($,{onClick:function(e){e.preventDefault();var a={type:"image",data:{src:i}};t.isBlockEmpty()?t.setBlocks(a):t.insertBlock(a),t.insertBlock("paragraph"),t.focus(),n()}},"Insert")))},se=g.a.div(ce());function de(){var e=Object(i.a)(["\n  display: block;\n  max-width: 100%;\n  box-shadow: ",";\n"]);return de=function(){return e},e}var me=Object(g.a)("img")(de(),function(e){return e.selected?"0 0 0 2px blue;":"none"}),pe=function(e){var t=e.attributes;return r.a.createElement(me,Object.assign({},t,{src:e.src}))},fe=n(99),be=n(100),ge=n.n(be),Ee=[{serialize:function(e,t){if("block"===e.object)switch(e.type){case"code":return r.a.createElement("pre",null,r.a.createElement("code",{className:"exec"},t));case"nonexecutable-code":return r.a.createElement("pre",null,r.a.createElement("code",null,t));case"sample-output":return r.a.createElement("pre",null,r.a.createElement("samp",null,t));case"image":return r.a.createElement("img",{alt:"",src:e.data.get("src")});case"paragraph":return r.a.createElement("p",null,t);case"heading-1":return r.a.createElement("h1",null,t);case"heading-2":return r.a.createElement("h2",null,t);case"ul-list":return r.a.createElement("ul",null,t);case"ol-list":return r.a.createElement("ol",null,t);case"list-item":return r.a.createElement("li",null,t);case"table":return r.a.createElement("table",null,t);case"table_row":return r.a.createElement("tr",null,t);case"table_cell":return r.a.createElement("td",null,t);default:return r.a.createElement("p",null,t)}}},{serialize:function(e,t){if("mark"===e.object)switch(e.type){case"bold":return r.a.createElement("strong",null,t);case"italic":return r.a.createElement("em",null,t);case"code":return r.a.createElement("code",null,t);default:return}}}],ve=new(n(101).a)({rules:Ee}),he=n(103),ke=n.n(he);function xe(){var e=Object(i.a)(["\n  display: absolute;\n  top: 0;\n  right: 0;\n"]);return xe=function(){return e},e}var we=function(e){var t=e.editor,n=e.setViewMode,a=e.viewMode;return r.a.createElement(ye,null,r.a.createElement(U,{onClick:function(){return n("HTML")}},"HTML"),r.a.createElement(U,{onClick:function(){n("JSON")}},"JSON"),r.a.createElement(U,{onClick:function(){!function(e){var t=document.createElement("textarea");t.value=e,document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t)}(je(t,a)),alert("Copied ".concat(a," to clipboard!"))}},"Copy to Clipboard"))},ye=g.a.div(xe());function Oe(){var e=Object(i.a)(["\n  padding: 10px;\n  max-width: 100%;\n  overflow-x: auto;\n"]);return Oe=function(){return e},e}var je=function(e,t){return e?"HTML"===t?ke()(ve.serialize(e.value)):JSON.stringify(e.value.toJSON(),null,4):""},Ce=g.a.div(Oe()),Be=function(e){var t=e.editor,n=Object(a.useState)("HTML"),c=Object(Z.a)(n,2),o=c[0],i=c[1],l=je(t,o);return r.a.createElement(Ce,null,r.a.createElement(we,{editor:t,viewMode:o,setViewMode:i}),r.a.createElement("pre",null,l))},Le=n(28),Ne="left",ze="center",De="right",Me=n(108);function Te(){var e=Object(i.a)(["\n  padding: 20px;\n  border: 1px solid #777;\n"]);return Te=function(){return e},e}var Se=function(e){var t=e.attributes,n=e.children,a=Object(Me.a)(e,["attributes","children"]);return r.a.createElement(Je,Object.assign({},t,a),n)},Je=g.a.div(Te());function Ie(){var e=Object(i.a)(["\n  margin-top: 10px;\n  padding: 12px;\n  background-color: #ebebeb;\n  display: inline-block;\n"]);return Ie=function(){return e},e}function Re(){var e=Object(i.a)(["\n  margin-top: 50px;\n  display: grid;\n\n  grid-column-gap: 50px;\n\n  @media (min-width: 720px) {\n    grid-template-columns: 50% 50%;\n  }\n"]);return Re=function(){return e},e}function Ae(){var e=Object(i.a)(["\n  width: 100%;\n  position: fixed;\n  display: grid;\n  top: 0;\n  grid-template-columns: 20% 80%;\n  grid-column-gap: 50px;\n  background: white;\n"]);return Ae=function(){return e},e}var Fe=f.Value.fromJSON({document:{nodes:[{object:"block",type:"paragraph",nodes:[{object:"text",leaves:[{text:"A line of text in a paragraph."}]}]}]}}),He={document:{last:{type:"paragraph"},normalize:function(e,t){var n=t.code,a=t.node;t.child;switch(n){case"last_child_type_invalid":var r=f.Block.create("paragraph");return e.insertNodeByKey(a.key,a.nodes.size,r)}}},blocks:{image:{isVoid:!0}}},_e=[Object(fe.a)({shift:!0}),ge()(),{commands:{insertUnorderedList:function(e){e.setBlocks("list-item").wrapBlock("ul-list").focus()},insertOrderedList:function(e){e.setBlocks("list-item").wrapBlock("ol-list").focus()},unwrapList:function(e){e.unwrapBlock("ul-list").unwrapBlock("ol-list").focus()}},queries:{isList:function(e){return e.value.blocks.some(function(e){return"list-item"===e.type})},isParagraph:function(e){return e.value.blocks.some(function(e){return"paragraph"===e.type})},isBlockEmpty:function(e){return e.value.endText&&""===e.value.endText.text}},renderNode:function(e,t,n){var a=e.attributes,c=e.node,o=e.children;switch(c.type){case"ul-list":return r.a.createElement("ul",a,o);case"ol-list":return r.a.createElement("ol",a,o);case"list-item":return r.a.createElement("li",e.attributes,o);default:return n()}},onKeyDown:function(e,t,n){if(!t.isList()||!t.isBlockEmpty()||13!==e.keyCode)return n();e.preventDefault(),t.setBlocks("paragraph").unwrapList().focus()}},{commands:{insertNote:function(e){console.log("Inserting note"),e.insertBlock("note").unwrapList()}},renderNode:function(e,t,n){var a=e.node,c=a.data.get("align"),o=c?{textAlign:c}:{};switch(a.type){case"note":return console.log("Rendering a note"),r.a.createElement(Se,Object.assign({},e,{style:o}));default:return n()}}},{queries:{getData:function(e){return e.value.document.nodes.reduce(function(e,t){return Object(Le.a)({},e,t.get("data").toJS())},{})}},commands:{alignLeft:function(e){e.setBlocks({data:Object(Le.a)({},e.getData(),{align:Ne})})},alignCenter:function(e){e.setBlocks({data:Object(Le.a)({},e.getData(),{align:ze})})},alignRight:function(e){e.setBlocks({data:Object(Le.a)({},e.getData(),{align:De})})}}},{onKeyDown:function(e,t,n){if(!e.ctrlKey)return n();switch(e.key){case"`":e.preventDefault();var a=t.value.blocks.some(function(e){return"code"===e.type});t.setBlocks(a?"paragraph":"code");break;default:return n()}},renderNode:function(e,t,n){switch(e.node.type){case"code":return r.a.createElement(y,e);case"nonexecutable-code":return r.a.createElement(L,e);case"sample-output":return r.a.createElement(T,e);default:return n()}}}],Ke=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(c)))).state={value:Fe},n.onChange=function(e){var t=e.value;window.content=t.toJSON(),n.setState({value:t})},n.renderMark=function(e,t,n){switch(e.mark.type){case"bold":return r.a.createElement(b,Object.assign({},e,e.attributes));case"italic":return r.a.createElement(Y,Object.assign({},e,e.attributes));case"code":return r.a.createElement(v,Object.assign({},e,e.attributes));default:return n()}},n.renderNode=function(e,t,n){var a=e.attributes,c=e.node,o=e.children,i=e.isFocused,l=c.data.get("align"),u=l?{textAlign:l}:{};switch(c.type){case"image":var s=c.data.get("src");return console.log("Image source is ",s),r.a.createElement(pe,Object.assign({src:s,selected:i},a));case"heading-1":return r.a.createElement("h1",Object.assign({},a,{style:u}),o);case"heading-2":return r.a.createElement("h2",Object.assign({},a,{style:u}),o);case"paragraph":return r.a.createElement("p",Object.assign({},a,{style:u}),o);default:return n()}},n.renderEditor=function(e,t,n){var a=n(),c=e.value.document.getBlocks().reduce(function(e,t){return e+t.text.trim().split(/\s+/).length},0);return r.a.createElement("div",null,r.a.createElement("div",null,a),r.a.createElement(We,null,"Word Count: ",c))},n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement(Ve,null,r.a.createElement(Q,{editor:this.editor})),r.a.createElement(Pe,null,r.a.createElement(ie,{editor:this.editor,onChange:this.onChange}),r.a.createElement(p.a,{plugins:_e,value:this.state.value,onChange:this.onChange,renderMark:this.renderMark,renderNode:this.renderNode,renderEditor:this.renderEditor,schema:He,ref:function(t){return e.editor=t}}),r.a.createElement(Be,{editor:this.editor})))}}]),t}(a.Component),Ve=g.a.div(Ae()),Pe=g.a.div(Re()),We=Object(g.a)("span")(Ie()),qe=Ke;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(qe,null),document.getElementById("editor")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[109,1,2]]]);
//# sourceMappingURL=main.0caf7345.chunk.js.map