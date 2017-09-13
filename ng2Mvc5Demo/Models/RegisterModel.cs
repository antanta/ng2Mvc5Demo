using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ng2Mvc5Demo.Models
{
    [Serializable]
    public class RegisterModel
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string Language { get; set; }
    }
}