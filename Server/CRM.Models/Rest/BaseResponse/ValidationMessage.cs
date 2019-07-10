namespace CRM.Models.Rest.BaseResponse
{
    public class ValidationMessage
    {
        public string Field { get; set; }
        public string Message { get; set; }

        public ValidationMessage(string message)
        {
            Message = message;
        }

        public ValidationMessage(string field, string message)
        {
            Field = field;
            Message = message;
        }
    }
}