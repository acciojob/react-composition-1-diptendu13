import React, {useState} from "react";


const Tabs = ({tabsData}) => {

    let [tab1, tab2, tab3] = tabsData;

    let [showContent, setShowConent] = useState("");

    return (
        <div>
            <ul>
                <li onClick={() => setShowConent(tab1.content)}>{tab1.title}</li>
                <li onClick={() => setShowConent(tab2.content)}>{tab2.title}</li>
                <li onClick={() => setShowConent(tab3.content)}>{tab3.title}</li>
            </ul>
            <div>This is the content for {showContent}</div>
        </div>
    )
}


export default Tabs;
