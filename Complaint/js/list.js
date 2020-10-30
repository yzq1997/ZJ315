
var str = "";
var nums = 1;
// console.log(window);


(function getdata() {
    
    $(window).scroll(function(){
        // console.log(window.screen.height); //当前屏幕高
        // console.log(document.body.clientHeight); //屏幕的最高
        // console.log(window.screen.height+document.documentElement.scrollTop); //当前滚动条的高
        var scrollTop = window.screen.height+document.documentElement.scrollTop; //当前滚动条的高
        // console.log(scrollTop);
        // console.log(document.body.clientHeight);
        // console.log(scrollTop);
        
        if(document.body.clientHeight < (scrollTop + 1)){
            document.getElementsByClassName("no")[0].innerHTML = "正在加载中..."
            nums++;
            // console.log(nums);
            setTimeout(function(){
                // document.getElementsByClassName("yes")[0].style.display = "none"
                document.getElementsByClassName("no")[0].innerHTML = "没有更多了哦..."
                get(nums)
            },1000)
            
        }
    })
    
    get(nums)
    var o = false;
    var s = 0;
    function get(n){
        $.ajax({  //http://www.zjxf315.com:8080/
            url: `http://www.zjxf315.com:8080/api/DTcmsAPI.ashx?dotype=SelectArticleListNew&channel_id=2214&category_id=5457&order=sort_id,add_time desc&pageSize=30&page=${n}&dynamic_parameter&strWhere=multiple_single_selection in (0,1)`,
            type: 'get',
            dataType: "jsonp",
            jsonp: "callback",
            jsonpCallback: "successcallback",
            success: function (res) {
                console.log(res.data);
                // console.log(res.data.length);
                // console.log(window.screen.height);
                // console.log(document.body.clientHeight);
                
                
                if(res.data.length>6){
                    o = true;
                }
                if(res.data.length === 0 && s < 1){
                    document.getElementsByClassName("nodata")[0].style.display = "flex";
                    document.getElementsByClassName("no")[0].style.display = "none";
                }
                s++;
                // o++;
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
                    // if(res.data[i].title.length > 40){
                    //     // console.log(444);
                    //     var tit = res.data[i].title.substring(0,39) + '...'
                    //     // console.log(tit);
                    // }
                    // console.log(res.data[i].link_url);
                    // var lj = false;
                    // if(res.data[i].link_url !== ""){
                    //     lj = true
                    // }
                    // onclick="window.location.href = '${res.data[i].link_url == ''?('./detail.html?id='+res.data[i].id+'&row='+res.data[i].row_number+'&channel_id=2215&category_id=5458'):res.data[i].link_url}'"
                    str += `
                        <li>
                            <div class="li"  onclick="window.location.href = '${res.data[i].link_url == ''?('./detail.html?id='+res.data[i].id+'&row='+res.data[i].row_number):res.data[i].link_url}'">
                                <p class="p1">${res.data[i].title}</p>
                                <p class="p2">${y}-${m}-${d} ${h}:${minute}</p>
                            </div>
                        </li>
                    `
                };
                // console.log(str);
                // console.log(document.getElementsByClassName("box"));
                document.getElementsByClassName("yes")[0].style.display = "none"
                document.getElementsByClassName("box")[0].innerHTML = str

                
                // console.log(o);
                
                if(o){
                    document.getElementsByClassName("no")[0].style.marginTop = "0.3rem"
                }else{
                    document.getElementsByClassName("no")[0].className = "no nn1"
                    // document.getElementsByClassName("no")[0].style.marginTop = "100%"
                }
            }
        })
    }
    

    
})()

