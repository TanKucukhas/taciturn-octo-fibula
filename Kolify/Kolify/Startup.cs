using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(Kolify.Startup))]
namespace Kolify
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
