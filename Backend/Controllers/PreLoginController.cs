using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;

using WebApplication1.CustomDBContenxt;
using WebApplication1.Data;
using WebApplication1.Data.Entities;
using WebApplication1.Services;
using WebApplication1.Services.Implementations;
using WebApplication1.Services.Interfaces;
namespace WebApplication1.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PreLoginController:ControllerBase
    {
        public readonly  DbContextdetail dbContextdetail;
        public readonly IAuth authService;
        public PreLoginController(DbContextdetail dbContextdetail ,IAuth authService)
        {
            this.dbContextdetail = dbContextdetail;
            this.authService = authService;
        }
       
        [HttpPost]
        [Route("register")]
        public  IActionResult Register([FromBody] RegisterDTO dto)
        {
            
            var create_user = authService.Register(dto);
            return Ok(create_user);
        }

        [HttpPost]
        [Route("Login")]
        public IActionResult Login([FromBody] UserDTO dto)
        {
            var token = authService.Login(dto);
            return Ok(token);
        }
    }
}