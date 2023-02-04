document.getElementById('btn').addEventListener('click', onClickBtn);
function onClickBtn() {
    document.getElementById('nav_burg').classList.toggle('visible');
    document.getElementById('btn').classList.toggle('visible');
}