import estilos from './Hamburguer.module.css'

export function Hamburguer() {
  return (
    <div className={estilos.toggle_wrapper}>
      <div className={estilos.toggle_basketball_hoop}>
        <input id="hoop" type="checkbox" className={estilos.hoop_input} />
        <label className={estilos.toggle_item} htmlFor="hoop">
          <div className={estilos.ball__wrapper}>
            <div className={estilos.ball}></div>
          </div>
          <div className={estilos.hoop}></div>
        </label>
      </div>
    </div>
  )
}
