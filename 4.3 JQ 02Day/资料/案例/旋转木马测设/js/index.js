$(function () {
//      �����������Ƴ�
    $('#wrap').mouseover(function(){
        $('#arrow').css('opacity', 1);
    })
    $('#wrap').mouseout(function(){
        $('#arrow').css('opacity', 0)
    })
//      �½�һ�����飬�洢���е�����ʽ
    var classArr = ['slide1', 'slide2','slide3', 'slide4', 'slide5'];
//      ��ȡ���е�li
    var $list = $('.slide ul li');
//      ��һ��
    $('#arrRight').click(function(){
//        ȡ������ĵ�һ��
        var last = classArr.pop();
//        �ŵ����һ��
        classArr.unshift(last);
        for(var i = 0; i < $list.length; i++){          // ����������һ��dom���󣬵�ѭ��������ÿһ���ʱ�򣬾���һ��dom������
            // ����һ��dom����
//          $list[i].className = classArr[i];
//          ��һ�ַ�ʽ
            //   ����jQuery����ķ�ʽ
            $list.eq(i).removeClass().addClass(classArr[i]);
        }
    })

//      ��һ��
    $('#arrLeft').click(function(){
//        �����һ��ȡ����
        var first = classArr.shift();
//        �ŵ���ǰ��
        classArr.push(first);
//        ѭ������ÿһ��
        for(var i = 0; i < $list.length; i++){
//          dom�ķ�ʽ��
//          $list[i].className = classArr[i];
//          jQuery�ķ���
            $list.eq(i).removeClass().addClass(classArr[i])
        }
    })
})