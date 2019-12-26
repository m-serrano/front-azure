$(document).ready(function() {
    $.ajax({
        url: "http://40.71.232.166/customer/api/customers",
        headers: { 'Ocp-Apim-Subscription-Key': '8c830bf9a18643ddb17c5df7bb6e82af;product=unlimited' }
    }).then(function(data) {
       $('.clientes').append(data[Math.floor(Math.random()*3)]);
    });
});

/* $(document).ready(function() {
    $.ajax({
        url: "http://40.71.232.166/products/api/products",
        headers: { 'Ocp-Apim-Subscription-Key': '8c830bf9a18643ddb17c5df7bb6e82af;product=unlimited' }
    }).then(function(data) {
       $('.productos').append(data[Math.floor(Math.random()*3)]);
    });
}); */
