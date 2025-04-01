
function showInfo(name, job, email) {
    const infoBox = document.getElementById('infoBox');
    document.getElementById('infoText').innerHTML = `<strong>${name}</strong><br>${job}<br>${email}`;
    infoBox.style.display = 'block';
}

function closeInfo() {
    document.getElementById('infoBox').style.display = 'none';
}
