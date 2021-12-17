var header = document.getElementById('header');
var mobileMenu = document.getElementById('mobile-menu');
var headerHeight = header.clientHeight;

// Modal content
const buyBtns = document.querySelectorAll('.js-buy-ticket');
const modal = document.querySelector('.js-modal');
const close = document.querySelector('.js-close');
const modalContainer = document.querySelector('.js-modal-container');

// close/open menu Mobile
mobileMenu.onclick = function() {
        var isClose = header.clientHeight === headerHeight;
        if (isClose) {
            header.style.height = 'auto';
        } else {
            header.style.height = '46px';
        }
    }
    //Tự động close menu khi click vào item trong menu
var menuItems = document.querySelectorAll('#nav li a[href*="#"]');
for (var i = 0; i < menuItems.length; i++) {
    var menuItem = menuItems[i];

    menuItem.onclick = function() {
        // Nếu có anh/chị em liền kề và anh/chị em liền kề có class là subnav 
        var isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav');
        if (isParentMenu) {
            // bỏ qua hành vi mặc định
            event.preventDefault();
        } else {
            header.style.height = null;
        }
    }

}

// hàm hiển thị form buy tickets
function showBuyTickets() {
    modal.classList.add('open');
}
// hàm khi close form buy tickets
function hideBuyTickets() {
    modal.classList.remove('open');
}

for (const buyBtn of buyBtns) {
    buyBtn.addEventListener('click', showBuyTickets);
}

close.addEventListener('click', hideBuyTickets);
modal.addEventListener('click', hideBuyTickets);
//bên trong không close đc khi tắt form buy tickets 
modalContainer.addEventListener('click', function(event) {
    event.stopPropagation();
});