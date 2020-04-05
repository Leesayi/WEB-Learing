package servlet;

import entity.users;

import javax.servlet.ServletException;
//import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

//@WebServlet ("/servlet/NewServlet")
public class NewServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        //super.doGet(req, resp);
        doPost(req,resp);
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        //super.doPost(req, resp);
        req.setCharacterEncoding("utf-8");
        users u = new users();
        String goodsname,goodsprice,goodsquantity,goodsunit,goodsOrigin;
        try {
            goodsname = req.getParameter("goodsname");
            goodsprice = req.getParameter("goodsprice");
            goodsquantity = req.getParameter("goodsquantity");
            goodsunit = req.getParameter("goodsunit");
            goodsOrigin = req.getParameter("goodsOrigin");
            u.setGoodsname(goodsname);
            u.setGoodsprice(goodsprice);
            u.setGoodsquantity(goodsquantity);
            u.setGoodsunit(goodsunit);
            u.setGoodsOrigin(goodsOrigin);
            //把注册成功的对象保存在session中
            req.getSession().setAttribute("Newusers",u);

            req.getRequestDispatcher("../goodsInfo.jsp").forward(req,resp);

        }catch (Exception ex){
            ex.printStackTrace();
        }
    }

    @Override
    public void destroy() {
        super.destroy();
    }

    @Override
    public void init() throws ServletException {
        super.init();
    }
}
