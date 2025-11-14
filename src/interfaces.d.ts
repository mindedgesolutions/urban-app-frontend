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

interface UserProps {
  id: number;
  name: string;
  email: string;
  social_type: string | null;
  social_id: string | null;
  created_at: string;
  updated_at: string;
}
