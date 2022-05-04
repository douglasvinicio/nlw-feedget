import { Camera, Trash } from "phosphor-react";
import html2canvas from 'html2canvas';
import { useEffect, useState } from "react";
import { LoadingIcon } from "../Icons/LoadingIcon";

interface ScreenshotButtonProps {
    onScreenshotTook: (screenshot: string | null) => void;
    screenshot : string | null;
}

export function ScreenShotButton({
    onScreenshotTook, 
    screenshot
}: ScreenshotButtonProps) {

    const [isTakingScreenshot, setIsTakingScreenshot] = useState(false);

    useEffect(() => {
        console.log(isTakingScreenshot)
    }, [isTakingScreenshot]); 
    
    async function handleTakeScreenshot() {        
        setIsTakingScreenshot(true);        

        const canvas = await html2canvas(document.querySelector('html')!)
        const base64image = canvas.toDataURL('image/png');  
        
        onScreenshotTook(base64image);
        setIsTakingScreenshot(false);        
                
    }

    if (screenshot) {
        return (
            <button
            type="button"
            className="p-1 w-10 h-10 rounded-md border-transparent flex justify-end items-end text-zinc-100 transition-colors"
            onClick={() => onScreenshotTook(null)} 
            style={{
                backgroundImage: `url(${screenshot})`,
                backgroundPosition: 'right bottom',
                backgroundSize: 180 //This style position the screenshot take to bootom right, just for testing purposes since our application is dark background
            }}
            >
            <Trash weight="fill" />

            </button>
        )
    }

    return (
        <button
        type="button"
        onClick={handleTakeScreenshot}
        className="p-2 bg-zinc-800 rounded-md border-transparent hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 "
    >
        { isTakingScreenshot ? < LoadingIcon /> : <Camera className="w-6 h-6" /> }        
    </button>
    )
}