/*
 * @Author: zhanghongqiao@hiynn.com
 * @Date: 2018-04-18 11:05:26
 * @Description: 共用方法
 * @Last Modified by: zhanghongqiao
 * @Last Modified time: 2018-11-05 10:57:36
 */

/**
 *  获取某个范围的随机数
 *  @param    {number}  min 最大值
 *  @param    {number}  max 最小值
 *  @return   {object}  null
 */
export const randomNumber = (min, max) => {
  let range = max - min
  let rand = Math.random()
  let num = min + Math.round(rand * range)
  return num
}

/**
 * Get the first item that pass the test
 * by second argument function
 *
 * @param {Array} list
 * @param {Function} f
 * @return {*}
 */
export function find(list, f) {
  const {length} = list
  let index = 0
  let value
  while (++index < length) {
    value = list[index]
    if (f(value, index, list)) {
      return value
    }
  }
}

/**
 * Deep copy the given object considering circular structure.
 * This function caches all nested objects and its copies.
 * If it detects circular structure, use cached copy to avoid infinite loop.
 *
 * @param {*} obj
 * @param {Array<Object>} cache
 * @return {*}
 */
export function deepCopy(obj, cache = []) {
  // just return if obj is immutable value
  if (obj === null || typeof obj !== 'object') {
    return obj
  }

  // if obj is hit, it is in circular structure
  const hit = find(cache, c => c.original === obj)
  if (hit) {
    return hit.copy
  }

  const copy = Array.isArray(obj) ? [] : {}
  // put the copy into cache at first
  // because we want to refer it in recursive deepCopy
  cache.push({
    original: obj,
    copy
  })

  Object.keys(obj).forEach(key => {
    copy[key] = deepCopy(obj[key], cache)
  })

  return copy
}

/**
 * forEach for object
 */
export function forEachValue(obj, fn) {
  Object.keys(obj).forEach(key => fn(obj[key], key))
}

export function isObject(obj) {
  return obj !== null && typeof obj === 'object'
}

export function isPromise(val) {
  return val && typeof val.then === 'function'
}

export function assert(condition, msg) {
  if (!condition) throw new Error(`[vuex] ${msg}`)
}

/**
 * 重置字体大小
 */
export function resetSize() {
  let docEl = document.documentElement
  let uiw = 1920
  
  let resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize'
  let recalc = function () {
    var clientWidth = docEl.clientWidth;
    if(clientWidth <= 768) {
      uiw = 750
    }
    if (!clientWidth) return;
    // if (clientWidth >= 768) {
    //   docEl.style.fontSize = 100 * (768 / uiw) + 'px';
    // } else {
    //   docEl.style.fontSize = 100 * (clientWidth / uiw) + 'px';
    // }
    docEl.style.fontSize = 100 * (clientWidth / uiw) + 'px';
  }
  if (!document.addEventListener) return;
  window.addEventListener(resizeEvt, recalc, false);
  document.addEventListener('DOMContentLoaded', recalc, false);
  recalc()
  window.addEventListener('resize', function () {
    recalc()
  })
}

/**
 * 设置Cookie
 * @param {string} key
 * @param {*} val
 * @param {*} path
 */
export function setCookie(key, val, path) {
  if (!path) path = "/";
  document.cookie = key + "=" + val + "; expires=Session; path=" + path;  //设置cookie
}

/**
 * 获取Cookie
 * @param {string} key 获取 Cookie
 */
export function getCookie(key) {
  /*获取cookie参数*/
  let getCookie = document.cookie.replace(/[ ]/g, "");  //获取cookie，并且将获得的cookie格式化，去掉空格字符
  let arrCookie = getCookie.split(";")  //将获得的cookie以"分号"为标识 将cookie保存到arrCookie的数组中
  let tips;  //声明变量tips
  for (let i = 0; i < arrCookie.length; i++) {   //使用for循环查找cookie中的tips变量
    let arr = arrCookie[i].split("=");   //将单条cookie用"等号"为标识，将单条cookie保存为arr数组
    if (key == arr[0]) {  //匹配变量名称，其中arr[0]是指的cookie名称，如果该条变量为tips则执行判断语句中的赋值操作
      tips = arr[1];   //将cookie的值赋给变量tips
      break;   //终止for循环遍历
    }
  }
  return tips;
}

/**
 *
 * 清空cookie
 * @export
 * @param {string} name
 */
export function clearCookie(name) {
  var exp = new Date();
  exp.setTime(exp.getTime() - 20);
  var cval = getCookie(name);
  if (cval != null) {
    console.log("=0" + cval + ";expires=" + exp.toGMTString())
    document.cookie = name + "=0" + cval + ";expires=" + exp.toGMTString();
  }
}

/**
 * 获取地址栏参数
 * @param {string} name
 */
export function getUrlParms(name) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
  var r = window.location.search.substr(1).match(reg);
  if (r != null)
    return unescape(r[2]);
  return null;
}
 
 