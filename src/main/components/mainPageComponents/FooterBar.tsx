import React from "react";

export const FooterBar=()=>{

    return(
        <>
            {/* Footer */}
            <footer className="py-2 mt-auto bg-gray-100 text-sm text-gray-600 rounded-bl-[8px] rounded-br-[8px]">
                <div className="max-w-screen-xl mx-auto flex justify-between items-center px-4 flex-wrap">
                    <div className="flex gap-6 justify-center">
                        <a href="#" className="hover:underline hover:text-black">GitHub</a>
                        <a href="#" className="hover:underline hover:text-black">Terms</a>
                        <a href="#" className="hover:underline hover:text-black">Privacy</a>
                    </div>
                </div>
            </footer>

        </>
    )
}