

(function getdata() {
    var id = getQueryVariable("id")
    var row = getQueryVariable("row")
    var lj = getQueryVariable("lj")
    // console.log(lj);
    // // console.log(row);
    // if(lj){
    //     window.location.href=`${lj}`
    // }
    $.ajax({
        url: `http://www.zjxf315.com:8080/api/DTcmsAPI.ashx?dotype=GetArticleDetailNew&channel_id=2214&category_id=5457&rows=${row}&strOrder=sort_id%2Cadd_time+desc&articleType=&article_id=${id}&strWhere=multiple_single_selection+in+(0,1)`,
        type: 'get',
        dataType: "jsonp",
        jsonp: "callback",
        jsonpCallback: "successcallback",
        success: function (res) {
            console.log(res);
            
            if(res.currentArticleList[0].link_url !== ""){
                // console.log(res.currentArticleList[0].link_url);
                // window.location.herf=res.currentArticleList[0].link_url,'_blank';
                if(res.currentArticleList[0].link_url.indexOf('http') == -1){
                    res.currentArticleList[0].link_url = 'http://' +res.currentArticleList[0].link_url;
                }
                window.location.href=`${res.currentArticleList[0].link_url}`; 
                // window.open(res.currentArticleList[0].link_url,'_blank')
            }
            // console.log(res);
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
            if(res.currentArticleList[0].source == "本站" || res.currentArticleList[0].source == ""){
                res.currentArticleList[0].source = "镇江市市场监督管理局"
            }
            

            document.getElementsByClassName("p2")[0].innerHTML = res.currentArticleList[0].title
            document.getElementsByClassName("p3")[0].innerHTML = res.currentArticleList[0].source
            document.getElementsByClassName("p4")[0].innerHTML = y+'-'+m+'-'+d+"     " + h+':'+minute 
            document.getElementsByClassName("main")[0].innerHTML = res.currentArticleList[0].content
            // if(res.currentArticleList[0].content == ""){
            //     document.getElementsByClassName("p5")[0].style.display = "none"
            // }
        }
    })
})();

function goback() {
    window.history.go(-1)
}

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