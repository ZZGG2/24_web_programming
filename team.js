document.querySelectorAll('#sidebar a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

document.querySelector('input[value="로그인"]').addEventListener('click', function() {
    alert("로그인 페이지로 이동합니다.");
});

document.querySelector('input[value="회원가입"]').addEventListener('click', function() {
    alert("회원가입 페이지로 이동합니다.");
});

document.querySelectorAll('#activity dt').forEach(item => {
    item.addEventListener('click', function() {
        alert("활동에 대한 추가 정보를 확인하세요!");
    });
});

