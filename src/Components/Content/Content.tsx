import './style.css';
import { useEffect, useState } from 'react';
import { ComponentDate, ContentProps } from '../../type/type';
import { ChildComponent } from '../ChildComponent/ChildComponents';
import { getDate } from '../Api/getData';
import { Loader } from '../Loader/Loader';
import { Character } from 'rickmortyapi';

export const Content = (props: ContentProps) => {
  const [isLoader, setIsLoader] = useState(true);
  const [date, setData] = useState<ComponentDate>({ date: null });

  useEffect(() => {
    setIsLoader(true);

    async function loadData() {
      if (typeof props.data === 'string') {
        const characterDate: Character[] | undefined = await getDate(
          props.data
        );
        if (characterDate) {
          setData({ date: characterDate });
          setIsLoader(false);
        } else {
          setIsLoader(false);
          setData({ date: null });
        }
      }
    }

    if (props.data !== null) {
      loadData();
    }
  }, [props.data]);

  return (
    <div className="content">
      <h2>Search results.</h2>
      <div>
        {isLoader ? (
          <Loader />
        ) : date.date ? (
          date.date.map((e, index) => <ChildComponent key={index} data={e} />)
        ) : (
          <div className="no-result">
            The search returned no results, please try again.
          </div>
        )}
      </div>
    </div>
  );
};
