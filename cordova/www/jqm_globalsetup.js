$(document).on('mobileinit', jqm_globalsetup() );

function jqm_globalsetup(){
   
	var events = ["pagecontainershow"];	
   for (var i = 0; i < events.length; i++) {
		$(document).on( events[i], jqmPageCallbacks(events[i]) );	
	}	
}	


//http://stackoverflow.com/questions/20828948/jquerymobile-pagecontainershow-on-a-particular-page-not-working
function jqmPageCallbacks(eventName){
	return  function (e, ui) {			 
	    var pageId =  $(':mobile-pagecontainer').pagecontainer('getActivePage').attr('id');
	    var nameToCall = eventName + "_" + pageId;
    //ver stackoverflow "How to execute a JavaScript function when I have its name as a string"	
	    fn = window[nameToCall];
	    if (typeof fn === "function") fn(e,ui);
	    //else
	    //alert("calling " + nameToCall);
	    
	};
}
