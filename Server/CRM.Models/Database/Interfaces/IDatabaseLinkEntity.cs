namespace CRM.Models.Database.Interfaces
{
    public interface IDatabaseEntity<TPrimaryKey>
    {
        TPrimaryKey PrimaryKey { get; set; }
        bool IsActive { get; set; }
    }
}
