const container = document.querySelector(".container");
const loading = document.querySelector('.loading');

const unsplashURL = 'https://source.unsplash.com/random/';
const rows = 10;

function appendChild() {
    for (let i = 0; i < rows * 3; i++) {
        const img = document.createElement('img');
        img.src = `${unsplashURL}${getRandomSize()}`;
        container.appendChild(img);
    }
}

appendChild();

function getRandomSize() {
    return `${randomNmr()}x${randomNmr()}`;
}

function randomNmr() {
    return Math.floor(Math.random() * 10) + 300;
}

window.addEventListener('scroll', () => {

    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    console.log('scroll', scrollTop + clientHeight, scrollHeight - 50);

    if (scrollTop + clientHeight >= scrollHeight - 5) {
        showLoading();
    }
});

function showLoading() {
    // show loading animation
    loading.classList.add('show');

    setTimeout(() => {
        // remove loading animation after 1 second
        loading.classList.remove('show');

        setTimeout(() => {
            // create new posts after a little while (wait for the loading to dissappear)
            appendChild();
        }, 300);
    }, 1000);
}

