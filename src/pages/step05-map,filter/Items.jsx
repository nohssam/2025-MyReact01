export default function Items(params) {
    return(
        <ul>
            <li>이름 : {params.name}</li>
            <li>내용 : {params.comment}</li>
        </ul>
    )
}