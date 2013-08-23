<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page isELIgnored="false"%>
<html>
<head>
    <title>Spring 3.0 MVC Series: Hello World - ViralPatel.net</title>
</head>
<body>
    ${message}
    
    <c:out value="${message}" />
</body>
</html>