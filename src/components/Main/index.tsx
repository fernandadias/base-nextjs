import * as S from './styles'

const Main = ({ title = 'Base - NextJS', subtitle = 'by Nanda Dias' }) => (
  <S.Wrapper>
    <S.Title>{title}</S.Title>
    <S.Subtitle>{subtitle}</S.Subtitle>
  </S.Wrapper>
)

export default Main
