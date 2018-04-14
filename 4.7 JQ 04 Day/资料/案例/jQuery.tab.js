/**
 * Created by Sun on 2017/6/20.
 */
(function ($) {

  $.tab = function (options) {

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
      // �ı��Լ�����ʽ   ���һ�� active
      $(this).addClass(defaults.itemMouseEnterClass).siblings().removeClass(defaults.itemMouseEnterClass);
      // �ı�������ʾ������ʽ  ���һ��selected
      $(defaults.productsSelector).eq($(this).index()).addClass(defaults.productsMouseEnterClass).siblings().removeClass(defaults.productsMouseEnterClass);
    });
  }

}(window.jQuery))


