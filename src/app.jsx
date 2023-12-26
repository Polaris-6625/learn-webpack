import React, { useState, useEffect } from "react";
import "./global.css";
import IndexPage from "./pages/index";
import Information from "./pages/information";

const App = () => {
  const [hash, setHash] = useState(window.location.hash);

  // 使用 useEffect 钩子注册事件监听器
  useEffect(() => {
    const handleHashChange = () => {
      setHash(window.location.hash); // 当 hash 改变时更新状态
    };

    // 监听 hashchange 事件
    window.addEventListener("hashchange", handleHashChange);

    // 当组件卸载时移除事件监听器
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []); // 空的依赖数组表示这个 effect 只在组件加载时执行一次

  // 定义页面渲染逻辑
  const renderPage = () => {
    if (hash === "#index" || hash === "#/" || hash === "") {
      console.log("index");
      return <IndexPage />;
    } else if (hash === "#information") {
      return <Information/>;
    } else {
      return <div>寄了</div>;
    }
  };
  function hashChange(targetHashValue) {
    console.log(`hash is change (${targetHashValue})`);
    window.location.hash = targetHashValue;
  }
  return (
    <>
      <div>
        <button
          onClick={() => hashChange("index")}
        >
          index
        </button>
        <button
            onClick={() => hashChange("information")}
        >
            information
        </button>
      </div>
      {renderPage()} {/* 调用 renderPage 来根据当前的 hash 渲染内容 */}
    </>
  );
};
export default App;
