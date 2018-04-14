(function ($) {
  $.tab = function (options) {
    // 默认的参数
    var defaults = {
      itemsSelector: '.tab .tab-item',   // 标题的选择器
      mainsSelector: '.product .main',    // 详细内容的选择器
      itemSelectedClass: 'active',        // 标题被选中的时候的类样式
      mainSelectedClass: 'selected'      // 详细内容被选中的时候的类样式
    }
    
    // 判断options是否传递，如果传递，把options中的属性复制给defaults
    // for (var key in options) {
    //   defaults[key] = options[key];
    // }

    if (options) {
      // extend方法的作用，把options对象的成员拷贝给defaults对象
      $.extend(defaults, options);
    }

    // 给items注册mouseenter事件
    $(defaults.itemsSelector).mouseenter(function () {
      // 让当前的item高亮显示，其它item取消高亮显示
      $(this).addClass(defaults.itemSelectedClass).siblings().removeClass(defaults.itemSelectedClass);
      // 获取当前item的索引
      var index = $(this).index();
      // 找到所有详细内容，让当前详细内容显示，其它详细内容隐藏
      $(defaults.mainsSelector).eq(index).addClass(defaults.mainSelectedClass).siblings().removeClass(defaults.mainSelectedClass);
    });


  };
})(jQuery);