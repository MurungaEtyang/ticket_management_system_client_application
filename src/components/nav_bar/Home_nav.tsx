import Nav from '../props/Nav_bar'


export const Home_nav = () => {

    const navLinks = [
        { label: 'FAQS', url: '/' },
        { label: 'GUEST', url: '/' },

    ]

    // const dropdownOptions = [
    //     { label: 'Option 1', url: '/option1' },
    //     { label: 'Option 2', url: '/option2' },
    //     { label: 'Option 3', url: '/option3' },
    // ];

    return (
        <div className={`navbar`}>
            <Nav links={navLinks}  />
        </div>
    )
}
