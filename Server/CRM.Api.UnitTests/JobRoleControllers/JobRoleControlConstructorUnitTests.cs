using CRM.Api.Controllers;
using CRM.Service.JobRoleServices.Interfaces;
using CRM.Service.PersonServices.Interfaces;
using FluentAssertions;
using Moq;
using System;
using System.Diagnostics.CodeAnalysis;
using Xunit;

namespace CRM.Api.UnitTests.JobRoleControllers
{
    [ExcludeFromCodeCoverage]
    public class JobRoleControlConstructorUnitTests
    {
        [Fact]
        public void CreateConstructorSuccess()
        {
            var mockJobRoleGetService = new Mock<IJobRoleGetService>();
            var mockJobRoleUpdateService = new Mock<IJobRoleUpdateService>();
            var mockPersonGetService = new Mock<IPersonGetService>();
            var mockPersonSimpleService = new Mock<IPersonSimpleQueryService>();

            Action act = () =>
            {
                var controller = new JobRoleController(
                    mockJobRoleGetService.Object,
                    mockJobRoleUpdateService.Object,
                    mockPersonGetService.Object,
                    mockPersonSimpleService.Object);
            };

            act.Should().NotThrow<Exception>();
        }

        [Fact]
        public void CreateConstructorMissingGetJobRoleService()
        {
            var mockJobRoleUpdateService = new Mock<IJobRoleUpdateService>();
            var mockPersonGetService = new Mock<IPersonGetService>();
            var mockPersonSimpleService = new Mock<IPersonSimpleQueryService>();


            Action act = () =>
            {
                var controller = new JobRoleController(
                    null, 
                    mockJobRoleUpdateService.Object, 
                    mockPersonGetService.Object,
                    mockPersonSimpleService.Object);
            };

            act.Should().Throw<ArgumentNullException>()
                .And
                .ParamName
                .Should().Be("jobRoleGetService");
                
        }

        [Fact]
        public void CreateConstructorMissingUpdateJobRoleService()
        {
            var mockJobRoleGetService = new Mock<IJobRoleGetService>();
            var mockPersonGetService = new Mock<IPersonGetService>();
            var mockPersonSimpleService = new Mock<IPersonSimpleQueryService>();

            Action act = () =>
            {
                var controller = new JobRoleController(
                    mockJobRoleGetService.Object,
                    null, 
                    mockPersonGetService.Object,
                    mockPersonSimpleService.Object);
            };

            act.Should().Throw<ArgumentNullException>()
                .And
                .ParamName
                .Should().Be("jobRoleUpdateService");

        }

        [Fact]
        public void CreateConstructorMissingPersonGetService()
        {
            var mockJobRoleGetService = new Mock<IJobRoleGetService>();
            var mockJobRoleUpdateService = new Mock<IJobRoleUpdateService>();
            var mockPersonSimpleService = new Mock<IPersonSimpleQueryService>();

            Action act = () =>
            {
                var controller = new JobRoleController(
                    mockJobRoleGetService.Object,
                    mockJobRoleUpdateService.Object,
                    null,
                    mockPersonSimpleService.Object);
            };

            act.Should().Throw<ArgumentNullException>()
                .And
                .ParamName
                .Should().Be("personGetService");
        }

    }
}
