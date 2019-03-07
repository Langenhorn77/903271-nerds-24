var write = document.querySelector(".btn_write");
var popup = document.querySelector(".popup_window");
var close = popup.querySelector(".popup_close");

var user_name = popup.querySelector("[name=user_login]");
var user_mail = popup.querySelector("[name=user_email]");

var login = popup.querySelector(".login");
var mail = popup.querySelector(".mail");


var control = document.querySelector(".slider_controls");
var slide_show = document.querySelector(".slider");

if (slide_show) {

     var use_control_1 = control.querySelector(".control_1");
     var use_control_2 = control.querySelector(".control_2");
     var use_control_3 = control.querySelector(".control_3");

     var slide_1 = slide_show.querySelector(".slide_1");
     var slide_2 = slide_show.querySelector(".slide_2");
     var slide_3 = slide_show.querySelector(".slide_3");


/*
    var use_control = [{control: {}, slide: {}, ind: 0}, {control: {}, slide: {}, ind: 1}, {
        control: {},
        slide: {},
        ind: 2
    }];

    for (var i = 0; i < 3; i++) {
        use_control[i].control = control.querySelector(".control_" + (i + 1).toString());
        use_control[i].slide = slide_show.querySelector(".slide_" + (i + 1).toString());
    }
    for (var j = 0; j < 3; j++) {
        use_control[j].control.addEventListener("click", function (evt) {
            evt.preventDefault();
            for (var i = 0; i < 3; i++) {
                if (use_control[i].ind === i) {
                    add_active(use_control[i].control, "active");
                    add_active(use_control[i].slide, "slide_active");
                } else {
                    remove_active(use_control[i].control, "active");
                    remove_active(use_control[i].slide, "slide_active");
                }
            }
        })
    }
}
*/

    use_control_1.addEventListener("click", function (evt) {
        evt.preventDefault();
        use_control_1.classList.add("active");
        slide_1.classList.add("slide_active");
        use_control_2.classList.remove("active");
        slide_2.classList.remove("slide_active");
        use_control_3.classList.remove("active");
        slide_3.classList.remove("slide_active");
    });

    use_control_2.addEventListener("click", function (evt) {
        evt.preventDefault();
        use_control_2.classList.add("active");
        slide_2.classList.add("slide_active");
        use_control_1.classList.remove("active");
        use_control_3.classList.remove("active");
        slide_1.classList.remove("slide_active");
        slide_3.classList.remove("slide_active");
    });

    use_control_3.addEventListener("click", function (evt) {
        evt.preventDefault();
        use_control_3.classList.add("active");
        slide_3.classList.add("slide_active");
        use_control_1.classList.remove("active");
        use_control_2.classList.remove("active");
        slide_1.classList.remove("slide_active");
        slide_2.classList.remove("slide_active");
    });
}

write.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("popup_show");
    user_name.focus();
});

close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("popup_show");
    popup.classList.remove("popup_error");
});

popup.addEventListener("submit", function (evt) {
    if (!user_name.value) {
        evt.preventDefault();
        console.log("Заполните все поля!");
        login.classList.add("popup_error");
    } else if (!user_mail.value) {
        evt.preventDefault();
        console.log("Заполните все поля!");
        mail.classList.add("popup_error");
    }
});


window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        if (popup.classList.contains("popup_show")) {
            popup.classList.remove("popup_show");
            popup.classList.remove("popup_error");
        }
    }
});

/*
function add_active(a, s) {
    a.classList.add(s);
}


function remove_active(a, s) {
    a.classList.remove(s);
}*/
