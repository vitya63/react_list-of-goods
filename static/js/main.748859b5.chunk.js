(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){e.exports=n(15)},15:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(3),l=n.n(r),c=n(1),i=n(4),s=n(5),u=n(6),p=n(8),h=n(7),d=n(9);var b=function(e){return e.goods.map(function(e){return o.a.createElement("li",{key:e},e)})};var g=function(e){var t=e.handleReverse,n=e.sortAlphabetically,a=e.handleReset,r=e.sortByLength,l=e.handleFilter,c=e.goods,i=e.selectedOption;return o.a.createElement(o.a.Fragment,null,o.a.createElement("button",{type:"button",onClick:t},"Reverse"),o.a.createElement("button",{type:"button",onClick:n},"Sort alphabetically"),o.a.createElement("button",{type:"button",onClick:a},"Reset"),o.a.createElement("button",{type:"button",onClick:r},"Sort by length"),o.a.createElement("select",{onChange:l,value:i},o.a.createElement("option",{value:"1"},"1"),o.a.createElement("option",{value:"2"},"2"),o.a.createElement("option",{value:"3"},"3"),o.a.createElement("option",{value:"4"},"4"),o.a.createElement("option",{value:"5"},"5"),o.a.createElement("option",{value:"6"},"6"),o.a.createElement("option",{value:"7"},"7"),o.a.createElement("option",{value:"8"},"8"),o.a.createElement("option",{value:"9"},"9"),o.a.createElement("option",{value:"10"},"10")),o.a.createElement("ul",null,o.a.createElement(b,{goods:c})))};function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(n,!0).forEach(function(t){Object(i.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var v=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],y=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(p.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(o)))).state={isStartBtnActive:!0,goods:[].concat(v),initialGoods:[].concat(v),selectedOption:1},n.handleStart=function(){n.setState({isStartBtnActive:!1})},n.handleReverse=function(){n.setState(function(e){return m({},e,{goods:Object(c.a)(e.goods).reverse()})})},n.sortAlphabetically=function(){n.setState(function(e){return m({},e,{goods:Object(c.a)(e.goods).sort(function(e,t){return e.localeCompare(t)})})})},n.handleReset=function(){n.setState(function(e){return m({},e,{selectedOption:1,goods:Object(c.a)(e.initialGoods)})})},n.sortByLength=function(){n.setState(function(e){return m({},e,{goods:Object(c.a)(e.goods).sort(function(e,t){return e.length-t.length})})})},n.handleFilter=function(e){var t=e.target.value;n.setState(function(e){return m({},e,{selectedOption:t,goods:Object(c.a)(e.initialGoods).filter(function(e){return e.length>=t})})})},n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return this.state.isStartBtnActive?o.a.createElement("button",{type:"button",onClick:this.handleStart},"Start"):o.a.createElement(g,{handleReverse:this.handleReverse,sortAlphabetically:this.sortAlphabetically,handleReset:this.handleReset,sortByLength:this.sortByLength,handleFilter:this.handleFilter,goods:this.state.goods,selectedOption:this.state.selectedOption})}}]),t}(o.a.Component);l.a.render(o.a.createElement(y,{test:123}),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.748859b5.chunk.js.map