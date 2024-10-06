import React from 'react'
import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"


interface GroupCardProps {
  name: string
  image: string
}

const GroupCard: React.FC<GroupCardProps> = ({ name, image }) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Card className="overflow-hidden w-64 bg-background border border-primary/20 transition-all duration-300 hover:shadow-md hover:border-primary/50">
            <CardContent className="p-0">
              <div className="relative h-48 w-full">
                <Image
                  src={image}
                  alt={name}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-4">
                <h2 className="text-lg font-semibold text-primary text-center">{name}</h2>
              </div>
            </CardContent>
          </Card>
        </TooltipTrigger>
        <TooltipContent>
          <p>{name}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}



export default GroupCard