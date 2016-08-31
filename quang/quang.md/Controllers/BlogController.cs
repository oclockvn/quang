using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace quang.md.Controllers
{
    public class BlogController : Controller
    {
        // GET: Blog
        public ActionResult Post()
        {
            return View();
        }
    }
}