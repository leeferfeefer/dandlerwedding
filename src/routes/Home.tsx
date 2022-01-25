import React from 'react';
import '../App.css';

type HomeProps = {};

export const Home = (props: HomeProps) => {
  return (
    <div>
      <h1>Coming Soon!</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem"
        }}
      >
      </nav>
    </div>
  );
}