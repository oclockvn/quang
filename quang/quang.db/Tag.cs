using System;

namespace quang.db
{
    public class Tag
    {
        public int TagId { get; set; }
        public string TagName { get; set; }
        public string Permalink { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime UpdatedDate { get; set; }
        public string UpdatedBy { get; set; }
        public int TotalPost { get; set; }

        /// <summary>
        /// post by tag in format PostId1, PostId2, PostId3
        /// </summary>
        public string Posts { get; set; }
    }
}
