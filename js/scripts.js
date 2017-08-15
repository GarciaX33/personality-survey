$(document).ready(function(){
  $("form#personality_survey").submit(function(event){
    event.preventDefault();
    $("#personality-responses").show();
    $("input:checkbox[name=personalities]:checked").each(function(){
      var workTransportationMode = $(this).val();
      $('#personality-responses').append(workTransportationMode + "<br>");
    });
    $('#personality_survey').hide();
  });
});
