function goback(){
    window.history.go(-1)
}

(function getdata(){
    var id = getQueryVariable("id")
    var row = getQueryVariable("row")
    var channel_id = getQueryVariable("channel_id")
    var category_id = getQueryVariable("category_id")
    // console.log(id);
    // console.log(row);
    // console.log(channel_id);
    // console.log(category_id);
    
    $.ajax({
        url: `http://www.zjxf315.com:8080/api/DTcmsAPI.ashx?dotype=GetArticleDetailNew&channel_id=${channel_id}&category_id=0&rows=${row}&strOrder=sort_id%2Cadd_time+desc&articleType=&article_id=${id}&strWhere=multiple_single_selection+in+(0%2C2)`,
        type: 'get',
        dataType: "jsonp",
        jsonp: "callback",
        jsonpCallback: "successcallback",
        success:function(res){
            if(res.currentArticleList[0].link_url !== ""){
                // console.log(res.currentArticleList[0].link_url);
                // window.location.herf=res.currentArticleList[0].link_url,'_blank';
                if(res.currentArticleList[0].link_url.indexOf('http') == -1){
                    res.currentArticleList[0].link_url = 'http://' +res.currentArticleList[0].link_url 
                }
                window.location.href=`${res.currentArticleList[0].link_url}`; 
                // window.open(res.currentArticleList[0].link_url,'_blank')
            }
            // console.log(res);
            // document.getElementsByClassName("main")[0].innerHTML = res.currentArticleList[0].content
            let time = res.currentArticleList[0].add_time.substring(6, 19)
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
            // console.log(y,m,d,h,minute);

            var sex = "男"
            // console.log(document.getElementsByClassName("img")[0]);
            
            document.getElementsByClassName("img")[0].src = "../image/imgHeadM.png"
            if(res.currentArticleList[0].category_id === 5460){
                sex = "女";
                document.getElementsByClassName("img")[0].src = "../image/imgHeadF.png"
            }
            if(res.currentArticleList[0].Occupation.length > 8){
                res.currentArticleList[0].Occupation = res.currentArticleList[0].Occupation.substring(0,8)+'...'
            }
            document.getElementsByClassName("zl")[0].innerHTML = res.currentArticleList[0].title + "&nbsp&nbsp" +`<span class="sex">${sex}</span>`;
            document.getElementsByClassName("zy")[0].innerHTML = res.currentArticleList[0].Occupation || '暂无'
            document.getElementsByClassName("p4")[0].innerHTML = res.currentArticleList[0].content
        }
    })
})();

//获取url链接参数
function getQueryVariable(variable)
{
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == variable){return pair[1];}
       }
       return(false);
}