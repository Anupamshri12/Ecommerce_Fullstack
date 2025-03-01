using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using MySqlConnector;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Mail;
using WebApplication1.CustomDBContenxt;
using WebApplication1.Data.Entities;
using WebApplication1.Middleware;


namespace WebApplication1.Controllers
{
    [Authorize]

    [ApiController]
    [Route("api/[controller]")]

    public class PostLoginController : ControllerBase

    {
        public readonly DbContextdetail _dbcontextdetail;
        public readonly IConfiguration _configuration;
        public static string value = "";
        public PostLoginController(DbContextdetail dbcontextdetail ,IConfiguration configuration)
        {
            _configuration = configuration;
            _dbcontextdetail = dbcontextdetail;
        }
        [HttpPost]
        [Route("emailsender")]
        public IActionResult Emailsender(EmailDto dto){
            var smtpSettings = _configuration.GetSection("SmtpSettings");

        string host = smtpSettings["Host"];
        int port = int.Parse(smtpSettings["Port"]);
        bool enableSsl = bool.Parse(smtpSettings["EnableSsl"]);
        string username = smtpSettings["Username"];
        string password = smtpSettings["Password"];
        string recipientEmail = smtpSettings["RecipientEmail"];

          
        try
        {
            
            MailMessage mail = new MailMessage();
            mail.From = new MailAddress(username);
            mail.To.Add(dto.email);
            mail.Subject = "OTP Request";
            string ans = "";
            for(int i = 0; i < 4;i++){
               Random random = new Random();
               int k = random.Next(0 ,9);
               ans += k.ToString();
            }
            mail.Body = $"Dear User, OTP for confirming your order : {ans}. Please do not share with anyone.";

            SmtpClient smtp = new SmtpClient(host, port)
            {
                Credentials = new NetworkCredential(username, password),
                EnableSsl = enableSsl
            };
            value = ans;

            smtp.Send(mail);

            return Ok("OTP sent");
        }
        catch (Exception ex)
        {
            return StatusCode(500, $"Email sending failed: {ex.Message}");
        }
            
        }
        [HttpPost]
        [Route("checkotp")]
        public object Checkotp(OtpDto dto){
            if(dto == null){
                throw new CustomException(ErrorCode.ValidationFailed ,"Enter OTP");
            }
            if(dto.otp != value){
               throw new CustomException(ErrorCode.ValidationFailed ,"Validation Failed");
            }
            return Ok("Validated");
            
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
