import { UniCardComponent, CardTitle, CardInfo } from "./styles";
import { type UniCardProps } from "./types";

function UniCard({ name = "", webPage = "" }: UniCardProps) {
  return (
    <UniCardComponent>
    
        <CardTitle>{name} </CardTitle>
        <CardInfo> {webPage} </CardInfo>
        

    </UniCardComponent>
  );
}

export default UniCard;
