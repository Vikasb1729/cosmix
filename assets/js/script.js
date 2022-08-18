// js code for hamburger
var hamburger = document.querySelector('.hamburger')
var nav = document.querySelector('nav')
var header = document.querySelector('header')
var body = document.querySelector('body')
hamburger.addEventListener('click', function () {
    nav.classList.toggle('show')
    hamburger.classList.toggle('show')
    header.classList.toggle('hidden')
    body.classList.toggle('hidden')
})


// js code for counter

var counters = document.querySelectorAll('.count')
counters.forEach(function (counter) {
    counter.innerText = '0'
    var updateCounter = function () {
        var target = Number(counter.getAttribute('data-target'))
        var c = Number(counter.innerText)
        var increment = target / 300
        if (c < target) {
            var count = Math.floor(c + increment)
            counter.innerText = count
            setTimeout(updateCounter, 1)
        } else {
            counter.innerText = target
        }
    }
    updateCounter()
})

// js code for tab switch

var tabs = document.querySelectorAll('.tab-btn')
var tabContent = document.querySelectorAll('.tab-content')
var array_tabs = Array.from(tabs);
var content = Array.from(tabContent);
array_tabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
        removeActivetab()
        tab.classList.add('feat-active')
        var tab_data = this.getAttribute('data-tab');
        console.log(tabs)
        content.forEach(function (data) {
            data.classList.remove('remove')
            var tab_content = data.getAttribute('data-content')
            if (tab_data == tab_content) {
                data.classList.add('tab-show')
            } else {
                data.classList.add('remove')
                data.classList.remove('tab-show')
                console.log(data)
            }
        })
        function removeActivetab() {
            array_tabs.forEach(function (tab) {
                tab.classList.remove('feat-active');
            });
        }
    })
});

// js code for image filter

var tabContent = document.querySelectorAll('.tab-filter')
var tabImage = document.querySelectorAll('.tab-image')
var array_tabs_filter = Array.from(tabContent);
var images = Array.from(tabImage);
array_tabs_filter.forEach(function (tab) {
    tab.addEventListener('click', function () {
        var tab_data = this.getAttribute('data-filter');
        images.forEach(function (img) {
            removeActive();
            tab.classList.add('active-tab')
            img.classList.remove('remove')
            var img_data = img.getAttribute('data-img-filter');
            if (tab_data == 'all') {
                img.classList.add('show');
            } else if (tab_data == img_data) {
                img.classList.add('show');
            } else {
                img.classList.remove('show');
                img.classList.add('remove')
            }
        })
    })
})
function removeActive() {
    array_tabs_filter.forEach(function (tabs) {
        tabs.classList.remove('active-tab');
    })
}

//js code for read more

var readMore = document.querySelectorAll('.read-more');
var elemExtra = document.querySelectorAll('.extra')
readMore.forEach(function (read) {
    read.addEventListener('click', function () {
        if (this.innerText == "Read more") {
            this.innerText = "Read less"
            this.previousElementSibling.children[0].classList = 'read-show';
        } else {
            this.innerText = "Read more"
            this.previousElementSibling.children[0].classList = 'read-less';
        }
    })
});

//js code for slider

var slider = $(".slider");
slider.slick({
    fade: true,
    infinite: true,
    autoplay: true,
    autoplayspeed: 5000,
    dots: true,
    arrows: true,
  });

// js code for form

var fname = document.getElementById('name');
var email = document.getElementById('email');
var sub = document.getElementById('subject');
var msg = document.getElementById('msg');
var form = document.getElementById('contact-form');
var letter = /^[a-zA-Z ]{2,30}$/;
fname.addEventListener('input', textval);
email.addEventListener('input', emailval);
sub.addEventListener('input', subval);
msg.addEventListener('input', msgval);
form.addEventListener('submit', validation);
function textval() {
    if (fname.value.length > 3 && fname.value.match(letter)) {
        document.querySelector('.n-error').classList.add('hide');
        return true;
    }
    else {
        document.querySelector('.n-error').innerText = "*Please enter your proper name."
        document.querySelector('.n-error').classList.remove('hide');
        return false;
    }
}
function emailval() {
    if (/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/.test(email.value)) {
        document.querySelector('.e-error').classList.add('hide');
        return true;
    } else {
        document.querySelector('.e-error').innerText = "*Please enter a proper email";
        document.querySelector('.e-error').classList.remove('hide');
        return false;
    }
}
function subval() {
    if (sub.value.length > 3 && sub.value.match(letter)) {
        document.querySelector('.s-error').classList.add('hide');
        return true;
    }
    else {
        document.querySelector('.s-error').innerText = "*Please enter subject."
        document.querySelector('.s-error').classList.remove('hide');
        return false;
    }
}
function msgval() {
    if (msg.value.length < 5) {
        document.querySelector('.m-error').innerText = "*Please write something";
        document.querySelector('.m-error').classList.remove('hide');
        return false;
    } else {
        document.querySelector('.m-error').classList.add('hide');
        return true;
    }
}
function validation(e) {
    if (textval() === false || emailval() === false || subval() === false || msgval() === false) {
        e.preventDefault();
    }
}


















