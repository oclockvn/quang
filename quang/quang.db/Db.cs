using System.Data.Entity;

namespace quang.db
{
    public class Db : DbContext
    {
        public DbSet<Post> Posts { get; set; }
        public DbSet<Tag> Tags { get; set; }
        public DbSet<Media> Medias { get; set; }
        public DbSet<Website> Websites { get; set; }
    }
}
