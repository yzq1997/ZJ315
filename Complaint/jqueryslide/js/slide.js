
; (function ($) {
    var box = document.getElementById("bm_content");
    var l1 = document.getElementById("tb1");
    var l2 = document.getElementById("tb2");
    autoScroll();
    function autoScroll() {
        var product = RenderList();
        l1.innerHTML = product;
        if (l1.offsetHeight > box.offsetHeight) {
            l2.innerHTML = l1.innerHTML;//克隆list1的数据，使得list2和list1的数据一样
            scrollMove = setInterval(scrollup, 30);//数值越大，滚动速度越慢
            box.onmouseover = function () {
                clearInterval(scrollMove)
            }
        }
    }
    function scrollup() {
        //滚动条距离顶部的值恰好等于list1的高度时，达到滚动临界点，此时将让scrollTop=0,让list1回到初始位置，实现无缝滚动
        if (box.scrollTop >= l1.offsetHeight) {
            box.scrollTop = 0;
        } else {
            box.scrollTop++;
        }
    }
    //鼠标离开时，滚动继续
    box.onmouseout = function () {
        scrollMove = setInterval(scrollup, 30);
    }
    function RenderList() {
        var str = '';
        for (var i = 0; i < 20; i++) {
            var a = i + 1;
            str += '<tr>';
            str += '<td class="ellipsis">';
            str += '<img src="/images/portrait_default.png"/>';
            str += '<span class="center" title="张三' + a + '" style="margin-left: 10px;">张三' + a + '</span>';
            str += '</td>';
            str += '<td class="ellipsis" title="' + a + '年级上海教育版同步课">' + a + '年级上海教育版同步课</td>';
            str += '<td class="ellipsis" title="16点46分">16点46分</td>';
            str += ' </tr>';
        }
        return str;
    }

})(jQuery)