/**
 * Created by nkondova on 29.6.2017 г..
 */
function notify(message) {
    let notificationDiv = document.getElementById('notification');
    notificationDiv.textContent = message;
    notificationDiv.style.display = 'block';
    setTimeout(() => notificationDiv.style.display = 'none', 2000);
}