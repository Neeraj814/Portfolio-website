import { Toaster as Sonner } from "sonner"
import {
  CircleCheckIcon,
  InfoIcon,
  TriangleAlertIcon,
  OctagonXIcon,
  Loader2Icon,
} from "lucide-react"

export function Toaster(props) {
  return (
    <Sonner
      position="top-right"
      expand={false}
      richColors
      closeButton
      icons={{
        success: <CircleCheckIcon className="h-4 w-4" />,
        info: <InfoIcon className="h-4 w-4" />,
        warning: <TriangleAlertIcon className="h-4 w-4" />,
        error: <OctagonXIcon className="h-4 w-4" />,
        loading: <Loader2Icon className="h-4 w-4 animate-spin" />,
      }}
      toastOptions={{
        classNames: {
          toast:
            "bg-background text-foreground border border-border rounded-lg shadow-lg",
        },
      }}
      {...props}
    />
  )
}
