/**
 * Created by DAGONG on 2017/7/21.
 */
//页面跳转
function progressJump(Dom) {
    var aAll=$('.'+Dom).find('a');
    $.each(aAll,function (index, item) {
        $(item).click(function () {
            $(this).nextAll().removeClass('active');
            $(this).prevAll().addClass('active');
            $(this).addClass('active');
        });
    })
}


