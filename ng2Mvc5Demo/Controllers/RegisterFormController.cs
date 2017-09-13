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

        [HttpGet]
        public IHttpActionResult ListLanguages(LanguageFilter filter)
        {
            return Json(GetLanguages());
        }

        #region Private members 
        private LanguageModel[] GetLanguages()
        {
            LanguageModel[] result = new LanguageModel[]
            {
                new LanguageModel(1, "English"),
                new LanguageModel(2, "French"),
                new LanguageModel(3, "German")
            };
            return result;
        }
        #endregion

    }
}
