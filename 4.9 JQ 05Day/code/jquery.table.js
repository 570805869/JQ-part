(function ($) {
  $.fn.table = function (head, data) {
    // 动态生成表格
    // 0 表格
    var arr = [];
    arr.push('<table>');
    // 1 表头
    arr.push('<thead>');
    arr.push('<tr>');
    // 循环表头数据
    $.each(head, function (index, item) {
      arr.push('<th>'+ item +'</th>');
    });
    
    arr.push('</tr>');
    arr.push('</thead>');
    // 2 数据行
    arr.push('<tbody>');
    // 遍历数据行数据 
    $.each(data, function (index, item) {
      arr.push('<tr>');
      // 序号
      arr.push('<td>' + (index + 1) + '</td>');
      // 其它列
      $.each(item, function (key, value) {
        arr.push('<td>'+  value  +'</td>')
      });
      arr.push('</tr>');
    });
    arr.push('</tbody>');

    arr.push('</table>');

    // 把表格加入到父元素中
    this.append(arr.join(''));
  };
})(jQuery);