using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(quang.web.Startup))]
namespace quang.web
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
