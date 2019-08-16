﻿using System;
using CRM.Models.Database.Contacts;
using CRM.Models.Rest.Contacts;
using CRM.Service.Repository.BaseServices.Interface;

namespace CRM.Service.Repository.ContractServices.Interfaces
{
    public interface IContactGroupCrudService : IBaseCrudService<ContactGroup, ContactGroupSummary, Guid>
    {
    }
}
