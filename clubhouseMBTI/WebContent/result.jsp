<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ page import =  "dao.*" %>
<%	 String EI = request.getParameter("EI");
	 String SN = request.getParameter("SN");
	 String TF = request.getParameter("TF");
	 String JP = request.getParameter("JP");
	 String mbti = EI+SN+TF+JP;
	 
	 
	 resultDao dao = new resultDao();
	 System.out.print(mbti);
%>
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="ie=edge">
<link rel="stylesheet" href="css/main.css">
	<title> Clubhouse MBTI </title>

</head>
    
	<body>
      <header>
          <a href="index.html"><p class="subPageTitle">Clubhouse MBTI</p></a>
      </header>
       <main>
			<%=mbti %>
			
			<div class="resultBox">
				<% if (mbti.equals("INFJ")) {
					out.print(dao.getInfj());
				} else if (mbti.equals("INFP")) {
					
				} %>
			</div>
        </main>
</body>
</html>
