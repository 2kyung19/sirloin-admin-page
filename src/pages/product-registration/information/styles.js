import styled from 'styled-components';

export const Section = styled.section`
  width: 100%;
  max-width: 975px;
  border: 1px solid #eee;
  font-family: Arial;
`;

export const SectionTitle = styled.h2`
  padding: 1rem;
  font-weight: 500;
  font-size: 1.1rem;
`;

export const SubSection = styled.div`
  display: grid;
  grid-template-columns: 175px 1fr;
  border-top: 1px solid #ddd;
`;

export const SubSectionTitle = styled.h3`
  padding: 1.2rem 1rem;
  background-color: #f7f7f7;
  font-size: 0.9rem;
  letter-spacing: 1px;
  width: 175px;
  border-right: 1px solid #ddd;
`;

export const SubSectionContents = styled.div`
  padding: 1.2rem 1rem;
  display: flex;
  gap: 5%;
  width: 95% - 200px;
`;

export const RoundedSquareButton = styled.button`
  padding: 0.9rem 2.25rem;
  border: 1px solid ${props => props.theme.highlight};
  font-size: 0.9rem;
  line-height: 1rem;
  border-radius: 0.25rem;
`;

export const TagSectionContents = styled(SubSectionContents)`
  flex-direction: column;
`;

export const CodeSectionContainer = styled.div`
  display: flex;
  flex: 1 1;

  & > * {
    flex: 1 1;
    width: 100%;
  }
`;
