import classes from './Currency.module.scss'

export default function Currency({usd,rubl,uzs}) {
    return (
      <ul className={classes.Currency}>
        <ol className={classes.Usd}>
          <span>$</span> {usd}
        </ol>
        <ol className={classes.Rubl}>
          <span>$</span> {rubl}
        </ol>
        <ol className={classes.Euro}>
          <span>$</span> {uzs}
        </ol>
      </ul>
    );
}
