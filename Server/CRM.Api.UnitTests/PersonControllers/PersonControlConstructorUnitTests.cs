using System;
using System.Diagnostics.CodeAnalysis;
using CRM.Api.Controllers;
using CRM.Service.Repository.PersonServices.Interfaces;
using FluentAssertions;
using Moq;
using Xunit;

namespace CRM.Api.UnitTests.PersonControllers
{
    [ExcludeFromCodeCoverage]
    public class PersonControlConstructorUnitTests
    {
        [Fact]
        public void CreateConstructorMissingGetPersonService()
        {
            Action act = () =>
            {
                var controller = new PersonController(null);
            };

            act.Should().Throw<ArgumentNullException>()
                .And
                .ParamName
                .Should().Be("personGetService");
        }

        [Fact]
        public void CreateConstructorSuccess()
        {
            var mockPersonCrudService = new Mock<IPersonCrudService>();


            Action act = () =>
            {
                var controller = new PersonController(mockPersonCrudService.Object);
            };

            act.Should().NotThrow<Exception>();
        }
    }
}