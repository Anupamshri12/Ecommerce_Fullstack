using WebApplication1.CustomDBContenxt;
using Microsoft.EntityFrameworkCore;
using WebApplication1.Data.Entities;
using System.Security.Claims;
using System.IdentityModel.Tokens.Jwt;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using WebApplication1.Middleware;
using WebApplication1.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http.HttpResults;
using WebApplication1.Services.Interfaces;
using System.Text.RegularExpressions;

namespace WebApplication1.Services.Implementations
{
    public class AuthImplement:IAuth

    {
        public readonly DbContextdetail dbContextdetail;
        public readonly IConfiguration _configuration;
        public readonly IPassword passwordservice;
        public AuthImplement(DbContextdetail _dbContextdetail, IConfiguration configuration,IPassword _passwordservice)
        {
            dbContextdetail = _dbContextdetail;
            _configuration = configuration;
            passwordservice = _passwordservice;
        }
        public UserDetail Register(RegisterDTO dto)
        {
            var getuser = dbContextdetail.UserDetails.FirstOrDefault(name => name.UserName == dto.UserName);
            if (getuser != null) throw new CustomException(ErrorCode.ValidationFailed, "Username already exists");
            if (dto.Password == null || dto.Password != null && dto.Password.Length < 10)
            {
                throw new CustomException(ErrorCode.ValidationFailed, "Enter valid password");
            }
            if(dto.Password != null && (!dto.Password.Any(char.IsUpper) || !dto.Password.Any(char.IsLower) || !dto.Password.Any(char.IsNumber)
                || !Regex.IsMatch(dto.Password , @"[!@#$%^&*(),.?""{}|<>]")))
            {
                throw new CustomException(ErrorCode.ValidationFailed, "Enter valid password");
            }
            var new_user = new UserDetail()
            {
                FirstName = dto.FirstName,
                LastName = dto.LastName,
                UserName = dto.UserName,
                Email = dto.Email,
                Date = DateTime.Now.ToString(),
                Password = dto.Password
            };
            var hashedpassword = dto.Password != null ? passwordservice.Hashpassword(dto.Password) : null;
            var auth_user = new AuthDetail()
            {
                UserName = dto.UserName,
                HashedPassword = hashedpassword
            };
            
            dbContextdetail.UserDetails.Add(new_user);
            dbContextdetail.AuthUsers.Add(auth_user);
            dbContextdetail.SaveChanges();
            return new_user;
        }
        public object Login(UserDTO dto)
        {
            var finduser = dbContextdetail.AuthUsers.FirstOrDefault(user => user.UserName == dto.UserName);
            if (finduser == null)
            {
                throw new CustomException(ErrorCode.UserNotFound, "User not found");
            }
            if (finduser != null)
            {
                var checkpassword = dto.Password != null && finduser.HashedPassword != null ? passwordservice.Validatepassword(dto.Password, finduser.HashedPassword) : false;
                if (checkpassword == true)
                {
                    string token = GenerateJWTToken(dto);
                    var k = new
                    {
                        token = token,
                        message = "Authenticated"
                    };
                    return k;
                }

            }
            throw new CustomException(ErrorCode.ValidationFailed, "Credentials are incorrect");
        }
        public string GenerateJWTToken(UserDTO User)
        {
            var claims = new List<Claim>
            {

                new Claim(ClaimTypes.Name ,User.UserName)
            };
            var jwtToken = new JwtSecurityToken(
                claims: claims,
                notBefore: DateTime.UtcNow,
                expires: DateTime.UtcNow.AddDays(1),
                signingCredentials: new SigningCredentials(
                    new SymmetricSecurityKey(
                        Encoding.UTF8.GetBytes(_configuration["SecretKey:jwtsecretkey"])
                        ),
                     SecurityAlgorithms.HmacSha256Signature

                    )

                );
            return new JwtSecurityTokenHandler().WriteToken(jwtToken);
        }

    }
}
