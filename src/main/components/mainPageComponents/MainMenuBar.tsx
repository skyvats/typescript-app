import React from "react";
import { Menubar } from "primereact/menubar";
import DevToolsLogo from "../../images/DevToolsLogo.png";

export const MainMenuBar = () => {
    const menuItems = [
        { label: 'Home' },
        { label: 'About' },
        {
            label: 'Tools',
            items: [
                { label: 'NPM Component Finder' },
                { label: 'AI Image Generator' }
            ]
        },
        { label: 'Contact' }
    ];

    // Inline CSS styles
    const styles = {
        menubar: {
            padding: '0.5rem 1rem',
        },
        start: {
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            marginRight: 'auto',
        },
        logo: {
            height: '40px',
            width: '40px',
        },
        title: {
            fontSize: '1.2rem',
            fontWeight: 'bold',
            margin: 0,
        }
    };

    // Start element (logo and title)
    const start = (
        <div style={styles.start}>
            <img alt="logo" src={DevToolsLogo} style={styles.logo} />
            <h5 style={styles.title}>DevTools Hub</h5>
        </div>
    );

    // End element (menu items)
    const end = (
        <Menubar model={menuItems} style={{ backgroundColor: 'transparent', border: 'none' }} />
    );

    return (
        <Menubar
            start={start}
            end={end}
            style={styles.menubar}
            className="p-menubar p-0 pl-3"
        />
    );
};
