using System;
using System.Diagnostics.CodeAnalysis;
using CRM.Api.Controllers;
using CRM.Service.Repository.AssetServices.Interfaces;
using FluentAssertions;
using Moq;
using Xunit;

namespace CRM.Api.UnitTests.AssetControllers
{
    [ExcludeFromCodeCoverage]
    public class AssetControlConstructorUnitTests
    {
        [Fact]
        public void CreateConstructorSuccess()
        {
            var mockAssetCrudService = new Mock<IAssetCrudService>();
            

            Action act = () =>
            {
                var controller = new AssetController(mockAssetCrudService.Object);
            };

            act.Should().NotThrow<Exception>();
        }

        [Fact]
        public void CreateConstructorMissingGetAssetService()
        {
           

            Action act = () =>
            {
                var controller = new AssetController(null);
            };

            act.Should().Throw<ArgumentNullException>()
                .And
                .ParamName
                .Should().Be("assetGetService");
                
        }
    }
}
