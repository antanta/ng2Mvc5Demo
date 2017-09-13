using ng2Mvc5Demo.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Results;

namespace ng2Mvc5Demo.Controllers
{
    public class RegisterFormController : ApiController
    {
        [HttpPost]
        public IHttpActionResult ProcessRegister(RegisterModel model)
        {
            return Json(new { result = "success" });
        }
            
    }
}
