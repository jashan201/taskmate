function Header(props) {
    return (
        <header>
            <div className='header'>
                <h1>{props.title}</h1>
                <nav>
                    <ul>
                    {props.list.map(link => (
                      <li key={link.index}>
                        <a href="link.url">{link.name}</a>
                      </li>
                    ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;