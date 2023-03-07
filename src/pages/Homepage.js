import React from "react";
import { Hero, FeaturedProducts, Services, Contacts } from "../components";
const Homepage = () => {
    return (
        <main>
            <Hero />
            <FeaturedProducts />
            <Services />
            <Contacts />
        </main>
    )
}

export default Homepage