import {
  BookOpen,
  BrainCircuit,
  Code2,
  GraduationCap,
  MessageSquare,
  Network,
  Route,
  Target,
  Terminal,
  UserRound,
} from "lucide-react";

const icons = {
  book: BookOpen,
  brain: BrainCircuit,
  chart: Target,
  code: Code2,
  graduation: GraduationCap,
  message: MessageSquare,
  network: Network,
  route: Route,
  target: Target,
  terminal: Terminal,
  user: UserRound,
};

export type IconSymbolName = keyof typeof icons;

export function IconSymbol({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const Icon = icons[name as IconSymbolName] ?? BrainCircuit;
  return <Icon className={className ?? "size-5"} strokeWidth={1.8} />;
}
