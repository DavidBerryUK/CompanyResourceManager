export default class ApiBaseError {


    /**
     * Standard class to handle all API errors,
     * All api error failures should be router here
     * this allows all errors to be processed consistantly
     *
     * @static
     * @param {*} error
     * @memberof ApiBaseError
     */
    public static handleErrorResponse(error: any) {
        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.log('ApiBaseError:handleErrorResponse:error.response');
            console.log('-----------------------------------------------');
            console.log('error.response.data:');
            console.log(error.response.data);
            console.log('error.response.status:');
            console.log(error.response.status);
            console.log('error.response.headers:');
            console.log(error.response.headers);
            console.log('-----------------------------------------------');

        } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            // http.ClientRequest in node.js
            console.log('ApiBaseError:handleErrorResponse:error.request');
            console.log('----------------------------------------------');
            console.log('error.request:');
            console.log(error.request);
            console.log('----------------------------------------------');
        } else {
            // Something happened in setting up the request that triggered an Error
            console.log('ApiBaseError:handleErrorResponse');
            console.log('--------------------------------');
            console.log('error.message:');
            console.log('Error', error.message);
            console.log('--------------------------------');
        }
        console.log(error.config);
    }

}
