
import React, { useState, Fragment } from 'react';

import {
  EuiIcon,
  EuiTabs,
  EuiTab,
  EuiSpacer,
} from '@elastic/eui';

const tabs = [
  {
    id: 'cobalt',
    name: (<span>
        cobalt.md&nbsp;<EuiIcon type="cross" />
      </span>),
    disabled: false,
  },
  {
    id: 'dextrose',
    name: (<span>
        dextrose.md&nbsp;<EuiIcon type="cross" />
      </span>),
    disabled: false,
  },
  {
    id: 'hydrogen',
    name: (
      <span>
        Hydrogen&nbsp;<EuiIcon type="cross" />
      </span>
    ),
    disabled: false,
  },
  {
    id: 'monosodium_glutammate',
    name: (<span>
        monosodium_glutammate.md&nbsp;<EuiIcon type="cross" />
      </span>),
    disabled: false,
  },
  {
    id: 'elastic_link',
    name: (<span>
        elastic_link.md&nbsp;<span onClick={e =>{alert('close me?')}}><EuiIcon type="cross" /></span>
      </span>),
    disabled: false,
  },
];

export default (props) => {
  const [selectedTabId, setSelectedTabId] = useState('cobalt');

  const onSelectedTabChanged = id => {
    setSelectedTabId(id);
    if (props && props.onTabSelected)
      props.onTabSelected(id);
  };

  const renderTabs = () => {
    return tabs.map((tab, index) => (
      <EuiTab
        {...(tab.href && { href: tab.href, target: '_blank' })}
        onClick={() => onSelectedTabChanged(tab.id)}
        isSelected={tab.id === selectedTabId}
        disabled={tab.disabled}
        key={index}>
        {tab.name}
      </EuiTab>
    ));
  };

  return (
    <Fragment>
      <EuiTabs size="s">{renderTabs()}</EuiTabs>
    </Fragment>
  );
};