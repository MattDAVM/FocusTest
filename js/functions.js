<<<<<<< HEAD
 
 
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
=======
 
 
 $(document).ready(function(){  
	
	$("#topPresentation").animate(
	{
		left: '300px', 
		opacity: '1' 
	}, 
		2000
	); 
	
	console.log($( "body" ).scrollTop());
	
     
	
});
 
>>>>>>> 47367d82400bb034987c92d7643e469e39276372
