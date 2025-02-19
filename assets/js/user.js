$(document).ready(function () {
    // Sidebar Navigation
    $(".tab-link").click(function () {
        $(".tab-link").removeClass("active");
        $(this).addClass("active");

        let tab = $(this).data("tab");
        $(".tab-content").removeClass("active");
        $("#" + tab).addClass("active");
    });

    // Profile Form Submission
    $("#profileForm").submit(function (e) {
        e.preventDefault();
        let name = $("#name").val().trim();
        let birthdate = $("#birthdate").val();
        let phone = $("#phone").val().trim();

        if (name === "" || phone === "") {
            alert("Please fill in all fields!");
            return;
        }

        alert("Profile updated successfully!");
    });
});
