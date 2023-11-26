import loaderStyle from './loader.module.css';

export const Loader = () => {
  return (
    <div className={loaderStyle.container} data-testid="loader-main">
      <span className={loaderStyle.loader} />
    </div>
  );
};
