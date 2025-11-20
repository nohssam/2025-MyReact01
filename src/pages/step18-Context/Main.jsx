import { ThemeContext } from "./ThemeContext";
// import { ThemeContext } from "@emotion/react";
import { useContext } from "react";

export default function Main() {
       const {isDark} = useContext(ThemeContext);
    return(
        <header className="content"
           style={{
                backgroundColor: isDark ? 'black' : 'lightgray',
                color:isDark ? 'white' : 'black'
           }}>
           <p>props를 사용한 예제</p>
           <p>모두 부자 되세요</p>
        </header>
    )
}