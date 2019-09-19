using System.Collections.Generic;

namespace CRM.Models.Rest.BaseResponse
{
    public class BaseCollectionResponse<T>
    {
        private string _errorMessage;

        public BaseCollectionResponse()
        {
            Success = true;
            Items = new List<T>();
        }

        public bool Success { get; set; }

        public string ErrorMessages
        {
            get => _errorMessage;
            set
            {
                Success = false;
                _errorMessage = value;
            }
        }

        public List<T> Items { get; set; }
    }
}