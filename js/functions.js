// function for date

function updateDate() {

    const currentDate = new Date();

    
    const day = currentDate.toLocaleDateString('en-US', { weekday: 'short' }); 
    const month = currentDate.toLocaleDateString('en-US', { month: 'short' });
    const dayNumber = currentDate.getDate();
    const year = currentDate.getFullYear();
    
    
    document.getElementById("day").innerText = day;
    document.getElementById("date").innerHTML = `
    ${month}
    ${dayNumber} 
    ${year}`;
}

updateDate();



// function for random background color

function randomBgColor() {
    const r = Math.floor(Math.random() * 256); 
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    const randomBg = `rgb(${r}, ${g}, ${b})`;
    return randomBg; 
}


// for blog page
document.getElementById('blog-page').addEventListener('click', function(event){

    event.preventDefault();

    window.location.href = './blog.html';
})