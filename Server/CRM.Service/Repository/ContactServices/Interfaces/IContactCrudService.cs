﻿using System;
using CRM.Models.Database.Contacts;
using CRM.Models.Rest.Contacts;
using CRM.Service.Repository.BaseServices.Interface;

namespace CRM.Service.Repository.ContactServices.Interfaces
{
    public interface IContactCrudService : IBaseCrudService<Contact, ContactSummary, Guid>
    {
    }
}
