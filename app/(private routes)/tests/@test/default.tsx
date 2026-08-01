import TestCategorySelect from '@/components/TestCategorySelect/TestCategorySelect';
import { getServerCategories } from '@/lib/api/serverApi';

export default async function Tests() {
  const categories = await getServerCategories();

  return <TestCategorySelect categories={categories} />;
}
