
document.getElementById('bg-color-btn').addEventListener('click', function(event){
    event.preventDefault();

    document.body.style.backgroundColor = randomBgColor();
})