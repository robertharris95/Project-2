// To go in seller.html add to products api route

$(document).ready(function() {

    $('select').formSelect();
    const $product_name = $("product_name");
    const $product_description = $("product_description");
    const $quantity = $("average_quantity");
    const $min_length = $("minimum_length");
    const $min_lengthUnits = $("minimum_lengthunits");
    const $rate = $("product_rate");
    const $category = $("category");
    const $contract = $("minimum_clause");  //how to add contrract file to sql temp a link.
    const $submit = $("submit_info");


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
            .then( () => {
                // alert("Product added to our database.")
                submitDone();
                console.log("Added product");
            })
            .catch(handleSubmitErr);
        }

        // if (valid) {
        //     $.post("/api/products", {
        //         name: newProduct.name,
        //         description: newProduct.description,
        //         quantity: newProduct.quantity,
        //         minLength: newProduct.minLength,
        //         lengthUnits: newProduct.lengthUnits,
        //         rate: newProduct.lengthUnits,
        //         category: newProduct.category,
        //         contract: newProduct.contract,
        //         CompanyId: CompanyId  
        //     })
        //     .then( () => {
        //         // alert("Product added to our database.")
        //         console.log("Added product");
        //     })
        //     .catch(handleSubmitErr);
        // }

    });
    
    function handleSubmitErr(err) {
        $("#alert .msg").text(err.responseJSON);
        $("#alert").fadeIn(500);
    }

    function submitDone() {
        $("#alert .msg").text("Added product successfully.");
        $("#alert").fadeIn(500);
    }

    function validInput(object) {
        for (const val in object) {
            if (object[val] === null || object[val] === ""){
                return false
            }
        }
        return true;
    }
})