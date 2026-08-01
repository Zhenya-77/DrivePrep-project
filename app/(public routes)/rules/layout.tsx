import Container from '@/components/Container/Container';
import css from './layout.module.css';

interface RulesLayoutProps {
  children: React.ReactNode;
  sidebar: React.ReactNode;
}

export default function RulesLayout({ children, sidebar }: RulesLayoutProps) {
  return (
    <section className={css.section}>
      <Container>
        <div className={css.layout}>
          <aside className={css.sidebar}>{sidebar}</aside>
          <div className={css.content}>{children}</div>
        </div>
      </Container>
    </section>
  );
}
