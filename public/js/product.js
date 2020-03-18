//input new products

$(document).ready(function() {

        const productContainer = $(".product-container");
        const productCategorySelect = $("#category");

        // @@todo only the logged in user can delete his own products
        $(document).on("click", "button.delete", handleProductDelete);
        $(document).on("click", "button.edit", handleProductEdit);

        const products;

        const url = window.location.search;
        const companyId;
        if (url.indexOf("?company_id=") !== -1) {
            getProducts(companyId);
        } else {
            getProducts();
        }

        function getProducts(company) {
            companyId = company || "";
            if (companyId) {
                companyId = "/?company_id=" + companyId;
            }
            $.get(`/api/products/${companyId}`, function(data) {
                console.log("Products", data);
                products = data;
                if (!products || !products.length) {
                    displayEmpty(company);
                } else {
                    initializeRows();
                }
            });
        }

        function initializeRows() {
            productContainer.empty();
            let newProducts = new Array();  //send to html-routes
            products.forEach( (el) => {
                newProducts.push(el);
            });
            return newProducts;
        }

        function deleteProduct(id) {
            $.ajax({
                method: "DELETE",
                url: `/api/products/${id}`
            })
            .then( () => {
                getProducts(productCategorySelect.val());
            });
        }

        function handleProductDelete() {    //@@ todo
            const currentProduct = $(this)
            .parent().parent().data("product");
            deleteProduct(currentProduct);
        }

        function handleProductEdit() {
            const currentProduct = $(this)
            .parent().parent().data("product");
            window.location.href = `/cms?product_id=${currentProduct.id}`;
        }

        function displayEmpty(id) {
            const query = window.location.search;
            const partial = "";
            if (id) {
                partial = ` for Company # ${id}`;
            }
            productContainer.empty();
            const message = `No products yet ${partial}.`;
            return message;
        }
});