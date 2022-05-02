import React, { useMemo, useState } from 'react';
import './loading.css';

export const Loading = () => {
    const [loadingProgress, setLoadingProgress] = useState(0);

    // const startCount = () => {
    //     setInterval(() => {
    //         if (loadingProgress !== 100) {
    //             console.log(loadingProgress)
    //             setLoadingProgress(loadingProgress + 1);
    //         }
    //     }, 500);
    // }

    // const memoFunc = useMemo(() => startCount(), []);

    // memoFunc();
    
    return (
        <div className='loading'>
            <p>{ loadingProgress }</p>
        </div>
    )
}
