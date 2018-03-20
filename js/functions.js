 
 
 $(document).ready(function(){  

	$('html,body').animate({ scrollTop: $("#topo").offset().top},'slow');
	 
	$("#topPresentation").animate(
	{
		left: '300px', 
		opacity: '1' 
	}, 
		2000
	); 
	


});
 
 
function goScroll(id){ 
	  
	$("li").removeClass("activate");
	
    $('html,body').animate(
	{
        scrollTop: $("#"+id).offset().top
	},
    'slow'
	);
	
	$("#go"+id).addClass("activate");	
}