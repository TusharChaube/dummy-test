import React from "react";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Widgets from "./Widgets";

function Home(){
    return(
        <div>
            <Sidebar />
            <Feed />
            <Widgets />
        </div>
    )
}

export default Home