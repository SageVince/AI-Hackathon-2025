
import React, { useState, useRef, useEffect } from 'react';
import { FaSun, FaMoon, FaChevronDown } from 'react-icons/fa';

const TopBar = ({ onNavigate, toggleTheme, theme, currentView }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [dropdownRef]);

    const styles = {
        topBar: {
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            height: '60px',
            background: theme.cardBg,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0 30px',
            borderBottom: `1px solid ${theme.borderColor}`,
            zIndex: 1001,
        },
        navLinks: {
            display: 'flex',
            alignItems: 'center',
            gap: '25px',
        },
        navLink: {
            background: 'none',
            border: 'none',
            color: theme.text,
            fontSize: '1rem',
            fontWeight: 'bold',
            cursor: 'pointer',
            padding: '10px 0',
            borderBottom: '2px solid transparent',
            display: 'flex',
            alignItems: 'center',
            gap: '5px',
        },
        activeLink: {
            color: theme.primary,
            borderBottom: `2px solid ${theme.primary}`,
        },
        themeToggleButton: {
            background: 'none',
            border: 'none',
            color: theme.text,
            fontSize: '1.2rem',
            cursor: 'pointer',
        },
        dropdownContainer: {
            position: 'relative',
            display: 'inline-block',
        },
        dropdownContent: {
            display: isDropdownOpen ? 'block' : 'none',
            position: 'absolute',
            backgroundColor: theme.cardBg,
            minWidth: '240px',
            boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)',
            zIndex: 1,
            borderRadius: '8px',
            border: `1px solid ${theme.borderColor}`,
            marginTop: '10px',
        },
        dropdownLink: {
            color: theme.text,
            padding: '12px 16px',
            textDecoration: 'none',
            display: 'block',
            textAlign: 'left',
            background: 'none',
            border: 'none',
            width: '100%',
            fontSize: '1rem',
            cursor: 'pointer',
            fontWeight: 'bold',
        },
        dropdownLinkHover: {
            backgroundColor: theme.inputBg,
        }
    };

    const mainNavItem = 'home';
    const dropdownNavItems = ['visual-novel', 'ai-assistants', 'stock-simulator', 'savings', 'knowledge'];
    const navLabels = {
        'home': 'Homepage',
        'visual-novel': 'Stonk Pork: The Visual Novel',
        'ai-assistants': 'AI Assistants',
        'savings': 'Savings Calculator',
        'knowledge': 'Knowledge Base',
        'stock-simulator': 'Portfolio Simulator',
    };

    const handleDropdownNavigate = (item) => {
        onNavigate(item);
        setIsDropdownOpen(false);
    };

    const isFeatureActive = dropdownNavItems.includes(currentView);

    return (
        <div style={styles.topBar}>
            <div style={styles.navLinks}>
                <button 
                    onClick={() => onNavigate(mainNavItem)}
                    style={{
                        ...styles.navLink,
                        ...(currentView === mainNavItem ? styles.activeLink : {}),
                    }}
                >
                    {navLabels[mainNavItem]}
                </button>

                <div style={styles.dropdownContainer} ref={dropdownRef}>
                    <button 
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        style={{
                            ...styles.navLink,
                            ...(isFeatureActive ? styles.activeLink : {}),
                        }}
                    >
                        Features <FaChevronDown size="0.8em" />
                    </button>
                    <div style={styles.dropdownContent}>
                        {dropdownNavItems.map(item => (
                             <button 
                                key={item}
                                onClick={() => handleDropdownNavigate(item)}
                                style={styles.dropdownLink}
                                onMouseEnter={e => e.currentTarget.style.backgroundColor = styles.dropdownLinkHover.backgroundColor}
                                onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}
                             >
                                {navLabels[item] || item}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
            <button onClick={toggleTheme} style={styles.themeToggleButton}>
                {theme.background === '#ffffff' ? <FaMoon /> : <FaSun />}
            </button>
        </div>
    );
};

export default TopBar;
