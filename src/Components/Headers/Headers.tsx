type HeadersType = {
  text: string;
  className: string;
  headingType: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
};

export const Headers = ({ text, className, headingType }: HeadersType) => {
  const HeadingTag = headingType || 'h2';

  return <HeadingTag className={className}>{text}</HeadingTag>;
};
