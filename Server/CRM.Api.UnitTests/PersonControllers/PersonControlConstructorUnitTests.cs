using CRM.Api.Controllers;
using CRM.Service.PersonServices.Interfaces;
using FluentAssertions;
using Moq;
using System;
using System.Diagnostics.CodeAnalysis;
using Xunit;


namespace CRM.Api.UnitTests.PersonControllers
{
    [ExcludeFromCodeCoverage]
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

        [Fact]
        public void CreateConstructorMissingGetPersonService()
        {
            var mockPersonUpdateService = new Mock<IPersonUpdateService>();

            Action act = () =>
            {
                var controller = new PersonController(null, mockPersonUpdateService.Object);
            };

            act.Should().Throw<ArgumentNullException>()
                .And
                .ParamName
                .Should().Be("personGetService");
                
        }

        [Fact]
        public void CreateConstructorMissingUpdatePersonService()
        {
            var mockPersonGetService = new Mock<IPersonGetService>();

            Action act = () =>
            {
                var controller = new PersonController(mockPersonGetService.Object,null);
            };

            act.Should().Throw<ArgumentNullException>()
                .And
                .ParamName
                .Should().Be("personUpdateService");

        }

    }
}
