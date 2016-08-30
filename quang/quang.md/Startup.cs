using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(quang.md.Startup))]
namespace quang.md
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
