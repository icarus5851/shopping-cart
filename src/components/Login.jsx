import React, { useRef,useEffect } from 'react'

export default function Login({ onClose, switchToSignup}) {
    const dialogRef = useRef(null);
    

    useEffect(() => {
        if (dialogRef.current) {
            dialogRef.current.showModal();
        }
    }, []);

    const handleClose = ()=>{
        dialogRef.current.close();
        onClose();
    }
    
    useEffect(() => {
        const handleCancel = (e) => e.preventDefault();
        dialogRef.current?.addEventListener('cancel', handleCancel);
        return () => dialogRef.current?.removeEventListener('cancel', handleCancel);
    }, []);
    

 
    return (
        <dialog ref={dialogRef}  className="flex rounded-sm justify-center w-max items-center bg-gray-100 h-max backdrop:bg-black/70 backdrop-blur-md text-black">

                
            <div className='flex flex-col p-4 overflow-x-hidden md:p-10 gap-5 h-full py-10 items-center'>
                <button onClick={handleClose} className="absolute top-2 right-3 text-2xl cursor-pointer text-gray-600 hover:text-black"><span class="mdi mdi-close"></span></button>
                <h1 className=" logo lg:text-4xl text-[2rem] scale-105 text-zinc-700 font-extrabold cursor-pointer">
                    <a href="/" >Aura <span className="text-zinc-950"> Attire. </span></a>
                </h1>
                <h2 className="text-[1.25rem] mb-4 text-center">Login to your Account</h2>
                <form className="flex flex-col gap-1 p-1 space-y-3">
                    <div className="flex flex-col">
                        <label htmlFor="name" className="text-sm text-zinc-700 mb-1">Email</label>
                        <input type="email" placeholder="xyz@zyx.com" className="border px-3 py-2 rounded-xs" />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="name" className="text-sm text-zinc-700 mb-1">Password</label>
                        <input type="password" placeholder="●●●●●●●" className="border px-3 py-2 rounded-xs" />
                    </div>
                    
                    <div className=' flex items-center gap-1.5'>
                        <input type="checkbox" id='agreeToTnC' />
                        <label htmlFor="agreeTOTnC" className='text-sm'> I agree to <a href="/" className="text-blue-600 cursor-pointer hover:underline">Terms & Conditions</a></label>
                    </div>
                    <button type="submit" className="bg-black text-white py-2 cursor-pointer rounded-sm hover:bg-zinc-800">Login</button>
                </form>
                <p className=" text-center text-sm mt-2">
                    New user?{' '}
                    <button onClick={() => { handleClose(); switchToSignup(); }} className="text-blue-600 cursor-pointer hover:underline">
                    Create Account
                    </button>
                </p>
            </div>
        </dialog>
    )
}