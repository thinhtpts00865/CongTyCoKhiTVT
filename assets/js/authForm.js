$(document).ready(function () {
    const modal = $('.js-modal');
    const modalWrapper = $('.js-wrapper');
    const openBtn = $('.js-modalOpen');
    const closeBtn = $('.js-modalClose');
    const signInBtn = $('.js-signIn');
    const signUpBtn = $('.js-signUp');
    const resetBtn = $('.js-reset');

    const mainHeading = $('.form-main-heading');
    const besideHeading = $('.form-beside-heading');
    const signInOption = $('.form-main-option');

    const signUpForm = $('#sign-up');
    const signInForm = $('#sign-in');
    const fPassLink = $('.sign-in--forgotpassword');
    const fPassForm = $('#forgot-pw-validate');
    const fPassContinue = $('.forgot-pw-continue-btn');
    const fPassResetForm = $('#forgot-pw-reset');
    var setToSignUpForm = {
        signUpForm: () => signUpForm.css('display', 'unset'),
        signInForm: () => signInForm.css('display', 'none'),
        fPassForm: () => fPassForm.css('display', 'none'),
        fPassResetForm: () => fPassResetForm.css('display', 'none'),
        signInBtn: () => signInBtn.css('display', 'unset'),
        signUpBtn: () => signUpBtn.css('display', 'none'),
        resetBtn: () => resetBtn.css('display', 'none'),

        mainHeading: () => mainHeading.text('Đăng Ký'),
        besideHeading: () => besideHeading.text('Welcome!'),
        closeBtn: () => closeBtn.css({
            '--js-color': '#fff',
            '--js-hover-color': '#000',
            '--js-hover-background-color': '#fff'
        })
    };
    var setToSignInForm = {
        signUpForm: () => signUpForm.css('display', 'none'),
        signInForm: () => signInForm.css('display', 'unset'),
        fPassForm: () => fPassForm.css('display', 'none'),
        fPassResetForm: () => fPassResetForm.css('display', 'none'),
        signInBtn: () => signInBtn.css('display', 'none'),
        signUpBtn: () => signUpBtn.css('display', 'unset'),
        resetBtn: () => resetBtn.css('display', 'none'),
        signInOption: () => signInOption.css('display', 'unset'),

        mainHeading: () => mainHeading.text('Đăng Nhập'),
        besideHeading: () => besideHeading.text('Welcome Back!'),
        closeBtn: () => closeBtn.css({
            '--js-color': '#000',
            '--js-hover-color': '#000',
            '--js-hover-background-color': '#ccc'
        })
    };
    var setToFPassForm = {
        signUpForm: () => signUpForm.css('display', 'none'),
        signInForm: () => signInForm.css('display', 'none'),
        fPassForm: () => fPassForm.css('display', 'unset'),
        fPassResetForm: () => fPassResetForm.css('display', 'none'),
        signInBtn: () => signInBtn.css('display', 'none'),
        signUpBtn: () => signUpBtn.css('display', 'none'),
        resetBtn: () => resetBtn.css('display', 'unset'),
        signInOption: () => signInOption.css('display', 'none'),

        mainHeading: () => mainHeading.text('Đổi Mật Khẩu'),
        besideHeading: () => besideHeading.text('Reset Your Password!'),
    };
    var setToFPassResetForm = {
        signUpForm: () => signUpForm.css('display', 'none'),
        signInForm: () => signInForm.css('display', 'none'),
        fPassForm: () => fPassForm.css('display', 'none'),
        fPassResetForm: () => fPassResetForm.css('display', 'unset'),

        mainHeading: () => mainHeading.text('Xác Nhận Mật Khẩu')
    };

    openBtn.on('click', function () {
        modal.addClass('open');
        modalWrapper.addClass('signUp-form');
        modalWrapper.removeClass('active');
        Object.values(setToSignUpForm).forEach(fn => fn());
    });

    closeBtn.on('click', function () {
        modal.removeClass('open');
    });

    modalWrapper.on('click', function (e) {
        e.stopPropagation();
    });

    signInBtn.on('click', function () {
        modalWrapper.toggleClass('active');
        Object.values(setToSignInForm).forEach(fn => fn());
    });

    signUpBtn.on('click', function () {
        modalWrapper.toggleClass('active');
        Object.values(setToSignUpForm).forEach(fn => fn());
    });

    fPassLink.on('click', function () {
        Object.values(setToFPassForm).forEach(fn => fn());
    });

    fPassContinue.on('click', function () {
        Object.values(setToFPassResetForm).forEach(fn => fn());
    });

    resetBtn.on('click', function () {
        Object.values(setToSignInForm).forEach(fn => fn());
    });
});
