import React from 'react';
import ParticlesLayout from './ParticlesLayout.jsx';
import Header from './Header.jsx';

import '../styles/MainLayout.css';

export const MainLayout = ({content}) => (
    <div className="main-layout">
        <ParticlesLayout />
        <Header />
        <div className="main-content">
            <main>
                {content}
            </main>
        </div>
    </div>
) 