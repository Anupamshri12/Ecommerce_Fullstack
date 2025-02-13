using Isopoh.Cryptography.Argon2;
using WebApplication1.Services.Interfaces;

namespace WebApplication1.Services.Implementations
{
    public class PasswordImplement:IPassword
    {
        public string Hashpassword(string password)
        {
            return Argon2.Hash(password);
        }
        public bool Validatepassword(string newpassword, string oldpassword)
        {
            return Argon2.Verify(oldpassword, newpassword);
        }
    }
}
