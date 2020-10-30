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
            document.getElementsByClassName("no")[0].innerHTML = "正在加载中..."
            nums++;
            setTimeout(function(){
                // document.getElementsByClassName("yes")[0].style.display = "block"
                document.getElementsByClassName("no")[0].innerHTML = "没有更多了哦..."
                get(nums)
            },1000)
            
        }
    })
    get(nums);
    var o = false;
    var s =0;
    function get(n){
        $.ajax({
            url: `http://www.zjxf315.com:8080/api/DTcmsAPI.ashx?dotype=SelectArticleListNew&channel_id=2223&category_id=5470&order=sort_id,add_time desc&pageSize=30&page=${n}&dynamic_parameter&strWhere=multiple_single_selection in (0,1)`,
            type: 'get',
            dataType: "jsonp",
            jsonp: "callback",
            jsonpCallback: "successcallback",
            success: function (res) {
                console.log(res.data);
                // var str = "";
                if(res.data.length>2){
                    o = true;
                }
                if(res.data.length === 0 && s < 1){
                    document.getElementsByClassName("nodata")[0].style.display = "flex";
                    document.getElementsByClassName("no")[0].style.display = "none";

                }
                s++;
                for (var i = 0; i < res.data.length; i++) {
                    var p = true;
                    if(res.data[i].img_url == ""){
                        p = false
                    }
                    // console.log(res.data[i].title);
                    // if(res.data[i].title.length>20){
                    //     res.data[i].title = res.data[i].title.substring(0,19)+'...'
                    // }
                    
                    // onclick="window.location.href = '${res.data[i].link_url == ''?('./detail.html?id='+res.data[i].id+'&row='+res.data[i].row_number+'&channel_id=2215&category_id=5458'):res.data[i].link_url}'"
                    // <img src="${p == true?res.data[i].img_url:'../image/qs.png'}" alt="">
                    str += `
                        <li onclick="window.location.href = '${res.data[i].link_url == ''?('./detail.html?id='+res.data[i].id+'&row='+res.data[i].row_number):res.data[i].link_url}'">
                            <div class="backImg imagess" style="background-image:url('${res.data[i].img_url||'../image/qs.png'}');"></div>
                            <p class="pp1">${res.data[i].title}</p>
                        </li>
                    `
                };
                document.getElementsByClassName("ul")[0].innerHTML = str;
                if(o){
                    document.getElementsByClassName("no")[0].style.marginTop = "0.3rem"
                }else{
                    document.getElementsByClassName("no")[0].className = "no nn1"
                    // document.getElementsByClassName("no")[0].style.marginTop = "30%"
                }
            }
        })
    }
    
})()