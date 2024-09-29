import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface EventCardProps {
  startDate: String
  endDate: String
  title: string
  description: string
}

export default function DateCard({ startDate, endDate, title, description }: EventCardProps) {
  // Provide default values inside the function
  startDate = startDate || "2023-09-15";
  endDate = endDate || "2023-09-17";
  title = title || 'Tech Conference 2023';
  description = description || 'Join us for three days of cutting-edge technology talks and workshops.';

 

  return (
    <Card className="w-2/3 max-w-md text-center overflow-hidden transition-all shadow-xl hover:shadow-lg cursor-pointer">
      <div className="bg-secondary p-4 text-primary">
        <CardHeader className="p-0">
          <CardTitle className="text-2xl font-bold text-white uppercase text-center ">{title}</CardTitle>
        </CardHeader>
      </div>
      <CardContent className="p-6">
        <div className="mb-4 flex items-center justify-center text-sm text-secondary-foreground">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mr-2 h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <span className="font-bold" >{startDate} - {endDate}</span>
        </div>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  )
}
