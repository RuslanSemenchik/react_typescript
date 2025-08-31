import { UniCardComponent, CardTitle, CardInfo } from "./styles";
import { type UniCardProps } from "./types";

function UniCard({ name = "", webPage = [] }: UniCardProps) {
  return (
    <UniCardComponent>
      <CardTitle>{name} </CardTitle>

      {/* {uniArray.map((uni: UniCardType) => (
            <UniCard key={v4()} name={uni.name} webPage={uni.web_pages} />
          ))} */}

      {webPage.map((page: string) => (
        <CardInfo 
        href={page}>
         {page}
        </CardInfo>
      ))}
    </UniCardComponent>
  );
}

export default UniCard;
