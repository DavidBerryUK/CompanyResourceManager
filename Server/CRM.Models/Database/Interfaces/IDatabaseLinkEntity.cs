namespace CRM.Models.Database.Interfaces
{
    public interface IDatabaseLinkEntity<TPrimaryKey>
    {
        (TPrimaryKey first, TPrimaryKey second) GetKey { get; }
    }
}
