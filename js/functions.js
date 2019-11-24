$(document).ready(function(){
  $('#device-filter').on('input', function(){
    $('.device').each(function(){
      $(this).show();
      if($(this).html().indexOf($('#device-filter').val()) == -1){
        $(this).hide();
      }
    });
  })
});
