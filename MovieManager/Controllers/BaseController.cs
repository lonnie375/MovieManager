using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;

namespace MovieManager.Controllers
{
    public class BaseController : ControllerBase
    {
        protected string GetUserAuthId()
        {
            var userNameClaim = User.Claims.FirstOrDefault(x => x.Type == ClaimTypes.NameIdentifier);
            if (userNameClaim != null)
            {
                return userNameClaim.Value; 
            }
            return "2"; 
        }
    }
}
