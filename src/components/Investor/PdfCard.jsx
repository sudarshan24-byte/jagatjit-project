import React from 'react';
import { IoDocumentText } from "react-icons/io5";
import { LuDownload } from "react-icons/lu";

const PdfCard = ({ pdfName }) => {
    return (
      <div className="w-full bg-[#FFFFFF12] shadow-lg rounded-md overflow-hidden my-2 px-6 py-2">
        <div className="flex items-center justify-between">
          {/* Left Section: PDF Icon and PDF Name */}
          <div className="flex items-center gap-3">
            {/* PDF Icon */}
            <div className=' w-5'>
            <IoDocumentText  className='text-[#FFFFFFD1]'/>
            </div>
  
            {/* PDF Name with margin-right for spacing */}
            <div className="text-xl font-semibold mr-4 text-[#FFFFFFD1]">{pdfName}</div>
          </div>
  
          {/* Right Section: Download Button */}
          <button className=" bg-transparent hover:bg-[#CFA456] hover:text-black font-bold py-2 px-4 rounded-sm flex flex-row gap-2 border-2 border-[#CFA456]">
            <div className=' h-5 py-1'>
            <LuDownload />
            </div>
            Download
          </button>
        </div>
      </div>
    );
};

export default PdfCard;
