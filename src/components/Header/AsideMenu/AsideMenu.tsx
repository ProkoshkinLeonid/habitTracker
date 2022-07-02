import React from 'react'
import {AnimatePresence, motion} from 'framer-motion'

type AsideMenuPropsTypes = {
    isVisible: boolean
    onClose: () => void
};
export const AsideMenu = ({isVisible, onClose}: AsideMenuPropsTypes) => {
    return (
        <AnimatePresence>
            {isVisible && <motion.div
                initial={{x: '-100%', opacity: 0}}
                animate={{x: 0, opacity: 1}}
                exit={{x: '-100%', opacity: 0}}
                transition={{
                    duration: 0.4
                }}
                style={{position: 'fixed', left: 0, top: 0, height: '100%', width: 300, backgroundColor: '#7089c9'}}>
                <div>
                    <div onClick={onClose}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18 6L6 18M6 6L18 18" stroke="#444444" stroke-width="2" stroke-linecap="round"
                                  stroke-linejoin="round"/>
                        </svg>
                    </div>
                </div>
                <div>
                    Menu
                </div>
            </motion.div>}
        </AnimatePresence>

    )
}
