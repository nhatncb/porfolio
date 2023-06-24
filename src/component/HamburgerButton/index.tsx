import './styles.css';

const HamburgetButton = () => {
  return (
    <div className="drawer nav-container">
      <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <label className="hamburger-lines" htmlFor="my-drawer">
            <span className="line line1"></span>
            <span className="line line2"></span>
            <span className="line line3"></span>
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer" className="drawer-overlay"></label>
          <div className="items-container">
            <div className="blur-text section-title mb-3">About Me</div>
            <div className="blur-text text-lg mb-3">DNLX</div>
            <div className="blur-text text-lg mb-10">News</div>

            <div className="section-title mb-3">Artworks</div>
            <div className="text-lg mb-3">Performance</div>
            <div className="blur-text text-lg mb-3">Sculpture</div>
            <div className="blur-text text-lg mb-3">Installation</div>
            <div className="blur-text text-lg mb-3">Collaboration</div>
            <div className="blur-text text-lg mb-3">Video</div>
            <div className="blur-text text-lg mb-10">Others</div>

            <div className="blur-text section-title mb-3">Writting</div>
            <div className="blur-text text-lg mb-3">Poems & Verses</div>
            <div className="blur-text text-lg mb-10">Articles</div>

            <div className="blur-text section-title mb-3">Research</div>
            <div className="blur-text text-lg mb-3">The Transversality of Voice</div>
            <div className="blur-text text-lg">Artistic Education</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HamburgetButton;
