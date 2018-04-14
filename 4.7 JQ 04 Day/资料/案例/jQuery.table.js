/**
 * Created by Sun on 2017/6/20.
 */
(function ($) {
  $.fn.table = function (ths, arr) {
    //��̬�������
    var code = new Array();
    code.push('<table><tbody><tr>');

    // ��̬������ͷ
    $.each(ths, function (i, item) {
      code.push('<th>'+ item +'</th>');
    });

    // ��ͷ�������
    code.push( '</tr>');

    // ѭ����������
    $.each(arr, function (i, item) {
      //����������
      code.push('<tr><td>'+ ( i + 1 ) +'</td>');
      for(var key in this){
        code.push('<td>'+ this[key] +'</td>');
      }
      code.push('</tr>');

    });
    // ��ɱ�񴴽�
    code.push('</tbody></table>');

    //��������ת����jQuery������ӵ�div��
    $(code.join('')).appendTo(this);
  }
}(window.jQuery));