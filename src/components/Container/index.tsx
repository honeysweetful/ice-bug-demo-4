const localClassName = 'h-full p-[16px] bg-white';

const Container = (props: any) => {
  const {
    children,
    className,
    ...restProps
  } = props;
  return (<div
    {...restProps}
    className={className ? `${localClassName} ${className}` : localClassName}
  >
    {children}
  </div>);
};

export default Container;