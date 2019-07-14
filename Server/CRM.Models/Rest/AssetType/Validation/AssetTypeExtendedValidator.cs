using FluentValidation;

namespace CRM.Models.Rest.AssetType.Validation
{
    public class AssetTypeExtendedValidator : AbstractValidator<AssetTypeExtended>
    {
        public AssetTypeExtendedValidator()
        {
            RuleFor(p => p.Name)
                .NotEmpty()
                .NotNull()
                .MinimumLength(4)
                .MaximumLength(50);

            RuleFor(e => e.HasAssetBadge)
                .NotNull();

            RuleFor(e => e.HasOperatingSystem)
                .NotNull();

            RuleFor(e => e.IsActive)
                .NotNull();
        }
    }
}