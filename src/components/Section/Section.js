import propTypes from 'prop-types';
import { SectionWrapper } from './Section.styled';

export function Section({ title, children }) {
  return (
    <SectionWrapper>
      <h2>{title}</h2>
      {children}
    </SectionWrapper>
  );
}

Section.propTypes = {
  title: propTypes.string.isRequired,
  children: propTypes.node.isRequired,
};
