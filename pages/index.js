import { useState } from "react";
import Head from "next/head";

import Page from "../components/page";
import Intro from "../components/intro";

export default function Index() {
    let [intro, setIntro] = useState(true);

    // Page Switching
    let element;
    if(intro == true) {
        element = <Intro onClick={() => {setIntro(false)}} />
    } else {
        element = <Page />
    }

    // Rendering
    return (
        <>
            <Head>
                <title>bababooey</title>
            </Head>
            
            {element}
        </>
    )
}