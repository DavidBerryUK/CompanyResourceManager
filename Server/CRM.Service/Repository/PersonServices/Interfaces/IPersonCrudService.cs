﻿using CRM.Models.Database.Persons;
using CRM.Models.Rest.Person;
using CRM.Service.Repository.BaseServices.Interface;
using System;

namespace CRM.Service.Repository.PersonServices.Interfaces
{
    public interface IPersonCrudService : IBaseExtendedCrudService<Person,PersonSummary, PersonExtended, Guid>
    {
    }
}
