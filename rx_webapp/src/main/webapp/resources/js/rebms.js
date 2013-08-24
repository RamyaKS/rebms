var rohlx = rohlx || {};

(function ($,mod) {
   
       mod.init = function(){
            
              mod._init();
              mod._prefilterajax();
              mod._bind();
              
       };
       
        mod.ajax = function(){
           
            $.ajax({  
            type: "GET",  
            url: "searchresults.jsp",
            data: "action=gallery"})
            .done(function(response, textStatus, jqXHR) {  
            	ajaxloaderObj.remove();
                $("#datacontent").html(jqXHR.responseText);})
            .fail( function(jqXHR, textStatus, errorThrown) {
            	 ajaxloaderObj.remove();
            	 $("#errorbar").html("<div class=\"alert alert-danger\">"+errorThrown+"</div>");
            	console.log(errorThrown);
            	console.log("textstate"+textStatus);
            });
       };
       
       
       mod._pullData = function(){
              
       };
       
       mod._prefilterajax = function(){
              $.ajaxPrefilter(function(options){
                     ajaxloaderObj = new ajaxLoader($('body'), {classOveride: 'blue-loader', bgColor: '#000', opacity: '0.3'});
              });
       };
       
       mod._bind = function(){
            $('.nav li a').unbind().bind("click", mod._submitData);    
       };
       
       mod._init = function(){
            mod._activateMenu();
            
            $('#myModal').modal({
            	keyboard: true
            });
       };
       
       
       mod._submitData = function(){
              console.log(this);
              mod.ajax();
              mod._activateMenu(this);
              
       };
       
       mod._activateMenu = function(currElem){
                    if(!(currElem === undefined)){
                           $('.nav li').removeClass('active');
                            $(currElem).parent().addClass('active');
                    }
                
       };
       
       
       
 })(window.jQuery,rohlx)

$(rohlx.init);
 
 
 

