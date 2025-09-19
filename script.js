const topBar = document.querySelector('.TopBar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        topBar.classList.add('scrolled');
    } else {
        topBar.classList.remove('scrolled');
    }
});

const menuToggle = document.getElementById('menuToggle');
const sideMenu = document.querySelector('.SideMenu');

menuToggle.addEventListener('change', () => {
    sideMenu.classList.add('transitioning');
    const onTransitionEnd = (e) => {
        if (e.propertyName === 'width') {
            sideMenu.classList.remove('transitioning');
            sideMenu.removeEventListener('transitionend', onTransitionEnd);
        }
    };
    sideMenu.addEventListener('transitionend', onTransitionEnd);
});


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
async function spawnDivs() {
    for (let i = 0; i < 100; i++) {
        const div = document.createElement('div');
        div.style.position = 'fixed';
        div.style.width = '500px';
        div.style.height = '500px';
        div.style.backgroundColor = 'red';
        div.style.zIndex = 1000;

        const maxX = window.innerWidth - 100;
        const maxY = window.innerHeight - 100;

        const x = Math.floor(Math.random() * maxX);
        const y = Math.floor(Math.random() * maxY);

        div.style.left = `${x}px`;
        div.style.top = `${y}px`;

        document.body.appendChild(div);

        await sleep(); // delay 30ms before next div
    }
}



const loader = document.getElementById("loader");
loader.classList.add("animateOnLoad");

// Handle entrance animation
window.addEventListener("DOMContentLoaded", () => {
    const loader = document.getElementById("loader");
    if (loader) {
        loader.classList.add("animateExit"); // Exit animation on page load
    }
});

// Function to trigger transition and navigate
function transitionTo(href) {
    const loader = document.getElementById("loader");
    if (!loader) {
        window.location.href = href;
        return;
    }

    loader.classList.remove("animateExit");
    loader.classList.add("animateOnLoad"); // Trigger covering animation

    // Wait for animation to finish then go to new page
    setTimeout(() => {
        window.location.href = href;
    }, 500); // match duration to your transition time
}

