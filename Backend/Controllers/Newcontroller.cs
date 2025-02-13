//using Microsoft.AspNetCore.Authorization;
//using Microsoft.AspNetCore.Mvc;
//using Microsoft.Data.SqlClient;
//using Microsoft.EntityFrameworkCore;
//using MySqlConnector;
//using System.Collections.Generic;
//using System.Linq;
//using WebApplication1.CustomDBContenxt;
//using WebApplication1.Data.Entities;
//using WebApplication1.Data;
//using System.Text.Json;
//using System.Text;
//using WebApplication1.Middleware;
//namespace WebApplication1.Controllers;
//[ApiController]
//[Route("api/[controller]")]
//public class Newcontroller(DbContextdetail _dbcontextdetail, HttpClient _httpclient) : ControllerBase{
//    public readonly DbContextdetail dbcontextdetail = _dbcontextdetail;
//    public readonly HttpClient httpclient = _httpclient;

//    [HttpGet]
//    [Route("getdetails1")]
//    public async Task<object?> Getdetails()
//    {
//        string url = "https://jsonplaceholder.typicode.com/posts";
//        HttpResponseMessage response = await httpclient.GetAsync(url);
//        if (!response.IsSuccessStatusCode) { throw new CustomException(ErrorCode.AuthorizationFailed, "No such url exists"); };
//        string jsonresponse = await response.Content.ReadAsStringAsync();
//        var object1 = JsonSerializer.Deserialize<object>(jsonresponse);
//        return object1;



//    }
//    [HttpPost]
//    [Route("postdetails")]
//    public async Task<IActionResult?> Postdetails()
//    {
//        string url = "https://jsonplaceholder.typicode.com/posts";
//        var newobject = new
//        {
//            userId = 111,
//            title = "Hello",
//            body = "this is me"

//        };
//        string contentjson = JsonSerializer.Serialize(newobject);
//        var httpcontent = new StringContent(contentjson, Encoding.UTF8, "application/json");
//        HttpResponseMessage response = await httpclient.PostAsync(url ,httpcontent);
//        string responseget = await response.Content.ReadAsStringAsync();
//        return Ok(responseget);

//    }

//   [HttpGet]
//   [Route("getdetails")]
//   public List<UserDetail> getdetails(string? id){
        
//             var users = dbcontextdetail.UserDetails;
             
//             return users.ToList();
        
//   }
//    [HttpGet]
//    [Route("string")]
//    public string getstring()
//    {
//        return "Myself Anupam Shrivastava";
//    }
//    [HttpGet]
//    [Route("getcountry")]
//    public List<UserDetail>getcountry(string? lastname)
//    {
//        var parameter = new MySqlParameter("@last", lastname);
//        var users = dbcontextdetail.UserDetails.FromSqlRaw("call callbycountry(@last)", parameter);
//        return users.ToList();

//    }

//    [HttpGet]
//    [Route("getnumber")]
//    public IActionResult guessnumber(int guessedNumber)
//    {
//          if (guessedNumber < 18)
//            {
//                throw new Exception("This is incorrect");
//            }
//            else if (guessedNumber > 18)
//            {
//                return Ok("Somewhat correct");
//            }
//            return Ok("Correct number guessed");
       
       
//    }

//}