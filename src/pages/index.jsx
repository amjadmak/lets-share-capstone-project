// import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import * as React from "react";

// import '../styles/global.css';

import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/heroSection";
import List from "@/components/LandingList";
import Stats from "@/components/Stats";
import Partners from "@/components/Partners";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "firebaseConfig";
import { collection, query } from "firebase/firestore";

export async function getStaticProps({ locale }) {
    // const res = await fetch(`http://localhost:3000/items`);
    // const items = await res.json();
    return {
        props: {
            ...(await serverSideTranslations(locale, ["common"])),
            // items,
        },
    };
}

export default function HomePage() {
    // const { t } = useTranslation("common");
    //need to remove below item object and pass {items} as props in this function

    const [list, loading] = useCollection(query(collection(db, "items")));

    let itemsList = list?.docs;

    const blogs = [
        {
            id: 1,
            date: "7 July 2022",
            title: "4-reasons-why-donating-is-important" /*(An actual title should be provided here for the dynamic routing)*/,
            image: "/1.svg" /*(The path of image should be provided)*/,
            imageAlt:
                "Sunset in the mountains" /*(An actual ALT should be provided)*/,
        },
        {
            id: 2,
            date: "7 July 2022",
            title: "Why-donating-is-better-than-recycling" /*(An actual title should be provided here for the dynamic routing)*/,
            image: "/2.svg" /*(The path of image should be provided)*/,
            imageAlt:
                "Sunset in the mountains" /*(An actual ALT should be provided)*/,
        },
        {
            id: 3,
            date: "7 July 2022",
            title: "What-should-I-do-before-donating-my-device" /*(An actual title should be provided here for the dynamic routing)*/,
            image: "/3.svg" /*(The path of image should be provided)*/,
            imageAlt:
                "Sunset in the mountains" /*(An actual ALT should be provided)*/,
        },
    ];

    return (
        <Layout className=''>
            <HeroSection />
            <Stats />

            <div className='bg-[#FAFAFA]'>
                {!loading && <List items={itemsList} />}
                <List blogs={blogs} />
                <Partners />
            </div>
        </Layout>
    );
}

/*export async function getStaticProps({ locale }) {
    return {
        props: {
           // ...(await serverSideTranslations(locale, ["common"])),//
            // Will be passed to the page component as props
        },
    };
}*/
