using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace INTERFACE.Models
{
    public class Exclusion
    {
        public string Logtime { get; set; }
        public int Id { get; set; }
        public string App { get; set; }
        public string Entity { get; set; }
        public DateTime? ExpiryDate { get; set; }
        public string Description { get; set; }
        public Exclusion()
        { }
    }
}
