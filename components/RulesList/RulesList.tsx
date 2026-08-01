'use client';

import { getRulesBySlug } from '@/lib/api/clientApi';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import Pagination from '../Pagination/Pagination';
import css from './RulesList.module.css';
import Image from 'next/image';
import Loader from '../Loader/Loader';

type Props = {
  slug: string;
};

export default function RulesList({ slug }: Props) {
  const [page, setPage] = useState(1);

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['rules', slug, page],
    queryFn: () => getRulesBySlug(slug, page, 3),
    placeholderData: (previousData) => previousData,
  });

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <p>Помилка: {error.message}</p>;
  }

  if (!data) {
    return null;
  }

  return (
    <section className={css.section}>
      <h1 className={css.title}>{data.category.title}</h1>

      <ul className={css.list}>
        {data.rules.map((rule) => (
          <li key={rule._id} className={css.card}>
            <Image
              className={css.image}
              src={rule.image}
              alt={rule.title}
              width={800}
              height={400}
            />

            <div className={css.cardContent}>
              <h2 className={css.cardTitle}>{rule.title}</h2>
              <p className={css.content}>{rule.content}</p>
            </div>
          </li>
        ))}
      </ul>

      <Pagination
        totalPages={data.totalPages}
        currentPage={page}
        onPageChange={setPage}
      />
    </section>
  );
}
