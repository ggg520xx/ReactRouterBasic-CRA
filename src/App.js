import logo from './assets/logo.svg';
import './App.css';
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";


import Faq from './components/Faq'
// 就能使用 Faq那個函式頁面(擁有這個函式功能) 來自於這裡(順利吃到外部元件)
// 因此我們不會全部都寫在App.js 會拉出很多很多外部元件 一一載入使用




function Home() {
  return (
    <>
      
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <main>
        <h2>Welcome to the homepage!</h2>
        <p>You can do this, I believe in you.</p>
      </main>

      <nav>
        <Link to="/about">About</Link>
        <Link to="/faq">Faq</Link>
      </nav>
    </>
  );
}


function About() {
  const navigate = useNavigate();  // 一定要這段

  // 6秒後會導去Faq  這兩種寫法都可以

  // (若是他登入錯誤, 或是他知道這網址 想去後台 但他權限不對 要把它轉到 Login頁面 navigate("/login")    )
  // (如果抓他權限正確的話 就不需要移轉,, 判斷權限 可以用這個來寫 if else 有沒有權限 轉到 navigate("/login")  )

  function transfer() {
    navigate("/faq");
    // navigate("../faq", { replace: true });
  }
  setTimeout(transfer, 4000)


  return (
    <>
      <main>
        <h2>about 頁面</h2>
        <p>
          6秒後會導去Faq
        </p>
      </main>
      <nav>
        <Link to="/">Link 去首頁</Link>
        <input type="button" value='JS 回首頁' onClick={(e) => { navigate('/') }} />
      </nav>
    </>
  );
}

function NotFound() {
  return (
    <>
      <h2>找不到該頁面, 您的網址出錯嘍~</h2>
      <Link to="/">回到首頁</Link>
    </>
  );
}

function Layout() {
  return (
    <div>
      <div className="header">表頭11</div>
      {/* <Header /> 拉出來寫外元件也可以*/}

      {/* 不一定要包main */}
      <main>
        <Outlet />
      </main>


      <div className="footer">表尾22</div>
      {/* <Footer /> 拉出來寫外元件也可以*/}
    </div>
  );
}




function App() {
  return (
    <div className="App">
      {/* <div>123</div>
      <h1>func App歡迎 Welcome to React Router! 歡迎</h1> */}

      <div className="header_public">App這邊可以設計一處共用全路由共用的表頭表尾 或是純粹用Layout階層去設計也可以</div>
      {/* <NavBar /> */}

      <Routes>

        <Route path='/' element={<Layout />} >
          <Route index element={<Home />} />
          <Route path="faq" element={<Faq />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Route>


        {/* 如果要設計後台的話 */}
        {/* 可能會寫 那個元件 必須登入權限為何才可以造訪頁面 */}

        {/* <Route path='/admin' element={<AdminLayout />} > */}
          {/* <Route path="/admin" element={<AdminHome />} /> */}
          {/* <Route path="member" element={<member />} />
          <Route path="task" element={<task />} /> */}
          {/* <Route path="*" element={<NotFound />} /> */}
        {/* </Route> */}

      </Routes>

      <div className="footer_public">App這邊可以設計一處共用全路由共用的表頭表尾 或是純粹用Layout階層去設計也可以</div>
      {/* <Footer /> */}

    </div>
  );
}

export default App;
