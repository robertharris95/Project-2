$(document).ready(function() {

    const $product_name = $("#product_name");
    const $product_description = $("#product_description");
    const $quantity = $("#average_quantity");
    const $min_length = $("#minimum_length");
    const $min_lengthUnits = $("#minimum_lengthunits");
    const $rate = $("#product_rate");
    const $category = $("#category");
    const $contract = $("#contract_link");  
    const $submitBtn = $("form.add");
    let CompanyId;

    $.get("/api/user_data").then( (data) => {
        CompanyId = data.CompanyId;
    });

    $submitBtn.on("submit", function(event) {
        event.preventDefault();

        const newProduct = {
            name: $product_name.val().trim(),
            description: $product_description.val().trim(),
            quantity: $quantity.val(),
            minLength: $min_length.val(),
            lengthUnits: $min_lengthUnits.val(),
            rate: $rate.val(),
            category: $category.val().trim(),
            contract: $contract.val().trim(),
            CompanyId: CompanyId
        }

        const valid = validInput(newProduct);

        if (valid) {
            $.post("/api/products", newProduct)
            .then(
                submitDone(newProduct.name)
            )
            .catch(handleSubmitErr);
        }
    });
    
    function handleSubmitErr(err) {
        $("#alert .msg").text(err.responseJSON);
        $("#alert").fadeIn(2000);
    }

    function submitDone(name) {
        $("#alert .done").text(`Added product ${name}.`);
        $("#alert").fadeIn(4000);
    }

    function validInput(object) {
        for (const val in object) {
            if (object[val] === null || object[val] === ""){
                return false
            }
        }
        return true;
    }
});