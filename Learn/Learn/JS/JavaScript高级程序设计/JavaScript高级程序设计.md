# 书籍上知识点

## 第五章

### 5.5 Array数组
1. isArray(element) 判断element是否为数组
2. toLocalString()、toString()和valueOf()
3. join(str)  以str作为分隔符并返回字符串
4. 栈方法： push(...) 在数组尾部添加任意数组并返回数组长度
           pop() 将数组中最后一项删除并返回
5. 队列方法： shift() 删除数组中第一项并返回
            unshift() 在数组前段添加任意个项并返回数组长度
6. 重排序方法： reverse() 反转数组中项的殊勋
            sort():a. 按升序排列数组 b.传入比较函数进行比较

### 5.6 Function 函数

>1. __function是对象，为Function的一个实例__
>2. __函数的名字只一个包含指针的变量__

#### this

#### arguments类数组
    arguments: 
        a.  函数传入的参数转化为数组, 可通过类数组的的下标方式访问的数据
        b.  函数即使写了1个参数，但依旧可以传入多个参数：因为传入arguments中
        c.  可通过arguments[2]=xxxx 修改传入的值
        d.  当通过下标设置的位置不存在，就会使arguments的长度给增加
        e.  当下标所在位置没有数据，显示结果:undefined
    
    callee:
        a.  指向拥有这个arguments对象的函数
        b. 

#### caller:
    a.  该属性保存调用该函数的引用
    b.  如果在全局作用域中调用该函数，caller的值为：null

#### 5.2 属性和方法
##### 5.2.1 属性：
    1.  length： 表示函数希望接受的参数个数
    2.  prototype：函数方法实际保存的位置
##### 5.2.2 方法：
    1.  apply(): 接受两个参数：a.定义域 b.参数数组
    2.  call(): 接受参数： a.定义域 b.参数分别写入
    3.  apply()和call() 主要用于扩充函数运行的定义域
    4.  bind() 该方法会创建一个函数的实例： 将一个函数添加到另一个对象身上

### 5.3 基本包装类

> 1. __系统自动创建的包装类只存在一瞬间就被销毁__
> 2. __基本包装类型对象在转化为布尔类型都为`true`__
> 3. __使用`new`的类型为`object`,  使用类型`Boolean(false)`结果为基本数据类型__

#### 5.3.1 Boolean
1.  valueOf(): 返回`true`或`false`
2.  toString() 返回`"true"`或`"false"`

#### 5.3.2 Number
重写了方法：
1.  valueOf(): 返回数字
2.  toString()
3.  toLocaleString()
4.  toFixed() 按指定小数位数返回数值,当小数点位数较大时会在小数点位数附近舍入
5.  toExponential() 返回`e`计数法表示的数
6.  toPrecision() 根据输入的参数自动选择用`e`技术表示，还是普通计数

#### 5.3.3 String
方法：
1.  valueOf()
2.  toString()
3.  toLocaleString()
4.  length(): 返回字符长度
5.  charAt(): 返回指定位置的字符
6.  charCodeAt()：返回指定位置字符的编码
7.  concat(): 字符拼接
8.  slice(), substring()接受两个参数，a.起始位置, b.结束位置
9.  substr() 接受两个参数, a.起始位置 b.起始位置后的字符个数
10. indexOf()
11. lastIndexOf()
12. toLowerCase(), toLocaleLowerCase(), toUpperCase(), toLocaleUpperCase() 切换大小写
13. match(): 匹配字符串 参数：正则表达式公式/正则对象 返回：匹配到的字符数组
14. search(): 匹配字符,且每次都从开始查找 参数： 正则表达式/正则对象 返回：第一个查找到的索引
15. replace(): 字符替换
16. localCompare() 比较两个字符串， 返回：1, 0, -1
17. fromCharCode() 接受字符编码并转化为字符串
18. html方法

## 第六章
### 6.1 理解对象
#### 6.1.1 属性类型
1. 数据属性
> 通过`Object.defineProperty()`方法进行修改,接受三个参数：a.属性所在对象 b.属性的名字 c.一个描述符对象

    a.  [[Configurable]]:表示能否通过delete删除属性从而定义属性, 能否修改属性的特性， 或者能把属性修改为访问器属性。默认true
    b.  [[Enumerable]]:表示能否通过for-in循环返回, 默认true
    c.  [[Writable]]:表示能否修改属性的值, 默认true
    d.  [[Value]]:包含这个属性的值，默认undefined

2. 访问器属性
> 访问器不能直接定义，必须通过`Object.defineProperty()来定义`

    a.  [[Configurable]]：表示能否通过delete删除属性从而定义属性, 能否修改属性的特性， 或者能把属性修改为访问器属性。默认true
    b.  [[Enumerable]]:表示能否通过for-in循环返回, 默认true
    c.  [[Get]]:在读取属性时调用函数。 默认为undefined
    d.  [[Set]]：在写入属性时调用函数。 默认为undefined

#### 6.1.2 定义多个属性
ES5定义：`Object.defineProperties()`方法
接受两个参数：a.要添加和修改属性的对象, b.添加的属性
```javascript
var book={};
Object.defineProperties(book, {
    _year:{
        writable:true;
        value=2004;
    },
    edition:{
        writable:true;
        value:1;
    },
    year:{
        get:function(){
            return this._year;
        },
         set: function(newValue){
             if(newValue > 2004){
                this._year=newValue;
                this.edition=newValue-2004;
             }
        }
    }
});
```

#### 6.1.3读取属性的特性
方法：`Object.getOwnPropertyDescriptor()`
接受两个参数：a.属性所在的对象 b.要读取的属性名称
返回：一个对象

## 第10章 DOM

### 10.1 节点层次
每一段标记都可以通过树中的一个节点表示:特性 ➡ 特性节点、 元素 ➡ 元素节点 ...
#### 10.1.1 Node类型
1.  Node.ELEMENT_NODE(1): 元素节点
2.  Node.ATTRIBUTE_NODE(2): 属性节点
3.  Node.TEXT_NODE(3): 文本节点
4.  Node.CDATA_SECTION_NODE(4):
5.  Node.ENTITY_REFERENCE_NODE(5):
6.  Node.ENTITY_NODE(6):
7.  Node.PROCESSING_INSTRUCTION_NODE(7):
8.  Node.COMMENT_NODE(8):
9.  Node.DOCUMENT_NODE(9):
10. Node.DOCUMENT_TYPE_NODE(10):
11.	Node.DOCUMENT_FRAGMENT_NODE(11):
12.	Node.NOTATION_NODE(12):

```javascript
    if(someNode.nodeType ==1 ){ //适用于任何浏览器
        alert("this element is elemnt node");
    }
```

##### 1. nodeName和nodeValue属性
它们的值与节点了相关,当节点类型为元素时:nodeNam=> 节点名称 nodeType => null

##### 2. 节点关系
`childNodes`: 每个节点都包含该属性, 它保存这一个NodeList对象,  __IE8之前 NodeList为`COM`对象,获取元素子节点需要遍历__
`NodeList`: 是一个类数组对象. 动态的 => 节点中修改都会相应的反应
`childNodes`.length: 它返回调用瞬间NodeList的长度,只是一个快照
`nextSibling`: 下一个兄弟节点
`previousSibling`: 上一个兄弟节点
`firstChild`: 第一个子节点
`lastChild`: 最后一个子节点

##### 3. 操作节点
1. `appendChild()`: 在最后添加一个子节点
2. `insertBefore()`: 在某个元素之前插入一个节点 __接受两个参数__: a. 要插入的节点 b. 参考位置
3. `replaceChild()`: 替换节点 __接受两个参数__: a. 要插入的节点 b. 要替换的节点 __返回__: 被替换的节点
4. `removeChild()`: 移除节点 __接受一个参数__: 要移除的节点

##### 4. 其他方法
1. cloneNode(): 拷贝节点 __接受一个参数__: boolean类型, 当为true执行深层复制
2. normalize(): 处理文档树中的文本节点 1. 删除空白节点 2. 将两个相邻的文本节点合并为一个文本节点

#### 10.1.2 Document类型
`document` 是`HTMLDocument`的一个实例, 是`window`的一个属性

##### 1. 文档的子节点
`Document`节点类型可为: `DocumentType(文档类型声明节点)`、 `Element(元素节点)`、 `ProcessingInstruction(处理指令对象)` 或 `Comment(注释节点的内容)`

1. `documentElement`: 始终指向`<html>`标签
2. `childNodes`: 返回节点列表

##### 2. 文档信息
1. `document.title`: 文档标题`<title>`内容
2. `document.URL`: 页面完整的URL地址
3. `document.referer`: 保存连接到到当前页面的上个页面URL. 但没有来源时, 属性值可能为空
4. `document.domain`: 只包含页面的域名
    * 在`2~4`中, 只有`document.domain`可以进行设置. 
    * 当前页面包含来自其他子域框架或内嵌框架时, 可通过设置相同的`document.domain`从而实现这些页面JS对象相互访问
    * 当`document.domain`设置为松散型[如:`(www.aa.com)`]后不可设置如紧绷型[如:`(wwww.ic.aa.com)`]

##### 3. 查找元素
1. `document.getElementById()`
    * IE8及低版本`getElementById()`不区分大小写
    * 怪癖: 在IE中如果表单元素的`name`属性与ID相同, 则在提取时将会返回表单元素
2. `document.getElementsByTagName()`
    * 返回值为`NodeList`类型
    * `NodeList.nameItem()`: 可通过元素的`name`特性取得集合种的项 <= 也可通过`images["name"]`来访问
    * `getElementByTag("*")`: 返回全部元素
3. `document.getElementsByName()`: 返回`name`特性相同的元素结合
    * 当`NodeList`为`name`特性相同的集合, 调用`nodeItem`只会返回第一项

##### 4. 特殊集合
1. `document.anchors`: 包含所有带有`name`特性的`<a>`元素
2. `document.applets`: 包含所有`<applet>`元素, ___不推荐使用___
3. `document.forms`: 包含文档中所有`<form>`元素
4. `document.images`: 包含文档中所有`<img>`元素
5. `document.links`: 包含所有带`href`特性的`<a>`元素

##### 5. DOM一致性检测
`document.implementation`对象提供相关检测DOM功能实现的方法
1. `hasFeature()`: 接受两个参数: 要检测的DOM名称和版本号. 当检测支持时返回`true`
    * 检测时, 即使返回`true`, 但不是所有功能都已实现
##### 6. 文档写入
