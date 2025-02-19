$(document).ready(function () {
    function loadCategoriesAndProducts() {
        $.getJSON("data.json", function (data) {
            const categoryList = $(".category__list");
            const productContainer = $(".shop-product__list");

            if (categoryList.length === 0 || productContainer.length === 0) {
                console.error("Category list or product container not found!");
                return;
            }

            categoryList.empty(); // Clear previous categories
            productContainer.empty(); // Clear previous products

            let firstCategory = null;

            $.each(data, function (category, products) {
                if (!firstCategory) firstCategory = category; // Store first category for default load

                const categoryItem = $(`
                    <li class="category__item">
                        <i class="category__item-icon fa-solid fa-caret-right"></i>
                        <a href="#!" class="category__item-link">${category}</a>
                    </li>
                `);

                categoryItem.click(function () {
                    $(".category__item").removeClass("category__item--active");
                    $(this).addClass("category__item--active");
                    loadProducts(products);
                });

                categoryList.append(categoryItem);
            });

            if (firstCategory) {
                $(".category__item").first().addClass("category__item--active");
                loadProducts(data[firstCategory]);
            }
        }).fail(function () {
            console.error("Failed to load data.json");
        });
    }

    function loadProducts(products) {
        const productContainer = $(".row.sm-gutter.col-pad-margin");
        productContainer.empty();

        $.each(products, function (_, product) {
            const imagePath = `./assets/imgs/products/${product.HinhAnh || '300x250.svg'}`;
            const productHTML = `
                <div class="col l-3">
                    <a href="#" class="shop-product-item">
                        <div class="shop-product__img" style="background-image: url('${imagePath}');"></div>
                        <div class="shop-product-wrap">
                            <h4 class="shop-product__name">${product.TenMH}</h4>
                            <p class="shop-product__price">
                                Giá: <span>${product.Gia ? product.Gia.toLocaleString() + " VND" : "Liên Hệ"}</span>
                            </p>
                        </div>
                    </a>
                </div>
            `;

            productContainer.append(productHTML);
        });
    }

    loadCategoriesAndProducts();
});
