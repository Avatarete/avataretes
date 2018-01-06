jQuery(document).ready(function($){
  
  window.onload = setTimeout(function (){
    $(".bts-popup").delay(5000).addClass('is-visible');
	}, 3000);
  
   window.onload = setTimeout(function (){
    $(".FOLLETO").delay(5000).addClass('is-visible');
	}, 3000);
	
	//close popup
	$('.bts-popup').on('click', function(event){
		if( $(event.target).is('.close') || $(event.target).is('.bts-popup') ) {
			event.preventDefault();
			$(this).removeClass('is-visible');
		}
	});
	//close popup when clicking the esc keyboard button
	$(document).keyup(function(event){
    	if(event.which=='27'){
    		$('.bts-popup').removeClass('is-visible');
	    }
    });
    });// JavaScript Document