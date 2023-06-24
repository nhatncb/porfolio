const HomePage = () => {
  return (
    <div className="h-screen bg-white flex">
      <div className="side-bar h-screen w-[72px]">{/* <HamburgetButton /> */}</div>
      <div className="flex-1">
        <div className="header">
          <p className="m-0 page-title">About me</p>
          <div>
            <button className="outline-btn">news</button>
            <button className="text-btn">AAA</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
