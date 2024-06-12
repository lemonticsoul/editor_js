import React, { useEffect, useState } from 'react';
import * as pdfjsLib from 'pdfjs-dist/webpack';


const PdfViewer=({url})=>{
    const [numPages,setNumPages]=useState(null);
    const [pageNumber,setPageNumber]=useState(1);

    useEffect(()=>{
        const fetchPdf=async()=>{
            const loadingTask=pdfjsLib.getDocument(url);
            const pdf=await loadingTask.promise;
            setNumPages(pdf.numPages);
            renderPage(pdf,pageNumber);
        }

        fetchPdf();
    },[url,pageNumber])

    const renderPage=async(pdf,pageNumber)=>{
        const page=await pdf.getPage(pageNumber);
        const scale=1.5;
        const viewport=page.getViewport({scale});
        const canvas=document.getElementById('pdf-canvas');
        const context=canvas.getContext('2d');
        canvas.height=viewport.height;
        canvas.width=viewport.width;

       const renderContext = {
            canvasContext: context,
            viewport: viewport,
          };
          await page.render(renderContext).promise;
    }

    const goToPrevPage=()=>{
        setPageNumber(pageNumber-1);

    }

    const goToNextPage=()=>{
        setPageNumber(pageNumber+1);
    }
    return (
        <div>
          <canvas id="pdf-canvas"></canvas>
          <div>
            <button onClick={goToPrevPage} disabled={pageNumber <= 1}>
              Previous
            </button>
            <button onClick={goToNextPage} disabled={pageNumber >= numPages}>
              Next
            </button>
          </div>
          <p>
            Page {pageNumber} of {numPages}
          </p>
        </div>
      );





}

export default PdfViewer; 