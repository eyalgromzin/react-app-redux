import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { setAge } from "../redux/rootSlice";


type dummyProps = {};

const Counter: FC<dummyProps> = () => {
    const dispatch = useDispatch();
    const currentAge = useSelector((state: RootState) => state.person.age);

    function sendGetRequest(): void {
        fetch('http://localhost:3000/test/test')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error(`Fetch error: ${error.message}`);
        });
    }

    return (
        <div>
            <div>count: {currentAge}</div>
            <button onClick={() => {
                 dispatch(setAge(currentAge + 1))
            }}> inc count</button>

            <div>
                <button onClick={() => sendGetRequest()}>
                    sendApiRequest
                </button>
            </div>
        </div>
    );
};

export default Counter;
