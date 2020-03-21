$(document).ready(function() {

    
    const $form = document.getElementById("productForm");
    const $product_name = $("#product_name");
    const $product_description = $("#product_description");
    const $quantity = $("#average_quantity");
    const $min_length = $("#minimum_length");
    let $lengthSelect = $("select").formSelect();
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
            lengthUnits: $lengthSelect[0].value,
            rate: $rate.val(),
            category: $category.val().trim(),
            contract: $contract.val().trim(),
            CompanyId: CompanyId
        }

        const valid = validInput(newProduct);

        if (valid) {
            $.post("/api/products", newProduct)
            .then(submitDone(newProduct))
            .catch(handleSubmitErr);
        }
    });
    
    function handleSubmitErr(err) {
        $("#alertBad .msg").text(err.responseJSON.errors[0].message);
        $("#alertBad").fadeIn(750);
        $("#alertBad").fadeOut(7000);
    }

    function submitDone(object) {
        $form.reset();
        $("#alertGood .done").text(`Added product ${object.name}.`);
        $("#alertGood").fadeIn(750);
        $("#alertGood").fadeOut(7000);
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