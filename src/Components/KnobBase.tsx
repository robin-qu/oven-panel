import { Knob, Arc, Pointer } from 'rc-knob'

interface IProps {
    onTwisting: (val: any) => void;
}

export const KnobBase: React.FC<IProps> = (props) => {
    return (
        <Knob 
            size={100}  
            angleOffset={0} 
            angleRange={360}
            min={0}
            max={100}
            className="styledKnob"
            onChange={(value: any) => console.log(value)}
            >
            {/* <Arc 
                arcWidth={1.5}
            /> */}
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