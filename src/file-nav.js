import React from 'react';

import { EuiIcon, EuiTreeView, EuiToken } from '@elastic/eui';

export default () => {
  const showAlert = () => {
    alert('You squashed a bug!');
  };

  const items = [
    {
      label: 'src',
      id: 'src',
      icon: <EuiIcon type="folderClosed" />,
      iconWhenExpanded: <EuiIcon type="folderOpen" />,
      isExpanded: true,
      children: [
        {
          label: 'index.md',
          id: 'item_a',
          icon: <EuiIcon type="document" />,
        },
        {
          label: 'level2 folder',
          id: 'item_b',
          icon: <EuiIcon type="folderOpen" />,
          iconWhenExpanded: <EuiIcon type="folderOpen" />,
          children: [
            {
              label: 'monosodium_glutammate.md',
              id: 'item_cloud',
              icon: <EuiIcon type="document" />,
            },
            {
              label: "cobalt.md",
              id: 'item_bug',
              icon: <EuiIcon type="document" />,
              callback: showAlert,
            },
          ],
        },
        {
          label: 'xxxxx folder',
          id: 'item_c',
          icon: <EuiIcon type="folderOpen" />,
          iconWhenExpanded: <EuiIcon type="folderOpen" />,
          children: [
            {
              label: 'Another Cloud.md',
              id: 'item_cloud2',
              icon: <EuiIcon type="document" />,
            },
            {
              label:
                'elastic_link.md',
              id: 'item_bug2',
              icon: <EuiIcon type="document" />,
              callback: showAlert,
            },
          ],
        },
      ],
    },
    {
      label: 'othter',
      id: 'src2',
      icon: <EuiIcon type="folderClosed" />,
      iconWhenExpanded: <EuiIcon type="folderOpen" />,
      isExpanded: true,
    },
  ];

  return (
    <div style={{ width: '20rem' }}>
      <EuiTreeView items={items} aria-label="eui-markdown-editor" />
    </div>
  );
};