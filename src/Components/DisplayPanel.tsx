import { Button } from "antd";
import ModeSettings from "./Statics/ModeSettings";
import { ModeTypes } from "./Statics/ModeTypes";

interface IProps {
    mode: number;
    timeStamp: number;
    temperature: number;
    isModifyingTime: boolean;
    setIsModifyingTime: (flag: boolean) => void;
}

export const DisplayPanel: React.FC<IProps> = (props) => {
    const onClickTimeBtn = () => props.setIsModifyingTime(true);
    const onClickTemperatureBtn = () => props.setIsModifyingTime(false);
    const time = new Date(props.timeStamp);
    return (
        <div>
            <div> {ModeTypes[ModeSettings.getModeTypeByNumber(props.mode)].toString()} </div>
            <div> {time.getHours()} : {time.getMinutes()} </div>
            <div> {props.temperature} °C </div>
            <Button onClick={onClickTimeBtn} disabled={props.isModifyingTime}>time</Button>
            <Button onClick={onClickTemperatureBtn} disabled={!props.isModifyingTime}>temperature</Button>
        </div>
    );
}