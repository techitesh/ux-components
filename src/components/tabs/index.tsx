import React from "react";

import RBTabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

import TabsProps from "./tabs.props";
import TabProps from "./tab.props";
import classMap from "../../shared/utilities/classMap";

import "./tabs.scss";

// TODO: Convert to advanced react-bootstrap tabs using the TabContainer component
const UxTabs = (props: TabsProps) => {
  const defaultTabSelect = (tab: string) => {};
  let activeTabKey: string = props.children[0].eventKey;

  return (
    <RBTabs
      {...{
        id: props.tabsId,
        activeKey: props.activeKey,
        onSelect: props.onTabSelect ?? defaultTabSelect,
        defaultActiveKey: activeTabKey,
        className: classMap("edge-ux-tabs", props.className)
      }}
    >
      {props.children.map((child: TabProps, key: number) => {
        return (
          <Tab {...child} key={key} className="mt-4">
            {child.content}
          </Tab>
        );
      })}
    </RBTabs>
  );
};

export default UxTabs;
