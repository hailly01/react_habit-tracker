(this.webpackJsonphabitsite=this.webpackJsonphabitsite||[]).push([[0],{15:function(t,e,n){},16:function(t,e,n){},22:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(9),s=n.n(r),i=(n(15),n(10)),o=n(6),u=n(2),l=n(3),h=n(5),b=n(4),d=(n(16),n(0)),j=function(t){Object(h.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).handleIcrement=function(){t.props.onIncrement(t.props.habit)},t.handleDecrement=function(e){t.props.onDecrement(t.props.habit)},t.handleDelete=function(e){t.props.onDelete(t.props.habit)},t}return Object(l.a)(n,[{key:"componentDidMount",value:function(){console.log("habit: ".concat(this.props.habit.name," mounter"))}},{key:"componentWillUnmount",value:function(){console.log("habits: ".concat(this.props.habit.name," will unmount"))}},{key:"render",value:function(){var t=this.props.habit,e=t.name,n=t.count;return Object(d.jsxs)("li",{className:"habit",children:[Object(d.jsx)("span",{className:"habit-name",children:e}),Object(d.jsx)("span",{className:"habit-count",children:n}),Object(d.jsx)("button",{className:"habit-button habit-increase",onClick:this.handleIcrement,children:Object(d.jsx)("i",{className:"fas fa-plus-square"})}),Object(d.jsx)("button",{className:"habit-button habit-decrease",onClick:this.handleDecrement,children:Object(d.jsx)("i",{className:"fas fa-minus-square"})}),Object(d.jsx)("button",{className:"habit-button habit-delete",onClick:this.handleDelete,children:Object(d.jsx)("i",{className:"fas fa-trash"})})]})}}]),n}(a.Component),p=function(t){Object(h.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(t=e.call.apply(e,[this].concat(r))).inputRef=c.a.createRef(),t.onSubmit=function(e){e.preventDefault();var n=t.inputRef.current.value;n&&t.props.onAdd(n),t.inputRef.current.value=""},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(d.jsxs)("form",{className:"add-form",onSubmit:this.onSubmit,children:[Object(d.jsx)("input",{ref:this.inputRef,type:"text",className:"add-input",placeholder:"Habit"}),Object(d.jsx)("button",{className:"add-button",children:"Add"})]})}}]),n}(a.PureComponent),m=function(t){Object(h.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).handleIcrement=function(e){t.props.onIncrement(e)},t.handleDecrement=function(e){t.props.onDecrement(e)},t.handleDelete=function(e){t.props.onDelete(e)},t.handleAdd=function(e){t.props.onAdd(e)},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(p,{onAdd:this.handleAdd}),Object(d.jsx)("ul",{children:this.props.habits.map((function(e){return Object(d.jsx)(j,{habit:e,onIncrement:t.handleIcrement,onDecrement:t.handleDecrement,onDelete:t.handleDelete},e.id)}))}),Object(d.jsx)("button",{className:"habits-reset",onClick:this.props.onReset,children:"Reset All"})]})}}]),n}(a.PureComponent),f=function(t){Object(h.a)(n,t);var e=Object(b.a)(n);function n(){return Object(u.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(d.jsxs)("nav",{className:"navbar",children:[Object(d.jsx)("i",{className:"navbar-logo fas fa-leaf"}),Object(d.jsx)("span",{children:"Habit Tracker"}),Object(d.jsx)("span",{className:"navbar-count",children:this.props.totalCount})]})}}]),n}(a.PureComponent),O=function(t){Object(h.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={habits:[{id:1,name:"Reading",count:0},{id:2,name:"Running",count:0},{id:3,name:"Coding",count:0}]},t.handleIcrement=function(e){var n=t.state.habits.map((function(t){return t.id===e.id?Object(o.a)(Object(o.a)({},e),{},{count:e.count+1}):t}));t.setState({habits:n})},t.handleDecrement=function(e){var n=t.state.habits.map((function(t){if(t.id===e.id){var n=e.count-1;return Object(o.a)(Object(o.a)({},e),{},{count:n<0?0:n})}return t}));t.setState({habits:n})},t.handleDelete=function(e){var n=t.state.habits.filter((function(t){return t.id!==e.id}));t.setState({habits:n})},t.handleAdd=function(e){var n=[].concat(Object(i.a)(t.state.habits),[{id:Date.now(),name:e,count:0}]);t.setState({habits:n})},t.handelReset=function(){var e=t.state.habits.map((function(t){return 0!==t.count?Object(o.a)(Object(o.a)({},t),{},{count:0}):t}));t.setState({habits:e})},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(f,{totalCount:this.state.habits.filter((function(t){return t.count>0})).length}),Object(d.jsx)(m,{habits:this.state.habits,onIncrement:this.handleIcrement,onDecrement:this.handleDecrement,onDelete:this.handleDelete,onAdd:this.handleAdd,onReset:this.handelReset})]})}}]),n}(a.Component);n(18);s.a.render(Object(d.jsxs)(c.a.StrictMode,{children:[Object(d.jsx)(O,{}),","]}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.3fdca006.chunk.js.map