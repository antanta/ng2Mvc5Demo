using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ng2Mvc5Demo.Models
{
    [Serializable]
    public class LanguageModel
    {
        public LanguageModel(int id, string description)
        {
            this.Id = id;
            this.Description = description;
        }

        public int Id { get; set; }
        public string Description { get; set; }
    }
}