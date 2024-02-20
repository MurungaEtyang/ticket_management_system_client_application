import React, { useState } from 'react';

type NavProps = {
    links: {
        label: string;
        url?: string;
        dropdownOptions?: {
            label: string;
            url?: string;
        }[];
    }[],
    onDropdownClick?: (options: { label: string; url: string }[]) => void,
    onClick?: (event: React.MouseEvent<HTMLAnchorElement>, url: string) => void,
    renderLink?: (link: { label: string; url: string }) => JSX.Element;
};

const Nav = ({ links = [], onDropdownClick, onClick, renderLink }: NavProps) => {
    const [activeDropdown, setActiveDropdown] = useState('');

    const handleDropdownClick = (label: string, options: { label: string; url: string }[]) => {
        setActiveDropdown(label);
        if (onDropdownClick) {
            onDropdownClick(options);
        }
    };

    return (
        <nav>
            <ul>
                {links.map((link, index) => (
                    <li key={index}>
                        <a
                            href={link.url}
                            onClick={(event) => onClick && link.url && onClick(event, link.url)}
                        >
                            {link.label}
                        </a>
                        {link.dropdownOptions && link.dropdownOptions.length > 0 && (
                            <ul className={activeDropdown === link.label ? 'active' : ''}>
                                {link.dropdownOptions.map((option, index) => (
                                    <li key={index}>
                                        <a
                                            href={option.url}
                                            onClick={(event) => onClick && option.url && onClick(event, option.url)}
                                        >
                                            {option.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Nav;
