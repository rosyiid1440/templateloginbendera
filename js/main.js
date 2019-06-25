$('#login').hide();
$('#paket').hide();
$('#btnlogin').click(function () {
    $('#home').hide();
    $('#paket').hide();
    $('#login').show();
});

$('#btnhome').click(function () {
    $('#login').hide();
    $('#paket').hide();
    $('#home').show();
})

$('#btnpaket').click(function () {
    $('#login').hide();
    $('#paket').show();
    $('#home').hide();
})