using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace WebApplication1.Data.Entities
{
    [Table("user")]
    public class UserDetail
    {
        [Key]
        public int UserId { get; set; }
        public string ?FirstName { get; set; }
        public string ?LastName { get; set; }
        public string? UserName { get; set; }
        [MinLength(10)]
        [Description("Enter valid length password")]
        public string? Password { get; set; }
        public string? Email { get; set; }
        public string? Date { get; set; }

        

    }
}
