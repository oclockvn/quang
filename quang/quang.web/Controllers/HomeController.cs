using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;
using System.Web;
using System.Web.Mvc;

namespace quang.web.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            using (var web = new System.Net.WebClient())
            {
                var html = web.DownloadString("http://phantienquang.blogspot.com");
            }

            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
    }
}