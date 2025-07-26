import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";
import { DollarSign } from "lucide-react";

export default function ChartOverview() {
  return (
    <Card className="w-full md:w-1/2 md:max-w-[600px]">
      <CardHeader>
        <div className="flex items-center justify-center"></div>
        <CardTitle className="text-lg sm:text-xl text-gray-800 select-none">
            Overview Vendas

        </CardTitle>
        <DollarSign className="ml-auto w-4 h4"/>
      </CardHeader>
      <CardContent>
        

      </CardContent>
    </Card>
  );
}
