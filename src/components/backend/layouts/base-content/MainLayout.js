import React from 'react';

// Header Components
import Header from '../header/Header';
import HeaderSidebar from '../header/HeaderSidebar';
import PageHeader from '../header/PageHeader';

// Footer Components
import CommonModals from '../modals/CommonModals';
import Footer from '../footer/Footer';


const MainLayout = (props) => {
    return ( 
        <>
            <div id="page-container" className="sidebar-o sidebar-dark enable-page-overlay side-scroll page-header-fixed">
                {/* Include Header */}
                <Header />
                <HeaderSidebar />
                <PageHeader />

                {/* Include Additional Props */}
                <main id="main-container">
                    <>
                        {props.children && props.children }
                    </>
                </main>

                {/* Include Footer */}
                <Footer />
                <CommonModals />

            </div>
                
        </>
     );
}
 
export default MainLayout;