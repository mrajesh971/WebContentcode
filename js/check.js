/**
 * 
 */
		function check(userid,pswrd,type)
		{
			if(type === "users")
				{
				checkusers(userid,pswrd)
				}
			else if (type === "vendors")
				{
				checkvendors(userid,pswrd)
				}
		}

        function checkusers(userid,pswrd) {
        	
        	var hash = {};
        	
            jQuery.ajax({
            	
            	
                url:"http://localhost:8081/sensor_service/users",
                type:"GET",
                contentType:'application/json',
                dataType:"json",
                success:function(data) {
                	
                    $("#user-table tbody tr").remove();
                        $.each(data, function (i, item) {

                        	
                        	hash[item.userName] = item.userPassword
                       
                    });
                        
                    if(hash[userid] == pswrd)
                    	{
                    	
                    	fun2(userid)
                    	window.open("users.html")
                    	}
                    else
                    	{
                    	alert("invalid user name and password")
                    	}
                },
                
            });
			//alert(hash[item.userName])
        }
        
        function checkvendors(userid,pswrd) {
        	
        	var hash = {};
        	
            jQuery.ajax({
            	
            	
                url:"http://localhost:8081/sensor_service/vendors",
                type:"GET",
                contentType:'application/json',
                dataType:"json",
                success:function(data) {
                	
                    $("#user-table tbody tr").remove();
                        $.each(data, function (i, item) {

                        	
                        	hash[item.vendorName] = item.vendorPassword
                       
                    });
                        
                    if(hash[userid] == pswrd)
                    	{
                    	
                    	fun2(userid)
                    	window.open("vendor.html")
                    	}
                    else
                    	{
                    	alert(hash[userid])
                    	
                    	alert("invalid user name and password")
                    	}
                },
                
            });
			//alert(hash[item.userName])
        }
        
        function fun2(userid)
        {	
        	alert(userid)
        	$.ajax({
        		
        	   type:'POST',
        	   url:'ex.php',
        	   
        	   data:{userid : userid},
        	  
        	   success: function (data) {
        		  
        		   //response is value returned from php (for your example it's "bye bye"
        	     alert(data);
        	   }
        	});
        }
        
       