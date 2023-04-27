import React, {useState} from "react";

function ConfirmButton(props){
    const [isConfirmed, setIsConfirmed] = useState(false);

    const handelConfirm = () => {
        setIsConfirmed((prevIsConfirmed) => !prevIsConfirmed)
    };

    return(
      <button onClick ={handelConfirm} disabled={isConfirmed}>
        {isConfirmed ? "확인됨" : "확인하기"}
      </button>
    );
}
export default ConfirmButton;
