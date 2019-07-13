using System.Collections.Generic;
using System.Linq;

namespace CRM.Models.Rest.BaseResponse
{
    public class BaseItemResponse<T> where T : new()
    {
        public T Entity { get; set; }

        private string _errorMessage;

        public List<ValidationMessage> ValidationMessages { get; }

        public bool HasValidationMessages => ValidationMessages.Any();

        public bool Success { get; set; }

        public void AddValidationMessage(string message)
        {
            ValidationMessages.Add(new ValidationMessage(message));
        }
        public void AddValidationMessage(string field, string message)
        {
            ValidationMessages.Add(new ValidationMessage(field, message));
        }


        public string ErrorMessage
        {
            get => _errorMessage;
            set
            {
                Success = false;
                _errorMessage = value;

            }
        }

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

    }
}