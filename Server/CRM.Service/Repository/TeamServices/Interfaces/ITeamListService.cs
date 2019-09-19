using System;
using System.Threading.Tasks;
using CRM.Models.Database.Teams;
using CRM.Models.Rest.BaseResponse;
using CRM.Models.Rest.Lists;
using CRM.Service.Repository.BaseServices.Interface;

namespace CRM.Service.Repository.TeamServices.Interfaces
{
    public interface ITeamListService : IBaseListService<Team, PersonTeam, Guid>
    {
        Task<BaseCollectionResponse<ListItem>> GetAllWithSelectionForPerson(Guid personId);

        Task<BaseCollectionResponse<ListItem>> GetSelectedForPerson(Guid personId);

        Task<BaseCollectionResponse<ListItem>> GetUnSelectedForPerson(Guid personId);

        Task Update(Guid teamId, Guid personId, bool selected);
    }
}