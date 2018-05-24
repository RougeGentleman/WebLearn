//设置函数入口
window.onload=pre;

//需要获取的元素
//手机号输入框
var inputPhone;
//手机号输入提示框
var inputPhoneTip;
//用户手机号
var userPhone;

//验证码输入元素
var inputSMS;
//验证码发送按钮
var inputSMSButton;
//验证码提示元素
var inputSMSTip;
//生成的验证码
var smsCode;
//用输入的验证码
var userSMSCode;
//验证码定时器
var smsTime;

//密码输入元素
var inputPassword;
//密码提示元素
var inputPasswordTip;
//用户输入密码
var userPassword;
//再次输入密码元素
var inputPasswordAgain;
//再次输入密码提示元素
var inputPasswordAgainTip;
//用户再次输入密码
var userPasswordAgain;

//姓名输入框
var inputName;
//姓名输入提示元素
var inputNameTip;
//用户输入的姓名
var userName;

//证件号输入框
var inputIC;
//证件号输入提示
var inputICTip;
//用户证件号输入结果
var userIC;

//邮箱相关
var inputEmail;
var inputEmailTip;
//邮箱可以为空，设置默认为: 空字符串
var userEmail="";

//立即注册按钮
var submitButton;

//密保数组
var questionArray=["您母亲的姓名是？",
    "您配偶的生日是？",
    "您的学号（或工号）是？",
    "您母亲的生日是？",
    "您高中班主任的名字是？",
    "您父亲的姓名是？",
    "您小学班主任的姓名是？",
    "您父亲的生日是？",
    "您配偶的姓名是？",
    "您初中班主任的名字是？",
    "您初中班主任的名字是？",
    "您最熟悉的童年好友名字是？",
    "您最熟悉的学校宿舍室友名字是？",
    "您影响最大的人的名字是？"];
//密保选择框1， 2， 3
var selectQuestion1;
var selectQuestion2;
var selectQuestion3;
//密保结果输入框1，2，3
var inputQuestion1;
var inputQuestion2;
var inputQuestion3;
//表示用户已选择的密保选项，可以不输入，因此默认结果为：空字符
var userSelectQuestion1 = "";
var userSelectQuestion2 = "";
var userSelectQuestion3 = "";
//密保结果1，2，3， 可以不输入，因此默认结果为：空字符
var userQuestionAnswer1 = "";
var userQuestionAnswer2 = "";
var userQuestionAnswer3 = "";

//条框复选框
var inputCheckBox;

function pre(){
    //TODO:每次需将提示对象放入到相对应对象中
    //手机号
    inputPhone = document.getElementById("input_phone");
    inputPhoneTip = document.getElementById("input_phoneTip");
    inputPhone._tip=inputPhoneTip;
    //验证码
    inputSMS = document.getElementById("input_SMS");
    inputSMSButton = document.getElementById("input_SMSButton");
    inputSMSTip = document.getElementById("input_SMSTip");
    inputSMS._tip = inputSMSTip;
    //密码
    inputPassword = document.getElementById("input_password");
    inputPasswordTip = document.getElementById("input_passwordTip");
    inputPassword._tip = inputPasswordTip;
    //再次输入密码
    inputPasswordAgain = document.getElementById("input_passwordAgain");
    inputPasswordAgainTip = document.getElementById("input_passwordAgainTip");
    inputPasswordAgain._tip = inputPasswordAgainTip;
    //姓名
    inputName = document.getElementById("input_name");
    inputNameTip = document.getElementById("input_nameTip");
    inputName._tip = inputNameTip;
    //证件号
    inputIC = document.getElementById("input_IC");
    inputICTip = document.getElementById("input_ICTip");
    inputIC._tip = inputICTip;
    //邮箱
    inputEmail = document.getElementById("input_email");
    inputEmailTip = document.getElementById("input_emailTip");
    inputEmail._tip = inputEmailTip;
    //密保问题
    selectQuestion1 = document.getElementById("select_question1");
    selectQuestion2 = document.getElementById("select_question2");
    selectQuestion3 = document.getElementById("select_question3");
    inputQuestion1 = document.getElementById("input_question1");
    inputQuestion2 = document.getElementById("input_question2");
    inputQuestion3 = document.getElementById("input_question3");
    //条款复选框
    inputCheckBox = document.getElementById("input_checkbox");
    //立即注册按钮
    submitButton = document.getElementById("submitButton");

    //设置各种事件
    setEvents();
}

function setEvents(){
    //设置焦点显示信息
    inputPhone.onfocus=()=>{
        //输入框获得焦点，设置提示文字
        inputPhoneTip.innerText="请输入11位手机号码，仅支持大陆地区手机号。";
    };
    //设置内容改变事件：当用户输入内容后将输入保存
    inputPhone.onchange=()=>{
        //获取输入的内容
        userPhone=inputPhone.value;
    };
    //设置失去焦点判断收入是否正确
    inputPhone.onblur=()=>{
        checkPhone(inputPhone, userPhone);
    };

    //设置验证码相关事件
    //发送验证码点击事件
    inputSMSButton.onclick=()=>{
        //判断手机号是否合法，合法后发送验证码
        var _result=checkPhone(inputPhone, userPhone);
        if(_result){
            //重置生成6位验证码
            smsCode="";
            //清除定时器
            clearInterval(smsTime);
            //随机生成6位验证码
            for(var i=0; i<6; i++){
                smsCode+=""+Math.round(Math.random()*9);
            }
            console.log("生成的验证码:"+smsCode);
            //开始定时器
            smsCodeTimer();
            //设置提示文字
            inputSMSTip.innerText="如果1分钟内没有收到短信验证码，请点击按钮重新获取，此服务免费。";
        }
    };
    //输入框内容改变设置输入内容
    inputSMS.onchange=()=>{
        userSMSCode = inputSMS.value;
    };
    //设置验证码焦点离开事件
    inputSMS.onblur=()=>{
        checkSMSCode(inputSMS, userSMSCode);
    };

    //设置焦点显示信息
    inputPassword.onfocus=()=>{
        //输入框获得焦点，设置提示文字
        inputPasswordTip.innerText="密码由6-30位的英文字母、数字和特殊字符组成，请使用强度较高的密码。";
    };
    //设置内容改变事件：当用户输入内容后将输入保存
    inputPassword.onchange=()=>{
        //获取输入的内容
        userPassword=inputPassword.value;
    };
    //设置失去焦点判断收入是否正确
    inputPassword.onblur=()=>{
        checkPassword(inputPassword, userPassword);
        //检查密码是否相同
        checkPasswordIsSame();
    };

    //设置焦点显示信息
    inputPasswordAgain.onfocus=()=>{
        //输入框获得焦点，设置提示文字
        inputPasswordAgainTip.innerText="请再次填写一遍密码，以辅助检测密码输入是否正确。";
    };
    //设置内容改变事件：当用户输入内容后将输入保存
    inputPasswordAgain.onchange=()=>{
        //获取输入的内容
        userPasswordAgain=inputPasswordAgain.value;
    };
    //设置失去焦点判断收入是否正确
    inputPasswordAgain.onblur=()=>{
        checkPassword(inputPasswordAgain, userPasswordAgain);
        checkPasswordIsSame();
    };

    //姓名相关
    inputName.onfocus=()=>{
        //输入框获得焦点，设置提示文字
        inputNameTip.innerText="按本人有效身份证件填写。";
    };
    inputName.onchange=()=>{
        //获取输入的内容
        userName = inputName.value;
    };
    inputName.onblur=()=>{
        checkName(inputName, userName);
    };

    //证件号相关
    inputIC.onfocus=()=>{
        //输入框获得焦点，设置提示文字
        inputICTip.innerText="请认真核对您的证件号码，证件号码一经提交不能修改。";
    };
    inputIC.onchange=()=>{
        //获取输入的内容
        userIC = inputIC.value;
    };
    inputIC.onblur=()=>{
        checkIC(inputIC, userIC);
    };

    //邮箱相关
    inputEmail.onfocus=()=>{
        //输入框获得焦点，设置提示文字
        inputEmailTip.innerText="请设定一个安全邮箱，忘记密码时可通过此邮箱找回密码。";
        //设置边框颜色
        inputEmail.style.border = "1px solid #CDCDCD";
    };
    inputEmail.onchange=()=>{
        //获取输入的内容
        userEmail = inputEmail.value;
    };
    inputEmail.onblur=()=>{
        checkEmail(inputEmail, userEmail);
    };

    //密保问题1:
    selectQuestion1.onfocus = ()=>{
        addSelectOption(questionArray, selectQuestion1,
            userSelectQuestion1, userSelectQuestion2, userSelectQuestion3);
    };
    selectQuestion1.onchange = ()=>{
        //设置用户选择信息
        userSelectQuestion1 = selectQuestion1.value;
        //当选择结果为请选择时清空结果
        if(userSelectQuestion1 === "请选择"){ userSelectQuestion1=""; }
    };
    //密保答案
    inputQuestion1.onchange = ()=>{
        userQuestionAnswer1 = inputQuestion1.value;
    };
    //密保问题2:
    selectQuestion2.onfocus = ()=>{
        addSelectOption(questionArray, selectQuestion2,
            userSelectQuestion2, userSelectQuestion1, userSelectQuestion3);
    };
    selectQuestion2.onchange = ()=>{
        //设置用户选择信息
        userSelectQuestion2 = selectQuestion2.value;
        //当选择结果为请选择时清空结果
        if(userSelectQuestion2 === "请选择"){ userSelectQuestion2 = ""; }
    };
    //密保问题答案
    inputQuestion2.onchange = ()=>{
        userQuestionAnswer2 = inputQuestion2.value;
    };
    //密保问题3:
    selectQuestion3.onfocus = ()=>{
        addSelectOption(questionArray, selectQuestion3,
            userSelectQuestion3, userSelectQuestion1, userSelectQuestion2);
    };
    selectQuestion3.onchange = ()=>{
        //设置用户选择信息
        userSelectQuestion3 = selectQuestion3.value;
        //当选择结果为请选择时清空结果
        if(userSelectQuestion3 === "请选择"){ userSelectQuestion3 = ""; }
    };
    //密保问题答案
    inputQuestion3.onchange = ()=>{
        userQuestionAnswer3 = inputQuestion3.value;
    };

    //复选框点击事件
    inputCheckBox.onclick = ()=>{
        //判断复选框是否已被选择，选择则设置可输入
        if(inputCheckBox.checked){
            inputPhone.disabled = false;
            inputSMS.disabled = false;
            inputSMSButton.disabled = false;
            inputPassword.disabled = false;
            inputPasswordAgain.disabled = false;
            inputName.disabled = false;
            inputIC.disabled = false;
            inputEmail.disabled = false;
            inputQuestion1.disabled = false;
            inputQuestion2.disabled = false;
            inputQuestion3.disabled = false;
            submitButton.disabled = false;
            submitButton.style.background = "#2EAFBB";
        }else{
            inputPhone.disabled = true;
            inputSMS.disabled = true;
            inputSMSButton.disabled = true;
            inputPassword.disabled = true;
            inputPasswordAgain.disabled = true;
            inputName.disabled = true;
            inputIC.disabled = true;
            inputEmail.disabled = true;
            inputQuestion1.disabled = true;
            inputQuestion2.disabled = true;
            inputQuestion3.disabled = true;
            submitButton.disabled = true;
            submitButton.style.background = "#F5F5F5";
        }
    };

    //提交按钮点击事件
    submitButton.onclick = ()=>{
        if(checkPhone(inputPhone, userPhone) &&
            checkSMSCode(inputSMS, userSMSCode) &&
            checkPasswordIsSame() &&
            checkName(inputName, userName) &&
            checkIC(inputIC, userIC) &&
            checkEmail(inputEmail, userEmail)){
            alert("正在提交，请稍等...");
        }
    }
}

/**
 * 该方法用于加载select的可选项
 * @param {Array} array 需要显示的原始数组
 * @param {object} select 需要添加option的select元素
 * @param {string} option 当前选项的结果
 * @param {string} option1 需要移除的选项1
 * @param {string} option2 需要移除的选项2
 */
function addSelectOption(array, select, option, option1, option2){
    console.log("option:"+option+" option1:"+option1+" option2:"+option2);
    //需要默认选中的索引
    var selectIndex=0;
    //拷贝一份选项数组
    var _questionArray = [].slice.apply(array);
    //判断选项2， 3是否已有选项，有则移除数组
    _questionArray = deleteSelected(_questionArray, option1, option2);

    //排他法：先保存第一个option，之后清楚所有option并将它添加到select上
    var firstOption = select.children[0];
    //清楚已有的所有选项
    for(var i=0; i<select.childNodes.length; i++){
        select.innerHTML="";
    }
    select.appendChild(firstOption);

    //迭代添加内容
    _questionArray.forEach((value, index, array)=>{
        //创建option元素
        var _option = document.createElement("option");
        //设置需要设置默认选择项的索引
        if(value === option){ selectIndex = index; }
        _option.innerText=value;
        //添加到select上
        select.appendChild(_option);
    });

    var children = select.childNodes;
    console.log(selectIndex);
    for(var i=0; i<children.length; i++){children[i].selected=false;}
    children[selectIndex].selected = true;
}

/**
 * 该方法用于删除传入的数组中用户已选择的选项
 * @param {Array} array 表示需要修改的数组
 * @param {string} item 可变参数 表示需要删除的选项
 */
function deleteSelected(array, ...item){
    for(var i=0; i<item.length; i++){
        //查找需要删除的位置
        var index = array.indexOf(item[i]);
        //未查找到，结束本次循环
        if(index === -1) continue;
        //利用splice()删除
        array.splice(index, 1);
    }
    //删除成功，返回结果
    return array;
}

/**
 * 该方法用于判断输入的邮箱格式是否正确
 * @param {object} element 传入需要判断的元素
 * @param {string} userInput 传入需要判断字段
 * @returns {boolean} 当判断成功时返回true
 */
function checkEmail(element, userInput){
    var isSuccess = false;
    if(userInput === undefined || userInput.length === 0){ return isSuccess }
    else if(/^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/.test(userInput) !== true){
        addTips(element, false, "邮箱地址不正确!");
    }else{
        //输入正确改变提示效果
        addTips(element, true, "");
        isSuccess = true;
    }
    return isSuccess;
}

/**
 * 该方法用于判断输入的证件号格式是否正确
 * @param {object} element 传入需要判断的元素
 * @param {string} userInput 传入需要判断字段
 * @returns {boolean} 当判断成功时返回true
 */
function checkIC(element, userInput){
    var isSuccess = false;
    if(userInput === undefined || userInput.length === 0){
        addTips(element, false, "证件号码不能为空！");
    }else if(/^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/.test(userInput) !== true){
        addTips(element, false, "身份证号格式有误！");
    }else{
        //输入正确改变提示效果
        addTips(element, true, "");
        isSuccess = true;
    }
    return isSuccess;
}

/**
 * 该方法用于判断用户姓名输入是否符合要求
 * @param {object} element 传入需要判断的元素
 * @param {string} userInput 传入需要判断字段
 * @returns {boolean} 当判断成功时返回true
 */
function checkName(element, userInput){
    var isSuccess = false;
    if(userInput === undefined || userInput.length === 0){
        addTips(element, false, "姓名不能为空！");
    }else if(userInput.length < 2){
        addTips(element, false, "姓名长度至少2个字符!");
    }else{
        //输入正确改变提示效果
        addTips(element, true, "");
        isSuccess = true;
    }
    return isSuccess;
}

/**
 * 该方法用于判断输入的两次密码是否相同
 * @return {boolean} 当判断成功时返回true
 */
function checkPasswordIsSame(){
    var isSuccess = false;
    //判断两个密码输入是否满足要求
    if(checkPassword(inputPasswordAgain, userPasswordAgain) && checkPassword(inputPassword, userPassword)){
        //都满足要求后判断密码是否相等
        if(userPassword !== userPasswordAgain){
            addTips(inputPasswordAgain, false, "两次密码不一致");
        }else{
            isSuccess = true;
        }
    }
    return isSuccess
}

/**
 * 该方法用于检测密码是否符合要求
 * @param {object} element 传入需要判断的元素
 * @param {string} userInput 传入需要判断字段
 * @returns {boolean} 当判断成功时返回true
 */
function checkPassword(element, userInput){
    var isSuccess = false;
    //判断长度是否正确
    if(userInput === undefined || userInput.length === 0){
        addTips(element, false, "密码不能为空！");
    }else if(userInput.length < 6 || userInput.length > 30){
        addTips(element, false, "密码长度应在6-30个字符之间!");
    }else{
        //输入正确改变提示效果
        addTips(element, true, "");
        isSuccess = true;
    }
    return isSuccess;
}

//六位验证码定时器
function smsCodeTimer(){
    var _totalTime=60;
    //取消发送验证码点击功能
    inputSMSButton.disabled="disabled";
    smsTime = setInterval(()=>{
        //设置倒计时
        _totalTime--;
        //显示当前倒计时
        inputSMSButton.value="（"+_totalTime+"s）后重新获取";
        //当达到0时清楚定时器并可以点击
        if(_totalTime <= 0){
            //设置按钮内部文字
            inputSMSButton.value="重新获取";
            inputSMSButton.disabled="";
            clearInterval(smsTime);
        }
    }, 1000);
}

/**
 * 该方法用于检测验证码舒服是否正确
 * @param {object} element 需要判断的元素
 * @param userInput 需要判断的用户输入
 * @returns {boolean} 当判断成功时返回true
 */
function checkSMSCode(element, userInput){
    var isSuccess = false;
    //当用于没有获取验证码时设置提示
    if(userInput === undefined || userInput.length === 0){
        addTips(element, false, "请获取验证码");
    }else if(userInput === undefined || userInput.length === 0){
        //判断长度是否正确
        addTips(element, false, "短信给验证码不能为空！");
    }else if(/^[0-9]*$/.test(userInput)!==true || (userInput.length < 6 && userSMSCode.length > 6)){
        addTips(element, false, "短信验证码格式不正确!");
    }else if(userInput === smsCode ){
        //输入正确改变提示效果
        addTips(element, true, "");
        isSuccess = true;
    }
    return isSuccess;
}

/**
 * 该方法用于检测手机号输入是否正确
 * @param {object} element 需要判断的元素
 * @param userInput 需要判断的用户输入
 * @returns {boolean} 当判断成功时返回true
 */
function checkPhone(element, userInput){
    var isSuccess = false;
    //判断长度是否正确
    if(userInput === undefined || userInput.length === 0){
        addTips(element, false, "手机号不能为空！");
    }else if(userInput.length < 11){
        addTips(element, false, "手机号长度为11位数字!");
    }else if((/^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/.test(userPhone))!== true){
        //判断输入是否正确
        addTips(element, false, "手机号格式不正确！");
    }else{
        //输入正确改变提示效果
        addTips(element, true, "");
        isSuccess = true;
    }
    return isSuccess;
}

/**
 * 用于添加提示图标/提示文字
 * @param {object} element 需要添加图标的元素
 * @param {boolean} result 添加正确或错误的图标
 * @param {string} str 用于添加的提示文字
 */
function addTips(element, result, str){
    //判断将用到的对象是否存在，不存在则返回
    if(element === undefined || element === undefined || element._tip === undefined){
        return;
    }
    //清空tip对象内所有节点
    for(var i=0; i<element._tip.childNodes.length; i++){
        element._tip.innerHTML="";
    }
    //判断需要添加的类型
    if(result){
        //添加最终图标a. 创建元素 b. 设置class和样式 c. 附加
        var tipElement=document.createElement("i");
        tipElement.className="iconfont icon-ok-copy";
        tipElement.style.color="#2EAFBB";
        tipElement.style.fontSize="20px";
        element._tip.appendChild(tipElement);
        //设置父级边框颜色
        element.style.border="1px solid #CDCDCD";
    }else{
        //添加最终图标a. 创建元素 b. 设置class和样式 c. 附加
        var tipElement=document.createElement("i");
        tipElement.className="iconfont icon-error";
        tipElement.style.color="#FF5A57";
        //创建提示文字标签
        var tipStr=document.createElement("span");
        tipStr.innerText=str;
        tipStr.style.color="#FF5A57";
        element._tip.appendChild(tipElement);
        element._tip.appendChild(tipStr);
        //设置父级边框颜色
        element.style.border="1px solid #FF5A57";
    }
}