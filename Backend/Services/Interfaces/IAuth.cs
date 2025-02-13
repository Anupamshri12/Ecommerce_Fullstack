using WebApplication1.Data;
using WebApplication1.Data.Entities;

namespace WebApplication1.Services.Interfaces
{
    public interface IAuth
    {
        public UserDetail Register(RegisterDTO dto);
        public object Login(UserDTO dto);
    }
}
