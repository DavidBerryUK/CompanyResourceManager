using FluentValidation;

namespace CRM.Models.Rest.Asset.Validation
{
    public class AssetExtendedValidator : AbstractValidator<AssetExtended>
    {
        public AssetExtendedValidator()
        {
            RuleFor(p => p.Name)
                .NotEmpty()
                .NotNull()
                .MinimumLength(4)
                .MaximumLength(50);

            RuleFor(p => p.BadgeNo)
                .MaximumLength(20);

            RuleFor(e => e.Description)
                .NotEmpty()
                .NotNull()
                .MaximumLength(10)
                .MaximumLength(2000);

            RuleFor(e => e.IsActive)
                .NotNull();
        }
    }
}
