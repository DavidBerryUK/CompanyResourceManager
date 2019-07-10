﻿using System;

namespace CRM.Models.Rest.People.Response
{
    public class Person
    {
        public Guid PersonId { get; set; }

        public string Forename { get; set; }

        public string Surname { get; set; }

        public string Email { get; set; }

        public Guid JobRoleId { get; set; }

        public bool IsActive { get; set; }
    }
}
