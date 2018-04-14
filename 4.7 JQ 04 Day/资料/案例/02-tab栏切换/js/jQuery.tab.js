/**
 * Created by Sun on 2017/6/20.
 */
(function ($) {

  $.tab = function (options) {

    // 默认参数
    var defaults = {
      tabItemSelector:'.tab-item',
      itemMouseEnterClass:'active',
      productsSelector:'.products .main',
      productsMouseEnterClass:'selected'
    };

    //for(var type in options){
    //  defaults[type] = options[type];
    //}

    $.extend(defaults, options);

    $(defaults.tabItemSelector).mouseenter(function () {
      // 改变自己的样式   添加一个 active
      $(this).addClass(defaults.itemMouseEnterClass).siblings().removeClass(defaults.itemMouseEnterClass);
      // 改变下面显示的类样式  添加一个selected
      $(defaults.productsSelector).eq($(this).index()).addClass(defaults.productsMouseEnterClass).siblings().removeClass(defaults.productsMouseEnterClass);
    });
  }

}(window.jQuery))


