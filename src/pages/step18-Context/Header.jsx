import { ThemeContext } from "./ThemeContext";
// import { ThemeContext } from "@emotion/react";
import { useContext } from "react";

export default function Header() {
        const {isDark} = useContext(ThemeContext);
    return(
        <header className="header"
           style={{
                backgroundColor: isDark ? 'black' : 'lightgray',
                color:isDark ? 'white' : 'black'
           }}>
            <h2>한국 ICT 인재 개발원</h2>
        </header>
    )
}