<%--
  Created by IntelliJ IDEA.
  User: 67512
  Date: 2020/4/5
  Time: 15:03
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8"  import="java.util.*,java.text.*" language="java" %>
<html>
<head>
    <title>订购信息</title>
</head>
<body>
<jsp:useBean id="Newusers" class="entity.users" scope="session"></jsp:useBean>
  <table>
      <tr>
          <td class = "title">名称：</td>
          <td class="content">&nbsp;<jsp:getProperty name="Newusers" property="goodsname"/></td>
      </tr>
      <tr>
          <td class = "title">价格：</td>
          <td class="content">&nbsp;<jsp:getProperty name="Newusers" property="goodsprice"/></td>
      </tr>
      <tr>
          <td class = "title">数量：</td>
          <td class="content">&nbsp;<jsp:getProperty name="Newusers" property="goodsquantity"/></td>
      </tr>
      <tr>
          <td class = "title">单位：</td>
          <td class="content">&nbsp;<jsp:getProperty name="Newusers" property="goodsunit"/></td>
      </tr>
      <tr>
          <td class = "title">产地：</td>
          <td class="content">&nbsp;<jsp:getProperty name="Newusers" property="goodsOrigin"/></td>
      </tr>
  </table>

</body>
</html>
