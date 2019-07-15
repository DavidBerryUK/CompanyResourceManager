using AutoMapper;
using CRM.Database.Context;
using CRM.Models.Rest.BaseResponse;
using CRM.Models.Rest.Skill;
using CRM.Service.JobRoleServices.Interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Threading.Tasks;

namespace CRM.Service.SkillServices
{
    public class SkillUpdateService : ISkillUpdateService
    {
        private readonly CrmDatabaseContext _crmDatabaseContext;

        public SkillUpdateService(CrmDatabaseContext crmDatabaseContext)
        {
            _crmDatabaseContext = crmDatabaseContext
                                  ?? throw new ArgumentNullException(nameof(crmDatabaseContext));
        }

        public async Task<BaseItemResponse<SkillExtended>> Create(SkillExtended skill)
        {
            //
            // Validate Input Parameters
            //
            if (skill == null)
            {
                throw new ArgumentNullException(nameof(skill));
            }

            var response = new BaseItemResponse<SkillExtended>();

            var entity = Mapper.Map<Models.Database.Skill>(skill);
            entity.SkillId = Guid.NewGuid();
            entity.IsActive = true;

            await _crmDatabaseContext.AddAsync(entity);
            await _crmDatabaseContext.SaveChangesAsync();

            response.Entity = Mapper.Map<SkillExtended>(entity);

            return response;
        }

        public async Task<BaseItemResponse<SkillExtended>> Update(Guid skillId, SkillExtended skill)
        {
            //
            // Validate Input Parameters
            //
            if (skillId == Guid.Empty)
            {
                throw new ArgumentException($"{nameof(skillId)} can not be blank");
            }

            if (skill == null)
            {
                throw new ArgumentNullException(nameof(skill));
            }

            var response = new BaseItemResponse<SkillExtended>();
            var data = await _crmDatabaseContext.Skills.FirstOrDefaultAsync(o => o.SkillId == skillId);

            if (data == null)
            {
                response.ErrorMessage = $"{nameof(skillId)} {skillId} not found";
            }
            else
            {
                Mapper.Map(skillId, data);
                await _crmDatabaseContext.SaveChangesAsync();
                response.Entity = Mapper.Map<SkillExtended>(data);
            }

            return response;
        }

        public async Task<BaseItemResponse<SkillSummary>> Activate(Guid skillId)
        {
            //
            // Validate Input Parameters
            //
            if (skillId == Guid.Empty)
            {
                throw new ArgumentException($"{nameof(skillId)} can not be blank");
            }

            return await AmendActiveStatus(skillId, true);
        }

        public async Task<BaseItemResponse<SkillSummary>> Deactivate(Guid skillId)
        {
            //
            // Validate Input Parameters
            //
            if (skillId == Guid.Empty)
            {
                throw new ArgumentException($"{nameof(skillId)} can not be blank");
            }

            return await AmendActiveStatus(skillId, false);
        }

        private async Task<BaseItemResponse<SkillSummary>> AmendActiveStatus(Guid skillId, bool isActive)
        {
            //
            // Validate Input Parameters
            //
            if (skillId == Guid.Empty)
            {
                throw new ArgumentException($"{nameof(skillId)} can not be blank");
            }

            var response = new BaseItemResponse<SkillSummary>();
            var data = await _crmDatabaseContext.Skills.FirstOrDefaultAsync(o => o.SkillId == skillId);

            if (data == null)
            {
                response.ErrorMessage = $"{nameof(skillId)} Id {skillId} not found";
            }
            else
            {
                data.IsActive = isActive;
                await _crmDatabaseContext.SaveChangesAsync();
                response.Entity = Mapper.Map<SkillSummary>(data);
            }

            return response;
        }
    }
}
