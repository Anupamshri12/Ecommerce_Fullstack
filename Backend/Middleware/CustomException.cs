using WebApplication1.Data.Entities;

namespace WebApplication1.Middleware
{
    public class CustomException:Exception
    {
        public ErrorCode ErrorCode { get;}
        public override  string Message { get; }
        public CustomException(ErrorCode errorCode, string message)
        {
            this.ErrorCode = errorCode;
            Message = message;
        }
    }
}
