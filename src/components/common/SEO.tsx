import { Helmet } from 'react-helmet';

type Props = {
  title: string;
  description: string;
};

const SEO = ({ title, description }: Props) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
    </Helmet>
  );
};

export default SEO;
