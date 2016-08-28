using System;

namespace quang.db
{
    public class Media
    {
        public Guid MediaId { get; set; }
        public int PostId { get; set; }
        public double Width { get; set; }
        public double Height { get; set; }
        public double ContentLength { get; set; }
        public string FileName { get; set; }
        public string Alt { get; set; }
        public DateTime UpdatedDate { get; set; }
        public string UpdatedBy { get; set; }
        public string Description { get; set; }
        public int MediaType { get; set; }
    }
}
