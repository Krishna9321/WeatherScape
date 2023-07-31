import { useState, useEffect } from "react";
import { useStateContext } from "../Context";




function Credits() {

    const { weather } = useStateContext()
    const [credit, setcredit] = useState(<p>Photo by </p>)

    useEffect(() => {
        if (weather.conditions) {
            let creditString = weather.conditions
            if (creditString.toLowerCase().includes('clear')) {
                setcredit(credit => (
                    <p>
                        Photo by <a href="https://unsplash.com/@cristofer?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                            Cristofer Maximilian
                        </a> on
                        <a href="https://unsplash.com/photos/3_gzeydxuhc?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                        {" "}Unsplash
                        </a>
                    </p>
                ))
            }
            else if (creditString.toLowerCase().includes('rain') || creditString.toLowerCase().includes('shower')) {
                setcredit(credit => (
                    <p>
                        Photo by <a href="https://unsplash.com/@osmanrana?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                            Osman Rana
                        </a> on
                        <a href="https://unsplash.com/photos/GXEZuWo5m4I?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                            {" "}Unsplash
                        </a>
                    </p>
                ))
            }
            else if (creditString.toLowerCase().includes('cloud')) {
                setcredit(credit => (
                    <p>
                        Photo by <a href="https://unsplash.com/@billy_huy?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                            Billy Huynh
                        </a> on
                        <a href="https://unsplash.com/photos/v9bnfMCyKbg?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                            {" "}Unsplash
                        </a>
                    </p>
                ))
            }
            else if (creditString.toLowerCase().includes('snow')) {
                setcredit(credit => (
                    <p>
                        Photo by <a href="https://unsplash.com/@sametomorrow?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                            Adam Chang
                        </a> on
                        <a href="https://unsplash.com/photos/IWenq-4JHqo?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                            {" "}Unsplash
                        </a>
                    </p>
                ))
            }
            else if (creditString.toLowerCase().includes('fog')) {
                setcredit(credit => (
                    <p>
                        Photo by <a href="https://unsplash.com/@jakubkriz?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                            Jakub Kriz
                        </a> on
                        <a href="https://unsplash.com/photos/arOyDPUAJzc?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                            {" "}Unsplash
                        </a>
                    </p>
                ))
            }
            else if (creditString.toLowerCase().includes('thunder') || creditString.toLowerCase().includes('storm')) {
                setcredit(credit => (
                    <p>
                        Photo by <a href="https://unsplash.com/@raychelsnr?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                            Raychel Sanner
                        </a> on
                        <a href="https://unsplash.com/photos/1cJXplTxrmI?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                            {" "}Unsplash
                        </a>
                    </p>
                ))
            }
        }

    }, [weather])



    return (
        <div className=" pb-3 font-bold text-lg pr-0">
            {credit}
        </div>
    );
}

export default Credits;