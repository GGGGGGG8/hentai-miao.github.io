(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{537:function(e,n,a){"use strict";a.r(n);var r=a(4),t=Object(r.a)({},function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h2",{attrs:{id:"前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前言","aria-hidden":"true"}},[e._v("#")]),e._v(" 前言")]),e._v(" "),a("p",[e._v("本篇我们重点介绍以下四种模块加载规范：")]),e._v(" "),a("ol",[a("li",[e._v("AMD")]),e._v(" "),a("li",[e._v("CMD")]),e._v(" "),a("li",[e._v("CommonJS")]),e._v(" "),a("li",[e._v("ES6 模块")])]),e._v(" "),a("p",[e._v("最后再延伸讲下 Babel 的编译和 webpack 的打包原理。")]),e._v(" "),a("h2",{attrs:{id:"require-js"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#require-js","aria-hidden":"true"}},[e._v("#")]),e._v(" require.js")]),e._v(" "),a("p",[e._v("在了解 AMD 规范之前，我们先来看看 require.js 的使用方式。")]),e._v(" "),a("p",[e._v("项目目录为：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("* project/\n    * index.html\n    * vender/\n        * main.js\n        * require.js\n        * add.js\n        * square.js\n        * multiply.js\n复制代码\n")])])]),a("p",[a("code",[e._v("index.html")]),e._v(" 的内容如下：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('<!DOCTYPE html>\n<html>\n    <head>\n        <title>require.js</title>\n    </head>\n    <body>\n        <h1>Content</h1>\n        <script data-main="vender/main" src="vender/require.js"><\/script>\n    </body>\n</html>\n复制代码\n')])])]),a("p",[a("code",[e._v('data-main="vender/main"')]),e._v(" 表示主模块是 "),a("code",[e._v("vender")]),e._v(" 下的 "),a("code",[e._v("main.js")]),e._v("。")]),e._v(" "),a("p",[a("code",[e._v("main.js")]),e._v(" 的配置如下：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("// main.js\nrequire(['./add', './square'], function(addModule, squareModule) {\n    console.log(addModule.add(1, 1))\n    console.log(squareModule.square(3))\n});\n复制代码\n")])])]),a("p",[e._v("require 的第一个参数表示依赖的模块的路径，第二个参数表示此模块的内容。")]),e._v(" "),a("p",[e._v("由此可以看出，"),a("code",[e._v("主模块")]),e._v("依赖 "),a("code",[e._v("add 模块")]),e._v("和 "),a("code",[e._v("square 模块")]),e._v("。")]),e._v(" "),a("p",[e._v("我们看下 "),a("code",[e._v("add 模块")]),e._v("即 "),a("code",[e._v("add.js")]),e._v(" 的内容：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("// add.js\ndefine(function() {\n    console.log('加载了 add 模块');\n    var add = function(x, y) {&emsp;\n        return x + y;\n    };\n\n    return {&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;\n        add: add\n    };\n});\n复制代码\n")])])]),a("p",[a("code",[e._v("requirejs")]),e._v(" 为全局添加了 "),a("code",[e._v("define")]),e._v(" 函数，你只要按照这种约定的方式书写这个模块即可。")]),e._v(" "),a("p",[e._v("那如果依赖的模块又依赖了其他模块呢？")]),e._v(" "),a("p",[e._v("我们来看看"),a("code",[e._v("主模块")]),e._v("依赖的 "),a("code",[e._v("square 模块")]),e._v("， "),a("code",[e._v("square 模块")]),e._v("的作用是求出一个数字的平方，比如输入 3 就返回 9，该模块依赖一个"),a("code",[e._v("乘法模块")]),e._v("，该乘法模块即 "),a("code",[e._v("multiply.js")]),e._v(" 的代码如下：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("// multiply.js\ndefine(function() {\n    console.log('加载了 multiply 模块')\n    var multiply = function(x, y) {&emsp;\n        return x * y;\n    };\n\n    return {&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;\n        multiply: multiply\n    };\n});\n复制代码\n")])])]),a("p",[e._v("而 "),a("code",[e._v("square 模块")]),e._v("就要用到 "),a("code",[e._v("multiply 模块")]),e._v("，其实写法跟 main.js 添加依赖模块一样：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("// square.js\ndefine(['./multiply'], function(multiplyModule) {\n    console.log('加载了 square 模块')\n    return {&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;\n        square: function(num) {\n            return multiplyModule.multiply(num, num)\n        }\n    };\n});\n复制代码\n")])])]),a("p",[e._v("require.js 会自动分析依赖关系，将需要加载的模块正确加载。")]),e._v(" "),a("p",[e._v("requirejs 项目 Demo 地址："),a("a",{attrs:{href:"https://github.com/mqyqingfeng/Blog/tree/master/demos/ES6/module/requirejs",target:"_blank",rel:"noopener noreferrer"}},[e._v("github.com/mqyqingfeng…"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("而如果我们在浏览器中打开 "),a("code",[e._v("index.html")]),e._v("，打印的顺序为：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("加载了 add 模块\n加载了 multiply 模块\n加载了 square 模块\n2\n9\n复制代码\n")])])]),a("h2",{attrs:{id:"amd"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#amd","aria-hidden":"true"}},[e._v("#")]),e._v(" AMD")]),e._v(" "),a("p",[e._v("在上节，我们说了这样一句话：")]),e._v(" "),a("blockquote",[a("p",[a("code",[e._v("requirejs")]),e._v(" 为全局添加了 "),a("code",[e._v("define")]),e._v(" 函数，你只要按照这种约定的方式书写这个模块即可。")])]),e._v(" "),a("p",[e._v("那这个约定的书写方式是指什么呢？")]),e._v(" "),a("p",[e._v("指的便是 The Asynchronous Module Definition (AMD) 规范。")]),e._v(" "),a("p",[e._v("所以其实 "),a("strong",[e._v("AMD 是 RequireJS 在推广过程中对模块定义的规范化产出。")])]),e._v(" "),a("p",[e._v("你去看 "),a("a",{attrs:{href:"https://github.com/amdjs/amdjs-api/wiki/AMD-(%E4%B8%AD%E6%96%87%E7%89%88)",target:"_blank",rel:"noopener noreferrer"}},[e._v("AMD 规范"),a("OutboundLink")],1),e._v(" 的内容，其主要内容就是定义了 define 函数该如何书写，只要你按照这个规范书写模块和依赖，require.js 就能正确的进行解析。")]),e._v(" "),a("h2",{attrs:{id:"sea-js"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sea-js","aria-hidden":"true"}},[e._v("#")]),e._v(" sea.js")]),e._v(" "),a("p",[e._v("在国内，经常与 AMD 被一起提起的还有 CMD，CMD 又是什么呢？我们从 "),a("code",[e._v("sea.js")]),e._v(" 的使用开始说起。")]),e._v(" "),a("p",[e._v("文件目录与 requirejs 项目目录相同:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("* project/\n    * index.html\n    * vender/\n        * main.js\n        * require.js\n        * add.js\n        * square.js\n        * multiply.js\n复制代码\n")])])]),a("p",[a("code",[e._v("index.html")]),e._v(" 的内容如下：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('<!DOCTYPE html>\n<html>\n<head>\n    <title>sea.js</title>\n</head>\n<body>\n    <h1>Content</h1>\n    <script src="vender/sea.js"><\/script>\n    <script>\n    // 在页面中加载主模块\n    seajs.use("./vender/main");\n    <\/script>\n</body>\n\n</html>\n复制代码\n')])])]),a("p",[e._v("main.js 的内容如下：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("// main.js\ndefine(function(require, exports, module) {\n    var addModule = require('./add');\n    console.log(addModule.add(1, 1))\n\n    var squareModule = require('./square');\n    console.log(squareModule.square(3))\n});\n复制代码\n")])])]),a("p",[e._v("add.js 的内容如下：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("// add.js\ndefine(function(require, exports, module) {\n    console.log('加载了 add 模块')\n    var add = function(x, y) {&emsp;\n        return x + y;\n    };\n    module.exports = {&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;\n        add: add\n    };\n});\n复制代码\n")])])]),a("p",[e._v("square.js 的内容如下：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("define(function(require, exports, module) {\n    console.log('加载了 square 模块')\n    var multiplyModule = require('./multiply');\n    module.exports = {&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;\n        square: function(num) {\n            return multiplyModule.multiply(num, num)\n        }\n    };\n\n});\n复制代码\n")])])]),a("p",[e._v("multiply.js 的内容如下：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("define(function(require, exports, module) {\n    console.log('加载了 multiply 模块')\n    var multiply = function(x, y) {&emsp;\n        return x * y;\n    };\n    module.exports = {&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;\n        multiply: multiply\n    };\n});\n复制代码\n")])])]),a("p",[e._v("跟第一个例子是同样的依赖结构，即 main 依赖 add 和 square，square 又依赖 multiply。")]),e._v(" "),a("p",[e._v("seajs 项目 Demo 地址："),a("a",{attrs:{href:"https://github.com/mqyqingfeng/Blog/tree/master/demos/ES6/module/seajs",target:"_blank",rel:"noopener noreferrer"}},[e._v("github.com/mqyqingfeng…"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("而如果我们在浏览器中打开 "),a("code",[e._v("index.html")]),e._v("，打印的顺序为：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("加载了 add 模块\n2\n加载了 square 模块\n加载了 multiply 模块\n9\n复制代码\n")])])]),a("h2",{attrs:{id:"cmd"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cmd","aria-hidden":"true"}},[e._v("#")]),e._v(" CMD")]),e._v(" "),a("p",[e._v("与 AMD 一样，CMD 其实就是 SeaJS 在推广过程中对模块定义的规范化产出。")]),e._v(" "),a("p",[e._v("你去看 "),a("a",{attrs:{href:"https://github.com/seajs/seajs/issues/242",target:"_blank",rel:"noopener noreferrer"}},[e._v("CMD 规范"),a("OutboundLink")],1),e._v("的内容，主要内容就是描述该如何定义模块，如何引入模块，如何导出模块，只要你按照这个规范书写代码，sea.js 就能正确的进行解析。")]),e._v(" "),a("h2",{attrs:{id:"amd-与-cmd-的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#amd-与-cmd-的区别","aria-hidden":"true"}},[e._v("#")]),e._v(" AMD 与 CMD 的区别")]),e._v(" "),a("p",[e._v("从 sea.js 和 require.js 的例子可以看出：")]),e._v(" "),a("p",[e._v("1.CMD 推崇"),a("strong",[e._v("依赖就近")]),e._v("，AMD 推崇"),a("strong",[e._v("依赖前置")]),e._v("。看两个项目中的 main.js：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("// require.js 例子中的 main.js\n// 依赖必须一开始就写好\nrequire(['./add', './square'], function(addModule, squareModule) {\n    console.log(addModule.add(1, 1))\n    console.log(squareModule.square(3))\n});\n复制代码\n// sea.js 例子中的 main.js\ndefine(function(require, exports, module) {\n    var addModule = require('./add');\n    console.log(addModule.add(1, 1))\n\n    // 依赖可以就近书写\n    var squareModule = require('./square');\n    console.log(squareModule.square(3))\n});\n复制代码\n")])])]),a("p",[e._v("2.对于依赖的模块，AMD 是"),a("strong",[e._v("提前执行")]),e._v("，CMD 是"),a("strong",[e._v("延迟执行")]),e._v("。看两个项目中的打印顺序：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("// require.js\n加载了 add 模块\n加载了 multiply 模块\n加载了 square 模块\n2\n9\n复制代码\n// sea.js\n加载了 add 模块\n2\n加载了 square 模块\n加载了 multiply 模块\n9\n复制代码\n")])])]),a("p",[e._v("AMD 是将需要使用的模块先加载完再执行代码，而 CMD 是在 require 的时候才去加载模块文件，加载完再接着执行。")]),e._v(" "),a("h2",{attrs:{id:"感谢"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#感谢","aria-hidden":"true"}},[e._v("#")]),e._v(" 感谢")]),e._v(" "),a("p",[e._v("感谢 require.js 和 sea.js 在推动 JavaScript 模块化发展方面做出的贡献。")]),e._v(" "),a("h2",{attrs:{id:"commonjs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#commonjs","aria-hidden":"true"}},[e._v("#")]),e._v(" CommonJS")]),e._v(" "),a("p",[e._v("AMD 和 CMD 都是用于浏览器端的模块规范，而在服务器端比如 node，采用的则是 CommonJS 规范。")]),e._v(" "),a("p",[e._v("导出模块的方式：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("var add = function(x, y) {&emsp;\n    return x + y;\n};\n\nmodule.exports.add = add;\n复制代码\n")])])]),a("p",[e._v("引入模块的方式：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("var add = require('./add.js');\nconsole.log(add.add(1, 1));\n复制代码\n")])])]),a("p",[e._v("我们将之前的例子改成 CommonJS 规范：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("// main.js\nvar add = require('./add.js');\nconsole.log(add.add(1, 1))\n\nvar square = require('./square.js');\nconsole.log(square.square(3));\n复制代码\n// add.js\nconsole.log('加载了 add 模块')\n\nvar add = function(x, y) {&emsp;\n    return x + y;\n};\n\nmodule.exports.add = add;\n复制代码\n// multiply.js\nconsole.log('加载了 multiply 模块')\n\nvar multiply = function(x, y) {&emsp;\n    return x * y;\n};\n\nmodule.exports.multiply = multiply;\n复制代码\n// square.js\nconsole.log('加载了 square 模块')\n\nvar multiply = require('./multiply.js');\n\nvar square = function(num) {&emsp;\n    return multiply.multiply(num, num);\n};\n\nmodule.exports.square = square;\n复制代码\n")])])]),a("p",[e._v("CommonJS 项目 Demo 地址："),a("a",{attrs:{href:"https://github.com/mqyqingfeng/Blog/tree/master/demos/ES6/module/commonJS",target:"_blank",rel:"noopener noreferrer"}},[e._v("github.com/mqyqingfeng…"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("如果我们执行 "),a("code",[e._v("node main.js")]),e._v("，打印的顺序为：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("加载了 add 模块\n2\n加载了 square 模块\n加载了 multiply 模块\n9\n复制代码\n")])])]),a("p",[e._v("跟 sea.js 的执行结果一致，也是在 require 的时候才去加载模块文件，加载完再接着执行。")]),e._v(" "),a("h2",{attrs:{id:"commonjs-与-amd"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#commonjs-与-amd","aria-hidden":"true"}},[e._v("#")]),e._v(" CommonJS 与 AMD")]),e._v(" "),a("p",[e._v("引用阮一峰老师的"),a("a",{attrs:{href:"http://javascript.ruanyifeng.com/nodejs/module.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("《JavaScript 标准参考教程（alpha）》"),a("OutboundLink")],1),e._v(":")]),e._v(" "),a("blockquote",[a("p",[e._v("CommonJS 规范加载模块是同步的，也就是说，只有加载完成，才能执行后面的操作。")])]),e._v(" "),a("blockquote",[a("p",[e._v("AMD规范则是非同步加载模块，允许指定回调函数。")]),e._v(" "),a("p",[e._v("由于 Node.js 主要用于服务器编程，模块文件一般都已经存在于本地硬盘，所以加载起来比较快，不用考虑非同步加载的方式，所以 CommonJS 规范比较适用。")])]),e._v(" "),a("blockquote",[a("p",[e._v("但是，如果是浏览器环境，要从服务器端加载模块，这时就必须采用非同步模式，因此浏览器端一般采用 AMD 规范。")])]),e._v(" "),a("h2",{attrs:{id:"es6"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#es6","aria-hidden":"true"}},[e._v("#")]),e._v(" ES6")]),e._v(" "),a("p",[e._v("ECMAScript2015 规定了新的模块加载方案。")]),e._v(" "),a("p",[e._v("导出模块的方式：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("var firstName = 'Michael';\nvar lastName = 'Jackson';\nvar year = 1958;\n\nexport {firstName, lastName, year};\n复制代码\n")])])]),a("p",[e._v("引入模块的方式：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("import {firstName, lastName, year} from './profile';\n复制代码\n")])])]),a("p",[e._v("我们再将上面的例子改成 ES6 规范：")]),e._v(" "),a("p",[e._v("目录结构与 requirejs 和 seajs 目录结构一致。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('<!DOCTYPE html>\n<html>\n    <head>\n        <title>ES6</title>\n    </head>\n    <body>\n        <h1>Content</h1>\n        <script src="vender/main.js" type="module"><\/script>\n    </body>\n</html>\n复制代码\n')])])]),a("p",[e._v("注意！浏览器加载 ES6 模块，也使用 "),a("code",[e._v("<script>")]),e._v(" 标签，但是要加入 "),a("code",[e._v('type="module"')]),e._v(" 属性。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("// main.js\nimport {add} from './add.js';\nconsole.log(add(1, 1))\n\nimport {square} from './square.js';\nconsole.log(square(3));\n复制代码\n// add.js\nconsole.log('加载了 add 模块')\n\nvar add = function(x, y) {\n    return x + y;\n};\n\nexport {add}\n复制代码\n// multiply.js\nconsole.log('加载了 multiply 模块')\n\nvar multiply = function(x, y) {&emsp;\n    return x * y;\n};\n\nexport {multiply}\n复制代码\n// square.js\nconsole.log('加载了 square 模块')\n\nimport {multiply} from './multiply.js';\n\nvar square = function(num) {&emsp;\n    return multiply(num, num);\n};\n\nexport {square}\n复制代码\n")])])]),a("p",[e._v("ES6-Module 项目 Demo 地址："),a("a",{attrs:{href:"https://github.com/mqyqingfeng/Blog/tree/master/demos/ES6/module/ES6",target:"_blank",rel:"noopener noreferrer"}},[e._v("github.com/mqyqingfeng…"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("值得注意的，在 Chrome 中，如果直接打开，会报跨域错误，必须开启服务器，保证文件同源才可以有效果。")]),e._v(" "),a("p",[e._v("为了验证这个效果你可以：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("cnpm install http-server -g\n复制代码\n")])])]),a("p",[e._v("然后进入该目录，执行")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("http-server\n复制代码\n")])])]),a("p",[e._v("在浏览器打开 "),a("code",[e._v("http://localhost:8080/")]),e._v(" 即可查看效果。")]),e._v(" "),a("p",[e._v("打印的顺序为：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("加载了 add 模块\n加载了 multiply 模块\n加载了 square 模块\n2\n9\n复制代码\n")])])]),a("p",[e._v("跟 require.js 的执行结果是一致的，也就是将需要使用的模块先加载完再执行代码。")]),e._v(" "),a("h2",{attrs:{id:"es6-与-commonjs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#es6-与-commonjs","aria-hidden":"true"}},[e._v("#")]),e._v(" ES6 与 CommonJS")]),e._v(" "),a("p",[e._v("引用阮一峰老师的 "),a("a",{attrs:{href:"http://es6.ruanyifeng.com/#docs/module-loader",target:"_blank",rel:"noopener noreferrer"}},[e._v("《ECMAScript 6 入门》"),a("OutboundLink")],1),e._v("：")]),e._v(" "),a("blockquote",[a("p",[e._v("它们有两个重大差异。")]),e._v(" "),a("ol",[a("li",[e._v("CommonJS 模块输出的是一个值的拷贝，ES6 模块输出的是值的引用。")]),e._v(" "),a("li",[e._v("CommonJS 模块是运行时加载，ES6 模块是编译时输出接口。")])])]),e._v(" "),a("p",[e._v("第二个差异可以从两个项目的打印结果看出，导致这种差别的原因是：")]),e._v(" "),a("blockquote",[a("p",[e._v("因为 CommonJS 加载的是一个对象（即module.exports属性），该对象只有在脚本运行完才会生成。而 ES6 模块不是对象，它的对外接口只是一种静态定义，在代码静态解析阶段就会生成。")])]),e._v(" "),a("p",[e._v("重点解释第一个差异。")]),e._v(" "),a("blockquote",[a("p",[e._v("CommonJS 模块输出的是值的拷贝，也就是说，一旦输出一个值，模块内部的变化就影响不到这个值。")])]),e._v(" "),a("p",[e._v("举个例子：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("// 输出模块 counter.js\nvar counter = 3;\nfunction incCounter() {\n  counter++;\n}\nmodule.exports = {\n    counter: counter,\n    incCounter: incCounter,\n};\n复制代码\n// 引入模块 main.js\nvar mod = require('./counter');\n\nconsole.log(mod.counter);  // 3\nmod.incCounter();\nconsole.log(mod.counter); // 3\n复制代码\n")])])]),a("p",[e._v("counter.js 模块加载以后，它的内部变化就影响不到输出的 mod.counter 了。这是因为 mod.counter 是一个原始类型的值，会被缓存。")]),e._v(" "),a("p",[e._v("但是如果修改 counter 为一个引用类型的话：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("// 输出模块 counter.js\nvar counter = {\n    value: 3\n};\n\nfunction incCounter() {\n    counter.value++;\n}\nmodule.exports = {\n    counter: counter,\n    incCounter: incCounter,\n};\n复制代码\n// 引入模块 main.js\nvar mod = require('./counter.js');\n\nconsole.log(mod.counter.value); // 3\nmod.incCounter();\nconsole.log(mod.counter.value); // 4\n复制代码\n")])])]),a("p",[e._v('value 是会发生改变的。不过也可以说这是 "值的拷贝"，只是对于引用类型而言，值指的其实是引用。')]),e._v(" "),a("p",[e._v("而如果我们将这个例子改成 ES6:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("// counter.js\nexport let counter = 3;\nexport function incCounter() {\n  counter++;\n}\n\n// main.js\nimport { counter, incCounter } from './counter';\nconsole.log(counter); // 3\nincCounter();\nconsole.log(counter); // 4\n复制代码\n")])])]),a("p",[e._v("这是因为")]),e._v(" "),a("blockquote",[a("p",[e._v("ES6 模块的运行机制与 CommonJS 不一样。JS 引擎对脚本静态分析的时候，遇到模块加载命令 import，就会生成一个只读引用。等到脚本真正执行时，再根据这个只读引用，到被加载的那个模块里面去取值。换句话说，ES6 的 import 有点像 Unix 系统的“符号连接”，原始值变了，import 加载的值也会跟着变。因此，ES6 模块是动态引用，并且不会缓存值，模块里面的变量绑定其所在的模块。")])]),e._v(" "),a("h2",{attrs:{id:"babel"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#babel","aria-hidden":"true"}},[e._v("#")]),e._v(" Babel")]),e._v(" "),a("p",[e._v("鉴于浏览器支持度的问题，如果要使用 ES6 的语法，一般都会借助 Babel，可对于 import 和 export 而言，只借助 Babel 就可以吗？")]),e._v(" "),a("p",[e._v("让我们看看 Babel 是怎么编译 import 和 export 语法的。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("// ES6\nvar firstName = 'Michael';\nvar lastName = 'Jackson';\nvar year = 1958;\n\nexport {firstName, lastName, year};\n复制代码\n// Babel 编译后\n'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar firstName = 'Michael';\nvar lastName = 'Jackson';\nvar year = 1958;\n\nexports.firstName = firstName;\nexports.lastName = lastName;\nexports.year = year;\n复制代码\n")])])]),a("p",[e._v("是不是感觉有那么一点奇怪？编译后的语法更像是 CommonJS 规范，再看 import 的编译结果：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("// ES6\nimport {firstName, lastName, year} from './profile';\n复制代码\n// Babel 编译后\n'use strict';\n\nvar _profile = require('./profile');\n复制代码\n")])])]),a("p",[e._v("你会发现 Babel 只是把 ES6 模块语法转为 CommonJS 模块语法，然而浏览器是不支持这种模块语法的，所以直接跑在浏览器会报错的，如果想要在浏览器中运行，还是需要使用打包工具将代码打包。")]),e._v(" "),a("h2",{attrs:{id:"webpack"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#webpack","aria-hidden":"true"}},[e._v("#")]),e._v(" webpack")]),e._v(" "),a("p",[e._v("Babel 将 ES6 模块转为 CommonJS 后， webpack 又是怎么做的打包的呢？它该如何将这些文件打包在一起，从而能保证正确的处理依赖，以及能在浏览器中运行呢？")]),e._v(" "),a("p",[e._v("首先为什么浏览器中不支持 CommonJS 语法呢？")]),e._v(" "),a("p",[e._v("这是因为浏览器环境中并没有 module、 exports、 require 等环境变量。")]),e._v(" "),a("p",[e._v("换句话说，webpack 打包后的文件之所以在浏览器中能运行，就是靠模拟了这些变量的行为。")]),e._v(" "),a("p",[e._v("那怎么模拟呢？")]),e._v(" "),a("p",[e._v("我们以 CommonJS 项目中的 square.js 为例，它依赖了 multiply 模块：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("console.log('加载了 square 模块')\n\nvar multiply = require('./multiply.js');\n\n\nvar square = function(num) {&emsp;\n    return multiply.multiply(num, num);\n};\n\nmodule.exports.square = square;\n复制代码\n")])])]),a("p",[e._v("webpack 会将其包裹一层，注入这些变量：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("function(module, exports, require) {\n    console.log('加载了 square 模块');\n\n    var multiply = require(\"./multiply\");\n    module.exports = {\n        square: function(num) {\n            return multiply.multiply(num, num);\n        }\n    };\n}\n复制代码\n")])])]),a("p",[e._v("那 webpack 又会将 CommonJS 项目的代码打包成什么样呢？我写了一个精简的例子，你可以直接复制到浏览器中查看效果：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('// 自执行函数\n(function(modules) {\n\n    // 用于储存已经加载过的模块\n    var installedModules = {};\n\n    function require(moduleName) {\n\n        if (installedModules[moduleName]) {\n            return installedModules[moduleName].exports;\n        }\n\n        var module = installedModules[moduleName] = {\n            exports: {}\n        };\n\n        modules[moduleName](module, module.exports, require);\n\n        return module.exports;\n    }\n\n    // 加载主模块\n    return require("main");\n\n})({\n    "main": function(module, exports, require) {\n\n        var addModule = require("./add");\n        console.log(addModule.add(1, 1))\n\n        var squareModule = require("./square");\n        console.log(squareModule.square(3));\n\n    },\n    "./add": function(module, exports, require) {\n        console.log(\'加载了 add 模块\');\n\n        module.exports = {\n            add: function(x, y) {\n                return x + y;\n            }\n        };\n    },\n    "./square": function(module, exports, require) {\n        console.log(\'加载了 square 模块\');\n\n        var multiply = require("./multiply");\n        module.exports = {\n            square: function(num) {\n                return multiply.multiply(num, num);\n            }\n        };\n    },\n\n    "./multiply": function(module, exports, require) {\n        console.log(\'加载了 multiply 模块\');\n\n        module.exports = {\n            multiply: function(x, y) {\n                return x * y;\n            }\n        };\n    }\n})\n复制代码\n')])])]),a("p",[e._v("最终的执行结果为：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("加载了 add 模块\n2\n加载了 square 模块\n加载了 multiply 模块\n9\n复制代码\n")])])]),a("h2",{attrs:{id:"参考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考","aria-hidden":"true"}},[e._v("#")]),e._v(" 参考")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"http://javascript.ruanyifeng.com/nodejs/module.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("《JavaScript 标准参考教程（alpha）》"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"http://es6.ruanyifeng.com/#docs/module-loader",target:"_blank",rel:"noopener noreferrer"}},[e._v("《ECMAScript6 入门》"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/20731484",target:"_blank",rel:"noopener noreferrer"}},[e._v("手写一个CommonJS打包工具（一）"),a("OutboundLink")],1)])])])},[],!1,null,null,null);n.default=t.exports}}]);