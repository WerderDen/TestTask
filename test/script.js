$(function(){
$('.MainBoxClass .InputClassNumber').hide();
$('.ResultText').hide();
$( ".CheckBoxInputClass" ).click(function() {
  if ($('.CheckBoxInputClass').is(':checked')){
	$('.MainBoxClass .InputClassNumber').show();
} else {
	$('.MainBoxClass .InputClassNumber').hide();
};
});
    
var arr = {
    Dat: $("input[name*='Date']").val(),
    Sum: $("input[name*='Summ']").val(),
    Srok: $("input[name*='Srok']").val(),
    type: true,
    stavka: $("input[name*='Proc']").val(),
    Popoln: 0
};
    
$('.ButtonClass').click(function(){
$('.ButtonClass').click(function(){
 $.ajax({
     url: './calc.php',
    type: 'POST',
    data: JSON.stringify(arr),
    contentType: 'application/json; charset=utf-8',
    dataType: 'json',
     success: function(msg) {
        alert(msg);
    }
 });
});
}); 
});