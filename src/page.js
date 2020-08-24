import React from 'react';

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

export default () => (
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
            <Tabs />
          </EuiPageContentHeaderSection>
          <EuiPageContentHeaderSection>

          </EuiPageContentHeaderSection>
        </EuiPageContentHeader>
        <EuiPageContentBody>
          <MarkdownEditor />
        </EuiPageContentBody>
      </EuiPageContent>
    </EuiPageBody>
  </EuiPage>
);