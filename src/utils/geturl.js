//获取地址栏url参数,取出地址栏里面的userid和pwd参数的值
export function getQueryString() {
    const urlString = decodeURIComponent(window.location.href);
    const itemidMatch = urlString.match(/[\?&]userid=(\d+)/);
    const pwdMatch = urlString.match(/[\?&]pwd=([^&]+)/);
    console.log(itemidMatch, pwdMatch); // 输出：'1234 qwerty'
  
    // 获取匹配结果的第二个分组（即参数值）
    const itemid = itemidMatch ? itemidMatch[1] : null;
    const pwd = pwdMatch ? pwdMatch[1] : null;
    return {
        itemid,
        pwd
    }
  }