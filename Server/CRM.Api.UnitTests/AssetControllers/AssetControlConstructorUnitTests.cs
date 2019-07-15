using System;
using System.Diagnostics.CodeAnalysis;
using CRM.Api.Controllers;
using CRM.Service.AssetServices.Interfaces;
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
            var mockAssetGetService = new Mock<IAssetGetService>();
            var mockAssetUpdateService = new Mock<IAssetUpdateService>();

            Action act = () =>
            {
                var controller = new AssetController(mockAssetGetService.Object, mockAssetUpdateService.Object);
            };

            act.Should().NotThrow<Exception>();
        }

        [Fact]
        public void CreateConstructorMissingGetAssetService()
        {
            var mockAssetUpdateService = new Mock<IAssetUpdateService>();

            Action act = () =>
            {
                var controller = new AssetController(null, mockAssetUpdateService.Object);
            };

            act.Should().Throw<ArgumentNullException>()
                .And
                .ParamName
                .Should().Be("assetGetService");
                
        }

        [Fact]
        public void CreateConstructorMissingUpdateAssetService()
        {
            var mockAssetGetService = new Mock<IAssetGetService>();

            Action act = () =>
            {
                var controller = new AssetController(mockAssetGetService.Object,null);
            };

            act.Should().Throw<ArgumentNullException>()
                .And
                .ParamName
                .Should().Be("assetUpdateService");

        }

    }
}
