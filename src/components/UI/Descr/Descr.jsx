import propTypes from 'prop-types'
import cn from 'classnames'

const Descr = ({ isPrimary, isSecondary, className, children, ...attrs }) => {
  const classes = cn('ui-text', className, {
    isPrimary,
    isSecondary,
  })

  return (
    <p
      className={classes}
      contentEditable
      suppressContentEditableWarning
      spellCheck={false}
      {...attrs}
    >
      {children}
    </p>
  )
}

Descr.propTypes = {
  isPrimary: propTypes.bool,
  isSecondary: propTypes.bool,
  className: propTypes.string,
  children: propTypes.node.isRequired,
}

Descr.defaultProps = {
  isPrimary: false,
  isSecondary: false,
  className: '',
}

export default Descr
