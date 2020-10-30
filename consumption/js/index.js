var flag = true; //请求一次判定
var str = "";
var str1 = "";
var nums = 1;
var nums1 = 1;

var aInput = document.getElementsByTagName('span');
var aDiv = document.getElementsByClassName('tap');
function g() {
    for (var j = 0; j < aInput.length; j++) {      //通过点击按钮的时候再次循环按钮，是为了清空active类
        aInput[j].className = ''             //清空active类
    }
    for (var i = 0; i < aDiv.length; i++) {        //把所有的divde的display重新设置为none，就是不显示
        aDiv[i].style.display = 'none'
    }
}
function h(i) {
    aInput[i].className = 'active'  //点击哪个按钮就哪个按钮加active类
    aDiv[i].style.display = 'block' //点击哪个按钮就把第几个div给显示出来
}
function xfdc() {
    // console.log('消费调查');
    g();
    h(0);
};
function dcbg() {
    console.log('调查报告');
    g();
    h(1);
    $(window).scroll(function () {
        // console.log(window.screen.height); //当前屏幕高
        // console.log(document.body.clientHeight); //屏幕的最高
        // console.log(window.screen.height+document.documentElement.scrollTop); //当前滚动条的高
        var scrollTop = window.screen.height + document.documentElement.scrollTop; //当前滚动条的高
        // console.log(scrollTop);

        if (document.body.clientHeight < (scrollTop + 1)) {
            document.getElementsByClassName("n2")[0].innerHTML = "正在加载中..."
            nums1++;
            setTimeout(function () {
                // document.getElementsByClassName("yes")[0].style.display = "block"
                document.getElementsByClassName("n2")[0].innerHTML = "没有更多了哦..."
                get1(nums1)
            }, 1000)

        }
    })
    if (flag == true) {
        get1(nums1);
        var o = false;
        var s1 = 0;
        function get1(n) {
            $.ajax({
                url: `http://www.zjxf315.com:8080/api/DTcmsAPI.ashx?dotype=SelectArticleListNew&channel_id=2219&category_id=5463&order=sort_id,add_time desc&pageSize=30&page=${n}&dynamic_parameter&strWhere=multiple_single_selection in (0,1)`,
                type: 'get',
                dataType: "jsonp",
                jsonp: "callback",
                jsonpCallback: "successcallback",
                success: function (res) {
                    console.log(res);
                    // var str = "";
                    if (res.data.length > 5) {
                        o = true;
                    }
                    if (res.data.length === 0 && s1 < 1) {
                        document.getElementsByClassName("nodata2")[0].style.display = "flex";
                        document.getElementsByClassName("n2")[0].style.display = "none";
                    }
                    s1++;
                    for (let i = 0; i < res.data.length; i++) {
                        let time = res.data[i].add_time.substring(6, 19)
                        // console.log(time);
                        let date = new Date(Number(time));
                        var y = date.getFullYear();
                        var m = date.getMonth() + 1;
                        m = m < 10 ? ('0' + m) : m;
                        var d = date.getDate();
                        d = d < 10 ? ('0' + d) : d;
                        var h = date.getHours();
                        var minute = date.getMinutes();
                        minute = minute < 10 ? ('0' + minute) : minute;
                        // console.log(res.data[i].title);


                        if (res.data[i].img_url == "") {
                            // if (res.data[i].title.length > 42) {
                            //     var titi = res.data[i].title.substring(0, 41) + '...'
                            // }
                            str1 += `
                                <li onclick="window.location.href = '${res.data[i].link_url == ''?('./detail.html?id='+res.data[i].id+'&row='+res.data[i].row_number+'&channel_id=2219&category_id=5463'):res.data[i].link_url}'">
                                <p class="pp1">${res.data[i].title}</p>
                                <p>${y}-${m}-${d} ${h}:${minute}</p>
                            </li>
                            `
                        } else {
                            // if (res.data[i].title.length > 30) {
                            //     var tit = res.data[i].title.substring(0, 27) + '...'
                            //     // console.log(tit);
                            // }
                            // <img src="${res.data[i].img_url}" alt=""></img>
                            // onclick="window.location.href = '${res.data[i].link_url == ''?('./detail.html?id='+res.data[i].id+'&row='+res.data[i].row_number+'&channel_id=2219&category_id=5463'):res.data[i].link_url}'"
                            str1 += `
                            <li onclick="window.location.href = '${res.data[i].link_url == ''?('./detail.html?id='+res.data[i].id+'&row='+res.data[i].row_number+'&channel_id=2219&category_id=5463'):res.data[i].link_url}'">
                                <div class="imgT">
                                    <div>
                                        <p class="pp1">${res.data[i].title}</p>
                                        <p>${y}-${m}-${d} ${h}:${minute}</p>
                                    </div>
                                    <div class="backImg imagess" style="background-image:url('${res.data[i].img_url}');"></div>
                                </div>
                            </li>
                            `
                        }
                        document.getElementsByClassName("ul1")[0].innerHTML = str1
                    };

                    if (o) {
                        document.getElementsByClassName("n2")[0].style.marginTop = "0.3rem"
                    } else {
                        document.getElementsByClassName("n2")[0].className = "no n2 nn1"
                    }
                }
            })
        }

    }

    flag = false;


};

(function getdata() {
    // console.log(flag);
    $(window).scroll(function () {
        // console.log(window.screen.height); //当前屏幕高
        // console.log(document.body.clientHeight); //屏幕的最高
        // console.log(window.screen.height+document.documentElement.scrollTop); //当前滚动条的高
        var scrollTop = window.screen.height + document.documentElement.scrollTop; //当前滚动条的高
        // console.log(scrollTop);

        if (document.body.clientHeight < (scrollTop + 1)) {
            document.getElementsByClassName("n1")[0].innerHTML = "正在加载中..."
            nums++;
            // console.log(nums);
            setTimeout(function () {
                // document.getElementsByClassName("yes")[0].style.display = "block"
                document.getElementsByClassName("n1")[0].innerHTML = "没有更多了哦..."
                get(nums)
            }, 1000)

        }
    })
    get(nums,gett);
    var o = false;
    var s = 0;
    function get(n,callback) {
        $.ajax({
            url: `http://www.zjxf315.com:8080/api/DTcmsAPI.ashx?dotype=SelectArticleListNew&channel_id=2218&category_id=5462&order=sort_id,add_time desc&pageSize=30&page=${n}&dynamic_parameter&strWhere=multiple_single_selection in (0,1)`,
            type: 'get',
            dataType: "jsonp",
            jsonp: "callback",
            jsonpCallback: "successcallback",
            success: function (res) {
                // console.log(res);
                if (res.data.length > 5) {
                    o = true;
                }
                if (res.data.length === 0 && s < 1) {
                    document.getElementsByClassName("nodata1")[0].style.display = "flex";
                    document.getElementsByClassName("n1")[0].style.display = "none";
                };
                s++;
                // var str = "";
                for (let i = 0; i < res.data.length; i++) {
                    let time = res.data[i].add_time.substring(6, 19)
                    // console.log(time);
                    let date = new Date(Number(time));
                    var y = date.getFullYear();
                    var m = date.getMonth() + 1;
                    m = m < 10 ? ('0' + m) : m;
                    var d = date.getDate();
                    d = d < 10 ? ('0' + d) : d;
                    var h = date.getHours();
                    var minute = date.getMinutes();
                    minute = minute < 10 ? ('0' + minute) : minute;
                    // console.log(res.data[i].title);


                    if (res.data[i].img_url == "") {
                       
                        str += `
                            <li onclick="window.location.href = '${res.data[i].link_url == ''?('./detail.html?id='+res.data[i].id+'&row='+res.data[i].row_number+'&channel_id=2218&category_id=5462'):res.data[i].link_url}'">
                            <p class="pp1">${res.data[i].title}</p>
                            <p>${y}-${m}-${d} ${h}:${minute}</p>
                        </li>
                        `
                    } else {
                        
                        // <img src="${res.data[i].img_url}" alt=""></img>
                        // onclick="window.location.href = '${res.data[i].link_url == ''?('./detail.html?id='+res.data[i].id+'&row='+res.data[i].row_number+'&channel_id=2215&category_id=5458'):res.data[i].link_url}'"
                        str += `
                        <li onclick="window.location.href = '${res.data[i].link_url == ''?('./detail.html?id='+res.data[i].id+'&row='+res.data[i].row_number+'&channel_id=2218&category_id=5462'):res.data[i].link_url}'">
                            <div class="imgT">
                                <div>
                                    <p class="pp1">${res.data[i].title}</p>
                                    <p>${y}-${m}-${d} ${h}:${minute}</p>
                                </div>
                                <div class="backImg imagess" style="background-image:url('${res.data[i].img_url}');"></div>
                            </div>
                        </li>
                        `
                    }
                    document.getElementsByClassName("ul")[0].innerHTML = str
                };
                if (o) {
                    document.getElementsByClassName("n1")[0].style.marginTop = "0.3rem"
                } else {
                    document.getElementsByClassName("n1")[0].className = "no n1 nn1"
                }
                callback();
            }
        })
    };
    function gett() {
        $.ajax({
            url: `http://www.zjxf315.com:8080/api/DTcmsAPI.ashx?doType=GetArticleModel&channel_id=2224&id=1`,
            type: 'get',
            dataType: "jsonp",
            jsonp: "callback",
            jsonpCallback: "successcallback",
            success: function (res) {
                console.log(res);
                if (res.status == 0) {
                    // console.log(666);
                    document.getElementsByClassName("fix")[0].style.display = "block"
                }else{
                    document.getElementsByClassName("fix")[0].style.display = "none"
                }

            }
        })
    }
})()

function goyxzj() {
    $.ajax({
        url: `http://www.zjxf315.com:8080/api/DTcmsAPI.ashx?doType=GetArticleModel&channel_id=2224&id=1`,
        type: 'get',
        dataType: "jsonp",
        jsonp: "callback",
        jsonpCallback: "successcallback",
        success: function (res) {
            console.log(res);
            if(res.link_url !== ""){
                window.location.href = `${res.link_url}`
            }else{
                window.location.href = "./yxzj.html"
            }

        }
    })
    // window.location.href = "./yxzj.html"
}












