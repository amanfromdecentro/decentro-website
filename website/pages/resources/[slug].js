import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import ResourceLayout from '../../layout/Resource';

export async function getStaticPaths() {
    return {
        paths: [
            { params: { slug: 'data' } },
            { params: { slug: 'data2' } }
        ], // optionally pre-render some known slugs
        fallback: false, // generates page on first request
    };
}

export async function getStaticProps({ params }) {
    const { slug } = params;

    try {
        const res = await fetch(`https://in.qa.decentro.tech/phoenix/test/${slug}`);
        if (!res.ok) throw new Error("Fetch failed");
        const data = await res.json();

        return {
            props: { pageData: data },
            revalidate: 60, // regenerate this page every 60 seconds
        };
    } catch (error) {
        console.error("Error fetching data:", error);
        return {
            notFound: true,
        };
    }
}

const ResourcePage = ({ pageData }) => {
    return (
        <ResourceLayout data={pageData} />
    );
};

export default ResourcePage;