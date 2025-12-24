"use client"

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { FileText, ExternalLink } from 'lucide-react'

interface PdfModalProps {
    pdfUrl: string
    title: string
    buttonText: string
}

export function PdfModal({ pdfUrl, title, buttonText }: PdfModalProps) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button size="lg" className="bg-filcam-teal hover:bg-teal-700 text-white gap-2">
                    <FileText className="h-5 w-5" />
                    {buttonText}
                </Button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl w-[90vw] h-[90vh] flex flex-col p-0 overflow-hidden">
                <DialogHeader className="p-4 pr-12 border-b flex flex-row items-center justify-between space-y-0">
                    <DialogTitle className="text-filcam-teal font-bold">{title}</DialogTitle>
                    <a
                        href={pdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-filcam-teal transition-colors"
                        title="Abrir en pestaña nueva"
                    >
                        <ExternalLink className="h-5 w-5" />
                    </a>
                </DialogHeader>
                <div className="flex-1 w-full h-full bg-gray-100">
                    <iframe
                        src={`${pdfUrl}#toolbar=0`}
                        className="w-full h-full border-none"
                        title={title}
                    />
                </div>
            </DialogContent>
        </Dialog>
    )
}
