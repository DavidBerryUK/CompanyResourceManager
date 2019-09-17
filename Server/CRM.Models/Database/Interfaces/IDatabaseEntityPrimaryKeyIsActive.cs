namespace CRM.Models.Database.Interfaces
{
    public interface IDatabaseEntityPrimaryKeyIsActive<TPrimaryKey> : IDatabaseEntityPrimaryKey<TPrimaryKey>
    {
        bool IsActive { get; set; }
    }
}
