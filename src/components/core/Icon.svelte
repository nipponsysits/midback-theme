<script lang="ts">
  import {
    AlertCircle,
    Bell,
    CalendarDays,
    Check,
    CheckCircle2,
    ChevronDown,
    ChevronLeft,
    ChevronRight,
    CircleHelp,
    Clock3,
    CloudUpload,
    Code2,
    CreditCard,
    Download,
    FileText,
    Gauge,
    Home,
    Image,
    Inbox,
    Info,
    LayoutDashboard,
    Mail,
    Menu,
    MessageCircle,
    Minus,
    MoreHorizontal,
    Pencil,
    Plus,
    Search,
    Settings,
    ShieldCheck,
    Star,
    Trash2,
    TriangleAlert,
    User,
    Users,
    X,
    XCircle,
  } from 'lucide-svelte';
  import type { IconName } from './icon-types';

  const icons = {
    alert: AlertCircle,
    bell: Bell,
    calendar: CalendarDays,
    check: Check,
    'check-circle': CheckCircle2,
    'chevron-down': ChevronDown,
    'chevron-left': ChevronLeft,
    'chevron-right': ChevronRight,
    clock: Clock3,
    code: Code2,
    card: CreditCard,
    dashboard: LayoutDashboard,
    download: Download,
    file: FileText,
    gauge: Gauge,
    help: CircleHelp,
    home: Home,
    image: Image,
    inbox: Inbox,
    info: Info,
    mail: Mail,
    menu: Menu,
    message: MessageCircle,
    minus: Minus,
    more: MoreHorizontal,
    pencil: Pencil,
    plus: Plus,
    search: Search,
    settings: Settings,
    shield: ShieldCheck,
    star: Star,
    trash: Trash2,
    upload: CloudUpload,
    user: User,
    users: Users,
    warning: TriangleAlert,
    x: X,
    'x-circle': XCircle,
  } as const;

  let {
    name,
    size = 18,
    strokeWidth = 2,
    class: className = '',
    label,
  }: {
    name: IconName;
    size?: number;
    strokeWidth?: number;
    class?: string;
    label?: string;
  } = $props();

  const LucideIcon = $derived(icons[name]);
</script>

<LucideIcon
  {size}
  {strokeWidth}
  class={className}
  aria-hidden={label ? undefined : 'true'}
  aria-label={label}
/>
