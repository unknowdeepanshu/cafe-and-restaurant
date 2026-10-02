interface HeaderTitleProps {
  img: string;
  Title: string;
}
function HeaderTitle({ img, Title }: HeaderTitleProps) {
  return (
    <>
      <section className="relative flex h-[60vh] w-full items-center justify-center">
        <img
          src={img}
          alt="MenuHeader"
          className="absolute top-0 -z-2 h-full w-full"
        />
        <div className="absolute top-0 -z-1 h-full w-full bg-black opacity-60" />
        <div className="relative flex h-1/2 w-1/2 items-center justify-center">
          <hr className="border-line-300 absolute top-0 w-full border-2" />
          <div>
            <h1
              id="fanwood-text-regular"
              className="text-texts-100 text-2xl sm:text-4xl lg:text-6xl"
            >
              {Title}
            </h1>
          </div>
          <hr className="border-line-300 absolute bottom-0 w-full border-2" />
        </div>
      </section>
    </>
  );
}

export default HeaderTitle;
