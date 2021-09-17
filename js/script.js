$(document).ready(function(){
//메인베너
setInterval(function(){
    var $first = $("main .box_section li").first();
$("main .box_section ul").stop().animate({"margin-left":"-100%"}, 2000, function(){
    $("main .box_section ul").append($first).css("margin-left","0%");
})

},4000);

var $todayMv_arr=[
    ["./img/cont_01.png","죄 많은 소녀(After my Death, 2019)"],
    ["./img/cont_02.jpeg","소공녀(Microhabitat, 2020)"],
    ["./img/cont_03.jpg","벌새(House Of Hummingbird, 2018)"],
];

$cont = `
<div class="box_cont">
    <div class="box" style="background-image: url(./img/cont_01.png);">
        <div class="icon">
            <img src="./img/play_icon.png" alt="">
        </div>
    </div>
    <div class="txt">
        <p>죄 많은 소녀(After my Death, 2019)</p>
    </div>
</div>
`
for(i=0; i<$todayMv_arr.length; i++){
    $(".box_mv").append($cont);
}
$(".box_mv .box_cont").each(function(i){
    $(this).find(".box").css("background-image","url('"+ $todayMv_arr[i][0] +"')");
    $(this).find("p").text($todayMv_arr[i][1])
    console.log($todayMv_arr[i][0])
});

/////////actors

var actors_arr=[
    ["전여빈","yeobeen.png"],
    ["김새벽","saebyeok.png"],
    ["이상희","sanghee.png"],
    ["김예은","sanghee.png"],
    ["이학주","hakju.png"],
    ["박정민","jungmin.png"],
];

$A_cont= `
    <div class="box">
        <div class="txt">
            <ul>
                <li>전여빈</li>
                <li><button>필모그래프</button></li>
            </ul>
        </div>
    </div>
`

for(i=0; i<actors_arr.length; i++){
    $(".actor_cont").append($A_cont)
}

$(".actor_cont .box").each(function(index){
    $(this).css("background-image","url(./img/"+ actors_arr[index][1] +")");
    $(this).find("li:eq(0)").text(actors_arr[index][0]);
});


//reviewes..


//버튼과 연결시키기.
$(".button_part ul li").click(function(){

    var $index = $(this).index();
    $(".slide_part > ul").stop().animate({"margin-left":"-" + (100 * $index) + "%"},1000);

    $(".button_part ul li").removeClass("active");
    $(this).addClass("active")


});




});

