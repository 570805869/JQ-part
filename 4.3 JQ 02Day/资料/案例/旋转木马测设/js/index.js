$(function () {
//      鼠标的移入与移出
    $('#wrap').mouseover(function(){
        $('#arrow').css('opacity', 1);
    })
    $('#wrap').mouseout(function(){
        $('#arrow').css('opacity', 0)
    })
//      新建一个数组，存储所有的类样式
    var classArr = ['slide1', 'slide2','slide3', 'slide4', 'slide5'];
//      获取所有的li
    var $list = $('.slide ul li');
//      下一张
    $('#arrRight').click(function(){
//        取出数组的第一项
        var last = classArr.pop();
//        放到最后一项
        classArr.unshift(last);
        for(var i = 0; i < $list.length; i++){          // 它的整体是一个dom对象，当循环遍历到每一项的时候，就是一个dom对象了
            // 这是一个dom对象
//          $list[i].className = classArr[i];
//          另一种方式
            //   这是jQuery对象的方式
            $list.eq(i).removeClass().addClass(classArr[i]);
        }
    })

//      上一张
    $('#arrLeft').click(function(){
//        把最后一张取出来
        var first = classArr.shift();
//        放到最前面
        classArr.push(first);
//        循环遍历每一个
        for(var i = 0; i < $list.length; i++){
//          dom的方式：
//          $list[i].className = classArr[i];
//          jQuery的方法
            $list.eq(i).removeClass().addClass(classArr[i])
        }
    })
})