"use client"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { RequestForm } from "@/components/request-form"

interface RequestModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function RequestModal({ open, onOpenChange }: RequestModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-card border-border">
        <DialogHeader>
          <DialogTitle className="font-serif text-2xl text-foreground">
            Request a Ride
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Tell us your plans and we will confirm within the hour.
          </DialogDescription>
        </DialogHeader>
        <RequestForm />
      </DialogContent>
    </Dialog>
  )
}
