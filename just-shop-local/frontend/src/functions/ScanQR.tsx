import React, { useState } from 'react';
import QrReader from 'react-qr-reader';
import ICamera from '../interfaces/ICamera';
import './ScanQR.scss';

const ScanQR = (showCam: boolean) => {
    const [result, setResult] = useState<ICamera>({ result: 'No result' });

    const handleScan = (data: any) => {
        if (data) {
            setResult({ result: data })
        }
    }
    const handleError = (err: any) => {
        console.log(err);

    }

    return (
        <>
            {
                showCam ?
                    <div className='scanqr mt-5'> 
                        <QrReader
                        delay={300}
                        onError={handleError}
                        onScan={handleScan}
                        style={{ width: '100%' }}
                    />
                        <p className='scanqr-result'>{result.result}</p>
                    </div>
                    : null
            }

        </>
    )
}

export default ScanQR;