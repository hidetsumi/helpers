import { memo } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./card";

interface props {
  character: Character;
}

export const MemorizedCard = memo(function card(props: props) {
  const { name, image, origin} = props.character;
  return (
    <Card className="animate-matrixBlink rounded-lg p-4" >
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{`From: ${origin.name}`}</CardDescription>
      </CardHeader>
      <CardContent>
        <img src={image} className="w-[100px]" />
      </CardContent>
    </Card>
  );
});
