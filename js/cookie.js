//设置cookie
function setCookie(key,value,expires){
    //判断是否有过期时间
    if(expires){
        //cookie的时间都是以0时区的时间计算，new Data()得到的是+8时区的时间
        //需要把这个+8时区的时间设置为0时区的时间
        let timer=new Date();
        //用当前时间的时间戳 - 8个钟时间的时间戳 = 当前0时区的时间戳
        let d=timer.getTime() - 8*60*60*1000;
        //设置cookie的过期时间，expires过期时间为秒数
        d=d+expires*1000;
        //将0时区的时间戳转化成时间对象
        timer.setTime(d);
        //设置path路径（path=/表示将这个cookie设置在根目录上，每个子目录都有这个cookie，都能获取这个cookie里面的属性）
        document.cookie=`${key}=${value};expires=${timer};path=/`;
        //（path=/duitanganli表示将这个cookie设置在duitanganli这个目录上，只有这个目录里面的子目录才能获取这个cookie里面的属性）
        // document.cookie=`${key}=${value};expires=${timer};path=/duitanganli`;
        return
    }
    document.cookie=`${key}=${value};path=/`;
}
 //获取cookie
 function getCookie(key){
     //将cookie的所有值都获取出来，获取的是一整个字符串
    let cookie=document.cookie
    // 当要获取某一个cookie的值的时候没有办法做到统一判断
   // 所以在 分割cookie的时候 在分号后面需要加 空格
    let arr=cookie.split("; ")
    //设置一个空对象来接收第二次分割的值
    let obj={}
    arr.forEach(function(item){
        //每个item都是一个字符串，进行第二次分割，以对象的形式返回
        obj[item.split("=")[0]]=item.split("=")[1]
    })
    //如果不存在key这个值，那么以对象的形式返回所有的cookie的值
    if(!key){
        return obj
    }
    //for in循环对象
    for(let i in obj){
        //判断传进来的 key 和i的值
        if(i==key){
            return obj[i]
        }
    }
}