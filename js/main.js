$(function(){
    $('.autoplay').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplayspeed: 3000,
        prevArrow: false,
        nextArrow: false,
        draggable: false,
        pauseOnFocus: false,
        pauseOnHover: false,
        swipe: false,
        swipeToSlide: false,
        touchMove: false,
    });
})

// 브라우저 상단 주소 입력창 고려 반응형

let vh = window.innerHeight * 0.01;
document.documentElement.style.setProgerty("--vh", `${vh}px`);

window.addEventListener("resize", () => {
    console.log("resize");
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProgerty("--vh", `${vh}px`);
})


// 카카오 링크 공유 API
Kakao.init('83aeb588556f07e746244ef23e7f2dab');

function sendLink(){
    Kakao.Link.createDefaultButton({
        container: '.share',
        objectType: 'feed',
        content:{}
    })
}