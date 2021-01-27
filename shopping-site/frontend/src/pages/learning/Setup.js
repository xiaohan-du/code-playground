import React, {useState, useEffect} from 'react';
import { Paragraph } from '../../components/CMS/index.js';

const Setup = ({ toggleDetails, openDetails }) => {
    const [isOpen, setIsOpen] = useState(false);
    useEffect(() => {
        setIsOpen(openDetails.includes('setup'));
    })
    return (
        <details open={isOpen} onClick={() => toggleDetails('setup')}>
            <summary className='learning-subtitle'>
                Basic Set Up with Create React App
            </summary>
            <Paragraph>
                Create React App is always my first choice when building React apps. The main reason is that
                it provides a complete set up for a React application including an initial project structure.
            </Paragraph>
            <Paragraph>
                For convenience, this tutorial is going to be based on a React app created via Create React App.
                Now let's walk through the very basics. Say the app is named as 'my-app',
                open a terminal in the path where you want to place your React app,
                type the following commands:
            </Paragraph>
            <div className='learning-content'>
                <pre children={`npx create-react-app my-app
cd my-app
npm start`} />
            </div>
            <Paragraph>
                You should be able to see the page being deployed at <code>http://localhost:3000/</code>.
            </Paragraph>
            <Paragraph>
                The initial file structure is like this: <br />
                <img src={require('../../images/learning/tree.png').default} alt='tree' /> <br />
                where <code>index.js</code> invokes <code>App.js</code>, and <code>App.js</code> renders what
                we are seeing on the page.
                Try modifying <code>App.js</code>, save and see the change in the page taking effect almost immediately.
            </Paragraph>
            <Paragraph>
                Open <code>index.html</code> and you'll see <code>&lt;div id='root'&gt;&lt;/div&gt;</code>. ReactDOM
                finds <code>root</code> element and renders it in <code>index.js</code>.
            </Paragraph>
        </details>
    )
}

export default Setup;