
import React from "react";

const Layout = ({children})=>{
    return(
        <div>
            <header>hey this is my websitee</header>
            <main>{children}</main>
            <footer>@2024 copyright</footer>
        </div>
     

    );

};
export default Layout;