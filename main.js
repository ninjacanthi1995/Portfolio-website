let profileImg = document.getElementById('profile-img');

profileImg.addEventListener('click', function() {
    const index = Math.floor(Math.random() * 5);
    profileImg.src = "./ressources/img/logo-" + index + ".PNG";
})