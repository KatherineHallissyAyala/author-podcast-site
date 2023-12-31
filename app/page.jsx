//import React from 'react';
import Feed from '@components/Feed';

const Home = () => {
    return (
        <section className="w-full flex-center flex-col">
            <h1 className="head_text text_center">
                Discover & Share
                <br className="max-md:hidden" />
                <span className="orange_gradient text-center"> 
                    AI-Powered Prompts
                </span>
            </h1>
            <p className="desc text-center">
                WellnessAI is an open-source AI prompting tool for the modern world to discover, create, and share creative wellness prompts.
            </p>

            <Feed />
        </section>
    );
}

export default Home