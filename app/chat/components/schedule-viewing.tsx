"use client"

import { useState } from "react"
import { format } from "date-fns"
import { Calendar } from "@/components/ui/calendar"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Check } from "lucide-react"

interface ScheduleViewingProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  propertyName: string
}

export function ScheduleViewing({ open, onOpenChange, propertyName }: ScheduleViewingProps) {
  const [date, setDate] = useState<Date>()
  const [selectedTime, setSelectedTime] = useState<string>()
  const [isConfirmed, setIsConfirmed] = useState(false)

  const timeSlots = [
    "09:00",
    "09:30",
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "13:00",
    "13:30",
    "14:00",
    "14:30",
    "15:00",
    "15:30",
    "16:00",
    "16:30",
    "17:00",
  ]

  const handleConfirm = () => {
    if (date && selectedTime) {
      setIsConfirmed(true)
    }
  }

  const handleClose = () => {
    setDate(undefined)
    setSelectedTime(undefined)
    setIsConfirmed(false)
    onOpenChange(false)
  }

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="w-full sm:max-w-[500px]">
        {!isConfirmed ? (
          <>
            <SheetHeader className="mb-6">
              <SheetTitle>Schedule a Viewing</SheetTitle>
              <SheetDescription>Select a date and time to view {propertyName}</SheetDescription>
            </SheetHeader>
            <div className="space-y-6">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border"
                disabled={(date) => date < new Date()}
              />
              {date && (
                <div className="space-y-4">
                  <h3 className="font-medium">Available Time Slots</h3>
                  <ScrollArea className="h-[200px] rounded-md border p-4">
                    <div className="grid grid-cols-2 gap-2">
                      {timeSlots.map((time) => (
                        <Button
                          key={time}
                          variant={selectedTime === time ? "secondary" : "outline"}
                          className={selectedTime === time ? "text-white" : ""}
                          onClick={() => setSelectedTime(time)}
                        >
                          {time}
                        </Button>
                      ))}
                    </div>
                  </ScrollArea>
                </div>
              )}
              <Button
                className="w-full bg-secondary text-white hover:bg-secondary/90"
                disabled={!date || !selectedTime}
                onClick={handleConfirm}
              >
                Confirm Viewing
              </Button>
            </div>
          </>
        ) : (
          <div className="space-y-6 text-center">
            <div className="mx-auto w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
              <Check className="w-6 h-6 text-secondary" />
            </div>
            <div className="space-y-2">
              <h2 className="text-xl font-semibold">Viewing Confirmed!</h2>
              <p className="text-gray-500">
                Your viewing has been scheduled for {date && format(date, "MMMM do, yyyy")} at {selectedTime}
              </p>
            </div>
            <div className="space-y-2 pt-4">
              <Button className="w-full" onClick={handleClose}>
                Done
              </Button>
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  )
}

