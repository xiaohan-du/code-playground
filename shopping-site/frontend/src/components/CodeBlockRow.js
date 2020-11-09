import React from 'react';
import './CodeBlock.scss';
import './CodeBlockRow.scss';
import CodeBlock from './CodeBlock';

const CodeBlockRow = (props) => {
    const { language1, code1, language2, code2, title } = props;
    return (
        <>
            <div className='code-block-row'>
                <div className='code-block-row-unit'>
                    <CodeBlock
                        language={language1}
                        code={code1}
                    />
                </div>
                <div className='code-block-row-unit'>
                    <CodeBlock
                        language={language2}
                        code={code2}
                    />
                </div>
            </div>
            <p className='code-block-title'>{title}</p>
        </>
    )
}

export default CodeBlockRow;