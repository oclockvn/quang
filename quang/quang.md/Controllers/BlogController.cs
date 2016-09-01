using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace quang.md.Controllers
{
    public class BlogController : Controller
    {       
        public ActionResult Post()
        {
            return View();
        }

        public ActionResult Tag()
        {
            return View();
        }
    }
}