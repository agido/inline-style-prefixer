import prefixAll from '../../packages/400/static'

export const static400 = () => {
  const styles = {
    color: 'red',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    userSelect: 'none',
    fontSize: '12px',
    appearance: 'none',
    ':hover': {
      alignSelf: 'flex-start',
      transition: '300ms transform linear',
      transform: 'rotateX(30deg)',
      color: 'blue',
      width: ['calc(100% - 50px)', '300px']
    }
  }

  const prefixed = prefixAll(styles)
  return prefixed
}
