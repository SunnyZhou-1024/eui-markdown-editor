import React, {useState} from 'react';

import {
  EuiPage,
  EuiPageBody,
  EuiPageContent,
  EuiPageContentBody,
  EuiPageContentHeader,
  EuiPageContentHeaderSection,
  EuiPageHeader,
  EuiPageSideBar,
} from '@elastic/eui';

import FileNav from './file-nav';
import MarkdownEditor from './markdown-editor';
import Tabs from './tabs';
import tabs from './tabs';

const tab1Content = `## Hello world!

Basic "github flavored" markdown will work as you'd expect.

The editor also ships with some built in plugins. For example it can handle checkboxes. Notice how they toggle state even in the preview mode.

- [ ] Checkboxes
- [x] Can be filled
- [ ] Or empty
`;


const tab2Content = `## I am tab two, name , not Tattoo!
#### I am tab two, not Tattoo!
`; 

const tab3Content = `
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### \`npm start\`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.
`;

export default () => {
  const [content, setContent] = useState('init content')
  let tabSelected = (tabId) => {
    if (tabId == 'cobalt')
      setContent(tab1Content);
    else if (tabId == 'dextrose')
      setContent(tab2Content);
    else if (tabId == 'hydrogen')
      setContent(tab3Content);


  }
  return (
  <EuiPage>
    <EuiPageSideBar>
      <FileNav />
    </EuiPageSideBar>
    <EuiPageBody component="div">

      <EuiPageHeader>

      </EuiPageHeader>
      <EuiPageContent>

        <EuiPageContentHeader>
          <EuiPageContentHeaderSection>
            <Tabs onTabSelected={tabSelected}/>
          </EuiPageContentHeaderSection>
          <EuiPageContentHeaderSection>

          </EuiPageContentHeaderSection>
        </EuiPageContentHeader>
        <EuiPageContentBody>
          <MarkdownEditor content={content}/>
        </EuiPageContentBody>
      </EuiPageContent>
    </EuiPageBody>
  </EuiPage>);
};