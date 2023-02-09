// SCROLL SUAVE
const menuItems = document.querySelectorAll('.menu a, .home a');

menuItems.forEach(item => {
    item.addEventListener('click', scrollToIdOnClick);
})


function getScrollTopByHref (element) {
    const id = element.getAttribute('href');
    return document.querySelector(id).offsetTop;
}

function scrollToIdOnClick(event) {
    event.preventDefault();
    const to = getScrollTopByHref(event.target) - 140;
    
    scrollToPosition(to);
}

function scrollToPosition(to) {
    window.scroll({
        top: to,
        behavior: "smooth",
    });
}


// HEADER FIXO
const header = document.querySelector('header');

document.addEventListener('scroll', () => {
	const scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#1a1a1a';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});


// MENU MOBILE

const iconMobile = document.getElementById('icon-mob');
const menuShow = document.getElementById('menu-mobileid');
const menuFechar = document.getElementById('icon-mob2');

iconMobile.addEventListener('click', (events) => {
    menuShow.style.display = 'flex';
    menuFechar.style.display = 'block';
    iconMobile.style.display = 'none';
})

menuFechar.addEventListener('click', () => {
    menuShow.style.display = 'none';
    menuFechar.style.display = 'none';
    iconMobile.style.display = 'block';
})

