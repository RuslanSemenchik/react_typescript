import { UniCardComponent, CardTitle, CardInfo } from "./styles";
import { type UniCardProps } from "./types";

function UniCard({ name = "", webPage = [] }: UniCardProps) {
  return (
    <UniCardComponent>
      <CardTitle>{name} </CardTitle>

      {webPage.map((page: string) => (
        <CardInfo href={page}>{page}</CardInfo>
      ))}
    </UniCardComponent>
  );
}

export default UniCard;
