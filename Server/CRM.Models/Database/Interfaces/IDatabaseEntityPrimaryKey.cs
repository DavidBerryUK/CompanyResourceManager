namespace CRM.Models.Database.Interfaces
{
    public interface IDatabaseEntityPrimaryKey<TPrimaryKey>
    {
        TPrimaryKey PrimaryKey { get; set; }

        bool IsActive { get; set; }
    }
}