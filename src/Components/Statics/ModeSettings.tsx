import Constant from "./Constant";
import { ModeTypes } from "./ModeTypes";

interface Settings {
    hour: number;
    minutes: number;
    temperature: number;
}

export default class ModeSettings {
    private static readonly MAX_VOLUME: number = 100;

    public static getModeTypeByNumber(num: number): number {
        const ModeCount: number = Object.keys(ModeTypes).length / 2;
        const interval: number = this.MAX_VOLUME / ModeCount;
        const index: number = (num + interval / 2) / interval;
        if (index >= ModeCount) {
            return 0;
        }

        return parseInt(index + "");
    }

    public static getTimeStampFromSettings(settings: Settings): number {
        return settings.hour * Constant.oneHourInMilliSeconds + settings.minutes * Constant.oneMinuteInMilliSeconds;
    }

    public static getInitialValueByModes(modeType: ModeTypes): Settings {
        switch (modeType) {
            case ModeTypes.Off:
                return {
                    hour: 0,
                    minutes: 10,
                    temperature: 50
                };
            case ModeTypes.Mode1:
                return {
                    hour: 1,
                    minutes: 11,
                    temperature: 51
                };
            case ModeTypes.Mode2:
                return {
                    hour: 2,
                    minutes: 12,
                    temperature: 52
                };
            case ModeTypes.Mode3:
                return {
                    hour: 3,
                    minutes: 13,
                    temperature: 53
                };
            case ModeTypes.Mode4:
                return {
                    hour: 4,
                    minutes: 14,
                    temperature: 54
                };
            case ModeTypes.Mode5:
                return {
                    hour: 5,
                    minutes: 15,
                    temperature: 55
                };
            case ModeTypes.Mode6:
                return {
                    hour: 6,
                    minutes: 16,
                    temperature: 56
                };
            case ModeTypes.Mode7:
                return {
                    hour: 7,
                    minutes: 17,
                    temperature: 57
                };
            case ModeTypes.Mode8:
                return {
                    hour: 8,
                    minutes: 18,
                    temperature: 58
                };
            case ModeTypes.Mode9:
                return {
                    hour: 9,
                    minutes: 19,
                    temperature: 59
                };
            case ModeTypes.Mode10:
                return {
                    hour: 10,
                    minutes: 20,
                    temperature: 60
                };
            case ModeTypes.Mode11:
                return {
                    hour: 11,
                    minutes: 21,
                    temperature: 61
                };
            default:
                return {
                    hour: 12,
                    minutes: 22,
                    temperature: 62
                };
        }
    }
}