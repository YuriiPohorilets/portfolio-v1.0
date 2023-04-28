import { Section } from 'shared/Section';
import { Container } from 'shared/Container';
import { Title } from 'shared/Title';
import { ProjectsList } from 'components/ProjectsList/ProjectsList';

export const Projects = () => {
  return (
    <Section>
      <Container>
        <Title>My projects</Title>

        <ProjectsList />
      </Container>
    </Section>
  );
};
