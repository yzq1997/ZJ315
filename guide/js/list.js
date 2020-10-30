var str = "";
var nums = 1;


(function getdata() {
    $(window).scroll(function(){
        // console.log(window.screen.height); //当前屏幕高
        // console.log(document.body.clientHeight); //屏幕的最高
        // console.log(window.screen.height+document.documentElement.scrollTop); //当前滚动条的高
        var scrollTop = window.screen.height+document.documentElement.scrollTop; //当前滚动条的高
        // console.log(scrollTop);
        
        if(document.body.clientHeight < (scrollTop + 1)){
            nums++;
            document.getElementsByClassName("no")[0].innerHTML = "正在加载中..."
            // console.log(nums);
            setTimeout(function(){
                // document.getElementsByClassName("yes")[0].style.display = "block"
                document.getElementsByClassName("no")[0].innerHTML = "没有更多了哦..."
                get(nums)
            },1000)
            
        }
    })
    get(nums);
    var o = false;
    var s = 0;
    function get(n){
        $.ajax({
            url: `http://www.zjxf315.com:8080/api/DTcmsAPI.ashx?dotype=SelectArticleListNew&channel_id=2221&category_id=5466&order=sort_id,add_time desc&pageSize=30&page=${n}&dynamic_parameter&strWhere=multiple_single_selection in (0,1)`,
            type: 'get',
            dataType: "jsonp",
            jsonp: "callback",
            jsonpCallback: "successcallback",
            success: function (res) {
                // console.log(res.data);
                var str = "";
                if(res.data.length>6){
                    o = true;
                }
                if(res.data.length === 0 && s < 1){
                    document.getElementsByClassName("nodata")[0].style.display = "flex";
                    document.getElementsByClassName("no")[0].style.display = "none";
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
                    if (res.data[i].img_url == "") {
                        // if (res.data[i].title.length > 42) {
                        //     var titi = res.data[i].title.substring(0, 41) + '...'
                        // }
                        str += `
                            <li onclick="window.location.href = '${res.data[i].link_url == ''?('./detail.html?id='+res.data[i].id+'&row='+res.data[i].row_number+'&channel_id=2221&category_id=5466'):res.data[i].link_url}'">
                            <p class="pp">${res.data[i].title}</p>
                            <p>${y}-${m}-${d} ${h}:${minute}</p>
                        </li>
                        `
                    } else {
                        // if (res.data[i].title.length > 30) {
                        //     var tit = res.data[i].title.substring(0, 27) + '...'
                        //     // console.log(tit);
                        // }
                        // <img src="${res.data[i].img_url}" alt=""></img>
                        // onclick="window.location.href = '${res.data[i].link_url == ''?('./detail.html?id='+res.data[i].id+'&row='+res.data[i].row_number+'&channel_id=2221&category_id=5466'):res.data[i].link_url}'"
                        str += `
                        <li onclick="window.location.href = '${res.data[i].link_url == ''?('./detail.html?id='+res.data[i].id+'&row='+res.data[i].row_number+'&channel_id=2221&category_id=5466'):res.data[i].link_url}'">
                            <div class="imgT">
                                <div>
                                    <p class="pp">${res.data[i].title}</p>
                                    <p>${y}-${m}-${d} ${h}:${minute}</p>
                                </div>
                                <div class="backImg imagess" style="background-image:url('${res.data[i].img_url}');"></div>
                            </div>
                        </li>
                        `
                    }
                    document.getElementsByClassName("ul")[0].innerHTML = str
                };
                if(o){
                    document.getElementsByClassName("no")[0].style.marginTop = "0.3rem"
                }else{
                    document.getElementsByClassName("no")[0].className = "no nn1"
                    // document.getElementsByClassName("no")[0].style.marginTop = "100%"
                }
                // console.log(str);
                // console.log(document.getElementsByClassName("box"));
                // document.getElementsByClassName("box")[0].innerHTML = str
    
            }
        })
    }
    
})()