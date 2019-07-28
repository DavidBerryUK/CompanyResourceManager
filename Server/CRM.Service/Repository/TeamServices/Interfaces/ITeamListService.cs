using CRM.Models.Database.Teams;
using CRM.Models.Rest.BaseResponse;
using CRM.Models.Rest.Lists;
using System;
using System.Threading.Tasks;

namespace CRM.Service.Repository.TeamServices.Interfaces
{
    public interface ITeamListService : IBaseListService<Team, PersonTeam, Guid>
    {
        /// <summary>
        /// get all list items, with no reference to
        /// the link or parent tables
        /// </summary>
        /// <returns></returns>
        Task<BaseCollectionResponse<ListItem>> GetAll();

        Task<BaseCollectionResponse<ListItem>> GetAllWithSelectionForPerson(Guid personId);

        Task<BaseCollectionResponse<ListItem>> GetUnSelectedOnly();

        Task<BaseCollectionResponse<ListItem>> GetSelectedOnly();
    }
}