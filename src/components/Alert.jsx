import clsx from 'clsx';
import css from './Alert.module.css';

export const Alert = ({ variant, outlined, elevated, children }) => {
  return (
    <p
      className={clsx(css[variant], {
        [css.isOutlined]: outlined,
        [css.isElevated]: elevated,
      })}
    >
      {children}
    </p>
  );
};

// import clsx from 'clsx';
// // import './Alert.css';
// import css from './Alert.module.css';

// export const Alert = ({ variant, outlined, elevated, children }) => {
//   return (
//     <p
//       className={clsx(css.alert, css[variant])}
//     >
//       {children}
//     </p>
//   );
// };

// export const Alert = ({ variant, outlined, elevated, children }) => {
//   const classNames = ['alert', variant];

//   if (outlined) {
//     classNames.push('is-outlined');
//   }

//   if (elevated) {
//     classNames.push('is-elevated');
//   }

//   return <p className={classNames.join(' ')}>{children}</p>;
// };
