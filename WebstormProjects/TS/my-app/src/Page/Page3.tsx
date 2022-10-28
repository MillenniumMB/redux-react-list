import {useState} from "react";


const Page3 = () => {
    const [state, setState] = useState<number & any>(0)

    const ChangeClick = () => {
        setState(() => (state + 1));
    }


    return (
        <div>
            {state}
            <button onClick={ChangeClick}>+ 1</button>
        </div>

    )
}

export default Page3