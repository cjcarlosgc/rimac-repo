import '../assets/styles/components/Home.css';
import heroCartoonMobile from '../assets/images/hero-cartoon-mobile.png';
// import heroBgFull from '../assets/images/hero-bg-full.png';

export const Home = () => {
    return (
        <div className="Home">
            <div className="Home__hero">
                <div className="Home__hero-text">
                    <div className="Home__hero-text-used">
                        <span className="Home__hero-text-used-new">¡Nuevo!</span>
                        <span className="Home__hero-text-used-title-one">Seguro Vehicular</span>
                        <span className="Home__hero-text-used-title-two">Tracking</span>
                        <span className="Home__hero-text-used-desc-one mt-12">Cuéntanos dónde le harás</span>
                        <span className="Home__hero-text-used-desc-two">seguimiento a tu seguro</span>
                    </div>
                </div>
                <img
                    className="Home__hero-image"
                    src={heroCartoonMobile}
                    alt="Imágen del cartoon"
                />
                {/* <img
                    className="Home__hero-bg"
                    src={heroBgFull}
                    alt="Imágen del cartoon"
                /> */}
            </div>
            <div className="Home__form">
                <h2>Déjanos tus datos</h2>
                <form className="mt-20">
                    <input type="text" className="form-input-text" placeholder="Nro. de doc"/>
                    <input type="text" className="form-input-text" placeholder="Celular"/>
                    <input type="text" className="form-input-text" placeholder="Placa"/>
                    <div className="Home__form-checkbox-container mt-24">
                        <input type="checkbox" className="checkbox"/>
                        <span>
                            <span>Acepto la </span>
                            <span className="link-with-underline">Política de Protecciòn de Datos Personales</span>
                            <span>y los </span>
                            <span className="link-with-underline">Términos y Condiciones.</span>
                        </span>
                    </div>
                    <button type="submit" className="btn-primary mt-24">
                        Cotízalo
                    </button>
                </form>
            </div>
        </div>
    )
}
