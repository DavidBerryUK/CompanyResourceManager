using System;
using CRM.Service.PersonServices.Interfaces;
using Moq;
using CRM.Api.Controllers;
using FluentAssertions;
using Xunit;


namespace CRM.Api.UnitTests.PersonControllers
{
    public class PersonControlConstructorUnitTests
    {
        [Fact]
        public void CreateConstructorSuccess()
        {
            var mockPersonGetService = new Mock<IPersonGetService>();
            var mockPersonUpdateService = new Mock<IPersonUpdateService>();

            Action act = () =>
            {
                var controller = new PersonController(mockPersonGetService.Object, mockPersonUpdateService.Object);
            };

            act.Should().NotThrow<Exception>();
        }

    }
}
