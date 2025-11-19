import { useState } from "react"
import Child from "./Child";

export default function UseCallBackTest01(params) {
    const [cnt, setCnt] = useState(0);
    
    // 부모가 리 렌더링 되면 자식도 리 렌더링 된다.
    const handleClick = () =>{
        console.log("handleClick 클릭 !");
        setCnt(cnt+1);
    }
    console.log("부모화면");

    return(
        <div>
            <h2> useCallback 없음 </h2>
            <p>카운트 : {cnt}</p>
            <button onClick={()=>setCnt(cnt+1)}>부모 카운트 증가</button>
            <Child onClick={handleClick} />
        </div>
    )
}