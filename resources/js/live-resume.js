$('[data-toggle="collapsible-nav"]').on('click', function(e){
    var target = ($(this).data('target'));
    $('#' + target).toggleClass('show');

    $('#aside').load('include/aside.html');
});

$(document).ready(function(){
    if(window.innerWidth >= 992) {
        $('#collapsible-nav').addClass('show');  //Show navigation menu in bigger screens by default.
    } else {
        $('#collapsible-nav').removeClass('show');
    }

    if ($('.hover-box').length) {
        setHoverBoxPerspective();
    }
});

$(window).resize(
    function() {
        if ($('.hover-box').length) {
            setHoverBoxPerspective();
        }
    }
);

function setHoverBoxPerspective() {
    $('.hover-box').css({
        'perspective': function () {
            return Math.max( $(this).width(), $(this).height() ) * 2 + 50;
        }
    });
}


var classNames = ['in-up', 'in-right', 'in-down', 'in-left', 'out-up', 'out-right', 'out-down', 'out-left']; // Animation classes.

$('.hover-box').hover(
    function (event) {
        var direction = "up";
        if(jQuery.fn.entry){ //Check if entry js file is loaded.
            direction = $(this).entry({ e: event }); // Get mouse in direction.
        }

        $(this).removeClass(classNames.join(" ")); // Remove existing animation classes.
        $(this).addClass("in-" + direction); //Add mouse in animation

    }, 
    
    function (event) {

        var direction = "up";
        if(jQuery.fn.entry){
            direction = $(this).entry({ e: event }); // Get mouse out direction.
        }

        $(this).removeClass(classNames.join(" "));
        $(this).addClass("out-" + direction); //Add mouse out animation

    }
);

let mouseCursor = document.querySelector(".cursor");
let navLinks = document.querySelectorAll(".gnb li a"); //메뉴 링크
//window 객체에 scroll & mouse 이벤트를 추가하고 cursor 함수 실행되도록 함
window.addEventListener("scroll", cursor);
window.addEventListener("mousemove", cursor);

//커스텀 커서의 left 값과 top 값을 커서의 XY 좌표값과 일치시킴
function cursor(e) {
    mouseCursor.style.left = e.pageX + "px";
    mouseCursor.style.top = e.pageY - scrollY + "px";
}

var browserInfo = navigator.userAgent;    // browserInfo 에 user agent 정보를 담습니다.
console.log(browserInfo);                                 // user agent 정보내용을 화면에 경고창으로 보여줍니다.
if (browserInfo.indexOf("HANIX_ANDROID") > -1) {
    console.log('android');
    document.getElementById('header').style.visibility = 'hidden';
    document.getElementById('header').style.display = 'none';
}