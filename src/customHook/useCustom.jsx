import { useState } from "react";

const useCounter = ()=>{

    const [counter, setCounter] = useState(0);

    const decCounter =(val)=>{

        setCounter (counter - val);

    }

    const incCounter = (val)=>{

        setCounter (counter + val);

    }

    return[counter,decCounter,incCounter];

}

export default useCounter;