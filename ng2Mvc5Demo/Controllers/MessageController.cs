using ng2Mvc5Demo.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Results;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

namespace ng2Mvc5Demo.Controllers
{
    public class MessageController : ApiController
    {
        [HttpPost]
        public async Task<string> ReceiveMessage()
        {
            string result = await Request.Content.ReadAsStringAsync();
            dynamic d = JObject.Parse(result);
            string res = Convert.ToString(d.message);
            return res;
        }
    }
}
