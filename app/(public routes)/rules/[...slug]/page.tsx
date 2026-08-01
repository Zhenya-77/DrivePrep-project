import RulesList from '@/components/RulesList/RulesList';

interface RulesProps {
  params: Promise<{ slug: string }>;
}

export default async function RulesByCategory({ params }: RulesProps) {
  const { slug } = await params;

  return <RulesList slug={slug} />;
}
