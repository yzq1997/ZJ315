var flag = true
var flag1 = true
var flag2 = true
var str = "";
var str1 = "";
var str2 = "";
var nums = 1;
var nums1 = 1;
var nums2 = 1;


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
function fxxf() {
    // console.log('放心消费');
    g();
    h(0);

};
function xxwly() {
    // console.log('线下无理由');
    g()
    h(1);
    $(window).scroll(function(){
        // console.log(window.screen.height); //当前屏幕高
        // console.log(document.body.clientHeight); //屏幕的最高
        // console.log(window.screen.height+document.documentElement.scrollTop); //当前滚动条的高
        var scrollTop = window.screen.height+document.documentElement.scrollTop; //当前滚动条的高
        // console.log(scrollTop);
        
        if(document.body.clientHeight < (scrollTop + 1)){
            
            nums1++;
            document.getElementsByClassName("n2")[0].innerHTML = "正在加载中..."
            setTimeout(function(){
                // document.getElementsByClassName("yes")[0].style.display = "block"
                document.getElementsByClassName("n2")[0].innerHTML = "没有更多了哦..."
                get1(nums1)
            },1000)
            
        }
    })
    if(flag1){
        get1(nums1)
        var o = false;
        var s1 = 0;
        function get1(n){
            $.ajax({
                url: `http://www.zjxf315.com:8080/api/DTcmsAPI.ashx?dotype=SelectArticleListNew&channel_id=2222&category_id=5468&order=sort_id,add_time desc&pageSize=30&page=${n}&dynamic_parameter&strWhere=multiple_single_selection in (0,1)`,
                type: 'get',
                dataType: "jsonp",
                jsonp: "callback",
                jsonpCallback: "successcallback",
                success: function (res1) {
                    // console.log(res.data);
                    // var str = "";
                    if(res1.data.length>3){
                        o = true;
                    }
                    if(res1.data.length === 0 && s1 < 1){
                        document.getElementsByClassName("nodata2")[0].style.display = "flex";
                        document.getElementsByClassName("n2")[0].style.display = "none";
                    }
                    s1++;
                    for (let i = 0; i < res1.data.length; i++) {
                        let time = res1.data[i].add_time.substring(6, 19)
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
                        // document.getElementsByClassName("img")[0].src = "../image/defualt.png"
                        // if(res1.data[i].title.length > 14){
                        //     res1.data[i].title = res1.data[i].title.substring(0,14) +"..."
                        // }
                        // if(res1.data[i].zhaiyao.length > 47){
                        //     res1.data[i].zhaiyao = res1.data[i].zhaiyao.substring(0,47) +"..."
                        // }
                        if(res1.data[i].img_url === ""){
                            str1 += `
                            <li onclick="window.location.href = '${res1.data[i].link_url == ''?('./detail.html?id='+res1.data[i].id+'&row='+res1.data[i].row_number+'&channel_id=2222&category_id='+res1.data[i].category_id): res1.data[i].link_url}'">
                            <img class="img" src="../image/defualt.png" alt="">
                            <div>
                                <p class="pp1">${res1.data[i].title}</p>
                                <p class="pp2">${res1.data[i].zhaiyao}</p>
                            </div>
                        </li>
                            `
                        }else{
                            str1 += `
                            <li onclick="window.location.href = '${res1.data[i].link_url == ''?('./detail.html?id='+res1.data[i].id+'&row='+res1.data[i].row_number+'&channel_id=2222&category_id='+res1.data[i].category_id): res1.data[i].link_url}'">
                            
                            <div class="backImg imagess" style="background-image:url('${res1.data[i].img_url}');"></div>
                            <div>
                                <p class="pp1">${res1.data[i].title}</p>
                                <p class="pp2">${res1.data[i].zhaiyao}</p>
                            </div>
                        </li>
                       `
                        }
        
                       
                       document.getElementsByClassName("ul1")[0].innerHTML = str1
        
                    };
                    if(o){
                        document.getElementsByClassName("n2")[0].style.marginTop = "0.3rem"
                    }else{
                        document.getElementsByClassName("n2")[0].className = "no n2 nn1"
                    }
                }
            })
        }
    }
    flag1 = false;

};
function qyfc() {
    // console.log('企业风采');
    g();
    h(2);
    $(window).scroll(function(){
        // console.log(window.screen.height); //当前屏幕高
        // console.log(document.body.clientHeight); //屏幕的最高
        // console.log(window.screen.height+document.documentElement.scrollTop); //当前滚动条的高
        var scrollTop = window.screen.height+document.documentElement.scrollTop; //当前滚动条的高
        // console.log(scrollTop);
        
        if(document.body.clientHeight < (scrollTop + 1)){
            document.getElementsByClassName("n3")[0].innerHTML = "正在加载中..."
            nums2++;
            setTimeout(function(){
                document.getElementsByClassName("n3")[0].innerHTML = "没有更多了哦..."
                get2(nums2)
            },1000)
            
        }
    })
    if(flag2){
        var o = false;
        var s2 = 0;
        get2(nums2);
        function get2(n){
            $.ajax({
                url: `http://www.zjxf315.com:8080/api/DTcmsAPI.ashx?dotype=SelectArticleListNew&channel_id=2222&category_id=5469&order=sort_id,add_time desc&pageSize=30&page=${n}&dynamic_parameter&strWhere=multiple_single_selection in (0,1)`,
                type: 'get',
                dataType: "jsonp",
                jsonp: "callback",
                jsonpCallback: "successcallback",
                success: function (res2) {
                    // console.log(res.data);
                    // var str = "";
                    if(res2.data.length>3){
                        o = true;
                    }
                    if(res2.data.length === 0 && s2 < 1){
                        document.getElementsByClassName("nodata3")[0].style.display = "flex";
                        document.getElementsByClassName("n3")[0].style.display = "none";
                    }
                    s2++;
                    for (let i = 0; i < res2.data.length; i++) {
                        let time = res2.data[i].add_time.substring(6, 19)
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
                        // if(res2.data[i].title.length > 14){
                        //     res2.data[i].title = res2.data[i].title.substring(0,14) +"..."
                        // }
                        // if(res2.data[i].zhaiyao.length > 47){
                        //     res2.data[i].zhaiyao = res2.data[i].zhaiyao.substring(0,47) +"..."
                        // }

                        if(res2.data[i].img_url === ""){
                            str2 += `
                            <li onclick="window.location.href = '${res2.data[i].link_url == ''?('./detail.html?id='+res2.data[i].id+'&row='+res2.data[i].row_number+'&channel_id=2222&category_id='+res2.data[i].category_id): res2.data[i].link_url}'">
                            <img class="img" src="../image/defualt.png" alt="">
                            <div>
                                <p class="pp1">${res2.data[i].title}</p>
                                <p class="pp2">${res2.data[i].zhaiyao}</p>
                            </div>
                        </li>
                            `
                        }else{
                            str2 += `
                            <li onclick="window.location.href = '${res2.data[i].link_url == ''?('./detail.html?id='+res2.data[i].id+'&row='+res2.data[i].row_number+'&channel_id=2222&category_id='+res2.data[i].category_id): res2.data[i].link_url}'">
                            <div class="backImg imagess" style="background-image:url('${res2.data[i].img_url}');"></div>
                            <div>
                                <p class="pp1">${res2.data[i].title}</p>
                                <p class="pp2">${res2.data[i].zhaiyao}</p>
                            </div>
                        </li>
                       `
                        }
                       
                       document.getElementsByClassName("ul2")[0].innerHTML = str2
        
                    };
                    if(o){
                        document.getElementsByClassName("n3")[0].style.marginTop = "0.3rem"
                    }else{
                        document.getElementsByClassName("n3")[0].className = "no n3 nn1"
                    }
                }
            })
        }
    }
    flag2 = false;
};

(function getdata() {
    $(window).scroll(function(){
        // console.log(window.screen.height); //当前屏幕高
        // console.log(document.body.clientHeight); //屏幕的最高
        // console.log(window.screen.height+document.documentElement.scrollTop); //当前滚动条的高
        var scrollTop = window.screen.height+document.documentElement.scrollTop; //当前滚动条的高
        // console.log(scrollTop);
        
        if(document.body.clientHeight < (scrollTop + 1)){
            document.getElementsByClassName("n1")[0].innerHTML = "正在加载中..."
            nums++;
            setTimeout(function(){
                document.getElementsByClassName("n1")[0].innerHTML = "没有更多了哦..."
                get(nums)
            },1000)
            
        }
    })

    get(nums);
    var o = false;
    var s = 0;
    function get(n){
        $.ajax({
            url: `http://www.zjxf315.com:8080/api/DTcmsAPI.ashx?dotype=SelectArticleListNew&channel_id=2222&category_id=5467&order=sort_id,add_time desc&pageSize=30&page=${n}&dynamic_parameter&strWhere=multiple_single_selection in (0,1)`,
            type: 'get',
            dataType: "jsonp",
            jsonp: "callback",
            jsonpCallback: "successcallback",
            success: function (res) {
                console.log(res.data);
                // var str = "";
                if(res.data.length>3){
                    o = true;
                }
                if(res.data.length === 0 && s < 1){
                    document.getElementsByClassName("nodata1")[0].style.display = "flex";
                    document.getElementsByClassName("n1")[0].style.display = "none";
                }
                s++;
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
                    // document.getElementsByClassName("img")[0].src = "../image/defualt.png"
                    // if(res.data[i].title.length > 14){
                    //     res.data[i].title = res.data[i].title.substring(0,14) +"..."
                    // }
                    // if(res.data[i].zhaiyao.length > 47){
                    //     res.data[i].zhaiyao = res.data[i].zhaiyao.substring(0,47) +"..."
                    // }
    
                    if(res.data[i].img_url === ""){
                        str += `
                        <li onclick="window.location.href = '${res.data[i].link_url == ''?('./detail.html?id='+res.data[i].id+'&row='+res.data[i].row_number+'&channel_id=2222&category_id='+res.data[i].category_id): res.data[i].link_url}'">
                        <img class="img" src="../image/defualt.png" alt="">
                        <div>
                            <p class="pp1">${res.data[i].title}</p>
                            <p class="pp2">${res.data[i].zhaiyao}</p>
                        </div>
                    </li>
                        `
                        // <img class="img" src="${res.data[i].img_url}" alt="">
                        // onclick="window.location.href = '${res.data[i].link_url == ''?('./detail.html?id='+res.data[i].id+'&row='+res.data[i].row_number+'&channel_id=2215&category_id=5458'):res.data[i].link_url}'"
                    }else{
                        str += `
                        <li onclick="window.location.href = '${res.data[i].link_url == ''?('./detail.html?id='+res.data[i].id+'&row='+res.data[i].row_number+'&channel_id=2222&category_id='+res.data[i].category_id): res.data[i].link_url}'">
                        <div class="backImg imagess" style="background-image:url('${res.data[i].img_url}');"></div>
                        <div>
                            <p class="pp1">${res.data[i].title}</p>
                            <p class="pp2">${res.data[i].zhaiyao}</p>
                        </div>
                    </li>
                   `
                    }
                   
                   document.getElementsByClassName("ul")[0].innerHTML = str
    
                };
                if(o){
                    document.getElementsByClassName("n1")[0].style.marginTop = "0.3rem"
                }else{
                    document.getElementsByClassName("n1")[0].className = "no n1 nn1"
                }
    
            }
        })
    }
    
})()













