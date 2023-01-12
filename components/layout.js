import React from 'react';

export default function Layout({ children }) {
    return (
        <>
            <header>put header here</header>
            <main>{children}</main>
            <footer>put footer stuff here</footer>
        </>
    )
}