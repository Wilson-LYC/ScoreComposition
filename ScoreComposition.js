// ==UserScript==
// @name         分数助手V0.1
// @namespace    https://jxgl.gdufs.edu.cn/
// @version      2024-01-11
// @description  欢迎使用！
// @author       Wilson
// @match        https://jxgl.gdufs.edu.cn/jsxsd/kscj/cjcx_list
// @icon         https://www.google.com/s2/favicons?sz=64&domain=gdufs.edu.cn
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    let table=document.evaluate('//*[@id="dataList"]/tbody',document,null,
                                XPathResult.FIRST_ORDERED_NODE_TYPE,null).singleNodeValue;
    let row=table.rows.length;
    for(let i=2;i<=row;i++){
        let xpah='//*[@id="dataList"]/tbody/tr['+i+']/td[5]/a';
        let a=document.evaluate(xpah,document,null,XPathResult.FIRST_ORDERED_NODE_TYPE,null).singleNodeValue;
        let href=a.getAttribute('href');
        href=href.replace("javascript:JsMod('","");
        href=href.replace("',700,500)","");
        a.setAttribute('href',href);
        a.setAttribute('target','_blank');
    }
})();