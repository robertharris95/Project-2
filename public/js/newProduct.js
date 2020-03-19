// To go in seller.html add to products api route

$(document).ready(function() {

    const $product_name = $("product_name");
    const $product_description = $("product_description");
    const $quantity = $("average_quantity");
    const $min_length = $("minimum_length");
    const $min_lengthUnits = $("minimum_lengthunits");
    const $rate = $("product_rate");
    const $category = $("category");
    const $contract = $("minimum_clause");  //how to add contrract file to sql temp a link.
    const $submit = $("submit_info");

    function validInput(object) {
        for (const val in object) {
            if (object[val] === null){
                return false
            }
        }
        return true;
    }

    $submit.on("submit", function(event) {
        event.preventDefault();

        const newProduct = {
            name: $product_name.val().trim(),
            description: $product_description.val().trim(),
            quantity: $quantity.val(),
            minLength: $min_length.val(),
            lengthUnits: $min_lengthUnits.val(),
            rate: $rate.val(),
            category: $category.val().trirm(),
            contract: $contract.val().trim()
        }

        const valid = validInput(newProduct);
        // S or no S?
        if (valid) {
            $.post("/api/products", {
                name: newProduct.name,
                description: newProduct.description,
                quantity: newProduct.quantity,
                minLength: newProduct.minLength,
                lengthUnits: newProduct.lengthUnits,
                rate: newProduct.lengthUnits,
                category: newProduct.category  
            });
        }
    });
})