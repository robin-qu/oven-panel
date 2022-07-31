import { Knob } from 'rc-knob'
import Constant from '../Statics/Constant';

interface IProps {
    setTimeStamp: (val: number) => void;
    setTemperature: (val: number) => void;
    isModifyingTime: boolean;
}

export const VolumeKnob: React.FC<IProps> = (props) => {
    return (
      <Knob 
          size={100}  
          angleOffset={0} 
          angleRange={360}
          min={0}
          max={100}
          className="styledKnob"
          onChange={(value: number) => {
            props.isModifyingTime ? props.setTimeStamp(Math.floor(value) / 100 * Constant.MAX_DURATION) : props.setTemperature(Math.floor(value) / 100 * Constant.MAX_TEMPERATURE)
          }}
        >
          <circle r="40" cx="50" cy="50" />
      </Knob>
    );
}