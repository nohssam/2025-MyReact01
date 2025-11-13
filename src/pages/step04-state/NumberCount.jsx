export default function NumberCount(params) {
    // 자바스크립트 영역
    let cnt = 5 ;
    let increment = () =>{
        cnt = cnt + 1 ;
        console.log('cnt : ' , cnt);
    }
    let decrement = () =>{
        cnt = cnt - 1 ;
        console.log('cnt : ' , cnt);
    }
    return(
        <>
          <button onClick={increment}> + </button>
          <span> {cnt} </span>
          <button onClick={decrement}> - </button>

        {/* 
            버튼을 누르면 실제 cnt 값은 증가 감소 한다.
            그러나 부라우저에 있는 갓ㅂ은 변하지 않는다.(React의 특징)
            React는 한번 화면이 렌더링 되면 다시 렌더링 될때 까지 화면 변화가 없다
            React에게 현재 상태가 변경되었다고 지시하면 다시 렌더링을 하고 
            그때 변경된 값으로 적용한다.
            React에게 현재 상태가 변경되었다고 지시하는 것 => 상태관리(state)
         */}
        </>
    )
} 