using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using MySqlConnector;
using System.Collections.Generic;
using System.Linq;
using WebApplication1.CustomDBContenxt;
using WebApplication1.Data.Entities;


namespace WebApplication1.Controllers
{
    [Authorize]

    [ApiController]
    [Route("api/[controller]")]

    public class PostLoginController : ControllerBase

    {
        public readonly DbContextdetail _dbcontextdetail;
        public PostLoginController(DbContextdetail dbcontextdetail)
        {
            _dbcontextdetail = dbcontextdetail;
        }
        [HttpGet]
        [Route("protected")]
        public IActionResult CheckValidation()
        {
            return Ok( new {message= "Hello"});
        }

        [HttpGet]
        [Route("getallusers")]
        public IActionResult GetAlluser()
        {
            var getalluser =  _dbcontextdetail.UserDetails;
            return Ok(getalluser);

        }



















        //[HttpGet]
        //[Route("getallusers")]
        //public async Task<List<UserDetail>> GetallUser(string define)
        //{
        //    try
        //    {

        //        try
        //        {
        //            var getallusers = await _dbcontextdetail.UserDetails.ToList();
        //            return getallusers;
        //        }
        //        catch (Exception e)
        //        {
        //            return new List<UserDetail>((IEnumerable<UserDetail>)e);
        //        }

        //        //else if(define == "india")
        //        //{
        //        //    var users = await _dbcontextdetail.UserDetails.Where(u => u.Location == "India")

        //        //        .ToListAsync();
        //        //    return users;

        //        //}

        //    }
        //    catch (Exception e)
        //    {
        //        return new List<UserDetail>((IEnumerable<UserDetail>)e);
        //    }
        //}
        //[HttpGet]
        //[Route("getlocation")]
        //public async Task<object> GetLocation(string? location)
        //{
        //    if (location == null) return 0;
        //    var locationparameter = new MySqlParameter("@location ", location);
        //    var getdetails = await _dbcontextdetail.UserDetails.FromSqlRaw("call get_location(@location)", locationparameter).ToListAsync();
        //    return getdetails;


        //}
      



        //[HttpPut]
        //[Route("updatedetails")]
        //public async Task<object?> UpdateDetails(int Id, string UserName)
        //{
        //    var finduser = await _dbcontextdetail.UserDetails.FindAsync(Id);
        //    var find = await _dbcontextdetail.AuthUsers.FindAsync(Id);
        //    if (find != null && finduser != null)
        //    {
        //        finduser.UserName = UserName;
        //        find.UserName = UserName;//                await _dbcontextdetail.SaveChangesAsync();
        //        return finduser;
        //    }
        //    return null;
        //}
       
    }
}
