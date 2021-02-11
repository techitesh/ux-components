import TabProps from "./tab.props";

export default interface TabsProps {
  tabsId: string;
  children: TabProps[];
  onTabSelect?: any;
  activeKey?: string;
  className?: string;
}
