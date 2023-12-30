import React from "react";
import "./index.less";

const IndexPage: React.FC = () => {
    return (
        <>
            This is index page.
            <div className="test-less">
                if color is red,the config of less is successful.
            </div>
        </>
    )
}
export default IndexPage;