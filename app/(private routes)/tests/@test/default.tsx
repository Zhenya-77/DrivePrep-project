import TestCategorySelect from '@/components/TestCategorySelect/TestCategorySelect';
import { getGategories } from '@/lib/api/clientApi';

export default async function Tests() {
  const categories = await getGategories();

  return <TestCategorySelect categories={categories} />;
}
