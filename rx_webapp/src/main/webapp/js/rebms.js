var rohlx = rohlx || {};

(function ($,mod) {
        var loader ;
       mod.init = function(){
              console.log('test');
              mod._init();
              mod._prefilterajax();
              mod._bind();
              
       };
       
        mod.ajax = function(){
           
            $.ajax({  
            type: "GET",  
           
            data: "gallery",  
            beforeSend: function() {
                console.log('beforesend');
            },
            complete: function() {
                console.log('after call');
            },
            success: function() {  
               console.log('sucess call');
           },
           error: function(a,b,c) {  
               console.log('error call'+c);
               setTimeout(function(){ajaxloaderObj.remove();},1000);
               
           }
           
            });
       };
       
       
       mod._pullData = function(){
              
       };
       
       mod._prefilterajax = function(){
              $.ajaxPrefilter(function(options){
                     console.log(options);
                     options.url = "*";
                     ajaxloaderObj = new ajaxLoader($('body'), {classOveride: 'blue-loader', bgColor: '#000', opacity: '0.3'});
              });
       };
       
       mod._bind = function(){
            $('.nav li a').unbind().bind("click", mod._submitData);    
       };
       
       mod._init = function(){
            mod._activateMenu();             
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
 
 
 

