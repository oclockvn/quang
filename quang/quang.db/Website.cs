using System;

namespace quang.db
{
    public class Website
    {
        public Guid WebsiteId { get; set; }
        public int TotalView { get; set; }
        public string Description { get; set; }
        public string Url { get; set; }
    }
}
