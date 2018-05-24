# JavaScript课堂学习

## 2018.5.16
### scroll前传:JSON
### scroll正传
1. scrollHeight和scrollWidth: 对象内容实际内容的高度/宽度
2. scrollTop 和 scrollLeft
    被卷去的部分的 顶部 到可视区域 顶部 的距离
    被卷去的部分的 左边 到可视区域 左边 的距离
#### scroll兼容
```javascript
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
```

## 2018.5.14

### 1. offset系列

#### 1.1 offsetWidth和offsetHeight

1. JS只能获取行内样式
1. offsetWidth/offsetHeight返回值：包括content+padding+border

### 1.2 offsetLeft和offsetTop

1. 用来得到对象的位置（注意：__没有offsetRight和offsetBottom__)
2. offsetLeft构成：
    a. 到最会的（带有定位的）父元素的 左侧/顶部 的距离
    b. 从自身的`border`左侧到开始计算

### 1.3 offsetParent
返回改对象（带有定位的）腹肌
> parentNode找亲爹
> offsetParent找干爹

### 
---

## 2018.5.9
"aaaa".slice(a, b):当参数a,b为负数时，位置从最后开始计算，同时a,b能形成区间才有返回值，否则返回`""`

---

## 2018.5.7

---

## 2018.5.3

### 一维数组的扩充方法
1. Array.of(...): 将一组值转化为数组
2. Array.from(): 将字符串转化为数组 => 每个字符就是一项
3. find(): 传入一个回调函数：包含三个参数：（item， index， array）, 返回一个匹配成功的元素，没有则undefine
4. findIndex():与find类似, 返回成功匹配的小标
5. fill(): 用指定的值填充到数组，并替换元 参数：a.填充个的内容， b.开始的位置 c.结束的位置

### 声明提升
就是指：在函数中使用变量在定义变量之前，一定会出现变量声明提升。
1. function 函数作用域里的变量会遮盖了上层作用域变量。（就近原则）
2. 在function作用域内，变量的声明被提升了，但是没有提升变量值。

### 形参/实参
1. 函数名.length： 返回形参个数
2. arguments.length: 返回实参个数

### 排他思想
__一定是先排他，再控制自己。__

### 属性绑定

### this
1. this指向它实际的调用者。
2. 当包含多个嵌套调用时，this指向上一级
3. new关键词会导致this重新指向

### Object对象
#### 创建对象

#### 设置对象属性

#### delete 删除属性
```javascript
    delete obj.preporty;    //删除obj的preporty属性
```

## 2018.5.2
## 数组（Array） API
1. push(): 在数组最后添加元素并返回数组长度
2. pop(): 在数组删除数组最后一个元素并返回
3. unshift(): 在数组最前面添加一个元素并返回长度
4. shift(): 删除数组最前面一个元素并返回
5. concat(): 传入一个数组并与调用者链接之后返回
6. join(): 以传入的元素为分隔符（可选），并返回字符串 => 如果省略使用逗号作为分隔符
7. split(): 根据传入的参数1.分隔符，2.最大长度（可选）， 将字符串转化为数组 <= __字符串方法__

## 2018.4.24
### Math常用方法
    1. ceil(x) 对数值进行上舍入
    2. floor(x) 对数值进行下舍入
    3. max(x,y) 返回x,y中的最大值
    4. minx(x,y) 返回x,y中最小值
    5. pow(x,y) 返回x的y次方
    6. random() 返回0~1的随机数
    7. round(x) 四舍五入

作业问题：`name`在主流浏览器中已设置属性，不能使用

## 2018.4.23

### JavaScript特点：
    1. 解释执行
        a. 由浏览器逐行加载解释执行

