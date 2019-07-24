using AutoMapper;
using CRM.Database.Context;
using CRM.Models.Database.Security;
using CRM.Models.Rest.BaseResponse;
using CRM.Models.Rest.Security;
using CRM.Service.SecurityServices.Interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Threading.Tasks;

namespace CRM.Service.SecurityServices
{
    public class SecurityGroupUpdateService : ISecurityGroupUpdateService
    {
        private readonly CrmDatabaseContext _crmDatabaseContext;

        public SecurityGroupUpdateService(CrmDatabaseContext crmDatabaseContext)
        {
            _crmDatabaseContext = crmDatabaseContext
                                  ?? throw new ArgumentNullException(nameof(crmDatabaseContext));
        }

        public async Task<BaseItemResponse<SecurityGroupExtended>> Create(SecurityGroupExtended securityGroup)
        {
            //
            // Validate Input Parameters
            //
            if (securityGroup == null)
            {
                throw new ArgumentNullException(nameof(securityGroup));
            }

            var response = new BaseItemResponse<SecurityGroupExtended>();

            var entity = Mapper.Map<SecurityGroup>(securityGroup);
            entity.SecurityGroupId = Guid.NewGuid();
            entity.IsActive = true;

            await _crmDatabaseContext.AddAsync(entity);
            await _crmDatabaseContext.SaveChangesAsync();

            response.Entity = Mapper.Map<SecurityGroupExtended>(entity);

            return response;
        }

        public async Task<BaseItemResponse<SecurityGroupExtended>> Update(Guid securityGroupId, SecurityGroupExtended securityGroup)
        {
            //
            // Validate Input Parameters
            //
            if (securityGroupId == Guid.Empty)
            {
                throw new ArgumentException($"{nameof(securityGroupId)} can not be blank");
            }

            if (securityGroup == null)
            {
                throw new ArgumentNullException(nameof(securityGroup));
            }

            var response = new BaseItemResponse<SecurityGroupExtended>();
            var data = await _crmDatabaseContext.SecurityGroups.FirstOrDefaultAsync(o => o.SecurityGroupId == securityGroupId);

            if (data == null)
            {
                response.ErrorMessage = $"{nameof(securityGroupId)} {securityGroupId} not found";
            }
            else
            {
                Mapper.Map(securityGroupId, data);
                await _crmDatabaseContext.SaveChangesAsync();
                response.Entity = Mapper.Map<SecurityGroupExtended>(data);
            }

            return response;
        }

        public async Task<BaseItemResponse<SecurityGroupSummary>> Activate(Guid securityGroupId)
        {
            //
            // Validate Input Parameters
            //
            if (securityGroupId == Guid.Empty)
            {
                throw new ArgumentException($"{nameof(securityGroupId)} can not be blank");
            }

            return await AmendActiveStatus(securityGroupId, true);
        }

        public async Task<BaseItemResponse<SecurityGroupSummary>> Deactivate(Guid securityGroupId)
        {
            //
            // Validate Input Parameters
            //
            if (securityGroupId == Guid.Empty)
            {
                throw new ArgumentException($"{nameof(securityGroupId)} can not be blank");
            }

            return await AmendActiveStatus(securityGroupId, false);
        }

        private async Task<BaseItemResponse<SecurityGroupSummary>> AmendActiveStatus(Guid securityGroupId, bool isActive)
        {
            //
            // Validate Input Parameters
            //
            if (securityGroupId == Guid.Empty)
            {
                throw new ArgumentException($"{nameof(securityGroupId)} can not be blank");
            }

            var response = new BaseItemResponse<SecurityGroupSummary>();
            var data = await _crmDatabaseContext.SecurityGroups.FirstOrDefaultAsync(o => o.SecurityGroupId == securityGroupId);

            if (data == null)
            {
                response.ErrorMessage = $"{nameof(securityGroupId)} Id {securityGroupId} not found";
            }
            else
            {
                data.IsActive = isActive;
                await _crmDatabaseContext.SaveChangesAsync();
                response.Entity = Mapper.Map<SecurityGroupSummary>(data);
            }

            return response;
        }
    }
}
