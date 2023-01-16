/*
    WORKING OF PARCEL -
     
    -> Created a SERVER
    -> HMR = Hot Module Replacement ( When we save the file, it automatically reflact on the screen.)
    -> File Watcher Algorithm ( Written in C++ , FWA ia used by HMR, Parcel is doing )
    -> BUNDLINIG
    -> MINIFY
    -> Cleaning our Code
    -> Devlopment and Production Build
    -> Super fast build algorithm
    -> Image Optimization ( because media is heavy to reload in websites)
    -> Caching while Development
    -> Compression
    -> Compatble with older version of browser
    -> Enable HTTPS on development
    -> Mangae Port Number
    -> Consistent Hashing Alogrithm
    -> Zero Config
    -> Transitive Dependencies -> We have our package manager, which handles and takes care of 
    our transitive dependencies of our code.

                               
                        


*/

import React from "react";
import  ReactDOM  from "react-dom/client";

const heading1 = React.createElement("h1", {
    id: "title",
}, "Ajay Sharma");

const heading2 = React.createElement("h2", {
    id: "title",
}, "Junaid");

const container = React.createElement("div", {
    id: "container",
}, [heading1, heading2]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(container);

