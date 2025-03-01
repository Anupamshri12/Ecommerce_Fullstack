using System.Text.Json;

namespace WebApplication1.Middleware;
public class CustomMiddleware
{
    public readonly RequestDelegate next;
    public CustomMiddleware(RequestDelegate _next)
    {
        next = _next;
    }
    public async Task InvokeAsync(HttpContext context)
    {
        try
        {
            await next(context);
        }
        catch(CustomException e)
        {
            await CustomExceptionHandle(context, e);
        }
        catch(Exception e)
        {
            await HandleException(context, e);
        }
    }
    public Task CustomExceptionHandle(HttpContext context ,CustomException e)
    {
        if(e.ErrorCode == Data.Entities.ErrorCode.UserNotFound)
        {
            context.Response.StatusCode = 404;
        }
        else if(e.ErrorCode == Data.Entities.ErrorCode.ValidationFailed)
        {
            context.Response.StatusCode = 400;
        }
        else if(e.ErrorCode == Data.Entities.ErrorCode.AuthorizationFailed)
        {
            context.Response.StatusCode = 401;
        }
        else
        {
            context.Response.StatusCode = 403;
        }
        var result = JsonSerializer.Serialize(new
        {
            code = e.ErrorCode,
            message = e.Message
        });
        return context.Response.WriteAsync(result);
    }
    public Task HandleException(HttpContext context, Exception e)
    {
        context.Response.StatusCode = 401;
        context.Response.ContentType = "application/json";
        var result = JsonSerializer.Serialize(new{
            errorcode = context.Response.StatusCode,
            message = e.Message
        });
        return context.Response.WriteAsync(result);
    }







}