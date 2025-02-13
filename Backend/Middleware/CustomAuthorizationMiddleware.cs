using Azure.Core;
using Microsoft.IdentityModel.Tokens;
using Newtonsoft.Json.Linq;
using System;
using System.IdentityModel.Tokens.Jwt;
using System.Text;
namespace WebApplication1.Middleware;
public class CustomAuthorizationMiddleware
{
    public  readonly RequestDelegate? next;
    public readonly IConfiguration _configuration;
    public CustomAuthorizationMiddleware(RequestDelegate? _next ,IConfiguration configuration)
    {
        next = _next;
        _configuration = configuration;
    }
    public async Task InvokeAsync(HttpContext context)
    {
        
            if (context.Request.Path.Value!.ToLower().StartsWith("/api/postlogin") )
                
            {
                if (context.Request.Headers.TryGetValue("Authorization", out var token)) {
                    var tokenString = token.ToString().Split(" ")[^1];
                    var _test = _configuration["SecretKey:jwtsecretkey"] ?? throw new CustomException(Data.Entities.ErrorCode.ValidationFailed, "Authorization Failed");

                    // Validate the token
                    var tokenHandler = new JwtSecurityTokenHandler();
                    var validationParameters = new TokenValidationParameters
                    {
                        ValidateIssuerSigningKey = true,
                        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_test)),
                        ValidateIssuer = false,
                        ValidateAudience = false,
                        ClockSkew = TimeSpan.Zero 
                    };
                try
                {
                    var claimsPrincipal = tokenHandler.ValidateToken(tokenString, validationParameters, out _);
                    context.User = claimsPrincipal;
                }
                catch(Exception e)
                {
                    throw new CustomException(Data.Entities.ErrorCode.AuthorizationFailed, "Authorization Failed");
                }
                }
                else
                   {
                     throw new CustomException(Data.Entities.ErrorCode.AuthorizationFailed, "Authorization Failed");

                   }


            }
            else
            {

            }
            await next(context);
        }
       
    }


