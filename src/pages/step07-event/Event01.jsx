export default function Evnet01(params) {
    // 사용자 정의 함수(이벤트 핸들러)
    function handleClick() {
        alert("버튼1 클릭")
    }
    return(
        <>
          {/* 이벤트 핸들러 호출 */}
          <button onClick={handleClick}>눌러주세요-1</button><br />
          <button onClick={function() {
             alert("버튼2 클릭")
          }}>눌러주세요-2</button><br />
          <button onClick={()=>{
             alert("버튼3 클릭")
          }}>눌러주세요-3</button><br />
        </>
    )
}