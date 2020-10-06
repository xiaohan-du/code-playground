import React, { useState } from 'react';
import QrReader from 'react-qr-reader';
import ICamera from '../interfaces/ICamera';

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
                    <div> 
                        <QrReader
                        delay={300}
                        onError={handleError}
                        onScan={handleScan}
                        style={{ width: '100%' }}
                    />
                        <p>{result.result}</p>
                    </div>
                    : null
            }

        </>
    )
}

export default ScanQR;