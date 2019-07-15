using System;
using System.Diagnostics.CodeAnalysis;
using CRM.Api.Controllers;
using CRM.Service.AssetTypeServices.Interfaces;
using FluentAssertions;
using Moq;
using Xunit;

namespace CRM.Api.UnitTests.AssetTypeControllers
{
    [ExcludeFromCodeCoverage]
    public class AssetTypeControlConstructorUnitTests
    {
        [Fact]
        public void CreateConstructorSuccess()
        {
            var mockAssetTypeGetService = new Mock<IAssetTypeGetService>();
            var mockAssetTypeUpdateService = new Mock<IAssetTypeUpdateService>();

            Action act = () =>
            {
                var controller = new AssetTypeController(mockAssetTypeGetService.Object, mockAssetTypeUpdateService.Object);
            };

            act.Should().NotThrow<Exception>();
        }

        [Fact]
        public void CreateConstructorMissingGetAssetTypeService()
        {
            var mockAssetTypeUpdateService = new Mock<IAssetTypeUpdateService>();

            Action act = () =>
            {
                var controller = new AssetTypeController(null, mockAssetTypeUpdateService.Object);
            };

            act.Should().Throw<ArgumentNullException>()
                .And
                .ParamName
                .Should().Be("assetTypeGetService");
                
        }

        [Fact]
        public void CreateConstructorMissingUpdateAssetTypeService()
        {
            var mockAssetTypeGetService = new Mock<IAssetTypeGetService>();

            Action act = () =>
            {
                var controller = new AssetTypeController(mockAssetTypeGetService.Object,null);
            };

            act.Should().Throw<ArgumentNullException>()
                .And
                .ParamName
                .Should().Be("assetTypeUpdateService");

        }

    }
}
