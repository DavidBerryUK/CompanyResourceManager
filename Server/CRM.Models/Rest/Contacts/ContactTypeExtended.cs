namespace CRM.Models.Rest.Contacts
{
    /// <summary>
    ///     Database Entity Object
    /// </summary>
    public class ContactTypeExtended : ContactTypeSummary
    {
        public string ContactValidationName { get; set; }
    }
}