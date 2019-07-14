using FluentValidation;

namespace CRM.Models.Rest.JobRole.Validation
{
    public class JobRoleExtendedValidator : AbstractValidator<JobRoleExtended>
    {
        public JobRoleExtendedValidator()
        {
            RuleFor(p => p.Name)
                .NotEmpty()
                .NotNull()
                .MinimumLength(4)
                .MaximumLength(100);

            RuleFor(e => e.IsActive)
                .NotNull();
        }
    }
}