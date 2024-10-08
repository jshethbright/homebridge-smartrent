import { PlatformConfig } from 'homebridge';

export interface SmartRentPlatformConfig extends PlatformConfig {
  platform: 'SmartRent';
  unitName?: string;
  email: string;
  password: string;
  tfaCode?: string;
  leakSensorEnable?: boolean;
  lockEnable?: boolean;
  switchEnable?: boolean;
  thermostatEnable?: boolean;
}
