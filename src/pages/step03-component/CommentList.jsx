import Comment from "./Comment";

// 원래는  Spring-DB 에서 정보를 가져와서 사용
const comments = [
    {
        name : "홍길동",
        comment : "방가 방가"
    },
    {
        name : "둘리",
        comment : "호이~ 호이~"
    },
    {
        name : "도우너",
        comment : "칸따피야"
    },
    {
        name : "희동이",
        comment : "응~애"
    },

];
// 부모 컴포넌트
// 부모가 먼저 렌더링 -> 그안에서 자식이 렌더링 된다.
export default function CommentList(params) {
    return(
        <div>
            {
                //  - 반복되는 컴포넌트를 렌더링하기 위하여 자바스크립트 배열의 내장 함수인 map()을 사용 한다.  
                // - 파라미터로 전달된 함수를 사용하여 배열 내 각 요소를 원하는 규칙에 따라 변환한 후 새로운 배열 생성 한다.
                // 각 항목을 구분하는 key 속성이 필요하다.
                comments.map((k,idx)=>{
                    return(
                        <Comment key={idx} name={k.name} comment={k.comment} />
                    )
                })
            }
        </div>
    )
}