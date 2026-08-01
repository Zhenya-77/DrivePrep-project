import { TestRunner } from '@/components/TestRunner/TestRunner';
import { getQuestionsByCategory } from '@/lib/api/serverApi';

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function TestsByCategory({ params }: Props) {
  const { slug } = await params;
  const data = await getQuestionsByCategory(slug);

  return <TestRunner category={data.category} questions={data.questions} />;
}
