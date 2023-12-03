type Props = {
  strength: number;
};

export const ProgressBar = ({ strength }: Props) => {
  const getColor = (progress: number) => {
    switch (progress) {
      case 0:
        return 'transparent';
      case 25:
        return 'red';
      case 50:
        return 'orange';
      case 75:
        return 'yellow';
      case 100:
        return 'green';
      default:
        return 'transparent';
    }
  };

  return (
    <div className="progress-bar">
      <div
        className="progress-bar-section"
        style={{
          width: `${strength * 25}%`,
          background: getColor(strength * 25),
        }}
      />
    </div>
  );
};
