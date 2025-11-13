import Comment from "../step03-component/Comment";

export default function FindCommandList(params) {
    const comments = [
        {
            name : "홍길동",
            comment : "방가 방가",
            isAdmin : false,
        },
        {
            name : "둘리",
            comment : "호이~ 호이~",
            isAdmin : false,
        },
        {
            name : "도우너",
            comment : "칸따피야",
            isAdmin : false,

        },
        {
            name : "희동이",
            comment : "응~애",
            isAdmin : false,
        },
   ];
  // const result = comments.find(k=>k.isAdmin);
    return(
        <>
            <div>
                {
                   // find : 조건에 맞는 항목 하나만 추출(여러개일 경우 맨처음 항목 추출)
                   // 모두 조건에 맞을 않을 경우 대비 해서 삼항 연산자 사용
                   //  result
                   //  ? (<Comment name={result.name} comment={result.comment} />)
                   //  : (<p>조건을 만족하는 항목이 없네요</p>)
                    
                    comments.find(k=>k.isAdmin)
                    ? (<Comment name={comments.find(k=>k.isAdmin).name} comment={comments.find(k=>k.isAdmin).comment} />)
                    : (<p>조건을 만족하는 항목이 없네요</p>)
                }
            </div>
        </>
    )
} 