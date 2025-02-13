namespace WebApplication1.Services.Interfaces
{
    public interface IPassword
    {
        public string Hashpassword(string password);
        public bool Validatepassword(string oldpassword, string newpassword);
    }
}
