$(function(){
$('.MainBoxClass .InputClassNumber').hide();
    
$('.ResultText').hide();
    
$( ".CheckBoxInputClass" ).click(function() 
{
    
  if ($('.CheckBoxInputClass').is(':checked'))
  {
	$('.MainBoxClass .InputClassNumber').show();
  } 
    else 
    {
	   $('.MainBoxClass .InputClassNumber').hide();
    }
});
    

    
$('.ButtonClass').click(function()
                        {
    
    var checker =0;
    if ($('.CheckBoxInputClass').is(':checked'))
  {
	checker=1;
  } 
    else 
    {
	   checker=0;
    }
    
    
    var selecter=1;
    if($('.SelectBox').val()=="mesyats"){
       selecter=1;
       }
    else{
        selecter=12;
    }
   $.get(
  './calc.php',          // адрес отправки запроса
  {startDate: $("input[name*='Date']").val(),
    sum: parseFloat($("input[name*='Summ']").val()),
    term: parseInt($("input[name*='Srok']").val()* selecter),
    percent: parseFloat($("input[name*='Proc']").val())/100,
    sumAdd: parseFloat($("input[name*='Popoln']").val()*checker)
  }, 
       // передача с запросом каких-нибудь данных
  function(data) {              
      $(".ResultText").text("Сумма к выплате: "+JSON.parse(data).sum.toFixed(2)+" рублей");
      $(".ResultText").show();
  }
);

}); 
});