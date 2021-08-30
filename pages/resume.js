import React from 'react'
import { Document, pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


function resume() {
    const PDF = '/public/resume.pdf'
    return (
        <Document
            file={PDF}

        />
    )
}

export default resume
