document.querySelectorAll('.closeBtn').forEach(function(item){
    item.addEventListener('click', dropOption);
});

document.querySelectorAll('.jsBtn').forEach(function(item){
    item.addEventListener('click', popOption);
});

document.querySelectorAll('.btn-display').forEach(function(item){
    item.addEventListener('click', actDetail);
});

document.querySelectorAll('.discount-link').forEach(function(item){
    item.addEventListener('click', actPromotion);
});

function popOption(e){
    if( !e.target.className.match(/(closeBtn|btn-display)/) ){
        var domTemp;
        var targetTemp = e.target;
        while( !targetTemp.tagName.match(/(li|button)/i) ){
            targetTemp = targetTemp.parentNode;
        }

        var targetId = targetTemp.getAttribute('value');
        if( targetTemp.getAttribute('value') !== null ){
            domTemp = document.getElementById(targetTemp.getAttribute('value'));

            if( domTemp !== null && domTemp !== undefined ){
                domTemp.classList.add('open');
            }
        }
    }
}

function dropOption(e){
    var domTemp = document.getElementById(e.target.value);
    if( domTemp !== undefined ){
        domTemp.classList.remove('open');
    }
}

function actDetail(e){
    e.target.parentNode.querySelector('.classify-list').classList.toggle('open');
    e.target.classList.toggle('more');
}

function actPromotion(e){
    console.log( e.target.nodeName );
    console.log( e.target.nextSibling.nextSibling.className );
    console.log( e.target.nextSibling.nextSibling.style.display.length );
    if( e.target.nextSibling.nextSibling.style.display.length === 0 ){
        e.target.nextSibling.nextSibling.style.display = 'inline-block';
    }else{
        e.target.nextSibling.nextSibling.style.display = '';
    }

    e.target.classList.toggle('open');
}







// blade header footer

var yDeepTemp = window.scrollY;
var searchBar = document.getElementById('search-box');
var searchRealBar = document.getElementById('search-modal');
var searchBarTop = searchBar.offsetTop;
var searchDisplay = document.getElementById('searchDisplay');
var searchInput = document.getElementById('searchInput');
var header = document.querySelector('body');
var topButton = document.querySelector('.go-top');
var topShowY = 200;
var topFuzzyY = 1200;
var topDuration = 700;
var topMspf = 5;

window.addEventListener('scroll', stickySearchBar);
window.addEventListener('scroll', stickyFilter);
window.addEventListener('scroll', displayEasyTop);
searchDisplay.addEventListener('focus', realInput);
searchInput.addEventListener('focus', initStatus);
searchInput.addEventListener('input', getSuggest);
document.querySelector('.nav-toggle').addEventListener('click', popNavigation);
document.querySelector('.close-bg').addEventListener('click', dropNavigation);
document.querySelector('.back-btn').addEventListener('click', dropSearchBar);
document.querySelector('.clear-btn').addEventListener('click', clearSearch);
document.querySelectorAll('.tab-bar button').forEach(function(item){
    item.addEventListener('click', actSuggest);
});
topButton.addEventListener('click', easyTop);


function actSuggest(e){
    e.target.classList.add('active');
    if( e.target.className.match(/tab-btn-left/) ){
        document.querySelector('.tab-btn-right').classList.remove('active');
        document.querySelector('.hot-search').classList.add('open');
        document.querySelector('.last-search').classList.remove('open');
    }else{
        document.querySelector('.tab-btn-left').classList.remove('active');
        document.querySelector('.last-search').classList.add('open');
        document.querySelector('.hot-search').classList.remove('open');
    }
}

function dropNavigation(){
    document.querySelector('nav').classList.remove('open');
    document.querySelector('.overlay-bg').classList.remove('open');
    document.querySelector('body').classList.remove('body-fixed');
}

function popNavigation(){
    document.querySelector('nav').classList.add('open');
    document.querySelector('.overlay-bg').classList.add('open');
    document.querySelector('body').classList.add('body-fixed');
}

function clearSearch(){
    searchInput.value = '';
}

function dropSearchBar(){
    searchRealBar.classList.remove('open');
}

function getSuggest(){
    searchDisplay.value = searchInput.value;
    if( searchInput.value.length > 0 ){
        document.querySelector('.search-section').classList.add('open');
    }else{
        document.querySelector('.search-section').classList.remove('open');
    }
}

function initStatus(){
    searchInput.value = searchInput.value;
    getSuggest();
}

function realInput(){
    searchDisplay.blur();
    searchRealBar.classList.add('open');
    searchInput.focus();
}

function stickyFilter(){
    if(window.scrollY < yDeepTemp){
        header.classList.add('up');
    }else{
        header.classList.remove('up');
    }

    yDeepTemp = window.scrollY;
}

function stickySearchBar(){
    if(window.scrollY > searchBarTop){
        header.classList.add('sticky');
    }else{
        header.classList.remove('sticky');
    }
}

function displayEasyTop(){
    if(window.scrollY > topShowY){
        topButton.classList.add('is-visible');
        if(window.scrollY > topFuzzyY){
            topButton.classList.add('fade-out');
        }
    }else{
        topButton.classList.remove('is-visible', 'fade-out');
    }
}

function easyTop(){
    var clickScrollY = window.scrollY;
    var scrollGap = Math.ceil(clickScrollY / (topDuration/topMspf));
    var id = setInterval(scrollTop, topMspf);
    function scrollTop() {
        if (clickScrollY === 0) {
            clearInterval(id);
        } else {
            clickScrollY -= scrollGap;
            if(clickScrollY < 0){
                clickScrollY = 0;
            }
            window.scroll(0, clickScrollY);
        }
    }
}