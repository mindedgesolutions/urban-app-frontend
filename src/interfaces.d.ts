interface MenuProps {
  title: string;
  icon: React.ElementType;
  url?: string;
  children?: SubmenuProps[];
}

interface SubmenuProps {
  title: string;
  url: string;
}
