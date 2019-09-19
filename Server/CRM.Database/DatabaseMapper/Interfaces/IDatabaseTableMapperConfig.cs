using Microsoft.EntityFrameworkCore;

namespace CRM.Database.DatabaseMapper.Interfaces
{
    public interface IDatabaseTableMapperConfig
    {
        void Map(ModelBuilder modelBuilder);
    }
}