using Isopoh.Cryptography.Argon2;

namespace WebApplication1.Services
{
    public class PasswordService
    {
        public string Hashpassword(string password)
        {
            return Argon2.Hash(password);
        }
        public bool Validatepassword(string newpassword ,string oldpassword)
        {
            return Argon2.Verify(oldpassword, newpassword);
        }
    }
}
