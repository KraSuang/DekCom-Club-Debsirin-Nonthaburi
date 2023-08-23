import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { useLanguage } from '../../asset/lang/lang'
import { FaFacebook, FaDiscord } from "react-icons/fa";

const Sennestia = ({ isOpen, onClose }) => {

  const SENNESTIA_FILE_WIN_32_URL = "http://localhost:3000/Sennethia-Demo-Win32.zip"
  const SENNESTIA_FILE_WIN_64_URL = "http://localhost:3000/Sennethia-Demo-Win64.zip"
  const SENNESTIA_FILE_MAC_64_URL = "http://localhost:3000/Sennethia-Demo-Mac64.zip"
  const SENNESTIA_FILE_LINUX_32_URL = "http://localhost:3000/Sennethia-Demo-Linux32.zip"
  const SENNESTIA_FILE_LINUX_64_URL = "http://localhost:3000/Sennethia-Demo-Linux64.zip"

  const { currentLanguage, getTranslation, getCurrentFont } = useLanguage();

  const downloadFileAtURL = (url) => {
    fetch(url)
      .then((response) => response.blob())
      .then((blob) => {
        const fileName = url.split("/").pop()
        const aTag = document.createElement("a")
        aTag.href = url
        aTag.setAttribute("download", fileName)
        document.body.appendChild(aTag)
        aTag.click()
        aTag.remove()
      })
  }

  const isActive = (language) => currentLanguage === language;

  return (
    <>
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className={`relative z-10 ${getCurrentFont(currentLanguage)}`} onClose={onClose}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black bg-opacity-50" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className="w-full flex max-w-[1000px] transform overflow-hidden rounded-2xl bg-background-home p-6 text-left align-middle shadow-xl transition-all">
                                <div className='flex flex-col w-full h-full max-[440px]:hidden'>
                                    <Dialog.Title as="p" className="text-[40px] font-medium leading-6 text-white h-full">
                                        {getTranslation('sennestia-demo-title')}
                                    </Dialog.Title>
                                    <div className="mt-3 mb-2 h-fit flex flex-col">
                                        <p className='font-oswald text-white text-2xl w-full px-4 my-2'>Windows</p>
                                        <div className='w-full h-fit flex justify-start px-4 my-2'>
                                            <button className={`font-oswald text-white text-lg bg-red-800 transition-all duration-200 hover:bg-white hover:text-red-800 hover:scale-105 px-4 py-2 mr-2 rounded-xl`} onClick={() => { downloadFileAtURL(SENNESTIA_FILE_WIN_32_URL) }} >Windows 32Bit</button>
                                            <button className={`font-oswald text-white text-lg bg-red-800 transition-all duration-200 hover:bg-white hover:text-red-800 hover:scale-105 px-4 py-2 rounded-xl`} onClick={() => { downloadFileAtURL(SENNESTIA_FILE_WIN_64_URL) }} >Windows 64Bit</button>
                                        </div>
                                        <p className='font-oswald text-white text-2xl w-full px-4 my-2'>MacOS</p>
                                        <div className='w-full h-fit flex justify-start px-4 my-2'>
                                            <button className={`font-oswald text-white text-lg bg-red-800 transition-all duration-200 hover:bg-white hover:text-red-800 hover:scale-105 px-4 py-2 mr-2 rounded-xl`} onClick={() => { downloadFileAtURL(SENNESTIA_FILE_MAC_64_URL) }} >MacOS 64Bit</button>
                                        </div>
                                        <p className='font-oswald text-white text-2xl w-full px-4 my-2'>Linux</p>
                                        <div className='w-full h-fit flex justify-start px-4 my-2'>
                                            <button className={`font-oswald text-white text-lg bg-red-800 transition-all duration-200 hover:bg-white hover:text-red-800 hover:scale-105 px-4 py-2 mr-2 rounded-xl`} onClick={() => { downloadFileAtURL(SENNESTIA_FILE_LINUX_32_URL) }} >Linux 32Bit</button>
                                            <button className={`font-oswald text-white text-lg  bg-red-800 transition-all duration-200 hover:bg-white hover:text-red-800 hover:scale-105 px-4 py-2 rounded-xl`} onClick={() => { downloadFileAtURL(SENNESTIA_FILE_LINUX_64_URL) }} >Linux 64Bit</button>
                                        </div>
                                    </div>
                                    <p className='text-white text-lg font-light w-full px-4'>{getTranslation('sennestia-disk-required')}</p>
                                    <div className="mt-10">
                                        <button
                                            type="button"
                                            className="inline-flex justify-center rounded-xl border border-transparent transition-all duration-200 bg-red-800 px-8 py-2 text-xl font-medium text-white hover:bg-white hover:text-red-800 hover:scale-105"
                                            onClick={onClose}
                                        >
                                            {getTranslation('close')}
                                        </button>
                                    </div>
                                </div>
                                <div className='flex flex-col w-full h-full'>
                                    <Dialog.Title 
                                        as="p" 
                                        className="font-medium leading-6 text-white h-full
                                            max-[440px]:text-[28px] 
                                            lg:text-[36px] 
                                            xl:text-[40px] 
                                        ">
                                      {getTranslation('sennestia-full-title')}
                                    </Dialog.Title>
                                    <div className="mt-3 mb-2 h-fit flex flex-col">
                                        <p 
                                            className={`text-white w-full font-light px-4 my-2
                                                max-[440px]:text-lg
                                                xl:text-xl
                                            ${isActive('en') ? 'text-2xl font-medium' : 'text-xl font-light'}`}
                                        >{getTranslation('sennestia-full-description')}</p>
                                        <div className='flex w-full h-fit'>
                                            <div className='flex w-fit h-fit bg-red-800 transition-all duration-300 rounded-xl items-center group hover:bg-white hover:scale-105 px-2 my-6 mr-1'>
                                                <i className='text-2xl text-white group-hover:text-red-800 mx-2'><FaFacebook/></i>
                                                <a className='flex px-2 py-2 text-white group-hover:text-red-800 cursor-pointer text-xl font-medium' target='_blank' href='https://www.facebook.com/profile.php?id=61550755820342' rel="noreferrer">Facebook</a>
                                            </div>
                                            <div className='flex w-fit h-fit bg-red-800 transition-all duration-300 rounded-xl items-center group hover:bg-white hover:scale-105 px-2 my-6 ml-1'>
                                                <i className='text-2xl text-white group-hover:text-red-800 mx-2'><FaDiscord/></i>
                                                <a className='flex px-2 py-2 text-white group-hover:text-red-800 cursor-pointer text-xl font-medium' target='_blank' href='https://discord.gg/GXmWFX4M9J' rel="noreferrer">Discord</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
      </Transition>
    </>
  )
}

export default Sennestia