<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page isELIgnored="false"%>
<!DOCTYPE html>
   
<html lang="en">   
<head>   
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Rohlx EBMS</title>
    
    <!-- Bootstrap -->
    <link href="<c:url value="resources/css/bootstrap.min.css" />" rel="stylesheet" media="screen">
    <link href="/resources/css/rebms.css" rel="stylesheet" media="screen">
   <link href="/resources/css/bootstrap-responsive.css" rel="stylesheet" media="screen">
    
    <link href='http://fonts.googleapis.com/css?family=Fauna+One|Armata|Audiowide' rel='stylesheet' type='text/css'>
    <link href='http://fonts.googleapis.com/css?family=Monda|Expletus+Sans|Iceberg|Bubbler+One|Playball' rel='stylesheet' type='text/css'>
</head>

<body>
    
<div class="navbar navbar-static-top">
     <div class="navbar-inner">
        <div class="row">
        <div class="span2 text-center">
            <img src="resources/img/rohlx.jpg" height="auto" widht="auto"/>
        </div>
        <div class="span8">
            <h3 class="banner"><span class="rohlx">ROHLX</span> Enterprise Business Management Software</h3>
        </div>
        <div class="span2">
           
        </div>
    </div>
     </div>
</div>     
<div class="container-fluid">
    <div class="row">  
     <div class="span12" id="errorbar">
     	  
     </div>
    </div>
    
    <div class="row">  
     <div class="span12"><br/>
     </div>
    </div>
    
    <div class="row">  
     <div class="span2" >  
        <ul class="nav nav-tabs nav-stacked dropshadow control-group">  
            <li class="active"><a href="#" data-submit="home">Home</a></li>     
            <li><a href="#" data-submit="requests">Requests</a></li>  
            <li><a href="#" data-submit="gallery">Gallery</a></li>   
            <li><a href="#" data-submit="users">Users</a></li>   
            <li><a href="#" data-submit="dashboard">Dashboard</a></li>   
        </ul>  
    </div>
     
     <div class="span10" >
        <p id="datacontent"><tiles:insertAttribute name="body" /></p>
     </div>
    </div>  
</div>  

<script src="/resources/js/jquery.js"></script>
<script src="/resources/js/rebms.js"></script>
<script src="/resources/js/ajaxloader.js" type="text/javascript"></script>
<script src="/resources/js/bootstrap.min.js"></script>

</body>
</html>