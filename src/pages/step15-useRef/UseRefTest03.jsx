import { useRef, useState } from "react"

export default function UseRefTest03(params) {
    const [count, setCount] = useState(0);
    
    const countRef = useRef(0);
    let countVar = 0 ;
    
    const refPlus = () =>{
        countRef.current = countRef.current + 1 ;
        console.log("countRef.current : " + countRef.current);
    }
    const  statePlus = ()=>{
        countVar = countVar + 1 ;
        console.log("countVar : " + countVar);
    }

    const doRander = ()=>{
        setCount(count+1);
    }
    const printResult = ()=>{
        console.log("ref : ", countRef.current, ", var : "+ countVar);
    }
  
    return(
        <div>
            <p>Ref : {countRef.current}</p>
            <p>var : {countVar}</p>
            <button onClick={statePlus}>State 올리기</button>
            <button onClick={refPlus}>ref 올리기</button>
            {/* 렌더링 시 ref 값을 기억했다가 결과로 나온다. 
                그러나 일반 변수는 렌더링 될때 초기화 된다.(let countVar = 0 ) */}
            <button onClick={doRander}>랜더링</button>
            <button onClick={printResult}>결과 출력</button>
        </div>

    )
}