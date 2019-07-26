namespace CRM.Models.Database.Interfaces
{
    public interface IDatabaseEntity<TPrimaryKey>
    {
        TPrimaryKey PrimaryKey { get;}
        bool IsActive { get; set; }
    }
}
