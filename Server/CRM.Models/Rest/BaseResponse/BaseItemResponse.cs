using System.Collections.Generic;
using System.Linq;

namespace CRM.Models.Rest.BaseResponse
{
    public class BaseItemResponse<T> where T : new()
    {
        public T Entity { get; set; }

        private string _errorMessage;
        private readonly List<ValidationMessage> _validationMessages;

        public List<ValidationMessage> ValidationMessages => _validationMessages;

        public bool HasValidationMessages => _validationMessages.Any();

        public bool Success { get; set; }

        public void AddValidationMessage(string message)
        {
            _validationMessages.Add(new ValidationMessage(message));
        }
        public void AddValidationMessage(string field, string message)
        {
            _validationMessages.Add(new ValidationMessage(field, message));
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
            _validationMessages = new List<ValidationMessage>();
        }

        public BaseItemResponse()
        {
            Success = true;
            Entity = new T();
            _validationMessages = new List<ValidationMessage>();
        }

    }
}