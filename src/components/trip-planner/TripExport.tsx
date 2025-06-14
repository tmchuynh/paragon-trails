"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { TripDay, TripPlan } from "@/lib/interfaces/trip-planner";
import {
  calculateTotalDayTime,
  formatDuration,
} from "@/lib/utils/trip-planner";
import { format } from "date-fns";
import { Check, Copy, Download, Share2 } from "lucide-react";
import { useState } from "react";

interface TripExportProps {
  tripPlan: TripPlan;
  days: TripDay[];
}

export default function TripExport({ tripPlan, days }: TripExportProps) {
  const [notes, setNotes] = useState("");
  const [manualCopyText, setManualCopyText] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [previewText, setPreviewText] = useState("");
  const [shareButtonText, setShareButtonText] = useState("Share/Copy");
  const [shareButtonDisabled, setShareButtonDisabled] = useState(false);

  const generateTripSummary = () => {
    const summary = {
      destination: tripPlan.destinationName,
      hotel: tripPlan.hotelName,
      dates: `${format(tripPlan.startDate, "MMMM do, yyyy")} - ${format(tripPlan.endDate, "MMMM do, yyyy")}`,
      guests: tripPlan.guests,
      totalDays: days.length,
      itinerary: days.map((day) => ({
        day: day.dayNumber,
        date: format(day.date, "EEEE, MMMM do"),
        totalTime: formatDuration(calculateTotalDayTime(day.items)),
        activities: day.items.map((item) => ({
          name: item.name,
          type: item.type,
          duration: formatDuration(item.customDuration || 120),
          location: item.location,
          category: item.category,
        })),
      })),
      notes,
    };

    return summary;
  };

  const exportAsJSON = () => {
    const summary = generateTripSummary();
    const dataStr = JSON.stringify(summary, null, 2);
    const dataUri =
      "data:application/json;charset=utf-8," + encodeURIComponent(dataStr);

    const exportFileDefaultName = `${tripPlan.destinationName.toLowerCase().replace(/\s+/g, "-")}-trip-plan.json`;

    const linkElement = document.createElement("a");
    linkElement.setAttribute("href", dataUri);
    linkElement.setAttribute("download", exportFileDefaultName);
    linkElement.click();
  };

  const exportAsText = () => {
    const summary = generateTripSummary();
    let textContent = `TRIP PLAN: ${summary.destination}\n`;
    textContent += `${"=".repeat(50)}\n\n`;
    textContent += `Hotel: ${summary.hotel}\n`;
    textContent += `Dates: ${summary.dates}\n`;
    textContent += `Guests: ${summary.guests}\n`;
    textContent += `Duration: ${summary.totalDays} days\n\n`;

    summary.itinerary.forEach((day) => {
      textContent += `DAY ${day.day} - ${day.date}\n`;
      textContent += `${"-".repeat(30)}\n`;
      textContent += `Total planned time: ${day.totalTime}\n\n`;

      if (day.activities.length === 0) {
        textContent += `No activities planned\n\n`;
      } else {
        day.activities.forEach((activity, index) => {
          textContent += `${index + 1}. ${activity.name}\n`;
          textContent += `   Type: ${activity.type}\n`;
          textContent += `   Duration: ${activity.duration}\n`;
          textContent += `   Location: ${activity.location}\n`;
          textContent += `   Category: ${activity.category}\n\n`;
        });
      }
    });

    if (summary.notes) {
      textContent += `NOTES:\n${"-".repeat(20)}\n${summary.notes}\n`;
    }

    const dataUri =
      "data:text/plain;charset=utf-8," + encodeURIComponent(textContent);
    const exportFileDefaultName = `${tripPlan.destinationName.toLowerCase().replace(/\s+/g, "-")}-trip-plan.txt`;

    const linkElement = document.createElement("a");
    linkElement.setAttribute("href", dataUri);
    linkElement.setAttribute("download", exportFileDefaultName);
    linkElement.click();
  };

  const handleCopyToClipboard = async (textToCopy: string) => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset copied state after 2 seconds
    } catch (err) {
      alert("Failed to copy. Please try copying manually.");
    }
  };

  const shareTrip = async () => {
    const summary = generateTripSummary();

    let fullShareText = `TRIP PLAN: ${summary.destination}\n`;
    fullShareText += `${"=".repeat(50)}\n\n`;
    fullShareText += `Hotel: ${summary.hotel}\n`;
    fullShareText += `Dates: ${summary.dates}\n`;
    fullShareText += `Guests: ${summary.guests}\n`;
    fullShareText += `Duration: ${summary.totalDays} days\n\n`;

    summary.itinerary.forEach((day) => {
      fullShareText += `DAY ${day.day} - ${day.date}\n`;
      fullShareText += `${"-".repeat(30)}\n`;
      fullShareText += `Total planned time: ${day.totalTime}\n\n`;

      if (day.activities.length === 0) {
        fullShareText += `No activities planned\n\n`;
      } else {
        day.activities.forEach((activity, index) => {
          fullShareText += `${index + 1}. ${activity.name}\n`;
          fullShareText += `   Duration: ${activity.duration}\n\n`;
        });
      }
    });

    if (summary.notes) {
      fullShareText += `NOTES:\n${"-".repeat(20)}\n${summary.notes}\n`;
    }

    // First show the preview dialog
    setPreviewText(fullShareText);
    setShowPreview(true);
    // Reset button state when opening preview
    setShareButtonText("Share/Copy");
    setShareButtonDisabled(false);
  };

  const handleShareFromPreview = async (fullShareText: string) => {
    const summary = generateTripSummary();
    const shortShareText = `Check out my trip plan to ${summary.destination}!\\n\\n${summary.dates}\\nStaying at: ${summary.hotel}\\n\\n${summary.totalDays} days of adventure planned!`;

    setShareButtonDisabled(true);
    setShareButtonText("Sharing...");

    if (navigator.share) {
      try {
        await navigator.share({
          title: `Trip Plan: ${summary.destination}`,
          text: shortShareText,
        });
        setShareButtonText("Shared!");
        setTimeout(() => {
          setShowPreview(false);
          setShareButtonText("Share/Copy");
          setShareButtonDisabled(false);
        }, 1500);
      } catch (err) {
        // If navigator.share fails, try clipboard with full text
        setShareButtonText("Copying...");
        try {
          await navigator.clipboard.writeText(fullShareText);
          setShareButtonText("Copied!");
          setTimeout(() => {
            setShowPreview(false);
            setShareButtonText("Share/Copy");
            setShareButtonDisabled(false);
          }, 1500);
        } catch (clipErr) {
          // If clipboard also fails, close preview and show manual copy dialog
          setShareButtonText("Failed - Try Again Later");
          setTimeout(() => {
            setShowPreview(false);
            setManualCopyText(fullShareText);
            setShareButtonText("Share/Copy");
            setShareButtonDisabled(false);
          }, 1000);
        }
      }
    } else {
      // If navigator.share is not available, try clipboard with full text
      try {
        await navigator.clipboard.writeText(fullShareText);
        setShareButtonText("Copied!");
        setTimeout(() => {
          setShowPreview(false);
          setShareButtonText("Share/Copy");
          setShareButtonDisabled(false);
        }, 2000);
      } catch (clipErr) {
        // If clipboard also fails, close preview and show manual copy dialog
        setShareButtonText("Failed - Try Again Later");
        setTimeout(() => {
          setShowPreview(false);
          setManualCopyText(fullShareText);
          setShareButtonText("Share/Copy");
          setShareButtonDisabled(false);
        }, 1000);
      }
    }
  };

  return (
    <>
      <div className="flex gap-2">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" size="sm">
              <Download className="mr-2 w-4 h-4" />
              Export
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Export Trip Plan</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <label className="font-medium text-sm">
                  Add Notes (Optional)
                </label>
                <Textarea
                  placeholder="Add any additional notes about your trip..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="mt-1"
                />
              </div>

              <div className="flex gap-2">
                <Button
                  onClick={exportAsJSON}
                  variant="outline"
                  className="flex-1"
                >
                  JSON Format
                </Button>
                <Button
                  onClick={exportAsText}
                  variant="outline"
                  className="flex-1"
                >
                  Text Format
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>

        <Button variant="outline" size="sm" onClick={shareTrip}>
          <Share2 className="mr-2 w-4 h-4" />
          Share
        </Button>
      </div>

      {/* Preview Dialog */}
      {showPreview && (
        <Dialog
          open={showPreview}
          onOpenChange={() => {
            setShowPreview(false);
            setShareButtonText("Share/Copy");
            setShareButtonDisabled(false);
          }}
        >
          <DialogContent className="sm:max-w-4xl max-h-[80vh] overflow-hidden">
            <DialogHeader>
              <DialogTitle>Trip Itinerary Preview</DialogTitle>
              <DialogDescription>
                Review your trip details before sharing or copying.
              </DialogDescription>
            </DialogHeader>
            <div className="max-h-[60vh] overflow-y-auto">
              <pre className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg text-sm whitespace-pre-wrap">
                {previewText}
              </pre>
            </div>
            <DialogFooter className="flex gap-2">
              <Button
                variant="outline"
                onClick={() => {
                  setShowPreview(false);
                  setShareButtonText("Share/Copy");
                  setShareButtonDisabled(false);
                }}
              >
                Cancel
              </Button>
              <Button
                onClick={() => handleShareFromPreview(previewText)}
                disabled={shareButtonDisabled}
              >
                {shareButtonText}
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}

      {manualCopyText && (
        <Dialog
          open={!!manualCopyText}
          onOpenChange={() => setManualCopyText(null)}
        >
          <DialogContent className="sm:max-w-6/7">
            <DialogHeader>
              <DialogTitle>Copy Trip Details</DialogTitle>
              <DialogDescription>
                Your browser prevented automatic copying. Please copy the text
                below manually.
              </DialogDescription>
            </DialogHeader>
            <div className="relative">
              <Textarea
                value={manualCopyText}
                readOnly
                rows={10}
                className="my-4 pr-12"
              />
              <Button
                variant="ghost"
                size="sm"
                className="top-2 right-2 absolute p-1 h-auto"
                onClick={() => handleCopyToClipboard(manualCopyText || "")}
              >
                {copied ? (
                  <Check className="w-4 h-4 text-green-500" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </Button>
              {copied && (
                <div className="flex items-center gap-1 text-green-600 text-sm">
                  <Check className="w-4 h-4" />
                  <span>Copied to clipboard!</span>
                </div>
              )}
            </div>
            <DialogFooter>
              <Button onClick={() => setManualCopyText(null)}>Close</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
}
