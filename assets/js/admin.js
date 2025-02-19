$(document).ready(function () {
    let userName = "TranT";
    let userRole = "Staff";
    $(".js-userName").text(userName);
    $(".js-userRole").text(userRole);

    function showSection(sectionClass) {
        $(".admin__wrapper").hide();
        $(sectionClass).show();
    }
    showSection(".js-dashboard");

    $(".admin__sidebar-link").click(function (e) {
        e.preventDefault();
        $(".admin__sidebar-item").removeClass("admin__sidebar-item--actived");
        $(this).parent().addClass("admin__sidebar-item--actived");

        let sectionMap = {
            "Dashboard": ".js-dashboard",
            "Product management": ".js-product",
            "Team management": ".js-team"
        };

        let sectionClass = sectionMap[$(this).text().trim()];
        if (sectionClass) {
            showSection(sectionClass);
        }
    });

    $(".js-addProduct").click(function () {
        if (userRole !== "Manager") {
            alert("Only Managers can add products!");
            return;
        }

        let productName = $(".js-productName").val().trim();
        let productPrice = $(".js-productPrice").val().trim();

        if (productName === "" || productPrice === "") {
            alert("Please enter both product name and price");
            return;
        }

        let productItem = `<li>${productName} - $${productPrice}</li>`;
        $(".js-productList").append(productItem);

        // Reset input fields
        $(".js-productName").val("");
        $(".js-productPrice").val("");

        // Cập nhật tổng sản phẩm
        let totalProducts = $(".js-productList li").length;
        $(".js-totalProduct").text(totalProducts);
    });
});
