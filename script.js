let searchContainer = document.querySelector('.search-icon-container');
let search = document.getElementById('search-icon');
let closeIcon = document.getElementById('close-search-icon');
let mobileSearchArea = document.querySelector('.l-search-mobile');

// SHOW AND HIDE ORIGINAL SEARCH AREA ON CHANGE OF SCREEN SIZE

window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        closeSearch();
    }
})

// HANDLE OPENING AND CLOSING OF SEARCH AREA

searchContainer.addEventListener('click', function(event) {
    if (event.target.classList.contains('fa-search')) {
        openSearch();
    }
    if (event.target.classList.contains('fa-times')) {
        closeSearch();
    }
});

function openSearch() {
    search.classList.add('hidden');
    closeIcon.classList.remove('hidden');
    mobileSearchArea.classList.remove('hidden');
}

function closeSearch() {
    search.classList.remove('hidden');
    closeIcon.classList.add('hidden');
    mobileSearchArea.classList.add('hidden');
}