import React, { useState, useEffect } from 'react'

export const Notify = ({ message, timeOut, onHideNotify }) => {
    const [open, setOpen] = useState(false)

    let time = timeOut * 1000
    let timerClass
    let timerNode

    const showNotification = () => {
        setTimeout(() => {
            setOpen(true);
        }, 200)
    }
    
    const removeClass = () => {
        timerClass = setTimeout(() => {
            setOpen(false);
        }, time - 800)
    }

    const removeNotify = () => {
        timerNode = setTimeout(() => {
            onHideNotify();
        }, time)
    }

    const onDissMissClick = () => {
        setOpen(false)
        setTimeout(() => {
            onHideNotify();
            clearTimeout(timerNode);
            clearTimeout(timerClass);
        }, 400)
    }

    useEffect(() => {
        showNotification();
        removeClass();
        removeNotify();
        return () => {
            onHideNotify();
            clearTimeout(timerNode);
            clearTimeout(timerClass);
        }
    }, [])

    return (
        <>
            <div className={`notification-custom ${open ? 'visible' : ''} `} onClick={onDissMissClick}>
                <div className={'notification-custom--info'}>
                    <div className={'notification-custom--message'}>{message}</div>
                </div>
            </div>
        </>
    )
}
