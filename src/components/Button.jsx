const base =
  'bg-softRed text-offWhite py-4 px-10 uppercase tracking-[0.2rem] text-sm font-medium hover:bg-darkBlue hover:transition-colors ';

const styles = {
  base,
};

function Button({ children, type = 'base', onClick, className }) {
  return (
    <button className={styles[type] + className} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
