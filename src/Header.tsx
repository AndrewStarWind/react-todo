export default function Header(props: {
  searchValue: string;
  onSearchCallback: (value: string) => void;
}) {
  return (
    <header className="header">
      <a className="header__logo link" href="/">
        <img alt="Лого" src="bird128.png" width="32" height="32" />
        <h1 className="header__title">Tensor Todo</h1>
      </a>
      <input
        className="header__search"
        type="search"
        placeholder="Search by text..."
        value={props.searchValue}
        onChange={(e) => props.onSearchCallback(e.target.value)}
      />
      <nav className="header__navigation">
        <a className="link" href="pricing.html">
          Pricing
        </a>
        <a className="link" href="about.html">
          About
        </a>
      </nav>
    </header>
  );
}