export default function Footer() {
    return (
        <footer className="footer">
            <p>© Tensor 2022 </p>
            <nav className="footer__nagivation">
                <a className="link" href="./">Pricing</a>
                <a
                    className="link"
                    href="https://github.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                >Github</a>
                <a className="link" href="./">About</a>
            </nav>
        </footer>
    );
}