document.addEventListener("DOMContentLoaded", function () {
    let verificationCode;
    const sendCodeBtn = document.getElementById("sendCode");
    if (sendCodeBtn) {
        sendCodeBtn.addEventListener("click", function () {
            verificationCode = Math.floor(100000 + Math.random() * 900000);
            alert(`인증번호: ${verificationCode}`);
        });
    }

    const verifyCodeBtn = document.getElementById("verifyCode");
    if (verifyCodeBtn) {
        verifyCodeBtn.addEventListener("click", function () {
            const userCode = document.getElementById("verification").value;
            if (userCode == verificationCode) {
                alert("인증되었습니다!");
            } else {
                alert("인증번호가 올바르지 않습니다.");
            }
        });
    }
    const lastNameInput = document.getElementById("lastName");
    if (lastNameInput) {
        lastNameInput.addEventListener("keyup", function () {
            console.log("성 입력 중: " + lastNameInput.value);
            if (lastNameInput.value.trim() === "") {
                alert("성 입력을 완료해 주세요.");
            }
        });
    }

    const firstNameInput = document.getElementById("firstName");
    if (firstNameInput) {
        firstNameInput.addEventListener("mouseover", function () {
            alert("이름을 입력해주세요.");
        });
    }

    const genderRadios = document.querySelectorAll('input[name="gender"]');
    genderRadios.forEach((radio) => {
        radio.addEventListener("change", function () {
            const selectedGender = document.querySelector('input[name="gender"]:checked');
            alert(`${selectedGender.value} 선택됨.`);
        });
    });

    const form = document.getElementById("signupForm");

    form.addEventListener("submit", function (event) {
        const requiredFields = form.querySelectorAll("input[required], textarea[required]");
        let isValid = true;

        requiredFields.forEach((field) => {
            if (!field.value.trim()) {
                isValid = false;
                field.focus();
            }
        });

        if (!isValid) {
            event.preventDefault();
            alert("필수 항목을 입력해주세요.");
        } else {
            alert("폼이 제출되었습니다!");
        }
    });

    document.querySelector('input[value="로그인"]').addEventListener('click', function() {
        alert("로그인 페이지로 이동합니다.");
    });
    document.querySelector('input[value="뒤로가기"]').addEventListener('click', function() {
        alert("정말 뒤로 가시겠습니까?");
    });
});
