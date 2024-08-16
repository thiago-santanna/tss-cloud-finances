import { formatToBRL } from "@/functions/numerics";
import { CardProps } from "@/models/cards";
import Image from "next/image";

export default function Card(props: CardProps) {
  return (
    <>
      <div
        style={{ backgroundColor: props.bgColor }}
        className="shadow-xl border-solid border-2 border-slate-500 flex flex-col justify-between rounded-md w-full h-20 p-1 
        md:w-80 md:h-full"
      >
        <div className="flex justify-between px-2">
          <span className="font-light " style={{ color: props.fontColor }}>
            {props.titulo}
          </span>
          <Image
            src={"/" + props.pngPath}
            alt="Logo Finances"
            className="dark:invert"
            width={24}
            height={24}
            priority
          />
        </div>
        <div className="flex px-2">
          <span className="font-bold" style={{ color: props.fontColor }}>
            {formatToBRL(props.valor)}
          </span>
        </div>
      </div>
    </>
  );
}
