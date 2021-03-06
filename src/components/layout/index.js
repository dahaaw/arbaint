import React from 'react'
import NavbarLayout from './Navbar.layout';
import ContentLayout from './Content.layout';
import Footer from './Footer.layout';

export default function Layouts(props) {
    return (
        <>
            <NavbarLayout />
            <ContentLayout >
                {props.children}
            </ContentLayout>
            <Footer />    
        </>
    )
}
