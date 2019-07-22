import { AxiosRequestConfig }               from 'axios';
import ConfigurationService                 from '../../../services/configuration/ConfigurationService';

//
// Configuration helper,
//  strongly maps data from the "appConfig.json" in the root directory
//
export default class BaseApiConfig {

    private static staticConfig: AxiosRequestConfig | null = null;
    private static staticEndpoint: string | null = null;

    /**
     * Setup basic configuration for the Axios library
     *
     * @readonly
     * @static
     * @type {AxiosRequestConfig}
     * @memberof BaseApiConfig
     */
    static get baseConfig(): AxiosRequestConfig {
        if (BaseApiConfig.staticConfig == null) {
            BaseApiConfig.staticConfig = {
                headers: { 'Access-Control-Allow-Origin': '*' },
            };
        }
        return BaseApiConfig.staticConfig;
    }

    /**
     *
     *
     * @readonly
     * @static
     * @type {string}
     * @memberof BaseApiConfig
     */
    static get baseEndpoint(): string {
        if (BaseApiConfig.staticEndpoint == null) {
            const config = ConfigurationService.getConfiguration();
            BaseApiConfig.staticEndpoint = config.endPoints.baseUrl;
        }
        if (BaseApiConfig.staticEndpoint == null) {
            BaseApiConfig.staticEndpoint = '';
        }
        return BaseApiConfig.staticEndpoint;
    }
}
