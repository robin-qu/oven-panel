import { Knob, Pointer } from 'rc-knob'
import ModeSettings from '../Statics/ModeSettings';

interface IProps {
    setMode: (val: number) => void;
    setTimeStamp: (val: number) => void;
    setTemperature: (val: number) => void;
}

export const ModeKnob: React.FC<IProps> = (props) => {
    const onChange = (value: number) => {
        props.setMode(value);
        const modeInNum = ModeSettings.getModeTypeByNumber(value);
        const settings = ModeSettings.getInitialValueByModes(modeInNum);
        props.setTimeStamp(ModeSettings.getTimeStampFromSettings(settings));
        props.setTemperature(settings.temperature);
    }

    return (
        <Knob 
            size={100}  
            angleOffset={0} 
            angleRange={360}
            min={0}
            max={100}
            className="styledKnob"
            onChange={(value: number) => onChange(value)}
        >
            <circle r="40" cx="50" cy="50" />
            <Pointer 
                width={2}
                height={35}
                radius={10}
                type="rect"
                color="#fff"
            />
        </Knob>
    );
}
