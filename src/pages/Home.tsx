import React from 'react';
import '../App.css';
import { getRSVPs } from "../services/API.service";

type HomeProps = {};

export const Home = (props: HomeProps) => {

    const onClick = async () => {
        console.log(await getRSVPs());
    };

    return (
      <div>
        <h1>Coming Soon!</h1>
        <nav
            style={{
                borderBottom: "solid 1px",
                paddingBottom: "1rem"
            }}
        >
            <button
                onClick={onClick}
            >Click me bitch boi</button>
        </nav>
      </div>
    );
}