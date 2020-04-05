<%--
  Created by IntelliJ IDEA.
  User: 67512
  Date: 2020/4/4
  Time: 17:51
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
  <head>
    <title>$Title$</title>
  </head>
  <body>

  <form name="regform" action="servlet/NewServlet" method="post">
    <table border="0" cellspacing="0" cellpadding="5">
      <tr>
        <td class="label">名称：</td>
        <td class="controler"><input type="text" name="goodsname"></td>
      </tr>
      <tr>
        <td class="label">价格：</td>
        <td class="controler"><input type="text" name="goodsprice"></td>
      </tr>
      <tr>
        <td class="label">数量：</td>
        <td class="controler"><input type="text" name="goodsquantity"></td>
      </tr>
      <tr>
        <td class="label">单位：</td>
        <td class="controler"><input type="text" name="goodsunit"></td>
      </tr>
      <tr>
        <td class="label">产地：</td>
        <td class="controler"><input type="text" name="goodsOrigin"></td>
      </tr>
      <tr>
        <td colspan="2" align="center">
          <input type="submit" value="添 加">
        </td>
      </tr>

    </table>
  </form>
  </body>
</html>
