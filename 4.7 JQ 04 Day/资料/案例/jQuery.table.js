/**
 * Created by Sun on 2017/6/20.
 */
(function ($) {
  $.fn.table = function (ths, arr) {
    //动态创建表格
    var code = new Array();
    code.push('<table><tbody><tr>');

    // 动态创建表头
    $.each(ths, function (i, item) {
      code.push('<th>'+ item +'</th>');
    });

    // 表头创建完成
    code.push( '</tr>');

    // 循环遍历数据
    $.each(arr, function (i, item) {
      //制作数据行
      code.push('<tr><td>'+ ( i + 1 ) +'</td>');
      for(var key in this){
        code.push('<td>'+ this[key] +'</td>');
      }
      code.push('</tr>');

    });
    // 完成表格创建
    code.push('</tbody></table>');

    //将数据行转换成jQuery对象并添加到div中
    $(code.join('')).appendTo(this);
  }
}(window.jQuery));