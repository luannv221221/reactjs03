import { useState } from "react";

function DemoForm() {
    const [userName, setUserName] = useState("s");

    const onChangeText = (e) => {
        setUserName(e.target.value)
        // console.log(e.target.value);
    }
    return (<>
        <form action="">
            <input type="text" placeholder="Nhập từ khóa tìm kiếm" value={userName} onChange={(e) => onChangeText(e)} />
            <button>Gửi</button>
        </form>
        <h1>Xin Chào : {userName}</h1>
    </>)
}
export default DemoForm;