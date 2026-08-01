import Container from '@/components/Container/Container';

interface TestsLayoutProps {
  children: React.ReactNode;
  test: React.ReactNode;
}

export default function TestsLayout({ children, test }: TestsLayoutProps) {
  return (
    <section>
      <Container>
        <div>
          {test}
          {children}
        </div>
      </Container>
    </section>
  );
}
