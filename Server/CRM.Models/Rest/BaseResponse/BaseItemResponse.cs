using System.Collections.Generic;
using System.Linq;

namespace CRM.Models.Rest.BaseResponse
{
    public class BaseItemResponse<T> where T : new()
    {
        private string _errorMessage;

        public BaseItemResponse(T entity)
        {
            Success = true;
            Entity = entity;
            ValidationMessages = new List<ValidationMessage>();
        }

        public BaseItemResponse()
        {
            Success = true;
            Entity = new T();
            ValidationMessages = new List<ValidationMessage>();
        }

        public T Entity { get; set; }

        public List<ValidationMessage> ValidationMessages { get; }

        public bool HasValidationMessages => ValidationMessages.Any();

        public bool Success { get; set; }


        public string ErrorMessage
        {
            get => _errorMessage;
            set
            {
                Success = false;
                _errorMessage = value;
            }
        }

        public void AddValidationMessage(string message)
        {
            ValidationMessages.Add(new ValidationMessage(message));
        }

        public void AddValidationMessage(string field, string message)
        {
            ValidationMessages.Add(new ValidationMessage(field, message));
        }
    }
}