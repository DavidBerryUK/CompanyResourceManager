import { IRoot }                                from './interfaces/IConfigurationInterface';

//
// load the configuration file
//
const jsonConfigData = require('../../../appConfig.json');

export default class ConfigurationService {

    private static configuration: IRoot;

    public static getConfiguration(): IRoot {

        if (ConfigurationService.configuration == null) {
            //    console.log(jsonConfigData);
            ConfigurationService.configuration = jsonConfigData as IRoot;

        }
        return ConfigurationService.configuration;
    }
}
