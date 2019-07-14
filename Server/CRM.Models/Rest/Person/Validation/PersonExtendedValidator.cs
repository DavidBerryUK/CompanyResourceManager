using FluentValidation;

namespace CRM.Models.Rest.Person.Validation
{
    public class PersonExtendedValidator : AbstractValidator<PersonExtended>
    {
        public PersonExtendedValidator()
        {
            RuleFor(p => p.Forename)
                .NotEmpty()
                .NotNull()
                .MinimumLength(2)
                .MaximumLength(200);

            RuleFor(p => p.Surname)
                .NotEmpty()
                .NotNull()
                .MinimumLength(2)
                .MaximumLength(200);

            RuleFor(p => p.Email)
                .EmailAddress()
                .NotEmpty()
                .NotNull()
                .MinimumLength(10)
                .MaximumLength(500);

            RuleFor(e => e.IsActive)
                .NotNull();
        }
    }
}