import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { setAge } from "../redux/rootSlice";


type dummyProps = {};

const Counter: FC<dummyProps> = () => {
    const dispatch = useDispatch();
    const currentAge = useSelector((state: RootState) => state.person.age);

    return (
        <div>
            <div>count: {currentAge}</div>
            <button onClick={() => {
                 dispatch(setAge(currentAge + 1))
            }}> inc count</button>
        </div>
    );
};

export default Counter;
