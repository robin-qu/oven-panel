export default class Constant {
    public static readonly oneSecondInMilliseconds: number = 1000;
    public static readonly oneMinuteInSeconds: number = 60;
    public static readonly oneMinuteInMilliSeconds: number = Constant.oneMinuteInSeconds * Constant.oneSecondInMilliseconds;
    public static readonly oneHourInMinutes: number = 60;
    public static readonly oneHourInMilliSeconds: number = Constant.oneHourInMinutes * Constant.oneMinuteInMilliSeconds;
    public static readonly oneDayInHours: number = 24;
    public static readonly oneDayInMilliseconds: number = Constant.oneDayInHours * Constant.oneHourInMilliSeconds;

    public static readonly MAX_DURATION: number = Constant.oneDayInMilliseconds;
    public static readonly MAX_TEMPERATURE: number = 500;
}