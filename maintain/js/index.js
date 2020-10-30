var flag = true; //请求一次判定
var flagTwo = true; //请求一次判定
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
function wqzy() {
    g();
    h(0)
    // console.log('维权指引');
};
function xfts() {
    g()
    h(1)
    // console.log('消费提示');
    $(window).scroll(function(){
        // console.log(window.screen.height); //当前屏幕高
        // console.log(document.body.clientHeight); //屏幕的最高
        // console.log(window.screen.height+document.documentElement.scrollTop); //当前滚动条的高
        var scrollTop = window.screen.height+document.documentElement.scrollTop; //当前滚动条的高
        // console.log(scrollTop);
        
        if(document.body.clientHeight < (scrollTop + 1)){
            nums2++;
            document.getElementsByClassName("n2")[0].innerHTML = "正在加载中..."
            setTimeout(function(){
                // document.getElementsByClassName("yes")[0].style.display = "block"
                document.getElementsByClassName("n2")[0].innerHTML = "没有更多了哦..."
                get2(nums2)
            },1000)
            
        }
    })
    if (flag) {
        var o = false;
        var s1 = 0;
        function get2(n){
            $.ajax({
                url: `http://www.zjxf315.com:8080/api/DTcmsAPI.ashx?dotype=SelectArticleListNew&channel_id=2216&category_id=5461&order=sort_id,add_time desc&pageSize=30&page=${n}&dynamic_parameter&strWhere=multiple_single_selection in (0,1)`,
                type: 'get',
                dataType: "jsonp",
                jsonp: "callback",
                jsonpCallback: "successcallback",
                success: function (res) {
                    // console.log(res.data);
                    // var str = "";
                    if(res.data.length>5){
                        o = true;
                    }
                    if(res.data.length === 0 && s1 < 1){
                        document.getElementsByClassName("nodata2")[0].style.display = "flex";
                        document.getElementsByClassName("n2")[0].style.display = "none";
                    };
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
                                <li onclick="window.location.href = '${res.data[i].link_url == ''?('./detail.html?id='+res.data[i].id+'&row='+res.data[i].row_number+'&channel_id=2216&category_id=5461'):res.data[i].link_url}'">
                                <div class="sbox">
                                <p>${res.data[i].title}</p>
                                <p>${y}-${m}-${d} ${h}:${minute}</p>
                                </div>
                            </li>
                            `
                        } else {
                            if (res.data[i].title.length > 30) {
                                var tit = res.data[i].title.substring(0, 27) + '...'
                                // console.log(tit);
                            }
                            str1 += `
                            <li onclick="window.location.href = '${res.data[i].link_url == ''?('./detail.html?id='+res.data[i].id+'&row='+res.data[i].row_number+'&channel_id=2216&category_id=5461'):res.data[i].link_url}'">
                                <div class="imgT">
                                    <div class="sbox1">
                                        <p>${res.data[i].title}</p>
                                        <p>${y}-${m}-${d} ${h}:${minute}</p>
                                    </div>
                                    <div class="backImg imagess" style="background-image:url('${res.data[i].img_url}');"></div>
                                </div>
                            </li>
                            `
                        }
                        document.getElementsByClassName("ul1")[0].innerHTML = str1;
                        
    
                    };
                    if(o){
                        document.getElementsByClassName("n2")[0].style.marginTop = "0.3rem"
                    }else{
                        // document.getElementsByClassName("n2")[0].style.marginTop = "20%"
                        document.getElementsByClassName("n2")[0].className = "no n2 nn1"
                    }
                    
                }
            })
        };
        get2(nums2)
    }
    flag = false;
};
function zjtd() {
    g()
    h(2)
    // console.log('专家团队');
    $(window).scroll(function(){
        // console.log(window.screen.height); //当前屏幕高
        // console.log(document.body.clientHeight); //屏幕的最高
        // console.log(window.screen.height+document.documentElement.scrollTop); //当前滚动条的高
        var scrollTop = window.screen.height+document.documentElement.scrollTop; //当前滚动条的高
        // console.log(scrollTop);
        
        if(document.body.clientHeight < (scrollTop + 1)){
            nums1++;
            document.getElementsByClassName("n3")[0].innerHTML = "正在加载中..."
            setTimeout(function(){
                // document.getElementsByClassName("yes")[0].style.display = "block"
                document.getElementsByClassName("n3")[0].innerHTML = "没有更多了哦..."
                get1(nums1)
            },1000)
            
        }
    })
    if (flagTwo) {
        var o = false;
        var s2 = 0;
        function get1(n){
            $.ajax({
                url: `http://www.zjxf315.com:8080/api/DTcmsAPI.ashx?dotype=SelectArticleListNew&channel_id=2217&category_id=0&order=sort_id,add_time desc&pageSize=30&page=${n}&dynamic_parameter&strWhere=multiple_single_selection in (0,1)`,
                type: 'get',
                dataType: "jsonp",
                jsonp: "callback",
                jsonpCallback: "successcallback",
                success: function (res) {
                    console.log(res.data);
                    // var str = "";
                    // console.log(res.data[0].content.length);
                    if(res.data.length>3){
                        o = true;
                    }
                    if(res.data.length === 0 && s2 < 1){
                        document.getElementsByClassName("nodata3")[0].style.display = "flex";
                        document.getElementsByClassName("n3")[0].style.display = "none";
                        // document.getElementsByClassName("nodata2")[0].style.display = "flex";
                    };
                    s2++;
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
                        if (res.data[i].category_id == 5460) {
                            if (res.data[i].content.length > 132) {
                                var tit = res.data[i].content.substring(0, 132) + '...'
                                // console.log(tit);
                            }
                            if(res.data[i].Occupation.length >8){
                                res.data[i].Occupation = res.data[i].Occupation.substring(0,8)+'...'
                            }
                            // onclick="window.location.href = '${res.data[i].link_url == ''?('./detail.html?id='+res.data[i].id+'&row='+res.data[i].row_number+'&channel_id=2216&category_id=5461'):res.data[i].link_url}'"
                            str2 += `
                            <li onclick="window.location.href = '${res.data[i].link_url == ''?('./expert.html?id='+res.data[i].id+'&row='+res.data[i].row_number+'&channel_id=2217&category_id='+res.data[i].category_id):res.data[i].link_url}'">
                                <div class="zhuan">
                                    <img src="../image/imgHeadF.png" alt="">
                                    <div class="sbox2">
                                        <p>${res.data[i].title}  <h7>女</h7></p>
                                        <p>${res.data[i].Occupation || '暂无'}</p>
                                    </div>
                                </div>
                                ${res.data[i].content.length>46 ? (tit || "") : (res.data[i].content || '')}
                            </li>
                            `
                        } else {
                            if (res.data[i].content.length > 132) {
                                var tit = res.data[i].content.substring(0, 132) + '...'
                                // console.log(tit);
                            }
                            if(res.data[i].Occupation.length >8){
                                res.data[i].Occupation = res.data[i].Occupation.substring(0,8)+'...'
                            }
                            str2 += `
                            <li onclick="window.location.href = '${res.data[i].link_url == ''?('./expert.html?id='+res.data[i].id+'&row='+res.data[i].row_number+'&channel_id=2217&category_id='+res.data[i].category_id):res.data[i].link_url}'">
                                <div class="zhuan">
                                    <img src="../image/imgHeadM.png" alt="">
                                    <div class="sbox2">
                                        <p>${res.data[i].title}  <h7>男</h7></p>
                                        <p>${res.data[i].Occupation || '暂无'}</p>
                                    </div>
                                </div>
                                ${res.data[i].content.length>46 ? (tit || "") : (res.data[i].content || '')}
                                
                            </li>
                            `
                        }
                        document.getElementsByClassName("ul2")[0].innerHTML = str2;
                        
    
                    };
                    if(o){
                        document.getElementsByClassName("no")[0].style.marginTop = "0.3rem"
                    }else{
                        document.getElementsByClassName("n3")[0].className = "no n3 nn1"
                        // document.getElementsByClassName("no")[0].style.marginTop = "30%"
                    }
                    // console.log(str);
                    // console.log(document.getElementsByClassName("box"));
                    // document.getElementsByClassName("box")[0].innerHTML = str
    
                }
            })
        }
        
        get1(nums1)
    }
    flagTwo = false;
};




(function getdata() {
    $(window).scroll(function(){
        // console.log(window.screen.height); //当前屏幕高
        // console.log(document.body.clientHeight); //屏幕的最高
        // console.log(window.screen.height+document.documentElement.scrollTop); //当前滚动条的高
        var scrollTop = window.screen.height+document.documentElement.scrollTop; //当前滚动条的高
        // console.log(scrollTop);
        
        if(document.body.clientHeight < (scrollTop + 1)){
            nums++;
            document.getElementsByClassName("n1")[0].innerHTML = "正在加载中..."
            setTimeout(function(){
                // document.getElementsByClassName("yes")[0].style.display = "block"
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
            url: `http://www.zjxf315.com:8080/api/DTcmsAPI.ashx?dotype=SelectArticleListNew&channel_id=2215&category_id=5458&order=sort_id,add_time desc&pageSize=30&page=${n}&dynamic_parameter&strWhere=multiple_single_selection in (0,1)`,
            type: 'get',
            dataType: "jsonp",
            jsonp: "callback",
            jsonpCallback: "successcallback",
            success: function (res) {
                console.log(res.data);
                var str = "";
                if(res.data.length>5){
                    o = true;
                }
                if(res.data.length === 0 && s < 1){
                    document.getElementsByClassName("nodata1")[0].style.display = "flex";
                    document.getElementsByClassName("n1")[0].style.display = "none";
                };
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
                    
                    if (res.data[i].img_url == "") {
                        // if (res.data[i].title.length > 40) {
                        //     var titi = res.data[i].title.substring(0, 40) + '...'
                        // }
                        
                        str += `
                            <li onclick="window.location.href = '${res.data[i].link_url == ''?('./detail.html?id='+res.data[i].id+'&row='+res.data[i].row_number+'&channel_id=2215&category_id=5458'):res.data[i].link_url}'">
                            <div class="sbox">
                            <p>${res.data[i].title}</p>
                            <p>${y}-${m}-${d} ${h}:${minute}</p>
                            </div>
                        </li>
                        `
                    } else {
                        if (res.data[i].title.length > 28) {
                            var tit = res.data[i].title.substring(0, 27) + '...'
                            // console.log(tit);
                        }
                        str += `
                        <li onclick="window.location.href = '${res.data[i].link_url == ''?('./detail.html?id='+res.data[i].id+'&row='+res.data[i].row_number+'&channel_id=2215&category_id=5458'):res.data[i].link_url}'">
                            <div class="imgT">
                                <div class="sbox1">
                                    <p>${res.data[i].title}</p>
                                    <p>${y}-${m}-${d} ${h}:${minute}</p>
                                </div>
                                <div class="backImg imagess" style="background-image:url('${res.data[i].img_url}');"></div>
                            </div>
                        </li>
                        `
                    }
                    document.getElementsByClassName("ul")[0].innerHTML = str;
                    
    
                };
                if(o){
                    document.getElementsByClassName("n1")[0].style.marginTop = "0.3rem"
                }else{
                    document.getElementsByClassName("n1")[0].className = "no n1 nn1"
                }
                // console.log(str);
                // console.log(document.getElementsByClassName("box"));
                // document.getElementsByClassName("box")[0].innerHTML = str
    
            }
        })
    }
    
})()
