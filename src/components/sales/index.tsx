import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "../ui/card";
import { CircleDollarSignIcon, DollarSign } from "lucide-react";
import { Avatar, AvatarImage } from "../ui/avatar";

export function Sales() {
  return (
    <Card className="text-blue-400 w-full md:w-1/2 md:max-w-[600px] transition hover:shadow-lg">
      <CardHeader>
        <div className="flex items-center justify-center">
          <CardTitle className="text-lg sm:text-xl text-blue-500">
            Últimos Clientes
          </CardTitle>
          <CircleDollarSignIcon className="ml-auto w-4 h4" />
        </div>
        <CardDescription className="text-xs sm:text-base text-black">Últimos clientes com mais vendas</CardDescription>
      </CardHeader>
      <CardContent>
        <article className="flex items-center justify-left gap-4 border-b border-border/50 pb-4 py-4 text">
          <Avatar className="w-10 h-10 ">
            <AvatarImage
              src="https://github.com/Dhionierison.png"
              alt="Dhioni"
            />
          </Avatar>
          <div>
            <p className="text-black">Dhionierison</p>
            <p className="text-xs text-blue-500">
              Vendas: R$ 125.193,51
            </p>
          </div>
        </article>
        <article className="flex items-center justify-left gap-4 border-b border-border/50 pb-4 py-4">
          <Avatar className="w-10 h-10">
            <AvatarImage
              src="https://github.com/Pauloricardorc.png"
              alt="Dhioni"
            />
          </Avatar>
          <div>
            <p className="text-black">Paulo Ricardo</p>
            <p className="text-xs">
              Vendas: R$ 145.345,51
            </p>
          </div>
        </article>
        <article className="flex items-center justify-left gap-4 border-b border-border/50 pb-4 py-4">
          <Avatar className="w-10 h-10">
            <AvatarImage src="https://github.com/yamclaro.png" alt="Dhioni" />
          </Avatar>
          <div>
            <p className="text-black">Yam Claro</p>
            <p className="text-xs">
              Vendas: R$ 185.456,18
            </p>
          </div>
        </article>
        <article className="flex items-center justify-left gap-4 border-b border-border/50 pb-4 py-4">
          <Avatar className="w-10 h-10">
            <AvatarImage
              src="https://github.com/fabriciosant.png"
              alt="Dhioni"
            />
          </Avatar>
          <div>
            <p className="text-black">Fabricio Santos</p>
            <p className="text-xs">
              Vendas: R$ 145.456,16
            </p>
          </div>
        </article>
        <article className="flex items-center justify-left gap-4 border-b border-border/50 pb-4 py-4">
          <Avatar className="w-10 h-10">
            <AvatarImage
              src="https://github.com/Thiago-Gomes-Araujo.png"
              alt="Dhioni"
            />
          </Avatar>
          <div>
            <p className="text-black">Thiago Araujo</p>
            <p className="text-xs">
              Vendas: R$ 123.145,45
            </p>
          </div>
        </article>
      </CardContent>
    </Card>
  );
}
