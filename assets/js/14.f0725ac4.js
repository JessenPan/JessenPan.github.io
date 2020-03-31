(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{342:function(v,t,_){"use strict";_.r(t);var r=_(3),n=Object(r.a)({},(function(){var v=this,t=v.$createElement,_=v._self._c||t;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h2",{attrs:{id:"什么是时间复杂度"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#什么是时间复杂度"}},[v._v("#")]),v._v(" 什么是时间复杂度")]),v._v(" "),_("p",[v._v("时间复杂度是使用数学公式的方式,对计算机学科中的数据结构、算法的性能衡量方法。"),_("br"),v._v("\n对于具体方法或者算法的入参数量使用n替代,基于入参完成具体功能所需要的时间记为函数T(n)。"),_("br"),v._v("\nT(n)是以n变量或者常数构成的函数。")]),v._v(" "),_("h2",{attrs:{id:"常见的时间复杂度"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#常见的时间复杂度"}},[v._v("#")]),v._v(" 常见的时间复杂度")]),v._v(" "),_("p",[v._v("在大学的数据结构课程里,都会介绍不同的数据结构如树结构、表、堆栈,以及几大排序算法的时间复杂度。常见的复杂度运行时间和名称如下:")]),v._v(" "),_("table",[_("thead",[_("tr",[_("th",[v._v("名称")]),v._v(" "),_("th",[v._v("运行时间:T(n)")])])]),v._v(" "),_("tbody",[_("tr",[_("td",[v._v("常数时间")]),v._v(" "),_("td",[v._v("O(1)")])]),v._v(" "),_("tr",[_("td",[v._v("线性时间")]),v._v(" "),_("td",[v._v("O(n)")])]),v._v(" "),_("tr",[_("td",[v._v("对数时间")]),v._v(" "),_("td",[v._v("O(logN)")])]),v._v(" "),_("tr",[_("td",[v._v("线性对数时间")]),v._v(" "),_("td",[v._v("O(NlogN)")])]),v._v(" "),_("tr",[_("td",[v._v("二次时间")]),v._v(" "),_("td",[v._v("O(N^2)")])]),v._v(" "),_("tr",[_("td",[v._v("三次时间")]),v._v(" "),_("td",[v._v("O(N^3)")])])])]),v._v(" "),_("p",[v._v("不同运行时间的优劣比较:\n"),_("img",{attrs:{src:"https://ws1.sinaimg.cn/large/006tNbRwgy1fp9vpzjqovj30hw0c0jse.jpg",alt:""}}),v._v("\n前面说过,时间复杂度是以n或者常数为变量的函数,为什么这里变成了"),_("code",[v._v("T(n)=O(1),T(n)=O(n)")]),v._v(" ,而不是"),_("code",[v._v("T(n)=1,T(n)=n")]),v._v("。\n"),_("code",[v._v("O(n)")]),v._v("称之为大O表示法。")]),v._v(" "),_("h2",{attrs:{id:"大o表示法"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#大o表示法"}},[v._v("#")]),v._v(" 大O表示法")]),v._v(" "),_("p",[v._v("我们把T(n)=n,T(n)=2*n+1等等一次函数统表示为T(n)=O(n),称为大O表示法。"),_("br"),v._v("\n原始的函数表达式如何转换为大O表示法呢?"),_("br"),v._v("\n使用的主要数据概念是"),_("code",[v._v("极限")]),v._v("。"),_("br"),v._v("\n假设某算法的原始复杂度为:"),_("code",[v._v("T(n)=10n+1")]),_("br"),v._v("\n当n=>无穷大的时候,10n+1 约等于 n。"),_("br"),v._v("\n所以,为了表示的统一性,使用了大O表示法。"),_("br"),v._v("\n即T(n)=100n+10=O(n),T(n)=10logN+1=O(logN)。"),_("br"),v._v("\n所以在看到大O表示法的时候,是有一个隐含的条件的,即在n为极限的情况:n=>无穷大。"),_("br"),v._v("\nT(n)=O(logN),读作在N无穷大时,时间复杂度为logN。")]),v._v(" "),_("h2",{attrs:{id:"极限与级数的运用"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#极限与级数的运用"}},[v._v("#")]),v._v(" 极限与级数的运用")]),v._v(" "),_("blockquote",[_("p",[v._v("在现代的数学分析教科书中，几乎所有基本概念（连续、微分、积分）都是建立在极限概念的基础之上")])]),v._v(" "),_("p",[v._v("极限是指数据个数n为无穷大时,算法的时间复杂度,这样得出的时间复杂度具有普适性。")]),v._v(" "),_("h2",{attrs:{id:"常见数据结构-算法的时间复杂度计算"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#常见数据结构-算法的时间复杂度计算"}},[v._v("#")]),v._v(" 常见数据结构&算法的时间复杂度计算")]),v._v(" "),_("h3",{attrs:{id:"折半查找"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#折半查找"}},[v._v("#")]),v._v(" 折半查找")]),v._v(" "),_("p",[v._v("如数组只有两个元素,最坏情况下折半查找一次。如果数组有四个元素,最坏情况折半查找为两次,则公式为:"),_("br"),v._v(" "),_("code",[v._v("N*(1/2)^x=1")]),v._v(",其中,N为待查找元素个数,x为最坏查找次数。"),_("br"),v._v("\n转换结果"),_("code",[v._v("x=logN")]),v._v("。底数为2。\n即,折半查找的时间复杂度为:"),_("code",[v._v("O(logN)")])]),v._v(" "),_("h3",{attrs:{id:"完全排序二叉树查找"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#完全排序二叉树查找"}},[v._v("#")]),v._v(" 完全排序二叉树查找")]),v._v(" "),_("p",[v._v("对于完全排序二叉树,假设树的高度为h。那么在树的第h层的节点个数为:"),_("code",[v._v("2^(h-1)")]),_("br"),v._v("\n那么这样整个h深度的树的总结点个数为:"),_("code",[v._v("N=1+2+4+...+2^(h-1)")]),_("br"),v._v("\n等式左右两边都乘以2,得:"),_("code",[v._v("2N=2+4+...+2^(h-1)+2^h")]),_("br"),v._v("\n相减,变换,得:"),_("code",[v._v("h=log(N+1)")]),v._v("。"),_("br"),v._v("\n即,完全二叉树的查找时间复杂度为:"),_("code",[v._v("O(logN)")])]),v._v(" "),_("h2",{attrs:{id:"参考"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[v._v("#")]),v._v(" 参考")]),v._v(" "),_("ol",[_("li",[_("a",{attrs:{href:"http://bigocheatsheet.com/",target:"_blank",rel:"noopener noreferrer"}},[v._v("大O可视化"),_("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=n.exports}}]);