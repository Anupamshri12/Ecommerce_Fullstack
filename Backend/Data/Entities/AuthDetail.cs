using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace WebApplication1.Data.Entities
{
    [Table("auth")]
    public class AuthDetail
    {
        [Key]
        public int UserId { get; set; }
        public string ?UserName { get; set; }
        public string ? HashedPassword { get; set; }  
    }
}
