import PositionChef from "@/ui/positionChef/positionChef";
type ChefInfo = {
  ChefImg: string;
  position: string;
  ChefName: string;
  Description: string;
};
interface ChefCard extends React.HtmlHTMLAttributes<HTMLDivElement> {
  Chef: ChefInfo;
}
function ChefCard({ Chef }: ChefCard) {
  return (
    <>
      <div className="flex h-fit w-full gap-2 pt-28">
        <div className="border-line-100 relative flex h-fit w-1/2 flex-col items-center justify-center border-b-4">
          <img
            src={Chef.ChefImg}
            alt="CurryChef"
            loading="lazy"
            decoding="async"
          />
          <PositionChef className="absolute -bottom-5">
            {Chef.position}
          </PositionChef>
        </div>
        <div className="flex w-1/2 flex-col items-center justify-center">
          <div className="h-fit w-fit">
            <h1 className="text-texts-100 lg:text-2xl">{Chef.ChefName}</h1>{" "}
            <p className="text-texts-200 lg:text-[1.25rem]">
              {Chef.Description}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
function ChefCardMobile({ Chef }: ChefCard) {
  return (
    <>
      <div className="flex h-fit w-full pt-28">
        <div className="border-line-100 relative flex h-fit w-full flex-col items-center justify-center gap-3 border-b-4">
          <img
            src={Chef.ChefImg}
            alt="CurryChef"
            loading="lazy"
            decoding="async"
          />
          <div className="flex w-full flex-col items-center justify-center gap-3 text-center">
            <div className="flex h-fit w-fit flex-col items-center justify-center gap-3">
              <h1 className="text-texts-100 md:text-2xl">{Chef.ChefName}</h1>{" "}
              <PositionChef>{Chef.position}</PositionChef>
              <p className="text-texts-200 md:text-[1.25rem]">
                {Chef.Description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export { ChefCard, ChefCardMobile };
