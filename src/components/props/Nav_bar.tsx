import "../../resource_files/css/all_props.css";
type NavProps = {
    links: {
        label: string
        url: string
    }[];

    dropdown?: {
        label: string;
        options: {
            label: string
            url: string
        }[];
    };
};

const Nav = ({ links = [], dropdown}: NavProps) => {
    return (
        <nav>
            <ul>
                {links.map((link, index) => (
                    <li key={index}>
                        <a href={link.url}>{link.label}</a>
                    </li>
                ))}
                {dropdown && (
                    <li>
                        <a href="src/components/props/Nav_props#Nav_bar.tsx">{dropdown.label}</a>
                        <ul>
                            {dropdown.options.map((option, index) => (
                                <li key={index}>
                                    <a href={option.url}>{option.label}</a>
                                </li>
                            ))}
                        </ul>
                    </li>
                )}
            </ul>
        </nav>
    );
};

export default Nav;
