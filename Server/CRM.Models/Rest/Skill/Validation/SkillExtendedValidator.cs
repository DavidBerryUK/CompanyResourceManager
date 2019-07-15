using FluentValidation;

namespace CRM.Models.Rest.Skill.Validation
{
    public class SkillExtendedValidator : AbstractValidator<SkillExtended>
    {
        public SkillExtendedValidator()
        {
            RuleFor(p => p.Name)
                .NotEmpty()
                .NotNull()
                .MinimumLength(4)
                .MaximumLength(100);

            RuleFor(p => p.Name)
                .NotEmpty()
                .NotNull()
                .MinimumLength(4)
                .MaximumLength(2000);

            RuleFor(e => e.IsActive)
                .NotNull();
        }
    }
}