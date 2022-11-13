// 該元件內 有寫的功能 也必須載入功能 import
// 然後 App 管理路由那的頁面 要引入這頁的元件的話 會需要引入這頁所匯出

import { Link } from "react-router-dom";


function Faq() {
    return (
        <>
            <main>
                <h2>My Faq</h2>
                <p>
                    我新增自建的 由home進來
                </p>
            </main>
            <nav>
                <Link to="/">Home</Link>
            </nav>
        </>
    );
}

export default Faq;
// 匯出這個函式功能