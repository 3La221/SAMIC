import { Loader2 } from "lucide-react"

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background">
      <div className="text-center space-y-4">
        <Loader2 className="w-12 h-12 animate-spin text-primary text-center" />
        <h1 className="text-2xl font-bold text-primary">Loading...</h1>
        <p className="text-secondary-foreground">Please wait while we prepare your content</p>
      </div>
    </div>
  )
}