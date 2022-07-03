import React from 'react'
import {AnimatePresence, motion} from 'framer-motion'
import {
    asideMenuCloseBtnStyles,
    asideMenuOverlayStyles,
    asideMenuWrapperStyles
} from "@components/Header/AsideMenu/asideMenu.css";

type AsideMenuPropsTypes = {
    isVisible: boolean
    onClose: () => void
};

const asideMenuAnim = {
    initial: {x: '-100%', opacity: 0 },
    animate: {x: 0, opacity: 1,  borderTopRightRadius: 30 },
    exit: {x: '-100%', opacity: 0}
}
const asideOverlayAnim = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0}
}

export const AsideMenu = ({isVisible, onClose}: AsideMenuPropsTypes) => {
    return (
        <AnimatePresence>
            {isVisible && <>
                <motion.div
                    {...asideMenuAnim}
                    transition={{
                        duration: 0.4
                    }}
                    className={asideMenuWrapperStyles}>
                    <div className={asideMenuCloseBtnStyles}>
                        <motion.div whileHover={{ scale: 1.2 }}  onClick={onClose}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18 6L6 18M6 6L18 18" stroke="#444444" strokeWidth="2" strokeLinecap="round"
                                      strokeLinejoin="round"/>
                            </svg>
                        </motion.div>
                    </div>
                    <div>
                        Menu
                    </div>
                </motion.div>
                <motion.div
                    {...asideOverlayAnim}
                    onClick={onClose}
                    className={asideMenuOverlayStyles}
                />
            </>}
        </AnimatePresence>

    )
}
