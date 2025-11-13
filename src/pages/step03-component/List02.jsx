import Item02 from "./Item02";

export default function List02(params) {
    return(
        <>
            <div>
                <h3>강의 목록</h3>
                <Item02 title='HTML&CSS' content='웹페이지만드는 지식을 배운다.' />
                <Item02 content='java 언어를 배운다.' title='JAVA' />
                <Item02 content='React 언어를 배운다.' title='REACT' />
            </div>
        </>
    )
}