import styled from 'styled-components';
import Common from 'components/common';
import { NewsType } from 'types/news';
import { capitalize, summarizeTags } from 'utils';

type Props = {
  news?: NewsType;
  isLoading: boolean;
  isFetched: boolean;
};

const NewsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(1fr 1fr);
  gap: 1rem;
  grid-template-rows: auto;
`;

const News = styled.div`
  padding: 0.5rem;
  background-color: ${(props) => props.theme.white};
  color: ${(props) => props.theme.black};
  border-radius: 0.5rem;
  box-shadow: 0px 4px 6px 1px ${(props) => props.theme.black};

  & .news__source {
    margin: 0;
    color: ${(props) => props.theme.blue};
  }

  & .news__title {
    margin: 0.5rem 0;
    font-weight: bold;
  }
`;

const NewsPresentation = ({ news, isLoading, isFetched }: Props) => {
  return (
    <Common.Container>
      <h3>News ({news?.Data?.length || 0})</h3>
      {isLoading && <Common.Loading />}
      {isFetched && (
        <NewsWrapper>
          {news?.Data?.map((item) => (
            <News key={item.id} className="news">
              <a href={item.url}>
                <p className="news__source">{capitalize(item.source)}</p>
                <p className="news__title">{item.title}</p>
                <p className="news__tags">{summarizeTags(item.tags)}</p>
              </a>
            </News>
          ))}
        </NewsWrapper>
      )}
    </Common.Container>
  );
};

export default NewsPresentation;
