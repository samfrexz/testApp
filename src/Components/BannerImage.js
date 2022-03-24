
const BannerImage = () => {
  return ( 
    <>
      <main className="banner-image w-full overflow-x-hidden md:h-banaHeight h-smBana">
        <div className="w-contain mx-auto flex h-full items-center text-white">
          <div className="w-full font-bold lg:leading-lead md:text-large lg:text-left text-center text-small">
            <h1 className="">Watch <br className="hidden md:block" /> something <br /> incredible.</h1>
          </div>
        </div>
      </main>
    </>
   );
}

export default BannerImage;