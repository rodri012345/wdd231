function getParam(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name) || 'Not provided';
}

document.getElementById('firstName').textContent = getParam('firstName');
document.getElementById('lastName').textContent = getParam('lastName');
document.getElementById('email').textContent = getParam('email');
document.getElementById('phone').textContent = getParam('phone');
document.getElementById('orgName').textContent = getParam('orgName');
document.getElementById('timestamp').textContent = new Date(getParam('timestamp')).toLocaleString();