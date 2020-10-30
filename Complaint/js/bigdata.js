
let httpUrl = 'http://www.zjxf315.com/bigdataApiTest/api/Data/'
var mySwiper;
function initSwiper(){
  mySwiper = new Swiper('.swiper-container', {
    direction: 'vertical', // 垂直切换选项
    // loop: true, // 循环模式选项
    autoplay:true,//等同于以下设置
    speed: 2000,
    autoplay: {
      delay: 0,
      stopOnLastSlide: false,
      disableOnInteraction: true,
    },
    height: 86.5
  
  })
}

function getdata() {
  $.ajax({
    url: httpUrl + 'GetComplaints?PageSize=10000&PageIndex=1&areaCode=' + '',
    type: 'get',
    success: function (res) {
      var data = JSON.parse(res).data.Rows
      console.log(data);
      var str = ''
      for (let i = 0; i < data.length; i++) {
        // await.subString()
        // console.log(data[i].REGTIME.subString(0,17));
        data[i].REGTIME = data[i].REGTIME.slice(0,16)
        str += `
        <div class="swiper-slide">
          <p>编号:${data[i].ID}</p>
          <p><span>[${data[i].REGTIME}] </span>${data[i].INVOPT}</p>
      </div>
        `
      }
      
      document.getElementsByClassName("swiper-wrapper")[0].innerHTML = str
      initSwiper();
    },
  })
}
getdata();

function golist(){
  window.location.href="./tsList.html";
}