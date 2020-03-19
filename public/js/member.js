//optional

$(docuement).ready(function() {
    $.get("/api/user_data").then( (data) => {
        console.log(data.CompanyId);
    });
});