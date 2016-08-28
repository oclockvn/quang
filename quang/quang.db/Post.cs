using System;

namespace quang.db
{
    public class Post
    {
        public int PostId { get; set; }
        public string Title { get; set; }
        public string Permalink { get; set; }
        public DateTime UpdatedDate { get; set; }
        public bool IsPublished { get; set; }
        public bool IsDeleted { get; set; }
        public DateTime CreatedDate { get; set; }
        public string CreatedBy { get; set; }

        /// <summary>
        /// Tag1, Tag2, Tag3
        /// </summary>
        public string Tags { get; set; }
        public string Excerpt { get; set; }
        public string Content { get; set; }

        public int View { get; set; }
        public int Rater { get; set; }
        public int TotalPoint { get; set; }
        public int AveragePoint { get; set; }

        /// <summary>
        /// Title + CreatedDate + CreatedBy + Tags + Excert
        /// </summary>
        public string Search { get; set; }
        public string Seo { get; set; }

        /// <summary>
        /// images/sources in format Guid1, Guid2, Guid3
        /// </summary>
        public string Medias { get; set; }
    }
}
