using AutoMapper;
using CRM.Database.Context;
using CRM.Models.Database.Teams;
using CRM.Models.Rest.BaseResponse;
using CRM.Models.Rest.Lists;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CRM.Service.Repository.TeamServices.Interfaces;

namespace CRM.Service.Repository.TeamServices
{
    public class TeamListService : BaseListService<Team,PersonTeam,Guid>, ITeamListService
    {

        public TeamListService(CrmDatabaseContext dbContext) : base(dbContext)
        {

        }


        /// <summary>
        /// get all list items, with no reference to
        /// the link or parent tables
        /// </summary>
        /// <returns></returns>
        public async Task<BaseCollectionResponse<ListItem>> GetAll()
        {
            var query = from team in DbContext.Teams
                        select team;

            var data = await query.ToListAsync();

            var response = new BaseCollectionResponse<ListItem>
            {
                Items = Mapper.Map<List<ListItem>>(data)
            };

            return response;
        }

        public async Task<BaseCollectionResponse<ListItem>> GetAllWithSelectionForPerson(Guid personId)
        {
            var response = await GetAllWithSelection(
                key => key.TeamId,
                join => join.TeamId,
                text => text.Name,
                filter => filter.PersonId,
                personId
            );

            return response;
        }

        public async Task<BaseCollectionResponse<ListItem>> GetUnSelectedOnly()
        {
            var query = from tableReference in DbContext.Teams
                        join link in DbContext.PersonsTeams on tableReference.TeamId
                            equals link.TeamId
                            into joinedData
                        from outerJoinedData in joinedData.DefaultIfEmpty()
                        where outerJoinedData.TeamId == null
                        select new ListItem()
                        {
                            Id = tableReference.TeamId.ToString(),
                            Name = tableReference.Name,
                            Selected = false
                        };

            var data = await query.ToListAsync();

            var response = new BaseCollectionResponse<ListItem>
            {
                Items = data
            };

            return response;
        }

        public async Task<BaseCollectionResponse<ListItem>> GetSelectedOnly()
        {
            var query = from tableReference in DbContext.Teams
                        join link in DbContext.PersonsTeams on tableReference.TeamId
                            equals link.TeamId
                            into joinedData
                        select new ListItem()
                        {
                            Id = tableReference.TeamId.ToString(),
                            Name = tableReference.Name,
                            Selected = true
                        };

            var data = await query.ToListAsync();

            var response = new BaseCollectionResponse<ListItem>
            {
                Items = data
            };

            return response;
        }

    }
}
