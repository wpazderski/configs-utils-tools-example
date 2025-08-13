import { StringUtils } from "@wpazderski/js-utils";
import { TimeoutScheduler } from "@wpazderski/js-utils/common/schedulers/TimeoutScheduler.js";
import { schedulers as webSchedulers } from "@wpazderski/js-utils/web";
import { useCallback, useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";

export function App() {
    // eslint-disable-next-line no-console
    console.log("Rendering App component");
    const [count, setCount] = useState(0);
    const handleButtonClick = useCallback(() => {
        setCount((prev) => prev + 1);
    }, []);

    useEffect(() => {
        const camelCaseStr = "loremIpsumDolorSitAmet";
        const kebabCaseStr = StringUtils.camelCaseToKebabCase(camelCaseStr);
        // eslint-disable-next-line no-console
        console.log({ camelCaseStr, kebabCaseStr });

        TimeoutScheduler.singleShot(
            () => {
                // eslint-disable-next-line no-console
                console.log("TimeoutScheduler single shot executed");
            },
            { delayMsec: 1000 },
        );

        webSchedulers.OnIdleScheduler.singleShot(() => {
            // eslint-disable-next-line no-console
            console.log("OnIdleScheduler single shot executed");
        });
    }, []);

    return (
        <>
            <div>
                <a href="https://vite.dev" target="_blank" rel="noreferrer">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank" rel="noreferrer">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <button type="button" onClick={handleButtonClick}>
                    count is {count}
                </button>
                <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
        </>
    );
}
